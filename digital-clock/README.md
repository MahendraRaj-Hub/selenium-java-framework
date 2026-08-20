# Digital Clock - Multiple Time Zones

A beautiful, responsive web application that displays the current time in different time zones around the world.

## Features

✨ **Key Capabilities:**
- 🕐 Real-time digital clock display
- 🌍 Support for 24+ major world time zones
- ➕ Add custom time zones easily
- 💾 Persistent storage (localStorage)
- 📋 Copy time to clipboard
- 🎨 Customizable colors
- 📱 Fully responsive design
- 🔄 Reset to default clocks
- ⚡ Live updates every second
- 📅 Date display with timezone
- 12/24 hour format support

## Time Zones Included

**Americas:**
- New York (EST/EDT)
- Chicago (CST/CDT)
- Denver (MST/MDT)
- Los Angeles (PST/PDT)
- Anchorage (AKST/AKDT)
- Honolulu (HST)
- Toronto (EST/EDT)
- Mexico City (CST/CDT)
- São Paulo (BRT/BRST)

**Europe:**
- London (GMT/BST)
- Paris (CET/CEST)
- Berlin (CET/CEST)
- Moscow (MSK)
- Cairo (EET)

**Asia:**
- Dubai (GST)
- India (IST)
- Bangkok (ICT)
- Hong Kong (HKT)
- Tokyo (JST)
- Singapore (SGT)

**Africa & Oceania:**
- Johannesburg (SAST)
- Sydney (AEDT/AEST)
- Auckland (NZDT/NZST)

## Default Clocks

The application comes with 4 default clocks:
1. London (Europe/London)
2. New York (America/New_York)
3. Tokyo (Asia/Tokyo)
4. Dubai (Asia/Dubai)

## How to Use

### Adding a Time Zone

**Method 1: Quick Add**
1. Select a timezone from the dropdown menu
2. The clock will be added automatically with a random color

**Method 2: Custom Add**
1. Click the "+ Add Time Zone" button
2. Enter the city name
3. Enter the timezone (e.g., `Asia/Tokyo`)
4. Choose a color (optional)
5. Click "Add Clock"

### Managing Clocks
- **Copy Time**: Click "Copy Time" to copy the time to clipboard
- **Delete**: Click "Delete" to remove custom clocks
- **Reset**: Click "Reset to Default" to restore default clocks

## Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling (Flexbox, Grid, Gradients)
- **JavaScript (ES6+)** - Functionality
- **LocalStorage API** - Data persistence
- **Intl API** - Timezone conversion

## File Structure

```
digital-clock/
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
└── script.js       # JavaScript logic
```

## Installation & Usage

### Option 1: Local File
1. Download the files
2. Open `index.html` in your web browser

### Option 2: Web Server
1. Place files in a web server directory
2. Access via HTTP/HTTPS

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Partial support (no Intl support for some timezones)

## Finding Timezone Names

Refer to the [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for complete timezone names.

Common formats:
- `Continent/City` (e.g., `Asia/Tokyo`)
- `UTC±offset` (e.g., `UTC+5:30`)

## Features Explained

### Real-Time Updates
The clock updates every 1 second to display current time

### Timezone Support
Uses JavaScript's Intl API for accurate timezone conversion

### Persistent Storage
Clocks are saved in browser's localStorage and restored on page reload

### Color Customization
Each clock can have its own color for easy identification

### Copy Functionality
Quickly share times with others using the copy feature

### Responsive Design
Optimized for desktop, tablet, and mobile devices

## Customization

### Change Default Clocks
Edit the `defaultClocks` array in `script.js`:

```javascript
const defaultClocks = [
    { city: 'London', timezone: 'Europe/London', color: '#4CAF50' },
    // Add more clocks here
];
```

### Change Theme Colors
Edit CSS variables in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Performance Optimization

- Minimal DOM manipulation
- Efficient timer management
- CSS animations for smooth transitions
- LocalStorage caching

## Known Limitations

1. Daylight Saving Time is handled automatically by the browser
2. Very old browsers may not support all features
3. Custom timezones must be valid IANA timezone strings

## Future Enhancements

- [ ] Time format options (12/24 hour)
- [ ] Alarm functionality
- [ ] Time difference calculator
- [ ] World map with timezone markers
- [ ] Dark mode toggle
- [ ] Export/import clock configurations
- [ ] Multiple language support
- [ ] Analog clock option

## License

MIT License - Feel free to use and modify

## Author

Created with ❤️ for time zone enthusiasts

## Support

For issues or suggestions, please refer to the [IANA Time Zone Database](https://www.iana.org/time-zones) for valid timezone names.