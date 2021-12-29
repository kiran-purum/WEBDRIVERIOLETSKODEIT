import { Given, Then, When } from "@wdio/cucumber-framework";
import radioButtonsPage from "../pageobjects/radioButton_checkBox/radioButtonsPage";
import landingPage from "../pageobjects/landingPage";
import selectClassPage from "../pageobjects/radioButton_checkBox/selectClassPage";
import multipleClassPage from "../pageobjects/radioButton_checkBox/multipleClassPage";
import letskode from "../testData/letsKodeIt.json"
import checkBoxPage from "../pageobjects/radioButton_checkBox/checkBoxPage";
import openNewWindowPage from "../pageobjects/windows_TabsExamplePage.ts/openNewWindowPage";
import openNewTabPage from "../pageobjects/windows_TabsExamplePage.ts/openNewTabPage";
import alert_confirmButtonPage from "../pageobjects/windows_TabsExamplePage.ts/alert_confirmButtonPage";
import webTablePage from "../pageobjects/webTable_ElementDisplayPage/webTablePage";
import disable_EnableElelmentPage from "../pageobjects/webTable_ElementDisplayPage/disable_EnableElelmentPage";
import elementDisplayedPage from "../pageobjects/webTable_ElementDisplayPage/elementDisplayedPage";
import iFramePage from "../pageobjects/iFramePage";
import mouseHoverPage from "../pageobjects/mouseHoverPage";
import signInPage from "../pageobjects/signIn_register/signInPage";
import signUpPage from "../pageobjects/signIn_register/signUpPage";
import randomData from "faker";
import myCoursesPage from "../pageobjects/signIn_register/myCoursesPage";

Given(/^Landing page of LetsKodeIT Page$/, async () => {
    await landingPage.landingPage();
});

Then(/^Validating the Header in Landing Page \"([^\"]*)\"$/, async (practicepage) => {
    await expect(landingPage.landingPageHeader).toHaveText(practicepage);
});

Then(/^Validating the \"([^\"]*)\" menu header$/, async (radiobuttonexample) => {
    await expect(radioButtonsPage.radioButtonHeader).toHaveText(radiobuttonexample);
});

When(/^Click on the BMW radio button$/, async () => {
    await radioButtonsPage.clickOnRadioButton();
});

Then(/^validate the clicking radio button text \"([^\"]*)\"$/, async (bmw) => {
    await expect(radioButtonsPage.radioButtonText).toHaveText(bmw);
});

Then(/^validating the \"([^\"]*)\" menu header$/, async (selectclassexample) => {
    await expect(selectClassPage.selectClassPageHeader).toHaveText(selectclassexample);
});

When(/^click on select box and selecting the text$/, async () => {
    await selectClassPage.clickOnDropDown(letskode.carselect);
});

Then(/^Validating the menu header \"([^\"]*)\"$/, async (multipleselectexample) => {
    await expect(multipleClassPage.multipleClassPageHeader).toHaveText(multipleselectexample);
});

When(/^selecting the multiple option class$/, async () => {
    await multipleClassPage.clickOnMultipleClass(letskode.multipleSelect);
});

Then(/^Validating menu header \"([^\"]*)\"$/, async (checkboxexample) => {
    await expect(checkBoxPage.checkBoxheader).toHaveText(checkboxexample);
});

When(/^clicking on the checkBox$/, async () => {
    await checkBoxPage.clickOnCheckBox();
});

Then(/^Validating the text of checkBox field \"([^\"]*)\"$/, async (benz) => {
    await expect(checkBoxPage.checkBoxText).toHaveText(benz);
});

Then(/^validate the Header \"([^\"]*)\"$/, async (switchwindowexample) => {
    await expect(openNewWindowPage.windowExampleHeader).toHaveText(switchwindowexample);
});

When(/^Click on Open Window button$/, async () => {
    await openNewWindowPage.clickOnNewWindowButton();
    const id = await browser.getWindowHandles();
    await browser.switchToWindow(id[1]);
    await browser.closeWindow();
    await browser.switchToWindow(id[0]);
});

