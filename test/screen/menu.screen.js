class MenuScreen{
    constructor(){
        this.leftMenuButton = "~open menu",
        this.loginButton = "//*[@text='Log In']",
        this.logOutButton = "//*[@text='Log Out']",
        this.confirmLogOut = "//*[@text='LOG OUT']",
        this.confirmButton = "//*[@text='OK']",
        this.catalogButton = "//*[@text='Catalog']",
        this.cartButton = '~cart badge',
        this.web = "//*[@text='Webview']"
        this.qrCode = "//*[@text='QR Code Scanner']",
        this.geoButton = "//*[@text='Geo Location']",
        this.drawing = "//*[@text='Drawing']",
        this.about = "//*[@text='About']",
        this.finger = "//*[@text='FingerPrint']",
        this.sauceBot = "//*[@text='Sauce Bot Video']"
    }

    async accessLoginScreen(){
        await $(this.leftMenuButton).click()
        await $(this.loginButton).click()
    }

    async accessLoginScreenOnLogOut(){
        await $(this.leftMenuButton).click()
        await $(this.logOutButton).click()
        await $(this.confirmLogOut).click()
        await $(this.confirmButton).click()
    }

    async accessCatalog(){
        await $(this.leftMenuButton).click()
        await $(this.catalogButton).click()
    }

    async acessCartScreen(){
        await $(this.cartButton).click()
    }

    async acessWebview(){
        await $(this.leftMenuButton).click()
        await $(this.web).click()
    }

    async acessQrcode(){
        await $(this.leftMenuButton).click()
        await $(this.qrCode).click()
    }

    async accessGeoLocation(){
        await $(this.leftMenuButton).click()
        await $(this.geoButton).click()
    }

    async accessDrawing(){
        await $(this.leftMenuButton).click()
        await $(this.drawing).click()
    }

    async accessAbout(){
        await $(this.leftMenuButton).click()
        await $(this.about).click()
    }

    async accessFingerPrint(){
        await $(this.leftMenuButton).click()
        await $(this.finger).click()
    }

    async accesSauceBot(){
        await $(this.leftMenuButton).click()
        await $(this.sauceBot).click()
    }
}
export default new MenuScreen()