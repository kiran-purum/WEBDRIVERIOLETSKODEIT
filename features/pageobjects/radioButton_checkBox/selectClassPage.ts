class SelectClassPage {
    get selectClassPageHeader() { return $('//legend[text()="Select Class Example"]') }
    get dropDownList() { return $('#carselect') }
    async clickOnDropDown(carselect: string) {
        await this.dropDownList.selectByVisibleText(carselect);
    }
}
export default new SelectClassPage()