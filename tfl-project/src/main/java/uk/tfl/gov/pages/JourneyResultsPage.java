package uk.tfl.gov.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.tfl.gov.utility.Utility;

public class JourneyResultsPage extends Utility {

    public JourneyResultsPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//span[@class='jp-results-headline']")
    WebElement journeyResults;

    @FindBy(xpath = "//li[@class='field-validation-error']")
    WebElement errorMessage;

    @FindBy(xpath = "//span[normalize-space()='Edit journey']")
    WebElement editJourneyLabel;

    @FindBy(xpath = "//ol[@class='breadcrumbs clearfix']//a[normalize-space()='Plan a journey']")
    WebElement homeTab;

    @FindBy(xpath = "(//span[@class='place-name'])[1]")
    WebElement journeyOne;

    public void verifyUserIsOnJourneyResultsPage(){
      verifyActualAndExpectedText(journeyResults.getText(), "Journey results", "Incorrect page" );
          }

          public void verifyUserIsGettingAnErrorMessage(String error){
        verifyActualAndExpectedText(errorMessage.getText(), error, "Incorrect destination");
          }

    public void clickOnEditJourneyLabel(){

        clickOnElement(editJourneyLabel);
    }

    public void clickOnHomeTab() {

        homeTab.click();

    }
    public void chooseStationOne() {

        journeyOne.click();
    }

          }

