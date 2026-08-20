// Default clocks configuration
const defaultClocks = [
    { city: 'London', timezone: 'Europe/London', color: '#4CAF50' },
    { city: 'New York', timezone: 'America/New_York', color: '#2196F3' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', color: '#FF9800' },
    { city: 'Dubai', timezone: 'Asia/Dubai', color: '#E91E63' }
];

// Load clocks from localStorage or use defaults
function loadClocks() {
    const saved = localStorage.getItem('clocks');
    return saved ? JSON.parse(saved) : defaultClocks;
}

// Save clocks to localStorage
function saveClocks(clocks) {
    localStorage.setItem('clocks', JSON.stringify(clocks));
}

// Initialize the application
function init() {
    const clocks = loadClocks();
    renderClocks(clocks);
    updateAllClocks();
    setInterval(updateAllClocks, 1000);
}

// Render all clocks
function renderClocks(clocks) {
    const container = document.getElementById('clocksContainer');
    
    if (clocks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h2>No clocks added yet</h2>
                <p>Add a time zone to get started!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = clocks.map((clock, index) => `
        <div class="clock ${clock.custom ? 'clock-custom' : ''}" style="border-top: 4px solid ${clock.color}">
            <div class="city-name">${clock.city}</div>
            <div class="timezone-info">${clock.timezone}</div>
            <div class="digital-display" id="time-${index}">--:--:--</div>
            <div class="time-period" id="period-${index}"></div>
            <div class="date-display" id="date-${index}"></div>
            <div class="clock-actions">
                <button class="btn-copy" onclick="copyToClipboard(${index})">Copy Time</button>
                ${clock.custom ? `<button class="btn-delete" onclick="deleteClock(${index})">Delete</button>` : ''}
            </div>
        </div>
    `).join('');
}

// Update all clock displays
function updateAllClocks() {
    const clocks = loadClocks();
    
    clocks.forEach((clock, index) => {
        const time = getTimeInTimezone(clock.timezone);
        const timeDisplay = document.getElementById(`time-${index}`);
        const periodDisplay = document.getElementById(`period-${index}`);
        const dateDisplay = document.getElementById(`date-${index}`);
        
        if (timeDisplay) {
            timeDisplay.textContent = formatTime(time);
            periodDisplay.textContent = time.period;
            dateDisplay.textContent = formatDate(time.date);
        }
    });
}

// Get current time in specific timezone
function getTimeInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        
        const parts = formatter.formatToParts(new Date());
        const date = new Date();
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
        
        const hour = parseInt(parts.find(p => p.type === 'hour').value);
        const minute = parts.find(p => p.type === 'minute').value;
        const second = parts.find(p => p.type === 'second').value;
        
        return {
            hour,
            minute,
            second,
            period: hour >= 12 ? 'PM' : 'AM',
            date: tzDate
        };
    } catch (e) {
        console.error(`Invalid timezone: ${timezone}`);
        return {
            hour: 0,
            minute: 0,
            second: 0,
            period: 'AM',
            date: new Date()
        };
    }
}

// Format time display
function formatTime(time) {
    const pad = (num) => String(num).padStart(2, '0');
    const hour = time.hour > 12 ? time.hour - 12 : (time.hour === 0 ? 12 : time.hour);
    return `${pad(hour)}:${pad(time.minute)}:${pad(time.second)}`;
}

// Format date display
function formatDate(date) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Add clock form modal
function addClockForm() {
    document.getElementById('addClockModal').style.display = 'block';
}

// Close add clock form
function closeAddClockForm() {
    document.getElementById('addClockModal').style.display = 'none';
    document.getElementById('cityName').value = '';
    document.getElementById('timezoneInput').value = '';
    document.getElementById('clockColor').value = '#4CAF50';
}

// Submit add clock form
function submitAddClock(event) {
    event.preventDefault();
    
    const cityName = document.getElementById('cityName').value.trim();
    const timezone = document.getElementById('timezoneInput').value.trim();
    const color = document.getElementById('clockColor').value;
    
    if (!cityName || !timezone) {
        alert('Please fill in all fields');
        return;
    }
    
    // Validate timezone
    const time = getTimeInTimezone(timezone);
    if (time.hour === 0 && time.minute === 0 && time.second === 0) {
        alert('Invalid timezone. Please check the timezone name.');
        return;
    }
    
    const clocks = loadClocks();
    clocks.push({
        city: cityName,
        timezone: timezone,
        color: color,
        custom: true
    });
    
    saveClocks(clocks);
    renderClocks(clocks);
    closeAddClockForm();
}

// Quick add timezone from dropdown
function quickAddTimezone() {
    const select = document.getElementById('timezoneSelect');
    const timezone = select.value;
    
    if (!timezone) return;
    
    const cityName = select.options[select.selectedIndex].text.split('(')[0].trim();
    const color = getRandomColor();
    
    const clocks = loadClocks();
    
    // Check if timezone already exists
    if (clocks.some(c => c.timezone === timezone)) {
        alert('This timezone is already added!');
        select.value = '';
        return;
    }
    
    clocks.push({
        city: cityName,
        timezone: timezone,
        color: color,
        custom: true
    });
    
    saveClocks(clocks);
    renderClocks(clocks);
    select.value = '';
}

// Delete a clock
function deleteClock(index) {
    if (confirm('Are you sure you want to delete this clock?')) {
        const clocks = loadClocks();
        clocks.splice(index, 1);
        saveClocks(clocks);
        renderClocks(clocks);
    }
}

// Copy time to clipboard
function copyToClipboard(index) {
    const clocks = loadClocks();
    const clock = clocks[index];
    const time = getTimeInTimezone(clock.timezone);
    const timeStr = `${clock.city}: ${formatTime(time)} ${time.period}`;
    
    navigator.clipboard.writeText(timeStr).then(() => {
        showCopyFeedback(`Copied: ${timeStr}`);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Show copy feedback
function showCopyFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 3000);
}

// Reset to default clocks
function resetToDefault() {
    if (confirm('Reset all clocks to default?')) {
        localStorage.removeItem('clocks');
        location.reload();
    }
}

// Get random color
function getRandomColor() {
    const colors = ['#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#00BCD4', '#9C27B0', '#F44336', '#FFEB3B'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('addClockModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);