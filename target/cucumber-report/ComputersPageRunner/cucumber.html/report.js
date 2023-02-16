$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computers Test",
  "description": "As a User I want to build my own computer on demo.nopCommerce.com website.",
  "id": "computers-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ComputerPageTest"
    }
  ]
});
formatter.before({
  "duration": 5604745300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User is able to navigate to Computers page successfully.",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-navigate-to-computers-page-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@ComputersPage"
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
  "name": "User selects computers from the top menu tabs",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be able to navigate to computers page successfully encountering the computers header text \"Computers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 111521000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userSelectsComputersFromTheTopMenuTabs()"
});
formatter.result({
  "duration": 1025716100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 103
    }
  ],
  "location": "ComputerPageTest.userShouldBeAbleToNavigateToComputersPageSuccessfullyEncounteringTheComputersHeaderText(String)"
});
formatter.result({
  "duration": 30808500,
  "status": "passed"
});
formatter.after({
  "duration": 696936600,
  "status": "passed"
});
formatter.before({
  "duration": 2854456200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify User is able to navigate to Desktops page successfully.",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-navigate-to-desktops-page-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@DesktopsPage"
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
  "name": "User selects computers from the top menu tabs",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should be directed to Desktops page successfully encountering the Desktops header text \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 5509200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userSelectsComputersFromTheTopMenuTabs()"
});
formatter.result({
  "duration": 590621200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnDesktopsLink()"
});
formatter.result({
  "duration": 567949900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 93
    }
  ],
  "location": "ComputerPageTest.userShouldBeDirectedToDesktopsPageSuccessfullyEncounteringTheDesktopsHeaderText(String)"
});
formatter.result({
  "duration": 35993900,
  "status": "passed"
});
formatter.after({
  "duration": 679318600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify User is able to build their own computer and add to cart successfully.",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuildYourOwnPC"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User selects computers from the top menu tabs",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Build Your Own Computer link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects the RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects the HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects the Operating System \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects the Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be able to see the item added to cart message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3009402600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify User is able to build their own computer and add to cart successfully.",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuildYourOwnPC"
    },
    {
      "line": 1,
      "name": "@ComputerPageTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User selects computers from the top menu tabs",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Build Your Own Computer link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects the RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects the HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects the Operating System \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects the Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be able to see the item added to cart message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 9785800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userSelectsComputersFromTheTopMenuTabs()"
});
formatter.result({
  "duration": 1295409400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnDesktopsLink()"
});
formatter.result({
  "duration": 559458100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 845192100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 28
    }
  ],
  "location": "ComputerPageTest.userSelectsTheProcessor(String)"
});
formatter.result({
  "duration": 107698800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 22
    }
  ],
  "location": "ComputerPageTest.userSelectsTheRAM(String)"
});
formatter.result({
  "duration": 86626800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 22
    }
  ],
  "location": "ComputerPageTest.userSelectsTheHDD(String)"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 35
    }
  ],
  "location": "ComputerPageTest.userSelectsTheOperatingSystem(String)"
});
formatter.result({
  "duration": 97400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 27
    }
  ],
  "location": "ComputerPageTest.userSelectsTheSoftware(String)"
});
formatter.result({
  "duration": 76300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnAddToCartButton()"
});
formatter.result({
  "duration": 52586600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmessage\u003e",
      "offset": 59
    }
  ],
  "location": "ComputerPageTest.userShouldBeAbleToSeeTheItemAddedToCartMessage(String)"
});
formatter.result({
  "duration": 711958100,
  "error_message": "java.lang.AssertionError: Alert Message Verified! expected [The product has been added to your shopping cart] but found [Please select HDD]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.userShouldBeAbleToSeeTheItemAddedToCartMessage(ComputerPageTest.java:87)\r\n\tat ✽.Then User should be able to see the item added to cart message \"\u003cmessage\u003e\"(computer.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1061235100,
  "status": "passed"
});
formatter.before({
  "duration": 3107517300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify User is able to build their own computer and add to cart successfully.",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuildYourOwnPC"
    },
    {
      "line": 1,
      "name": "@ComputerPageTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User selects computers from the top menu tabs",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Build Your Own Computer link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects the RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects the HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects the Operating System \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects the Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be able to see the item added to cart message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 4793300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userSelectsComputersFromTheTopMenuTabs()"
});
formatter.result({
  "duration": 1288388900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnDesktopsLink()"
});
formatter.result({
  "duration": 670583400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 936777200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 28
    }
  ],
  "location": "ComputerPageTest.userSelectsTheProcessor(String)"
});
formatter.result({
  "duration": 68062300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 22
    }
  ],
  "location": "ComputerPageTest.userSelectsTheRAM(String)"
});
formatter.result({
  "duration": 86784500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 22
    }
  ],
  "location": "ComputerPageTest.userSelectsTheHDD(String)"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 35
    }
  ],
  "location": "ComputerPageTest.userSelectsTheOperatingSystem(String)"
});
formatter.result({
  "duration": 53800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 27
    }
  ],
  "location": "ComputerPageTest.userSelectsTheSoftware(String)"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnAddToCartButton()"
});
formatter.result({
  "duration": 54859800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmessage\u003e",
      "offset": 59
    }
  ],
  "location": "ComputerPageTest.userShouldBeAbleToSeeTheItemAddedToCartMessage(String)"
});
formatter.result({
  "duration": 669419500,
  "error_message": "java.lang.AssertionError: Alert Message Verified! expected [The product has been added to your shopping cart] but found [Please select HDD]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.userShouldBeAbleToSeeTheItemAddedToCartMessage(ComputerPageTest.java:87)\r\n\tat ✽.Then User should be able to see the item added to cart message \"\u003cmessage\u003e\"(computer.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 977383500,
  "status": "passed"
});
formatter.before({
  "duration": 2459080700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify User is able to build their own computer and add to cart successfully.",
  "description": "",
  "id": "computers-test;verify-user-is-able-to-build-their-own-computer-and-add-to-cart-successfully.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@BuildYourOwnPC"
    },
    {
      "line": 1,
      "name": "@ComputerPageTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User selects computers from the top menu tabs",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Build Your Own Computer link",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects the RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects the HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects the Operating System \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects the Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User clicks on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should be able to see the item added to cart message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 4344200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userSelectsComputersFromTheTopMenuTabs()"
});
formatter.result({
  "duration": 595045200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnDesktopsLink()"
});
formatter.result({
  "duration": 522583900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 1032836300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 28
    }
  ],
  "location": "ComputerPageTest.userSelectsTheProcessor(String)"
});
formatter.result({
  "duration": 88360200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 22
    }
  ],
  "location": "ComputerPageTest.userSelectsTheRAM(String)"
});
formatter.result({
  "duration": 100457000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 22
    }
  ],
  "location": "ComputerPageTest.userSelectsTheHDD(String)"
});
formatter.result({
  "duration": 59800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 35
    }
  ],
  "location": "ComputerPageTest.userSelectsTheOperatingSystem(String)"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 27
    }
  ],
  "location": "ComputerPageTest.userSelectsTheSoftware(String)"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.userClicksOnAddToCartButton()"
});
formatter.result({
  "duration": 59984400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmessage\u003e",
      "offset": 59
    }
  ],
  "location": "ComputerPageTest.userShouldBeAbleToSeeTheItemAddedToCartMessage(String)"
});
formatter.result({
  "duration": 657753200,
  "error_message": "java.lang.AssertionError: Alert Message Verified! expected [The product has been added to your shopping cart] but found [Please select HDD]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerPageTest.userShouldBeAbleToSeeTheItemAddedToCartMessage(ComputerPageTest.java:87)\r\n\tat ✽.Then User should be able to see the item added to cart message \"\u003cmessage\u003e\"(computer.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 984007600,
  "status": "passed"
});
});