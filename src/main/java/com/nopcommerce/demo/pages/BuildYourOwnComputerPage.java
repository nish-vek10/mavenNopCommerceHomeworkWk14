package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    //Locators for each element
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Build your own computer']")
    WebElement buildYourOwnComp;
//    By buildYourOwnComp = By.xpath("//h1[text()='Build your own computer']");

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement processorType;
//    By processorType = By.xpath("//select[@id='product_attribute_1']");

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement selectRAM;
//    By selectRAM = By.xpath("//select[@id='product_attribute_2']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_6']")
    WebElement hdd320;
//    By hdd320 = By.xpath("//input[@id='product_attribute_3_6']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_3_7']")
    WebElement hdd400;
//    By hdd400 = By.xpath("//input[@id='product_attribute_3_7']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_8']")
    WebElement osVistaHome;
//    By osVistaHome = By.xpath("//input[@id='product_attribute_4_8']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_4_9']")
    WebElement osVistaPremium;
//    By osVistaPremium = By.xpath("//input[@id='product_attribute_4_9']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement softMS;
//    By softMS = By.xpath("//input[@id='product_attribute_5_10']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement softAdobe;
//    By softAdobe = By.xpath("//input[@id='product_attribute_5_11']");

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_12']")
    WebElement softTotalCommander;
//    By softTotalCommander = By.xpath("//input[@id='product_attribute_5_12']");

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCart;
//    By addToCart = By.xpath("//button[@id='add-to-cart-button-1']");

    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    WebElement addToCartMsg;
//    By addToCartMsg = By.xpath("//p[@class='content']");

    //Get Build Your Own Computer Text on from page
    public String getBuildYourOwnComputerText() {
        String headerText = getTextFromElement(buildYourOwnComp); //call method from Utility class
        log.info("Getting text from: " + buildYourOwnComp.toString()); //log action
        return headerText;
    }

    //Select Processor from dropdown Menu
    public void selectProcessor(String processor) {
        selectByVisibleTextFromDropDown(processorType, processor); //Choose processor
    }

    //Select RAM from dropdown Menu
    public void selectRAM(String ram) {
        selectByVisibleTextFromDropDown(selectRAM, ram); //Choose processor
    }

    //Select HDD
    public void selectHDD(String hdd) {
        if (hdd == "320 GB") {
            clickOnElement(hdd320); //Call method from Utility class
        } else if (hdd == "400 GB [+$100.00]") {
            clickOnElement(hdd400); //Call method from Utility class
        }
    }

    public void selectHDD320() {
        clickOnElement(hdd320); //Call method from Utility class
    }

    public void selectHDD400() {
        clickOnElement(hdd400); //Call method from Utility class
    }

    //Select OS
    public void selectOS(String os) {
        if (os == "Vista Home [+$50.00]") {
            clickOnElement(osVistaHome); //Call method from Utility class
            log.info("Clicking on Vista Home Radio Button: " + osVistaHome.toString()); //log action
        } else if (os == "Vista Premium [+$60.00]") {
            clickOnElement(osVistaPremium); //Call method from Utility class
            log.info("Clicking on Vista Home Premium Button: " + osVistaPremium.toString()); //log action
        }
    }

    //Select Software
    public void selectSoftware(String software) {
        if (software == "Microsoft Office [+$50.00]") {
            clickOnElement(softMS); //Call method from Utility class
            log.info("Clicking on Microsoft Office Checkbox: " + softMS.toString()); //log action
        } else if (software == "Acrobat Reader [+$10.00]") {
            clickOnElement(softAdobe); //Call method from Utility class
            log.info("Clicking on Adobe Acrobat Checkbox: " + softAdobe.toString()); //log action
        } else if (software == "Total Commander [+$5.00]") {
            clickOnElement(softTotalCommander); //Call method from Utility class
            log.info("Clicking on Total Commander Checkbox: " + softTotalCommander.toString()); //log action
        }
    }

    //Click on Add to Cart Button
    public void clickOnAddToCartButton() {
        clickOnElement(addToCart); //Call method from Utility class
        log.info("Clicking on Add to Cart Button: " + addToCart.toString()); //log action
    }

    //Get Alert Message
    public String getAlertMessage() {
        String addToCartText = getTextFromElement(addToCartMsg); //call method from Utility class
        log.info("Getting text from: " + addToCartMsg.toString()); //log action
        return addToCartText;
    }

    public void dismissAddedToCartMessage() {
        dismissAlert();
    }
}