class AlertConfirmButtonPage {
    get alertExampleheader() { return $('//legend[text()="Switch To Alert Example"]') }
    get name() { return $('//input[@placeholder="Enter Your Name"]') }
    get alertButton() { return $('#alertbtn') }
    get confirmButton() { return $('#confirmbtn') }
    async enterYourName(name: string) {
        await this.name.setValue(name);
    }
    async clickOnAlertButton() {
        await this.alertButton.click();
        await browser.acceptAlert();
    }
    async clickOnConfirmButton() {
        await this.confirmButton.click();
        await browser.dismissAlert();
    }
}
export default new AlertConfirmButtonPage()