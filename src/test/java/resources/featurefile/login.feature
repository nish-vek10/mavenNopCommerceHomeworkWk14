@LoginPageTest
Feature: Login Test
  As a User I want to login into demo.nopCommerce.com website.

  Scenario: User should navigate to login page.
    Given User is on homepage
    When User clicks on login link
    Then User should navigate to login page successfully

  Scenario: User should not login successfully with invalid credentials.
    Given User is on homepage
    When User clicks on login link
    And User enters email id "cbust55@gmail.com"
    And User enters password "admin123"
    And User clicks on login button
    Then User should see the error message "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"


  Scenario: Verify User is able to see the logout link displayed after logging in with valid credentials.
    Given User is on homepage
    When User clicks on login link
    And User enters email id "codebuster555@gmail.com"
    And User enters password "Admin123"
    And User clicks on login button
    Then User should be able to see the logout link displayed at the top of the page "Log out"

  @smoke
  Scenario: Verify User is able to logout successfully after logging in with valid credentials.
    Given User is on homepage
    When User clicks on login link
    And User enters email id "codebuster555@gmail.com"
    And User enters password "Admin123"
    And User clicks on login button
    And User clicks on logout button
    Then User should be able to see the login link at the top of the page "Log in"