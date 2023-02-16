package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginTest {

    //Create objects
    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("^User is on homepage$")
    public void userIsOnHomepage() {

    }

    @When("^User clicks on login link$")
    public void userClicksOnLoginLink() {
        homePage.clickOnLoginLink();
    }

    @Then("^User should navigate to login page successfully$")
    public void userShouldNavigateToLoginPageSuccessfully() {
        String actualMsg = loginPage.getWelcomeText(); //Get text from page
        String expectedMsg = "Welcome, Please Sign In!"; //Expected Message
        Assert.assertEquals(actualMsg, expectedMsg, "Login Page Verified!"); //Compare and Verify test
    }

    @And("^User enters email id \"([^\"]*)\"$")
    public void userEntersEmailId(String email) {
        loginPage.enterEmail(email);
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void userEntersPassword(String password) {
        loginPage.enterPassword(password);
    }

    @And("^User clicks on login button$")
    public void userClicksOnLoginButton() {
        loginPage.clickOnLoginButton();
    }

    @Then("^User should see the error message \"([^\"]*)\"$")
    public void userShouldSeeTheErrorMessage(String errorMsg) {
        String actualErrorMsg = loginPage.getErrorMessage();
        String expectedErrorMsg = "Login was unsuccessful. Please correct the errors and try again." +
                "\nNo customer account found";
        Assert.assertEquals(actualErrorMsg, expectedErrorMsg, "Error Message Verified!");
    }

    @Then("^User should be able to see the logout link displayed at the top of the page \"([^\"]*)\"$")
    public void userShouldBeAbleToSeeTheLogoutLinkDisplayedAtTheTopOfThePage(String logoutTxt) {
        String actualText = homePage.getLogOutText(); //Get Logout Text after login
        String expectedText = "Log out"; //Expected Message
        Assert.assertEquals(actualText, expectedText, "Login Successful!"); //Compare and Verify test
    }

    @And("^User clicks on logout button$")
    public void userClicksOnLogoutButton() {
        homePage.clickOnLogoutLink(); //Click on Logout Link
    }

    @Then("^User should be able to see the login link at the top of the page \"([^\"]*)\"$")
    public void userShouldBeAbleToSeeTheLoginLinkAtTheTopOfThePage(String loginTxt) {
        String actualText = homePage.getLogInText(); //Get Logout Text after login
        String expectedText = "Log in"; //Expected Message
        System.out.println(actualText);
        Assert.assertEquals(actualText, expectedText, "Logout Successful!"); //Compare and Verify test
    }
}
