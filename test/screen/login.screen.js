import Chance from 'chance';
const chance = new Chance();

class LoginScreen{
    constructor(){
        this.userNameInput = "~Username input field",
        this.passwordInput = "~Password input field",
        this.loginButton = "~Login button",
        this.errorMessageLoginFull = 'android=new UiSelector().text("Provided credentials do not match any user in this service.")',
        this.fullName = "~Full Name* input field",
        this.adress1 = "~Address Line 1* input field",
        this.adress2 = "~Address Line 2 input field",
        this.city = "~City* input field",
        this.state = "~State/Region input field",
        this.zipCode = "~Zip Code* input field",
        this.country = "~Country* input field",
        this.confirmCheckout = "~To Payment button",
        this.cardNumber = "~Card Number* input field",
        this.expirationDate = "~Expiration Date* input field",
        this.securityCode = "~Security Code* input field",
        this.confirmCard = "~Review Order button",
        this.placeOrder = "~Place Order button",
        this.contiShopping = "~Continue Shopping button",
        this.nameError = "//*[@text='Username is required']",
        this.passwordError = "//*[@text='Password is required']",
        this.fullnameError = "~Please provide your full name.",
        this.errorAddress = "~Please provide your address.",
        this.cityError = "~Please provide your city.",
        this.zipError = "~Please provide your zip code.",
        this.countryError = "~Please provide your country.",
        this.fullNameCardError = "~Full Name*-error-message",
        this.cardNumberError = "~Card Number*-error-message",
        this.dateError = "~Expiration Date*-error-message",
        this.codeError = "~Security Code*-error-message"
    }

    async fillLoginForm(username, password){
        await $(this.userNameInput).setValue(username)
        await $(this.passwordInput).setValue(password)
        await $(this.loginButton).click()
    }

    async Checkout(){
        await $(this.fullName).setValue(chance.name({ middle: true }))
        await $(this.adress1).setValue(chance.address())
        await $(this.adress2).setValue('Rua 6')
        await $(this.city).setValue(chance.city())
        await $(this.state).setValue(chance.state({ full: true }))
        await $(this.zipCode).setValue(chance.zip())
        await $(this.country).setValue(chance.country({ full: true }))
        await $(this.confirmCheckout).click()
        await $(this.fullName).setValue(chance.name({ middle: true }))
        await $(this.cardNumber).setValue(chance.cc())
        await $(this.expirationDate).setValue('02/30')
        await $(this.securityCode).setValue('369')
        await $(this.confirmCard).click()
        await $(this.placeOrder).click()
        await $(this.contiShopping).click()
    }

    //Fail

    async errorLoginNamePassword(){
        await $(this.loginButton).click()
        await $(this.nameError)
        await $(this.passwordError)
    }

    async errorLoginFull(username, password){
        await $(this.userNameInput).setValue(username)
        await $(this.passwordInput).setValue(password)
        await $(this.errorMessageLoginFull)
    }

    async errorCheckout(){
        await $(this.confirmCheckout).click()
        await $(this.fullnameError)
        await $(this.errorAddress)
        await $(this.cityError)
        await $(this.zipError)
        await $(this.countryError)
        await $(this.fullName).setValue(chance.name({ middle: true }))
        await $(this.adress1).setValue(chance.address())
        await $(this.adress2).setValue('Rua 6')
        await $(this.city).setValue(chance.city())
        await $(this.state).setValue(chance.state({ full: true }))
        await $(this.zipCode).setValue(chance.zip())
        await $(this.country).setValue(chance.country({ full: true }))
        await $(this.confirmCheckout).click()
        await $(this.confirmCard).click()
        await $(this.fullNameCardError)
        await $(this.cardNumberError)
        await $(this.dateError)
        await $(this.codeError)
    }
    
}
export default new LoginScreen()