package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    //Locators for each element
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Register']")
    WebElement registerText;
//    By registerText = By.xpath("//h1[text()='Register']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement maleRadio;
//    By maleRadio = By.xpath("//input[@id='gender-male']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement femaleRadio;
//    By femaleRadio = By.xpath("//input[@id='gender-female']");

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstName;
//    By firstName = By.id("FirstName");

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastName;
//    By lastName = By.id("LastName");

    @CacheLookup
    @FindBy(name = "DateOfBirthDay")
    WebElement dobDay;
//    By dobDay = By.name("DateOfBirthDay");

    @CacheLookup
    @FindBy(name = "DateOfBirthMonth")
    WebElement dobMonth;
//    By dobMonth = By.name("DateOfBirthMonth");

    @CacheLookup
    @FindBy(name = "DateOfBirthYear")
    WebElement dobYear;
//    By dobYear = By.name("DateOfBirthYear");

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;
//    By emailField = By.id("Email");

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;
//    By passwordField = By.id("Password");

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;
//    By confirmPasswordField = By.id("ConfirmPassword");

    @CacheLookup
    @FindBy(id = "register-button")
    WebElement registerButton;
//    By registerButton = By.id("register-button");

    @CacheLookup
    @FindBy(id = "FirstName-error")
    WebElement firstNameMsg;
//    By firstNameMsg = By.id("FirstName-error");

    @CacheLookup
    @FindBy(id = "LastName-error")
    WebElement lastNameMsg;
//    By lastNameMsg = By.id("LastName-error");

    @CacheLookup
    @FindBy(id = "Email-error")
    WebElement emailMsg;
//    By emailMsg = By.id("Email-error");

    @CacheLookup
    @FindBy(id = "Password-error")
    WebElement passwordMsg;
//    By passwordMsg = By.id("Password-error");

    @CacheLookup
    @FindBy(id = "ConfirmPassword-error")
    WebElement confirmPasswordMsg;
//    By confirmPasswordMsg = By.id("ConfirmPassword-error");

    @CacheLookup
    @FindBy(className = "result")
    WebElement completionMsg;
//    By completionMsg = By.className("result");

    @CacheLookup
    @FindBy(xpath = "//a[text()='Continue']")
    WebElement continueButton;
//    By continueButton = By.xpath("//a[text()='Continue']");

    //Get Register Text on Register page
    public String getRegisterText() {
        String regText = getTextFromElement(registerText); //call method from Utility class
        log.info("Getting text from: " + registerText.toString()); //log action
        return regText;
    }

    //Click on Male radio button
    public void clickOnMaleRadioButton() {
        clickOnElement(maleRadio); //call method from Utility class
        log.info("Clicking on Male Radio Button: " + maleRadio.toString()); //log action
    }

    //Click on Female radio button
    public void clickOnFemaleRadioButton() {
        clickOnElement(femaleRadio); //call method from Utility class
        log.info("Clicking on Female Radio Button: " + femaleRadio.toString()); //log action
    }

    //Enter First Name
    public void enterFirstName(String fName) {
        sendTextToElement(firstName, fName); //call method from Utility class
    }

    //Enter Last Name
    public void enterLastName(String lName) {
        sendTextToElement(lastName, lName); //call method from Utility class
    }

    //Select Birth Day from dropdown Menu
    public void enterBirthDay(String birthDay) {
        selectByValueFromDropDown(dobDay, birthDay); //call method from Utility class
    }

    //Select Birth Month from dropdown Menu
    public void enterBirthMonth(String birthMonth) {
        selectByValueFromDropDown(dobMonth, birthMonth); //call method from Utility class
    }

    //Select Birth Year from dropdown Menu
    public void enterBirthYear(String birthYear) {
        selectByValueFromDropDown(dobYear, birthYear); //call method from Utility class
    }

    //Enter email ID
    public void enterEmail(String email) {
        sendTextToElement(emailField, email); //call method from Utility class
    }

    //Enter Password
    public void enterPassword(String password) {
        sendTextToElement(passwordField, password); //call method from Utility class
    }

    //Enter in Confirm Password
    public void enterConfirmPassword(String confirmPassword) {
        sendTextToElement(confirmPasswordField, confirmPassword); //call method from Utility class
    }

    //Click on Register button
    public void clickOnRegisterButton() {
        clickOnElement(registerButton); //call method from Utility class
        log.info("Clicking on Register Button: " + registerButton.toString()); //log action
    }

    //Get 'First name required' error message
    public String getFirstNameRequiredMessage() {
        String fNameError = getTextFromElement(firstNameMsg); //call method from Utility class
        log.info("Getting text from: " + firstNameMsg.toString()); //log action
        return fNameError;
    }

    //Get 'Last name required' error message
    public String getLastNameRequiredMessage() {
        String lNameError = getTextFromElement(lastNameMsg); //call method from Utility class
        log.info("Getting text from: " + lastNameMsg.toString()); //log action
        return lNameError;
    }

    //Get 'Email required' error message
    public String getEmailRequiredMessage() {
        String emailError = getTextFromElement(emailMsg); //call method from Utility class
        log.info("Getting text from: " + emailMsg.toString()); //log action
        return emailError;
    }

    //Get 'Password required' error message
    public String getPasswordRequiredMessage() {
        String passError = getTextFromElement(passwordMsg); //call method from Utility class
        log.info("Getting text from: " + passwordMsg.toString()); //log action
        return passError;
    }

    //Get 'Confirm password required' error message
    public String getConfirmPasswordRequiredMessage() {
        String conPassError = getTextFromElement(confirmPasswordMsg); //call method from Utility class
        log.info("Getting text from: " + confirmPasswordMsg.toString()); //log action
        return conPassError;
    }

    //Get 'Registration Completed' message
    public String getRegistrationCompletedMessage() {
        String compText = getTextFromElement(completionMsg); //call method from Utility class
        log.info("Getting text from: " + completionMsg.toString()); //log action
        return compText;
    }

    //Click on Continue button
    public void clickOnContinueButton() {
        clickOnElement(continueButton); //call method from Utility class
        log.info("Clicking on Continue Button: " + continueButton.toString()); //log action
    }
}