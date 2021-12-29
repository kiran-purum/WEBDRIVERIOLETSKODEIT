class OpenNewTabPage {
    get newTabExampleHeader() { return $('//legend[text()="Switch Tab Example"]') }
    get newTabButton() { return $('#opentab') }
    async clickOnOpenNewTabButton() {
        await this.newTabButton.click();
    }
}
export default new OpenNewTabPage()