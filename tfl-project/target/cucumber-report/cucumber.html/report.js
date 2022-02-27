$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("journeyplanner.feature");
formatter.feature({
  "line": 1,
  "name": "Journey Planner Functionality",
  "description": "",
  "id": "journey-planner-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User is able to verify that a valid journey can be planned successfully using a widget.",
  "description": "",
  "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cFrom\u003e\" from destination",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cTo\u003e\" to destination",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is on Journey results page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 12,
      "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;1"
    },
    {
      "cells": [
        "Watford Junction",
        "Edgware Underground Station"
      ],
      "line": 13,
      "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;2"
    },
    {
      "cells": [
        "Ealing Broadway",
        "Southall Broadway"
      ],
      "line": 14,
      "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;3"
    },
    {
      "cells": [
        "Carpenders Park Rail Station",
        "Wembley Central"
      ],
      "line": 15,
      "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15115644500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 690181300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User is able to verify that a valid journey can be planned successfully using a widget.",
  "description": "",
  "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User enters \"Watford Junction\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"Edgware Underground Station\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is on Journey results page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Watford Junction",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 1601043400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edgware Underground Station",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 735535800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 10802385500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnJourneyResultsPage()"
});
formatter.result({
  "duration": 419921500,
  "status": "passed"
});
formatter.after({
  "duration": 2691417100,
  "status": "passed"
});
formatter.before({
  "duration": 7515093200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 676919600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User is able to verify that a valid journey can be planned successfully using a widget.",
  "description": "",
  "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User enters \"Ealing Broadway\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"Southall Broadway\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is on Journey results page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ealing Broadway",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 1580999900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Southall Broadway",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 7704221200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 5396796900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnJourneyResultsPage()"
});
formatter.result({
  "duration": 1483302600,
  "status": "passed"
});
formatter.after({
  "duration": 2337672200,
  "status": "passed"
});
formatter.before({
  "duration": 7469331900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 663339300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User is able to verify that a valid journey can be planned successfully using a widget.",
  "description": "",
  "id": "journey-planner-functionality;user-is-able-to-verify-that-a-valid-journey-can-be-planned-successfully-using-a-widget.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User enters \"Carpenders Park Rail Station\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"Wembley Central\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is on Journey results page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Carpenders Park Rail Station",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 2082604200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wembley Central",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 7402988200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 2025897100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnJourneyResultsPage()"
});
formatter.result({
  "duration": 69248100,
  "status": "passed"
});
formatter.after({
  "duration": 1727601600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify that the widget is unable to provide results when an invalid journey is planned.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User enters invalid \"\u003cFrom\u003e\" from destination",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters invalid \"\u003cTo\u003e\" to destination",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \u0027Plan my journey\u0027 button to find the route",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User is getting an \"\u003cError Message\u003e\" error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "Error Message"
      ],
      "line": 23,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;1"
    },
    {
      "cells": [
        "..//jh",
        "784512",
        "Sorry, we can\u0027t find a journey matching your criteria"
      ],
      "line": 24,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;2"
    },
    {
      "cells": [
        "@~{¬78$£",
        "!£..,,12",
        "Journey planner could not find any results to your search. please try again"
      ],
      "line": 25,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;3"
    },
    {
      "cells": [
        "£$%$(,^",
        "ND12 Redwich",
        "Journey planner could not find any results to your search. please try again"
      ],
      "line": 26,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7770269100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 590746400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that the widget is unable to provide results when an invalid journey is planned.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User enters invalid \"..//jh\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters invalid \"784512\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \u0027Plan my journey\u0027 button to find the route",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User is getting an \"Sorry, we can\u0027t find a journey matching your criteria\" error message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "..//jh",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEntersInvalidFromDestination(String)"
});
formatter.result({
  "duration": 1688901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "784512",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEntersInvalidToDestination(String)"
});
formatter.result({
  "duration": 7942742600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButtonToFindTheRoute()"
});
formatter.result({
  "duration": 433930700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, we can\u0027t find a journey matching your criteria",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userIsGettingAnErrorMessage(String)"
});
formatter.result({
  "duration": 20042781400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@class\u003d\u0027field-validation-error\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7R57063\u0027, ip: \u0027192.168.0.43\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [34f33f6b28b60cdf4ce1dbe4602e05df, findElement {using\u003dxpath, value\u003d//li[@class\u003d\u0027field-validation-error\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\sawan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58160}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58160/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 34f33f6b28b60cdf4ce1dbe4602e05df\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.tfl.gov.pages.JourneyResultsPage.verifyUserIsGettingAnErrorMessage(JourneyResultsPage.java:35)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.userIsGettingAnErrorMessage(MyStepdefs.java:55)\r\n\tat ✽.Then User is getting an \"Sorry, we can\u0027t find a journey matching your criteria\" error message(journeyplanner.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4514498000,
  "status": "passed"
});
formatter.before({
  "duration": 8073468900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 542433000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that the widget is unable to provide results when an invalid journey is planned.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User enters invalid \"@~{¬78$£\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters invalid \"!£..,,12\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \u0027Plan my journey\u0027 button to find the route",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User is getting an \"Journey planner could not find any results to your search. please try again\" error message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@~{¬78$£",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEntersInvalidFromDestination(String)"
});
formatter.result({
  "duration": 1587639200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!£..,,12",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEntersInvalidToDestination(String)"
});
formatter.result({
  "duration": 765448100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButtonToFindTheRoute()"
});
formatter.result({
  "duration": 9228491000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Journey planner could not find any results to your search. please try again",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userIsGettingAnErrorMessage(String)"
});
formatter.result({
  "duration": 105653700,
  "error_message": "java.lang.AssertionError: Incorrect destination expected [Journey planner could not find any results to your search. please try again] but found [Sorry, we can\u0027t find a journey matching your criteria]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat uk.tfl.gov.utility.Utility.verifyActualAndExpectedText(Utility.java:51)\r\n\tat uk.tfl.gov.pages.JourneyResultsPage.verifyUserIsGettingAnErrorMessage(JourneyResultsPage.java:35)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.userIsGettingAnErrorMessage(MyStepdefs.java:55)\r\n\tat ✽.Then User is getting an \"Journey planner could not find any results to your search. please try again\" error message(journeyplanner.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3567176200,
  "status": "passed"
});
formatter.before({
  "duration": 8053793900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 486616200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify that the widget is unable to provide results when an invalid journey is planned.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-provide-results-when-an-invalid-journey-is-planned.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User enters invalid \"£$%$(,^\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters invalid \"ND12 Redwich\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \u0027Plan my journey\u0027 button to find the route",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User is getting an \"Journey planner could not find any results to your search. please try again\" error message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "£$%$(,^",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEntersInvalidFromDestination(String)"
});
formatter.result({
  "duration": 1539177900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ND12 Redwich",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userEntersInvalidToDestination(String)"
});
formatter.result({
  "duration": 7032329200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButtonToFindTheRoute()"
});
formatter.result({
  "duration": 2946319400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Journey planner could not find any results to your search. please try again",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userIsGettingAnErrorMessage(String)"
});
formatter.result({
  "duration": 20083854800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@class\u003d\u0027field-validation-error\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7R57063\u0027, ip: \u0027192.168.0.43\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [809e54d17fd11d6e191d21f0f89c19f0, findElement {using\u003dxpath, value\u003d//li[@class\u003d\u0027field-validation-error\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\sawan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62498}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62498/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 809e54d17fd11d6e191d21f0f89c19f0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat uk.tfl.gov.pages.JourneyResultsPage.verifyUserIsGettingAnErrorMessage(JourneyResultsPage.java:35)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.userIsGettingAnErrorMessage(MyStepdefs.java:55)\r\n\tat ✽.Then User is getting an \"Journey planner could not find any results to your search. please try again\" error message(journeyplanner.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3784778400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Verify that the widget is unable to plan a journey if no locations are entered into the widget.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User does not put \"\u003cFrom\u003e\" from destination",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User does not enter \"\u003cTo\u003e\" to destination",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks \u0027Plan my journey\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Error message \"\u003cerror message\u003e\" displayed below empty container",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "error message"
      ],
      "line": 35,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;1"
    },
    {
      "cells": [
        "",
        "Baker Street Underground Station",
        "field is required."
      ],
      "line": 36,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;2"
    },
    {
      "cells": [
        "Liverpool Street",
        "",
        "field is required."
      ],
      "line": 37,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;3"
    },
    {
      "cells": [
        "",
        "",
        "Field is required."
      ],
      "line": 38,
      "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9699724900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 1703899800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify that the widget is unable to plan a journey if no locations are entered into the widget.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User does not put \"\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User does not enter \"Baker Street Underground Station\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks \u0027Plan my journey\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Error message \"field is required.\" displayed below empty container",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userDoesNotPutFromDestination(String)"
});
formatter.result({
  "duration": 1711913400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baker Street Underground Station",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userDoesNotEnterToDestination(String)"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksPlanMyJourneyOption()"
});
formatter.result({
  "duration": 10795244100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "field is required.",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.errorMessageDisplayedBelowEmptyContainer(String)"
});
formatter.result({
  "duration": 128471800,
  "status": "passed"
});
formatter.after({
  "duration": 1374331700,
  "status": "passed"
});
formatter.before({
  "duration": 7397749200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 758896700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that the widget is unable to plan a journey if no locations are entered into the widget.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User does not put \"Liverpool Street\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User does not enter \"\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks \u0027Plan my journey\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Error message \"field is required.\" displayed below empty container",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liverpool Street",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userDoesNotPutFromDestination(String)"
});
formatter.result({
  "duration": 1479163400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userDoesNotEnterToDestination(String)"
});
formatter.result({
  "duration": 98400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksPlanMyJourneyOption()"
});
formatter.result({
  "duration": 351281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "field is required.",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.errorMessageDisplayedBelowEmptyContainer(String)"
});
formatter.result({
  "duration": 349907500,
  "status": "passed"
});
formatter.after({
  "duration": 1561916600,
  "status": "passed"
});
formatter.before({
  "duration": 8026073600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 744774200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify that the widget is unable to plan a journey if no locations are entered into the widget.",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-widget-is-unable-to-plan-a-journey-if-no-locations-are-entered-into-the-widget.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User does not put \"\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User does not enter \"\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks \u0027Plan my journey\u0027 option",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Error message \"Field is required.\" displayed below empty container",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userDoesNotPutFromDestination(String)"
});
formatter.result({
  "duration": 1536569400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userDoesNotEnterToDestination(String)"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksPlanMyJourneyOption()"
});
formatter.result({
  "duration": 7429283100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Field is required.",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.errorMessageDisplayedBelowEmptyContainer(String)"
});
formatter.result({
  "duration": 142614100,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat uk.tfl.gov.pages.HomePage.verifyErrorMessageBelowEmptyContainer(HomePage.java:70)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.errorMessageDisplayedBelowEmptyContainer(MyStepdefs.java:75)\r\n\tat ✽.Then Error message \"Field is required.\" displayed below empty container(journeyplanner.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4683917300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Verify that a journey can be amended by using the “Edit Journey” button",
  "description": "",
  "id": "journey-planner-functionality;verify-that-a-journey-can-be-amended-by-using-the-“edit-journey”-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "User enters \"\u003cFrom\u003e\" from destination",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enters \"\u003cTo\u003e\" to destination",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User is on Journey results page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User clicks on \u0027Edit Journey\u0027 label",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User change \"\u003cUpdated_To\u003e\" to destination",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select \u0027tomorrow\u0027 date from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User clicks on \u0027Update Journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User is on Journey results page",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "journey-planner-functionality;verify-that-a-journey-can-be-amended-by-using-the-“edit-journey”-button;",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "Updated_To"
      ],
      "line": 51,
      "id": "journey-planner-functionality;verify-that-a-journey-can-be-amended-by-using-the-“edit-journey”-button;;1"
    },
    {
      "cells": [
        "Watford Junction",
        "Edgware Underground Station",
        "Wembley Central"
      ],
      "line": 52,
      "id": "journey-planner-functionality;verify-that-a-journey-can-be-amended-by-using-the-“edit-journey”-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7839621000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 372866100,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verify that a journey can be amended by using the “Edit Journey” button",
  "description": "",
  "id": "journey-planner-functionality;verify-that-a-journey-can-be-amended-by-using-the-“edit-journey”-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "User enters \"Watford Junction\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enters \"Edgware Underground Station\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User is on Journey results page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User clicks on \u0027Edit Journey\u0027 label",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User change \"Wembley Central\" to destination",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select \u0027tomorrow\u0027 date from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User clicks on \u0027Update Journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User is on Journey results page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Watford Junction",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 662333500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edgware Underground Station",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 526212900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 5019224400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsOnJourneyResultsPage()"
});
formatter.result({
  "duration": 254100400,
  "error_message": "java.lang.AssertionError: Incorrect page expected [Journey results] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat uk.tfl.gov.utility.Utility.verifyActualAndExpectedText(Utility.java:51)\r\n\tat uk.tfl.gov.pages.JourneyResultsPage.verifyUserIsOnJourneyResultsPage(JourneyResultsPage.java:31)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.userIsOnJourneyResultsPage(MyStepdefs.java:35)\r\n\tat ✽.And User is on Journey results page(journeyplanner.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEditJourneyLabel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wembley Central",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userChangeToDestination(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userSelectTomorrowDateFromDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnUpdateJourneyButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userIsOnJourneyResultsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3148581900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Verify that the “Recents” tab on the widget displays a list of recently planned journeys",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "User enters \"\u003cFrom\u003e\" from destination",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User enters \"\u003cTo\u003e\" to destination",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User go back to Home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Recents tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User can verify widget displays a list of recently planned journeys \"\u003cFrom\u003e to \u003cTo\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 62,
      "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;1"
    },
    {
      "cells": [
        "Ealing Broadway",
        "Edgware"
      ],
      "line": 63,
      "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;2"
    },
    {
      "cells": [
        "South Wimbledon",
        "Hammersmith"
      ],
      "line": 64,
      "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;3"
    },
    {
      "cells": [
        "Carpenders Park",
        "Aldgate"
      ],
      "line": 65,
      "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8174478500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 799007000,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify that the “Recents” tab on the widget displays a list of recently planned journeys",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "User enters \"Ealing Broadway\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User enters \"Edgware\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User go back to Home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Recents tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User can verify widget displays a list of recently planned journeys \"Ealing Broadway to Edgware\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ealing Broadway",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 1580809200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edgware",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 665434600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 13651080400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userGoBackToHomePage()"
});
formatter.result({
  "duration": 24373256300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7R57063\u0027, ip: \u0027192.168.0.43\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e18a213acb78abf1de4b345042cb59d2, clickElement {id\u003d468f448b-96d5-4e16-b378-2849f5482cf5}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\sawan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57605}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57605/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (e18a213acb78abf1de4b345042cb59d2)] -\u003e xpath: (//span[@class\u003d\u0027place-name\u0027])[1]]\nSession ID: e18a213acb78abf1de4b345042cb59d2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.GeneratedMethodAccessor13.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat uk.tfl.gov.pages.JourneyResultsPage.chooseStationOne(JourneyResultsPage.java:50)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.userGoBackToHomePage(MyStepdefs.java:102)\r\n\tat ✽.And User go back to Home page(journeyplanner.feature:58)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnRecentsTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ealing Broadway to Edgware",
      "offset": 69
    }
  ],
  "location": "MyStepdefs.userCanVerifyWidgetDisplaysAListOfRecentlyPlannedJourneys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2699604200,
  "status": "passed"
});
formatter.before({
  "duration": 7717085600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 939268100,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Verify that the “Recents” tab on the widget displays a list of recently planned journeys",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "User enters \"South Wimbledon\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User enters \"Hammersmith\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User go back to Home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Recents tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User can verify widget displays a list of recently planned journeys \"South Wimbledon to Hammersmith\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "South Wimbledon",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 1622498100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hammersmith",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 7794172900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 4542465700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userGoBackToHomePage()"
});
formatter.result({
  "duration": 22625636000,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-7R57063\u0027, ip: \u0027192.168.0.43\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [25a2a6ec381e472ac925e024643a025b, clickElement {id\u003dc2fff3ec-d3b9-4548-a69b-6b336f9b9eb9}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\sawan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57815}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57815/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (25a2a6ec381e472ac925e024643a025b)] -\u003e xpath: (//span[@class\u003d\u0027place-name\u0027])[1]]\nSession ID: 25a2a6ec381e472ac925e024643a025b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.GeneratedMethodAccessor13.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat uk.tfl.gov.pages.JourneyResultsPage.chooseStationOne(JourneyResultsPage.java:50)\r\n\tat uk.tfl.gov.cucumber.steps.MyStepdefs.userGoBackToHomePage(MyStepdefs.java:102)\r\n\tat ✽.And User go back to Home page(journeyplanner.feature:58)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnRecentsTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "South Wimbledon to Hammersmith",
      "offset": 69
    }
  ],
  "location": "MyStepdefs.userCanVerifyWidgetDisplaysAListOfRecentlyPlannedJourneys(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3150612300,
  "status": "passed"
});
formatter.before({
  "duration": 7926851600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on the TFL website.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the TFL website homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheTFLWebsiteHomepage()"
});
formatter.result({
  "duration": 878328800,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify that the “Recents” tab on the widget displays a list of recently planned journeys",
  "description": "",
  "id": "journey-planner-functionality;verify-that-the-“recents”-tab-on-the-widget-displays-a-list-of-recently-planned-journeys;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "User enters \"Carpenders Park\" from destination",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User enters \"Aldgate\" to destination",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks on \u0027Plan my journey\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User go back to Home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks on Recents tab",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User can verify widget displays a list of recently planned journeys \"Carpenders Park to Aldgate\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Carpenders Park",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersFromDestination(String)"
});
formatter.result({
  "duration": 1802723100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aldgate",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersToDestination(String)"
});
formatter.result({
  "duration": 6352728100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnPlanMyJourneyButton()"
});
formatter.result({
  "duration": 3943847000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userGoBackToHomePage()"
});
formatter.result({
  "duration": 8383079400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnRecentsTab()"
});
formatter.result({
  "duration": 440799200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carpenders Park to Aldgate",
      "offset": 69
    }
  ],
  "location": "MyStepdefs.userCanVerifyWidgetDisplaysAListOfRecentlyPlannedJourneys(String)"
});
formatter.result({
  "duration": 20208921100,
  "status": "passed"
});
formatter.after({
  "duration": 1269975300,
  "status": "passed"
});
});