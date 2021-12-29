class ShowHideElementPage {
    get elementDisplayedHeader() { return $('//legend[text()="Element Displayed Example"]') }
    get hideButton() { return $('#hide-textbox') }
    get showButton() { return $('#show-textbox') }
    get textField() { return $('#displayed-text') }
    async clickOnHideButton() {
        await this.hideButton.click();
    }
    async clickOnShowButton(textBoxValue: string) {
        await this.showButton.click();
        await this.showButton.moveTo();
        await this.textField.setValue(textBoxValue)
    }
}
export default new ShowHideElementPage()