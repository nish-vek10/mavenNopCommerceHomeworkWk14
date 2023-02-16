package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    //Locators for each element
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li")
    List<WebElement> topMenuTabs;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-login']")
    WebElement loginLink;
//    By loginLink = By.className("ico-login");

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-register']")
    WebElement registerLink;
//    By registerLink = By.className("ico-register");

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement nopCommerceLogo;
//    By nopCommerceLogo = By.xpath("//img[@alt='nopCommerce demo store']");

    @CacheLookup
    @FindBy(className = "ico-account")
    WebElement myAccountLink;
//    By myAccountLink = By.className("ico-account");

    @CacheLookup
    @FindBy(className = "ico-logout")
    WebElement logoutLink;
//    By logoutLink = By.className("ico-logout");

    //Select tab from Top Menu Tabs
    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuTabs) {
            if (menu.getText().equalsIgnoreCase(tab)) {
                clickOnElement(menu);
                break;
            }
        }
    }

    //Click on Login Link
    public void clickOnLoginLink() {
        clickOnElement(loginLink); //Call method from Utility class
        log.info("Clicking on login link: " + loginLink.toString()); //log action
    }

    //Get Logout Text after login
    public String getLogInText() {
        return getTextFromElement(loginLink); //call method from Utility class
    }

    //Click on Register Link
    public void clickOnRegisterLink() {
        clickOnElement(registerLink); //Call method from Utility class
//        log.info("Clicking on register link: " + registerLink.toString()); //log action
    }

    //Click on noCommerce logo
    public void clickOnNopCommerceLogo() {
        clickOnElement(nopCommerceLogo); //Call method from Utility class
        log.info("Clicking on nopCommerce logo: " + nopCommerceLogo.toString()); //log action
    }

    //Click on My Account Link
    public void clickOnMyAccountLink() {
        clickOnElement(myAccountLink); //Call method from Utility class
        log.info("Clicking on My Accounts link: " + loginLink.toString()); //log action
    }

    //Click on Logout Link
    public void clickOnLogoutLink() {
        clickOnElement(logoutLink); //Call method from Utility class
        log.info("Clicking on logout link: " + loginLink.toString()); //log action
    }

    //Get Logout Text after login
    public String getLogOutText() {
        String logoutText = getTextFromElement(logoutLink); //call method from Utility class
        log.info("Getting text from: " + logoutLink.toString()); //log action
        return logoutText;
    }
}