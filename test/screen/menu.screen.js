class MenuScreen{
    constructor(){
        this.leftMenuButton = "~open menu",
        this.loginButton = "//*[@text='Log In']"//usa quando o elemento tiver sido pego no text
    }

    async accessLoginScreen(){
        await $(this.leftMenuButton).click()
        await $(this.loginButton).click()
    }
}
export default new MenuScreen()