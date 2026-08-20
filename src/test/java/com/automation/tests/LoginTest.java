package com.automation.tests;

import com.automation.base.BaseTest;
import com.automation.pages.LoginPage;
import com.automation.utils.LoggerUtils;
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {
    
    @Test(priority = 1, description = "Test successful login")
    public void testSuccessfulLogin() {
        LoggerUtils.info("Starting testSuccessfulLogin");
        
        LoginPage loginPage = new LoginPage(driver);
        loginPage.login("validuser", "validpassword");
        
        // Add assertion for successful login
        LoggerUtils.info("Test completed successfully");
    }

    @Test(priority = 2, description = "Test login with invalid credentials")
    public void testInvalidLogin() {
        LoggerUtils.info("Starting testInvalidLogin");
        
        LoginPage loginPage = new LoginPage(driver);
        loginPage.login("invaliduser", "invalidpassword");
        
        Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        LoggerUtils.info("Error message displayed as expected");
    }
}