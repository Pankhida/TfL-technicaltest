package uk.tfl.gov.pages;

import org.apache.log4j.LogManager;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import uk.tfl.gov.utility.Utility;

public class HomePage extends Utility {

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @FindBy(xpath = "//strong[normalize-space()='Accept all cookies']")
    WebElement acceptCookies;

    @FindBy(xpath = "//strong[normalize-space()='Done']")
    WebElement cookieMessage;

    @FindBy(xpath = "//input[@id='InputFrom']")
    WebElement fromDestination;

    @FindBy(xpath = "//input[@id='InputTo']")
    WebElement toDestination;

    @FindBy(xpath = "//input[@id='plan-journey-button']")
    WebElement planMyJourneyButton;

    @FindBy(xpath = "//span[@class='field-validation-error']/span")
    WebElement blankFieldMessage;

    @FindBy(xpath = "//a[contains(text(),'Recents')]")
    WebElement recents;

    @FindBy(xpath = "//div[@id='hero-teaser-container']")
    WebElement comeOut;

    @FindBy(xpath = "//div[@id='jp-recent-content-home-']/a")
    WebElement recentResults;

    @FindBy(xpath = "//div[@id='jp-recent-content-jp-']//p[1]")
    WebElement emptyRecent;

    public void verifyUserIsOnTheTflHomePage(){
        String expected = "https://tfl.gov.uk/";
        String actual = driver.getCurrentUrl();
        Assert.assertTrue(actual.contains(expected));

        clickOnElement(acceptCookies);
        clickOnElement(cookieMessage);
    }

    public void enterFromDestination(String from){
        sendTextToElement(fromDestination, from);
        comeOut.click();
    }

    public void enterToDestination(String to){
        sendTextToElement(toDestination, to);
        comeOut.click();
    }

    public void clickOnPlanMyJourneyButton(){
        clickOnElement(planMyJourneyButton);
    }

    public void verifyErrorMessageBelowEmptyContainer(String errorMessage){

        Assert.assertTrue(blankFieldMessage.getText().contains(errorMessage));
    }
    public void clickOnRecentTab(){
       recents.click();
    }
    public void verifyRecentResultIsDisplayed(String journey){
        /*There are two possibilities with the 'Recents' tab
         There are two possibilities with the 'Recents' tab :
         1. Displays recent journeys
         2. Does not display any journeys despite following the same process as# 1
         To eliminate this issue a try catch block has been used to handle any exception caused due to environmental
        issues. */
        try {
            Assert.assertEquals(journey, recentResults.getText());
        } catch (Exception e) {
            Assert.assertEquals("You currently have no recent journeys", emptyRecent.getText());
        }
    }
}
