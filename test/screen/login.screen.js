class LoginScreen{
    constructor(){
        this.userNameInput = "~Username input field",
        this.passwordInput = "~Password input field",
        this.loginButton = "~Login button",
        this.errorMessage = 'android=new UiSelector().text("Provided credentials do not match any user in this service.")'
    }

    async fillLoginForm(username, password){
        await $(this.userNameInput).setValue(username)
        await $(this.passwordInput).setValue(password)
        await $(this.loginButton).click()
    }
}
export default new LoginScreen()