package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    //Locators for each element
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;
//    By welcomeText = By.xpath("//h1[contains(text(),'Welcome, Please Sign In!')]");

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;
//    By emailField = By.id("Email");

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;
//    By passwordField = By.name("Password");

    @CacheLookup
    @FindBy(xpath = "//button[text()='Log in']")
    WebElement loginButton;
//    By loginButton = By.xpath("//button[text()='Log in']");

    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMsg;
//    By errorMsg = By.xpath("//div[@class='message-error validation-summary-errors']");

    //Get Welcome Text on login page
    public String getWelcomeText() {
        String welcomeMsg = getTextFromElement(welcomeText); //call method from Utility class
        log.info("Getting text from: " + welcomeText.toString()); //log action
        return welcomeMsg;
    }

    //Enter email ID
    public void enterEmail(String email) {
        sendTextToElement(emailField, email); //call method from Utility class
    }

    //Enter password
    public void enterPassword(String password) {
        sendTextToElement(passwordField, password); //call method from Utility class
    }

    //Click on Login button
    public void clickOnLoginButton() {
        clickOnElement(loginButton); //call method from Utility class
        log.info("Clicking on login button: " + loginButton.toString()); //log action
    }

    //Get Error Message on Login page
    public String getErrorMessage() {
        String errorMsgText = getTextFromElement(errorMsg); //call method from Utility class
        log.info("Getting text from: " + errorMsg.toString()); //log action
        return errorMsgText;
    }
}