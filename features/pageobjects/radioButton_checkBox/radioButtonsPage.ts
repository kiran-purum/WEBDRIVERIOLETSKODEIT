class RadioButton {
    get radioButtonHeader() { return $('//legend[text()="Radio Button Example"]') }
    get radioButton() { return $('#bmwradio') }
    get radioButtonText() { return $('//div[@class="left-align"]//label[@for="bmw"]') }
    async clickOnRadioButton() {
        await this.radioButton.click();
    }
}
export default new RadioButton()