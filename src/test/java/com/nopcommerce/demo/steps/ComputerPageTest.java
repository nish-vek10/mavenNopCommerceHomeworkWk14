package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class ComputerPageTest {

    //Create objects
    HomePage homePage = new HomePage();
    ComputerPage computerPage = new ComputerPage();
    DesktopsPage desktopsPage = new DesktopsPage();
    BuildYourOwnComputerPage buildCompPage = new BuildYourOwnComputerPage();

    @When("^User selects computers from the top menu tabs$")
    public void userSelectsComputersFromTheTopMenuTabs() {
        homePage.clickOnMenuTab("Computers"); //Click on Computers Tab from Homepage
    }

    @Then("^User should be able to navigate to computers page successfully encountering the computers header text \"([^\"]*)\"$")
    public void userShouldBeAbleToNavigateToComputersPageSuccessfullyEncounteringTheComputersHeaderText(String compText) {
        String actualMsg = computerPage.getComputersText(); //Get text from page
        String expectedMsg = "Computers"; //Expected Message
        Assert.assertEquals(actualMsg, expectedMsg, "Computers Page Verified!"); //Compare and Verify test
    }

    @And("^User clicks on Desktops link$")
    public void userClicksOnDesktopsLink() {
        computerPage.clickOnDesktopsLink(); //Click on Desktops link from Computer page
    }

    @Then("^User should be directed to Desktops page successfully encountering the Desktops header text \"([^\"]*)\"$")
    public void userShouldBeDirectedToDesktopsPageSuccessfullyEncounteringTheDesktopsHeaderText(String desktopsTxt) {
        String actualText = desktopsPage.getDesktopText(); //Get Desktops Text from Desktops page
        String expectedText = "Desktops"; //Expected Message
        Assert.assertEquals(actualText, expectedText, "Desktops Page Verified!"); //Compare and Verify test
    }

    @And("^User clicks on Build Your Own Computer link$")
    public void userClicksOnBuildYourOwnComputerLink() {
        desktopsPage.clickOnBuildYourOwnComp(); //Click on 'Build your own computer' product
    }

    @And("^User selects the processor \"([^\"]*)\"$")
    public void userSelectsTheProcessor(String processor) {
        buildCompPage.selectProcessor(processor); //Select processor
    }

    @And("^User selects the RAM \"([^\"]*)\"$")
    public void userSelectsTheRAM(String ram) {
        buildCompPage.selectRAM(ram); //Select RAM
    }

    @And("^User selects the HDD \"([^\"]*)\"$")
    public void userSelectsTheHDD(String hdd) {
        if (hdd == "320 GB") {
            buildCompPage.selectHDD320(); //Select 320 GB
        } else if (hdd == "400 GB [+$100.00]") {
            buildCompPage.selectHDD400(); //Select 400 GB
        }
    }

    @And("^User selects the Operating System \"([^\"]*)\"$")
    public void userSelectsTheOperatingSystem(String os) {
        buildCompPage.selectOS(os); //Select Vista Premium OS
    }

    @And("^User selects the Software \"([^\"]*)\"$")
    public void userSelectsTheSoftware(String software) {
        buildCompPage.selectSoftware(software); //Select Microsoft Office Software
    }

    @And("^User clicks on Add to Cart Button$")
    public void userClicksOnAddToCartButton() {
        buildCompPage.clickOnAddToCartButton(); //Add item to cart
    }

    @Then("^User should be able to see the item added to cart message \"([^\"]*)\"$")
    public void userShouldBeAbleToSeeTheItemAddedToCartMessage(String message) {
        String actualText = buildCompPage.getAlertMessage(); //Get Alert Message
        String expectedText = "The product has been added to your shopping cart"; //Expected Message
        Assert.assertEquals(actualText, expectedText, "Alert Message Verified!"); //Compare and Verify test
    }
}
