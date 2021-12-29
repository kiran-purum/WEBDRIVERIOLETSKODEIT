class DisableEnableElementPage {
    get webTableHeader() { return $('//legend[text()="Enabled/Disabled Example"]') }
    get disableElement() { return $('#disabled-button') }
    get disableField() { return $('#enabled-example-input') }
    get enableElement() { return $('#enabled-button') }
    get enableField() { return $('#enabled-example-input') }
    async clickOnDisableButton() {
        await this.disableElement.click();
        await this.disableElement.moveTo();
        await this.disableField.isEnabled();
    }
    async clickOnEnableButton(fieldValue: string) {
        await this.enableElement.click();
        await this.enableElement.moveTo();
        await this.enableField.setValue(fieldValue)
    }
}
export default new DisableEnableElementPage()