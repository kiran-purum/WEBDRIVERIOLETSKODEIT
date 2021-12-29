class HomePage {
    get landingPageHeader() { return $('//h1[@data-uniqid="1621702280245"]') }

    async landingPage() {
        await browser.url('https://courses.letskodeit.com/practice');
        await browser.maximizeWindow();
    }
}
export default new HomePage()