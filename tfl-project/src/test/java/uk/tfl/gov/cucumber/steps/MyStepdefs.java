package uk.tfl.gov.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.tfl.gov.pages.HomePage;
import uk.tfl.gov.pages.JourneyResultsPage;
import uk.tfl.gov.pages.UpdateJourneyPage;

public class MyStepdefs {
    @Given("^User is on the TFL website homepage$")
    public void userIsOnTheTFLWebsiteHomepage() {
        new HomePage().verifyUserIsOnTheTflHomePage();
    }

    @When("^User enters \"([^\"]*)\" from destination$")
    public void userEntersFromDestination(String from)  {
    new HomePage().enterFromDestination(from);
    }

    @And("^User enters \"([^\"]*)\" to destination$")
    public void userEntersToDestination(String to)  {
        new HomePage().enterToDestination(to);
    }

    @And("^User clicks on 'Plan my journey' button$")
    public void userClicksOnPlanMyJourneyButton() {
        new HomePage().clickOnPlanMyJourneyButton();
    }

    @Then("^User is on Journey results page$")
    public void userIsOnJourneyResultsPage() {
        new JourneyResultsPage().verifyUserIsOnJourneyResultsPage();
    }

    @When("^User enters invalid \"([^\"]*)\" from destination$")
    public void userEntersInvalidFromDestination(String from1) {
        new HomePage().enterFromDestination(from1);
    }

    @And("^User enters invalid \"([^\"]*)\" to destination$")
    public void userEntersInvalidToDestination(String to1) {
        new HomePage().enterToDestination(to1);
    }

    @And("^User clicks on 'Plan my journey' button to find the route$")
    public void userClicksOnPlanMyJourneyButtonToFindTheRoute() {
        new HomePage().clickOnPlanMyJourneyButton();
    }

    @Then("^User is getting an \"([^\"]*)\" error message$")
    public void userIsGettingAnErrorMessage(String error) {
        new JourneyResultsPage().verifyUserIsGettingAnErrorMessage(error);
    }


    @When("^User does not put \"([^\"]*)\" from destination$")
    public void userDoesNotPutFromDestination(String noFrom) {
        new HomePage().enterFromDestination(noFrom);
    }

    @And("^User does not enter \"([^\"]*)\" to destination$")
    public void userDoesNotEnterToDestination(String noTo) {
    }

    @And("^User clicks 'Plan my journey' option$")
    public void userClicksPlanMyJourneyOption() {
        new HomePage().clickOnPlanMyJourneyButton();
    }

    @Then("^Error message \"([^\"]*)\" displayed below empty container$")
    public void errorMessageDisplayedBelowEmptyContainer(String errormessage)  {
        new HomePage().verifyErrorMessageBelowEmptyContainer(errormessage);
    }
//4
    @And("^User clicks on 'Edit Journey' label$")
    public void userClicksOnEditJourneyLabel() {
        new JourneyResultsPage().clickOnEditJourneyLabel();
    }

    @And("^User change \"([^\"]*)\" to destination$")
    public void userChangeToDestination(String updatedToDestination) {
        new UpdateJourneyPage().enterUpdatedToDestination(updatedToDestination);
    }

    @And("^User select 'tomorrow' date from dropdown$")
    public void userSelectTomorrowDateFromDropdown() {
        new UpdateJourneyPage().selectDateFromDropDown("Tomorrow");
    }

    @And("^User clicks on 'Update Journey' button$")
    public void userClicksOnUpdateJourneyButton() {
       new UpdateJourneyPage().clickOnUpdateJourneyButton();
    }

//5
    @And("^User go back to Home page$")
    public void userGoBackToHomePage() {
        new JourneyResultsPage().chooseStationOne();
        new JourneyResultsPage().chooseStationOne();
        new JourneyResultsPage().clickOnHomeTab();
    }

    @And("^User clicks on Recents tab$")
    public void userClicksOnRecentsTab() {
        new HomePage().clickOnRecentTab();
    }

    @Then("^User can verify widget displays a list of recently planned journeys \"([^\"]*)\"$")
    public void userCanVerifyWidgetDisplaysAListOfRecentlyPlannedJourneys(String journey)  {
        new HomePage().verifyRecentResultIsDisplayed(journey);
    }
}