Then(/^validate the menu header as \"([^\"]*)\"$/, async (switchtabexample) => {
    await expect(openNewTabPage.newTabExampleHeader).toHaveText(switchtabexample);
});

When(/^I click on the open tab button$/, async () => {
    await openNewTabPage.clickOnOpenNewTabButton();
    const id = await browser.getWindowHandles();
    await browser.switchToWindow(id[1]);
    await browser.closeWindow();
    await browser.switchToWindow(id[0]);
});

Then(/^validate the header of the example \"([^\"]*)\"$/, async (switchtoalertexample) => {
    await expect(alert_confirmButtonPage.alertExampleheader).toHaveText(switchtoalertexample);
});

When(/^I enter the name in name field$/, async () => {
    await alert_confirmButtonPage.enterYourName(letskode.name);
});

When(/^I click on Alert Button$/, async () => {
    await alert_confirmButtonPage.clickOnAlertButton();
});

When(/^I click on Confirm button$/, async () => {
    await alert_confirmButtonPage.clickOnConfirmButton();
});

Then(/^Validate the header text \"([^\"]*)\"$/, async (webtableexample) => {
    await expect(webTablePage.webTableExampleHeader).toHaveText(webtableexample);
});

Then(/^I should validate the course \"([^\"]*)\"$/, async (seleniumwebdriver) => {
    await expect(webTablePage.courseName).toHaveText(seleniumwebdriver)
});

Then(/^Validate the example Header as \"([^\"]*)\"$/, async (enableddisabled) => {
    await expect(disable_EnableElelmentPage.webTableHeader).toHaveText(enableddisabled)
});

When(/^I Click on Disable button and check text is clickable or not$/, async () => {
    await disable_EnableElelmentPage.clickOnDisableButton();
});

When(/^I click On the enable button and enter the data$/, async () => {
    await disable_EnableElelmentPage.clickOnEnableButton(letskode.fieldValue);
});

Then(/^Vliadating menu header text as \"([^\"]*)\"$/, async (elementdisplayed) => {
    await expect(elementDisplayedPage.elementDisplayedHeader).toHaveText(elementdisplayed);
});

When(/^I click on the hide button$/, async () => {
    await elementDisplayedPage.clickOnHideButton();
});

When(/^I click on show button and enter the data$/, async () => {
    await elementDisplayedPage.clickOnShowButton(letskode.textBoxValue);
});

Then(/^I validate the \"([^\"]*)\" menu header$/, async (mousehoverexample) => {
    await expect(mouseHoverPage.mouseHoverHeaderText).toHaveText(mousehoverexample);
});

When(/^I hover the mouse and selcting the option$/, async () => {
    await mouseHoverPage.clickOnMouseHoverButton();
});

Then(/^validate The Header text of the \"([^\"]*)\"$/, async (iframeexample) => {
    await expect(iFramePage.iFrameHeader).toHaveText(iframeexample);
});

When(/^I click on SignIn button$/, async () => {
    await signInPage.clickOnSignInButton();
});

Then(/^I should Validate the text \"([^\"]*)\"$/, async (login) => {
    await expect(signInPage.loginHeaderText).toHaveText(login);
});

When(/^I click signUp Button$/, async () => {
    await signInPage.clickOnSignUp();
});

Then(/^I should validate the Header Text as \"([^\"]*)\"$/, async (signup) => {
    await expect(signUpPage.signupHeader).toHaveText(signup);
});

When(/^I fill the data in all fields$/, async () => {
    await signUpPage.signUpData(letskode.personalInfo);
    await signUpPage.randomEmail(randomData.internet.email());
    const paswd = randomData.internet.password(8);
    await signUpPage.randomPassword(paswd);
    await signUpPage.confirmationPassword(paswd);
});

When(/^I click on the signUp Button to register$/, async () => {
    await signUpPage.clickOnSignUpButton();
});

Then(/^I should see the Text as \"([^\"]*)\"$/, async (mycourses) => {
    await expect(myCoursesPage.myCoursesHeader).toHaveText(mycourses);
});

Then(/^I can Validate message \"([^\"]*)\"$/, async (youhavenotenrolled) => {
    await expect(myCoursesPage.coursesDetailsMessage).toHaveText(youhavenotenrolled);
});