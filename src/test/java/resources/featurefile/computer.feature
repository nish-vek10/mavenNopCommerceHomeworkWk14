@ComputerPageTest
Feature: Computers Test
  As a User I want to build my own computer on demo.nopCommerce.com website.

  @ComputersPage
  Scenario: Verify User is able to navigate to Computers page successfully.
    Given User is on homepage
    When User selects computers from the top menu tabs
    Then User should be able to navigate to computers page successfully encountering the computers header text "Computers"

  @DesktopsPage
  Scenario: Verify User is able to navigate to Desktops page successfully.
    Given User is on homepage
    When User selects computers from the top menu tabs
    And User clicks on Desktops link
    Then User should be directed to Desktops page successfully encountering the Desktops header text "Desktops"

  @BuildYourOwnPC
  Scenario Outline: Verify User is able to build their own computer and add to cart successfully.
    Given User is on homepage
    When User selects computers from the top menu tabs
    And User clicks on Desktops link
    And User clicks on Build Your Own Computer link
    And User selects the processor "<processor>"
    And User selects the RAM "<ram>"
    And User selects the HDD "<hdd>"
    And User selects the Operating System "<os>"
    And User selects the Software "<software>"
    And User clicks on Add to Cart Button
    Then User should be able to see the item added to cart message "<message>"
    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |
