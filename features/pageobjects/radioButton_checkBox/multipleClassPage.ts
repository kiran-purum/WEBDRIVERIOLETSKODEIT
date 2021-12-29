class MultipleClassPage {
    get multipleClassPageHeader() { return $('//legend[text()="Multiple Select Example"]') }
    get multipleClassOption() { return $('//select[@id="multiple-select-example"]') }
    async clickOnMultipleClass(multipleSelect: string) {
        await this.multipleClassOption.selectByVisibleText(multipleSelect);
    }
}
export default new MultipleClassPage()