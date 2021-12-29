class WebTablePage {
    get webTableExampleHeader() { return $('//legend[text()="Web Table Example"]') }
    get courseName() { return $('//td[text()="Selenium WebDriver With Java"]') }
}
export default new WebTablePage()