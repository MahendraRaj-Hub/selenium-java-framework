# Selenium Java Framework

A comprehensive Selenium Java automation framework with TestNG, Maven, Page Object Model (POM), Extent Reports, and WebDriver Manager.

## Features

- ✅ **Selenium 4** - Latest WebDriver API
- ✅ **TestNG** - Powerful testing framework
- ✅ **Maven** - Build and dependency management
- ✅ **Page Object Model** - Maintainable test structure
- ✅ **Extent Reports** - Beautiful HTML test reports
- ✅ **WebDriver Manager** - Automatic driver management
- ✅ **Log4j2** - Comprehensive logging
- ✅ **Screenshot on Failure** - Automatic screenshot capture
- ✅ **Test Listeners** - Custom test lifecycle management

## Prerequisites

- Java 11 or higher
- Maven 3.6+
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MahendraRaj-Hub/selenium-java-framework.git
cd selenium-java-framework
```

2. Install dependencies:
```bash
mvn clean install
```

## Project Structure

```
selenium-java-framework/
├── src/
│   ├── main/java/com/automation/
│   │   ├── base/              # BaseTest, DriverFactory
│   │   ├── pages/             # Page Object classes
│   │   ├── utils/             # Utility classes
│   │   └── listeners/         # TestNG listeners
│   └── test/
│       ├── java/com/automation/
│       │   ├── tests/         # Test classes
│       │   └── pages/         # Page objects for tests
│       └── resources/
│           ├── config.properties
│           └── log4j2.xml
├── pom.xml
└── testng.xml
```

## Configuration

Edit `src/test/resources/config.properties`:

```properties
baseUrl=https://your-app-url.com
browser=chrome
implicit_wait=10
explicit_wait=15
```

## Running Tests

### Run all tests:
```bash
mvn clean test
```

### Run with specific browser:
```bash
mvn clean test -Dbrowser=chrome
```

### Run specific test class:
```bash
mvn clean test -Dtest=LoginTest
```

### Run specific test method:
```bash
mvn clean test -Dtest=LoginTest#testSuccessfulLogin
```

## Test Reports

After test execution, Extent Reports are generated in:
```
test-output/ExtentReport_[timestamp].html
```

## Logging

Logs are generated in:
```
logs/app.log
```

## Best Practices Implemented

- ✅ Separation of concerns (Pages, Tests, Utils)
- ✅ Reusable utility methods
- ✅ Explicit waits instead of implicit waits
- ✅ Proper exception handling
- ✅ Comprehensive logging
- ✅ Screenshot on failure
- ✅ Detailed test reports

## Technologies Used

| Tool | Version |
|------|----------|
| Selenium | 4.15.0 |
| TestNG | 7.8.1 |
| Extent Reports | 5.1.1 |
| WebDriver Manager | 5.6.3 |
| Log4j | 2.20.0 |
| Maven | 3.6+ |
| Java | 11+ |

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License

## Author

Mahendra Raj