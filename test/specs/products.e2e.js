/*import userData from '../data/userData.json' with {type: "json"}
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import ProductsScreen from '../screen/products.screen.js'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'

describe('My Purchase application', () => {
    it('add products to cart and purchase validly whitout Login', async () => {
        await ProductsScreen.addingBackpackToCart()
        await MenuScreen.accessCatalog()
        await ProductsScreen.addingJacketToCart()
        await MenuScreen.accessCatalog()
        await ProductsScreen.addingTShirtAndClickCart()
        await ProductsScreen.cartBadge()
        await LoginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await LoginScreen.Checkout()
    })

    it('add products to cart and purchase validly with Login', async () => {
        await $('android=new UiSelector().className("android.widget.LinearLayout").instance(0)').click()
        await MenuScreen.accessCatalog()
        await MenuScreen.accessLoginScreenOnLogOut()
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)
        await ProductsScreen.addingBikeLight()
        await MenuScreen.accessCatalog()
        await ProductsScreen.addingBolt()
        await MenuScreen.accessCatalog()
        await ProductsScreen.addingOnesie()
        await MenuScreen.accessCatalog()
        await MenuScreen.acessCartScreen()
        await ProductsScreen.otherCartBadge()
        await LoginScreen.Checkout()
    })

})

describe('Testing', () => {

    it('Checking the empty cart', async () => {
        await $('android=new UiSelector().className("android.widget.LinearLayout").instance(0)').click()
        await ProductsScreen.emptyCart()
    })

    it('Checking the scroll', async () => {
        await ProductsScreen.scroll()
    })

    it('checking the order of products in descending order by name', async () => {
        await ProductsScreen.descendingOrder()
    })

    it('checking the order of products in ascending order by price', async () => {
        await ProductsScreen.ascendingPrice()
    })

    it('checking the order of products in descending order by price', async () => {
        await ProductsScreen.descendingPrice()
    })

    it('checking reviews outside the product', async () => {
        await ProductsScreen.scroll()
        await ProductsScreen.ascendingName()
        await ProductsScreen.avaliation1()
    })

    it('checking the reviews within the product', async () => {
        await ProductsScreen.avaliation2()
    })

    it('checking reviews outside the product in descending order by name', async () => {
        await ProductsScreen.scroll()
        await ProductsScreen.descendingOrder()
        await ProductsScreen.avaliation1()
    })

    it('checking reviews outside the product in ascending order by price', async () => {
        await ProductsScreen.scroll()
        await ProductsScreen.ascendingPrice()
        await ProductsScreen.avaliation1()
    })

    it('checking reviews outside the product in descending order by price', async () => {
        await ProductsScreen.scroll()
        await ProductsScreen.descendingPrice()
        await ProductsScreen.avaliation1()
    })

})*/