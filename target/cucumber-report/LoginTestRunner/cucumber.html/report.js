$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As a User I want to login into demo.nopCommerce.com website.",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPageTest"
    }
  ]
});
formatter.before({
  "duration": 5312875600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page.",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 123378600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 903657500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 28716400,
  "status": "passed"
});
formatter.after({
  "duration": 694958400,
  "status": "passed"
});
formatter.before({
  "duration": 2748127700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should not login successfully with invalid credentials.",
  "description": "",
  "id": "login-test;user-should-not-login-successfully-with-invalid-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters email id \"cbust55@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see the error message \"Login was unsuccessful. Please correct the errors and try again.\\nNo customer account found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 5621300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 921945100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cbust55@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersEmailId(String)"
});
formatter.result({
  "duration": 90346600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersPassword(String)"
});
formatter.result({
  "duration": 76439200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 416402200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginTest.userShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 53156900,
  "status": "passed"
});
formatter.after({
  "duration": 681445300,
  "status": "passed"
});
formatter.before({
  "duration": 2990964500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify User is able to see the logout link displayed after logging in with valid credentials.",
  "description": "",
  "id": "login-test;verify-user-is-able-to-see-the-logout-link-displayed-after-logging-in-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enters email id \"codebuster555@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters password \"Admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to see the logout link displayed at the top of the page \"Log out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 15837500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 423413500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "codebuster555@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersEmailId(String)"
});
formatter.result({
  "duration": 91560300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin123",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersPassword(String)"
});
formatter.result({
  "duration": 73284300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 647973400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 77
    }
  ],
  "location": "LoginTest.userShouldBeAbleToSeeTheLogoutLinkDisplayedAtTheTopOfThePage(String)"
});
formatter.result({
  "duration": 30781500,
  "status": "passed"
});
formatter.after({
  "duration": 717413400,
  "status": "passed"
});
formatter.before({
  "duration": 2809020100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify User is able to logout successfully after logging in with valid credentials.",
  "description": "",
  "id": "login-test;verify-user-is-able-to-logout-successfully-after-logging-in-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User enters email id \"codebuster555@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User enters password \"Admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User clicks on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should be able to see the login link at the top of the page \"Log in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 6449500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 513544000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "codebuster555@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersEmailId(String)"
});
formatter.result({
  "duration": 100991900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin123",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersPassword(String)"
});
formatter.result({
  "duration": 79902300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 636485200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLogoutButton()"
});
formatter.result({
  "duration": 665748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 66
    }
  ],
  "location": "LoginTest.userShouldBeAbleToSeeTheLoginLinkAtTheTopOfThePage(String)"
});
formatter.result({
  "duration": 41500000,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d110.0.5481.78)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1ae5ce6bb957f012009ef0f7e3f706e9, getElementText {id\u003d9263c15f-896b-480a-8101-8cd1daab2b42}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.78, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53445}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53445/devtoo..., se:cdpVersion: 110.0.5481.78, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (1ae5ce6bb957f012009ef0f7e3f706e9)] -\u003e xpath: //a[@class\u003d\u0027ico-login\u0027]]\nSession ID: 1ae5ce6bb957f012009ef0f7e3f706e9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:207)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.nopcommerce.demo.pages.HomePage.getLogInText(HomePage.java:69)\r\n\tat com.nopcommerce.demo.steps.LoginTest.userShouldBeAbleToSeeTheLoginLinkAtTheTopOfThePage(LoginTest.java:71)\r\n\tat ✽.Then User should be able to see the login link at the top of the page \"Log in\"(login.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1166525600,
  "status": "passed"
});
});