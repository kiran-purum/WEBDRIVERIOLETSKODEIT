class OpenNewWindowPage{
    get windowExampleHeader() { return $('//legend[text()="Switch Window Example"]')}
    get newWindowButton() { return $('#openwindow')}
    async clickOnNewWindowButton(){
        await this.newWindowButton.click();
    }
}
export default new OpenNewWindowPage()