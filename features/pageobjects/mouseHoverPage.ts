class MouseHoverPage {
    get mouseHoverHeaderText() { return $('//legend[text()="Mouse Hover Example"]') }
    get mouseHover() { return $('#mousehover') }
    get selectingTopOption() { return $('//a[@href="#top"]') }
    async clickOnMouseHoverButton() {
        await this.mouseHover.scrollIntoView();
        await this.mouseHover.moveTo();
        await this.selectingTopOption.click();
    }
}
export default new MouseHoverPage() 