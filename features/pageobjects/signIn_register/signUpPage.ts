class SignUpPage {
    get signupHeader() { return $('//h4[text()="  Sign Up  "]') }
    get firstName() { return $('//input[@placeholder="First Name"]') }
    get lastName() { return $('//input[@placeholder="Last Name"]') }
    get emailAddress() { return $('//input[@placeholder="Email Address"]') }
    get password() { return $('//input[@placeholder="Password"]') }
    get confirmPassword() { return $('#password_confirmation') }
    get signUpButton() { return $('.btn.btn-default.btn-block.btn-md.dynamic-button') }
    async signUpData(personalInfo: { fName: string, lName: string }) {
        await this.firstName.setValue(personalInfo.fName);
        await this.lastName.setValue(personalInfo.lName);
    }
    async randomEmail(email: string) {
        await this.emailAddress.setValue(email)
    }
    async randomPassword(passw: string) {
        await this.password.setValue(passw);
    }
    async confirmationPassword(confirmPassw: string) {
        await this.confirmPassword.setValue(confirmPassw);
    }
    async clickOnSignUpButton() {
        await this.signUpButton.click();
    }
}
export default new SignUpPage()