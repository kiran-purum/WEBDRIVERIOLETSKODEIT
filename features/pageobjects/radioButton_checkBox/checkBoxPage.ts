class CheckBoxPage {
    get checkBoxheader() { return $('//legend[text()="Checkbox Example"]') }
    get checkBox() { return $('#benzcheck') }
    get checkBoxText() { return $('//div[@class="right-align"]//label[@for="benz"]') }
    async clickOnCheckBox() {
        await this.checkBox.click();
    }
}
export default new CheckBoxPage()