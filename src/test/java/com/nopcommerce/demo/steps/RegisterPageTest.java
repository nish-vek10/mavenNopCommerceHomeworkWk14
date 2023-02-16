package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class RegisterPageTest {

    //Create objects
    HomePage homePage = new HomePage();
    RegisterPage registerPage = new RegisterPage();

    @When("^User clicks on register link$")
    public void userClicksOnRegisterLink() {
        homePage.clickOnRegisterLink(); //Click on register link
    }

    @Then("^User should navigate to register page successfully$")
    public void userShouldNavigateToRegisterPageSuccessfully() {
        String actualMsg = registerPage.getRegisterText(); //Get text from page
        String expectedMsg = "Register"; //Expected Message
        Assert.assertEquals(actualMsg, expectedMsg, "Register Page Verified!"); //Compare and Verify test
    }

    @And("^User clicks on Register button$")
    public void userClicksOnRegisterButton() {
        registerPage.clickOnRegisterButton(); //Click on register button
    }

    @And("^User encounters first name field required error message \"([^\"]*)\"$")
    public void userEncountersFirstNameFieldRequiredErrorMessage(String fNameMsg) {
        String aFNameMsg = registerPage.getFirstNameRequiredMessage(); //Get First name field error message
        String eFNameMsg = fNameMsg; //Expected Message
        Assert.assertEquals(aFNameMsg, eFNameMsg, "First Name field is Mandatory!"); //Compare and Verify
    }

    @And("^User encounters last name field required error message \"([^\"]*)\"$")
    public void userEncountersLastNameFieldRequiredErrorMessage(String lNameMsg) {
        String aLNameMsg = registerPage.getLastNameRequiredMessage(); //Get Last name field error message
        String eLNameMsg = lNameMsg; //Expected Message
        Assert.assertEquals(aLNameMsg, eLNameMsg, "Last Name field is Mandatory!"); //Compare and Verify
    }

    @And("^User encounters email required field error message \"([^\"]*)\"$")
    public void userEncountersEmailRequiredFieldErrorMessage(String emailMsg) {
        String aEmailMsg = registerPage.getEmailRequiredMessage(); //Get Email field error message
        String eEmailMsg = emailMsg; //Expected Message
        Assert.assertEquals(aEmailMsg, eEmailMsg, "Email field is Mandatory!"); //Compare and Verify
    }

    @And("^User encounters password required field error message \"([^\"]*)\"$")
    public void userEncountersPasswordRequiredFieldErrorMessage(String passwordMsg) {
        String aPasswordMsg = registerPage.getPasswordRequiredMessage(); //Get Password field error message
        String ePasswordMsg = passwordMsg; //Expected Message
        Assert.assertEquals(aPasswordMsg, ePasswordMsg, "Password field is Mandatory!"); //Compare and Verify
    }

    @And("^User encounters confirm password required field error message \"([^\"]*)\"$")
    public void userEncountersConfirmPasswordRequiredFieldErrorMessage(String confirmPasswordMsg) {
        String aConfirmPassMsg = registerPage.getConfirmPasswordRequiredMessage(); //Get Confirm Password field error message
        String eConfirmPassMsg = confirmPasswordMsg; //Expected Message
        Assert.assertEquals(aConfirmPassMsg, eConfirmPassMsg, "Confirm Password field is Mandatory!");
    }

    @And("^User selects the gender \"([^\"]*)\"$")
    public void userSelectsTheGender(String gender) {
        if (gender == "Male") {
            registerPage.clickOnMaleRadioButton(); //Click on male radio button
        } else if (gender == "Female") {
            registerPage.clickOnFemaleRadioButton(); //Click on female radio button
        }
    }

    @And("^User selects the female radio button$")
    public void userSelectsTheFemaleRadioButton() {
    }

    @And("^User enters the first name \"([^\"]*)\"$")
    public void userEntersTheFirstName(String fName) {
        registerPage.enterFirstName(fName); //Enter first name
    }

    @And("^User enters the last name \"([^\"]*)\"$")
    public void userEntersTheLastName(String lName) {
        registerPage.enterLastName(lName); //Enter last name
    }

    @And("^User selects the birth day from dropdown \"([^\"]*)\"$")
    public void userSelectsTheBirthDayFromDropdown(String birthDay) {
        registerPage.enterBirthDay(birthDay); //Select day of birth
    }

    @And("^User selects the birth month from dropdown \"([^\"]*)\"$")
    public void userSelectsTheBirthMonthFromDropdown(String birthMonth) {
        registerPage.enterBirthMonth(birthMonth); //Select month of birth
    }

    @And("^User selects the birth year from dropdown \"([^\"]*)\"$")
    public void userSelectsTheBirthYearFromDropdown(String birthYear) {
        registerPage.enterBirthYear(birthYear); //Select year of birth
    }

    @And("^User enters the email ID \"([^\"]*)\"$")
    public void userEntersTheEmailID(String email) {
        registerPage.enterEmail(email);
    }

    @And("^User enters the password \"([^\"]*)\"$")
    public void userEntersThePassword(String password) {
        registerPage.enterPassword(password);
    }

    @And("^User enters the password again \"([^\"]*)\"$")
    public void userEntersThePasswordAgain(String confirmPassword) {
        registerPage.enterConfirmPassword(confirmPassword);
    }

    @Then("^User verifies the registration completion text \"([^\"]*)\"$")
    public void userVerifiesTheRegistrationCompletionText(String completion) {
        String actualText = registerPage.getRegistrationCompletedMessage(); //Get Registration completed text
        String expectedText = completion; //Expected Message
        //Compare and Verify test
        Assert.assertEquals(actualText, expectedText, "Registration Completed Successfully!");
    }

}
