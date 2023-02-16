package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopsPage.class.getName());

    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }

    //Locators for each element
    @CacheLookup
    @FindBy(xpath = "//h1[text()='Desktops']")
    WebElement desktopsText;
//    By desktopsText = By.xpath("//h1[text()='Desktops']");

    @CacheLookup
    @FindBy(xpath = "//h2//a[text()='Build your own computer']")
    WebElement buildYourOwnComp;
//    By buildYourOwnComp = By.xpath("//h2//a[text()='Build your own computer']");

    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement sortByDropMenu;
//    By sortByDropMenu = By.id("products-orderby");

    @CacheLookup
    @FindBy(id = "products-pagesize")
    WebElement displayMenu;
//    By displayMenu = By.id("products-pagesize");

    @CacheLookup
    @FindBy(xpath = "//a[@title='List']")
    WebElement selectProductList;
//    By selectProductList = By.xpath("//a[@title='List']");

    //Get Desktops Text on Desktop page
    public String getDesktopText() {
        String deskText = getTextFromElement(desktopsText); //call method from Utility class
        log.info("Getting text from: " + desktopsText.toString()); //log action
        return deskText;
    }

    //Click on Build Your Own Computer product
    public void clickOnBuildYourOwnComp() {
        clickOnElement(buildYourOwnComp); //call method from Utility class
        log.info("Clicking on Build Your Own Computer link: " + buildYourOwnComp.toString()); //log action
    }

    //Click on Sort by Dropdown Menu
    public void clickOnSortByDropDownMenu() {
        clickOnElement(sortByDropMenu); //call method from Utility class
        log.info("Clicking on Sort By Dropdown Menu: " + sortByDropMenu.toString()); //log action
    }

    //Click on Display Dropdown Menu
    public void clickOnDisplayDropDownMenu() {
        clickOnElement(displayMenu); //call method from Utility class
        log.info("Clicking on Display Menu: " + displayMenu.toString()); //log action
    }

    //Click on List View
    public void clickOnListView() {
        clickOnElement(selectProductList); //call method from Utility class
        log.info("Clicking on Select Product List View: " + selectProductList.toString()); //log action
    }
}