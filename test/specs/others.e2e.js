import userData from '../data/userData.json' with {type: "json"}
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import ProductsScreen from '../screen/products.screen.js'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'
import OrthersScreens from '../screen/others.screens.js'

describe('Webview', () => {
    it.only('Fail message', async () => {
        await MenuScreen.acessWebview()
        await OrthersScreens.webError() 
    })

    it.only('Success', async () => {
        await MenuScreen.acessWebview()
        await OrthersScreens.webSite() 
    })
})

describe('QRCode - choose one with .only', () => {
    it('No camera', async () => {
        await MenuScreen.acessQrcode()
        await OrthersScreens.qrCodeNoCamera() 
    })

    it.only('One time Camera', async () => {
        await MenuScreen.acessQrcode()
        await OrthersScreens.oneCamera() 
    })

    it('Always Camera', async () => {
        await MenuScreen.acessQrcode()
        await OrthersScreens.qralways() 
    })
})

describe('Geo Location - choose one with .only', () => {
    it('No camera', async () => {
        await MenuScreen.accessGeoLocation()
        await OrthersScreens.geoDont() 
    })

    it.only('One time Camera', async () => {
        await MenuScreen.accessGeoLocation()
        await OrthersScreens.geoOne()
        await MenuScreen.accessCatalog()
        await MenuScreen.accessGeoLocation()
    })

    it('Always Camera', async () => {
        await MenuScreen.accessGeoLocation()
        await OrthersScreens.geoAlways()
        await MenuScreen.accessCatalog()
        await MenuScreen.accessGeoLocation()
    })
})

describe('Drawing Screen', () => {
    it.only('Draw Page', async () => {
        await MenuScreen.accessDrawing()
        await OrthersScreens.draw()
    })
})

describe('About Screen', () => {
    it.only('About Page', async () => {
        await MenuScreen.accessAbout()
        await OrthersScreens.aboutPage()
    })
})

describe('FingerPrint Screen', () => {
    it.only('About FingerPrint', async () => {
        await MenuScreen.accessFingerPrint()
        await OrthersScreens.fingerMessage()
    })
})

describe('SauceBot Screen', () => {
    it.only('Play Video SauceBot', async () => {
        await MenuScreen.accesSauceBot()
        await OrthersScreens.sauceBotVideo()
        await MenuScreen.accessCatalog() 
    })
})