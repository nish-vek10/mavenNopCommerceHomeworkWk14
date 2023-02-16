package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    //Locators for each element
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Computers']")
    WebElement computersText;
//    By computersText = By.xpath("//h1[text()='Computers']");

    @CacheLookup
    @FindBy(xpath = "//a[text()=' Desktops ']")
    WebElement desktopsLink;
//    By desktopsLink = By.xpath("//a[text()=' Desktops ']");

    @CacheLookup
    @FindBy(xpath = "//a[text()=' Notebooks ']")
    WebElement notebooksLink;
//    By notebooksLink = By.xpath("//a[text()=' Notebooks ']");

    @CacheLookup
    @FindBy(xpath = "//a[text()=' Software ']")
    WebElement softwareLinks;
//    By softwareLinks = By.xpath("//a[text()=' Software ']");

    //Get Computers Text on Computers page
    public String getComputersText() {
        String compText = getTextFromElement(computersText); //call method from Utility class
        log.info("Getting text from: " + computersText.toString()); //log action
        return compText;
    }

    //Click on Desktops Link
    public void clickOnDesktopsLink() {
        clickOnElement(desktopsLink); //call method from Utility class
        log.info("Clicking on Desktops link: " + desktopsLink.toString()); //log action
    }

    //Click on Notebooks Link
    public void clickOnNotebooksLink() {
        clickOnElement(notebooksLink); //call method from Utility class
        log.info("Clicking on Notebooks link: " + notebooksLink.toString()); //log action
    }

    //Click on Software Link
    public void clickOnSoftwareLink() {
        clickOnElement(softwareLinks); //call method from Utility class
        log.info("Clicking on Software link: " + softwareLinks.toString()); //log action
    }
}