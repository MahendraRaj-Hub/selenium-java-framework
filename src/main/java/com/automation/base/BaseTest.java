package com.automation.base;

import com.automation.listeners.TestListener;
import com.automation.utils.ConfigManager;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.*;

@Listeners(TestListener.class)
public class BaseTest {
    protected WebDriver driver;
    public static ExtentReports extent;
    public static ExtentTest test;

    @BeforeClass
    @Parameters({"browser"})
    public void setUp(@Optional("chrome") String browser) {
        driver = DriverFactory.initializeDriver(browser);
        driver.manage().window().maximize();
        driver.get(ConfigManager.getProperty("baseUrl"));
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}