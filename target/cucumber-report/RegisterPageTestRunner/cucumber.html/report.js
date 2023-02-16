$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Page Test",
  "description": "As a User I want to login into demo.nopCommerce.com website.",
  "id": "register-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterPageTest"
    }
  ]
});
formatter.before({
  "duration": 6115932400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User is able to navigate to Register Page.",
  "description": "",
  "id": "register-page-test;verify-user-is-able-to-navigate-to-register-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@RegisterPage"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 146489000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 1046860300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 35973800,
  "status": "passed"
});
formatter.after({
  "duration": 701465000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify First Name, Last Name, Email, Password and Confirm Password fields are mandatory.",
  "description": "",
  "id": "register-page-test;verify-first-name,-last-name,-email,-password-and-confirm-password-fields-are-mandatory.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@MandatoryFields"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User encounters first name field required error message \"\u003cfNameMsg\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User encounters last name field required error message \"\u003clNameMsg\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User encounters email required field error message \"\u003cemailMsg\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User encounters password required field error message \"\u003cpasswordMsg\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User encounters confirm password required field error message \"\u003cconfirmPasswordMsg\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "register-page-test;verify-first-name,-last-name,-email,-password-and-confirm-password-fields-are-mandatory.;",
  "rows": [
    {
      "cells": [
        "fNameMsg",
        "lNameMsg",
        "emailMsg",
        "passwordMsg",
        "confirmPasswordMsg"
      ],
      "line": 22,
      "id": "register-page-test;verify-first-name,-last-name,-email,-password-and-confirm-password-fields-are-mandatory.;;1"
    },
    {
      "cells": [
        "First name is required.",
        "Last name is required.",
        "Email is required.",
        "Password is required.",
        "Password is required."
      ],
      "line": 23,
      "id": "register-page-test;verify-first-name,-last-name,-email,-password-and-confirm-password-fields-are-mandatory.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2941897700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify First Name, Last Name, Email, Password and Confirm Password fields are mandatory.",
  "description": "",
  "id": "register-page-test;verify-first-name,-last-name,-email,-password-and-confirm-password-fields-are-mandatory.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterPageTest"
    },
    {
      "line": 11,
      "name": "@MandatoryFields"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User encounters first name field required error message \"First name is required.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User encounters last name field required error message \"Last name is required.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User encounters email required field error message \"Email is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User encounters password required field error message \"Password is required.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User encounters confirm password required field error message \"Password is required.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 18136300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 916692100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterButton()"
});
formatter.result({
  "duration": 74928300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 57
    }
  ],
  "location": "RegisterPageTest.userEncountersFirstNameFieldRequiredErrorMessage(String)"
});
formatter.result({
  "duration": 30345000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 56
    }
  ],
  "location": "RegisterPageTest.userEncountersLastNameFieldRequiredErrorMessage(String)"
});
formatter.result({
  "duration": 24980900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 52
    }
  ],
  "location": "RegisterPageTest.userEncountersEmailRequiredFieldErrorMessage(String)"
});
formatter.result({
  "duration": 22632300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 55
    }
  ],
  "location": "RegisterPageTest.userEncountersPasswordRequiredFieldErrorMessage(String)"
});
formatter.result({
  "duration": 22977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 63
    }
  ],
  "location": "RegisterPageTest.userEncountersConfirmPasswordRequiredFieldErrorMessage(String)"
});
formatter.result({
  "duration": 23441600,
  "status": "passed"
});
formatter.after({
  "duration": 725647200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify User is able to create accounts successfully.",
  "description": "",
  "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@RegisterNewAccount"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User selects the gender \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enters the first name \"\u003cfName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters the last name \"\u003clName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User selects the birth day from dropdown \"\u003cbirthDay\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User selects the birth month from dropdown \"\u003cbirthMonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User selects the birth year from dropdown \"\u003cbirthYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters the email ID \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enters the password again \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User verifies the registration completion text \"\u003ccompletion\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.;",
  "rows": [
    {
      "cells": [
        "gender",
        "fName",
        "lName",
        "birthDay",
        "birthMonth",
        "birthYear",
        "email",
        "password",
        "confirmPassword",
        "completion"
      ],
      "line": 41,
      "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.;;1"
    },
    {
      "cells": [
        "Female",
        "Nora",
        "Fatehi",
        "10",
        "10",
        "1990",
        "nft1664@gmail.com",
        "nft123",
        "nft123",
        "Your registration completed"
      ],
      "line": 42,
      "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.;;2"
    },
    {
      "cells": [
        "Male",
        "Code",
        "Buster",
        "20",
        "4",
        "2002",
        "codebuster555@gmail.com",
        "Admin123",
        "Admin123",
        "Your registration completed"
      ],
      "line": 43,
      "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3108084700,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify User is able to create accounts successfully.",
  "description": "",
  "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterPageTest"
    },
    {
      "line": 25,
      "name": "@RegisterNewAccount"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User selects the gender \"Female\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enters the first name \"Nora\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters the last name \"Fatehi\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User selects the birth day from dropdown \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User selects the birth month from dropdown \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User selects the birth year from dropdown \"1990\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters the email ID \"nft1664@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters the password \"nft123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enters the password again \"nft123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User verifies the registration completion text \"Your registration completed\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 6006900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 1102209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 25
    }
  ],
  "location": "RegisterPageTest.userSelectsTheGender(String)"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nora",
      "offset": 28
    }
  ],
  "location": "RegisterPageTest.userEntersTheFirstName(String)"
});
formatter.result({
  "duration": 78449900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fatehi",
      "offset": 27
    }
  ],
  "location": "RegisterPageTest.userEntersTheLastName(String)"
});
formatter.result({
  "duration": 86166800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "RegisterPageTest.userSelectsTheBirthDayFromDropdown(String)"
});
formatter.result({
  "duration": 92806200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 44
    }
  ],
  "location": "RegisterPageTest.userSelectsTheBirthMonthFromDropdown(String)"
});
formatter.result({
  "duration": 82246200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1990",
      "offset": 43
    }
  ],
  "location": "RegisterPageTest.userSelectsTheBirthYearFromDropdown(String)"
});
formatter.result({
  "duration": 81537900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nft1664@gmail.com",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.userEntersTheEmailID(String)"
});
formatter.result({
  "duration": 83574100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nft123",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.userEntersThePassword(String)"
});
formatter.result({
  "duration": 84236500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nft123",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.userEntersThePasswordAgain(String)"
});
formatter.result({
  "duration": 71264100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterButton()"
});
formatter.result({
  "duration": 652793900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 48
    }
  ],
  "location": "RegisterPageTest.userVerifiesTheRegistrationCompletionText(String)"
});
formatter.result({
  "duration": 25036300,
  "status": "passed"
});
formatter.after({
  "duration": 718027600,
  "status": "passed"
});
formatter.before({
  "duration": 2835405000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify User is able to create accounts successfully.",
  "description": "",
  "id": "register-page-test;verify-user-is-able-to-create-accounts-successfully.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterPageTest"
    },
    {
      "line": 25,
      "name": "@RegisterNewAccount"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User clicks on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User selects the gender \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enters the first name \"Code\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters the last name \"Buster\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User selects the birth day from dropdown \"20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User selects the birth month from dropdown \"4\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User selects the birth year from dropdown \"2002\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enters the email ID \"codebuster555@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enters the password \"Admin123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enters the password again \"Admin123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User verifies the registration completion text \"Your registration completed\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 7740100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterLink()"
});
formatter.result({
  "duration": 901373500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 25
    }
  ],
  "location": "RegisterPageTest.userSelectsTheGender(String)"
});
formatter.result({
  "duration": 74900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Code",
      "offset": 28
    }
  ],
  "location": "RegisterPageTest.userEntersTheFirstName(String)"
});
formatter.result({
  "duration": 76189800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buster",
      "offset": 27
    }
  ],
  "location": "RegisterPageTest.userEntersTheLastName(String)"
});
formatter.result({
  "duration": 84561700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 42
    }
  ],
  "location": "RegisterPageTest.userSelectsTheBirthDayFromDropdown(String)"
});
formatter.result({
  "duration": 84556300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "RegisterPageTest.userSelectsTheBirthMonthFromDropdown(String)"
});
formatter.result({
  "duration": 80522700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2002",
      "offset": 43
    }
  ],
  "location": "RegisterPageTest.userSelectsTheBirthYearFromDropdown(String)"
});
formatter.result({
  "duration": 77872600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "codebuster555@gmail.com",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.userEntersTheEmailID(String)"
});
formatter.result({
  "duration": 94524300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin123",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.userEntersThePassword(String)"
});
formatter.result({
  "duration": 85829900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin123",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.userEntersThePasswordAgain(String)"
});
formatter.result({
  "duration": 74871400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.userClicksOnRegisterButton()"
});
formatter.result({
  "duration": 1146460100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 48
    }
  ],
  "location": "RegisterPageTest.userVerifiesTheRegistrationCompletionText(String)"
});
formatter.result({
  "duration": 27918300,
  "status": "passed"
});
formatter.after({
  "duration": 705163100,
  "status": "passed"
});
});