class SignInPage {
    get signInButton() { return $('//div[@data-container="true"]/div/a') }
    get loginHeaderText() { return $('//h4') }
    get signUp() { return $('//a[text()=" Sign Up"]') }
    async clickOnSignInButton() {
        await this.signInButton.click();
    }
    async clickOnSignUp() {
        await this.signUp.click();
    }
}
export default new SignInPage()