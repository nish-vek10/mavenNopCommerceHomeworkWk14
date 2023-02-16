@RegisterPageTest
Feature: Register Page Test
  As a User I want to login into demo.nopCommerce.com website.

  @RegisterPage
  Scenario: Verify User is able to navigate to Register Page.
    Given User is on homepage
    When User clicks on register link
    Then User should navigate to register page successfully

  @MandatoryFields
  Scenario Outline: Verify First Name, Last Name, Email, Password and Confirm Password fields are mandatory.
    Given User is on homepage
    When User clicks on register link
    And User clicks on Register button
    And User encounters first name field required error message "<fNameMsg>"
    And User encounters last name field required error message "<lNameMsg>"
    And User encounters email required field error message "<emailMsg>"
    And User encounters password required field error message "<passwordMsg>"
    And User encounters confirm password required field error message "<confirmPasswordMsg>"
    Examples:
      | fNameMsg                | lNameMsg               | emailMsg           | passwordMsg           | confirmPasswordMsg    |
      | First name is required. | Last name is required. | Email is required. | Password is required. | Password is required. |

  @RegisterNewAccount
  Scenario Outline: Verify User is able to create accounts successfully.
    Given User is on homepage
    When User clicks on register link
    And User selects the gender "<gender>"
    And User enters the first name "<fName>"
    And User enters the last name "<lName>"
    And User selects the birth day from dropdown "<birthDay>"
    And User selects the birth month from dropdown "<birthMonth>"
    And User selects the birth year from dropdown "<birthYear>"
    And User enters the email ID "<email>"
    And User enters the password "<password>"
    And User enters the password again "<confirmPassword>"
    And User clicks on Register button
    Then User verifies the registration completion text "<completion>"
    Examples:
      | gender | fName | lName  | birthDay | birthMonth | birthYear | email                   | password | confirmPassword | completion                  |
      | Female | Nora  | Fatehi | 10       | 10         | 1990      | nft1664@gmail.com       | nft123   | nft123          | Your registration completed |
      | Male   | Code  | Buster | 20       | 4          | 2002      | codebuster555@gmail.com | Admin123 | Admin123        | Your registration completed |
