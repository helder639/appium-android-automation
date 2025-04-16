import { remote } from 'webdriverio'

class OrthersScreens{
    constructor(){
        this.webTitle = 'android=new UiSelector().text("Webview")',
        this.webMessageError = 'android=new UiSelector().text("Please provide a correct https url.")',
        this.goToSiteButton = '~Go To Site button',
        this.urlInput = '~URL input field',
        this.site = 'android=new UiSelector().className("android.webkit.WebView")'
        this.nocamera = 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")',
        this.onetime = 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_one_time_button")',
        this.always = 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")',
        this.qrMessage = 'android=new UiSelector().text("Camera not authorized")',
        this.scanner = 'android=new UiSelector().className("android.view.ViewGroup").instance(29)',
        this.latitude0 = '~latitude data',
        this.longitude0 = '~longitude data',
        this.obeservationButton = '~Start Observing button',
        this.latihere = 'android=new UiSelector().text("37.4219983")',
        this.longhere = 'android=new UiSelector().text("-122.084")',
        this.stopObs = '~Stop Observing button',
        this.tela = 'android=new UiSelector().className("android.webkit.WebView")',
        this.clearDraw = '~Clear button',
        this.saveDraw = '~Save button',
        this.drawAllow = 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")',
        this.drawDontAllow = 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_deny_button")',
        this.okButton = 'android=new UiSelector().resourceId("android:id/button1")',
        this.aboutImage = 'android=new UiSelector().className("android.view.ViewGroup").instance(24)',
        this.fingerMessage1 = 'android=new UiSelector().text("Allow login with FingerPrint")',
        this.fingerMessage2 = 'android=new UiSelector().text("If your devices supports FingerPrint you can enable it here. This will help you to easily log in.")',
        this.fingerMessage3 = 'android=new UiSelector().text("Normally this screen would be behind a secure login, but for demo purposes this screen has been put in the menu by default.")',
        this.video = 'android=new UiSelector().className("android.view.View").instance(10)',
        this.pauseButton = '~video icon stop',
        this.playButton = '~video icon play',
        this.backButton = '~video icon backward',
        this.avanceButton = '~video icon forward',
        this.muteButton = '~video icon volume-up',
        this.desmuteButton = '~video icon volume-mute',
        this.tela = '~SauceBot screen'
    }

    async webError(){
        await $(this.webTitle)
        await $(this.goToSiteButton).click()
        await $(this.webMessageError)
    }

    async webSite(){
        await $(this.webTitle)
        await $(this.urlInput).setValue('https://www.github.com')
        await $(this.goToSiteButton).click()
        await $(this.site)
    }

    async qrCodeNoCamera(){
        await $(this.nocamera).click()
        await $(this.qrMessage)
    }

    async oneCamera(){
        await $(this.onetime).click()
        await $(this.scanner)
    }

    async qralways(){
        await $(this.always).click()
        await $(this.scanner)
    }

    async geoDont(){
        await $(this.nocamera).click()
        await $(this.latitude0)
        await $(this.longitude0)
        await $(this.obeservationButton).click()
        await $(this.latitude0)
        await $(this.longitude0)
    }

    async geoOne(){
        await $(this.onetime).click()
        await $(this.latihere)
        await $(this.longhere)
        await $(this.stopObs).click()
        await $(this.latihere)
        await $(this.longhere)
        await $(this.obeservationButton).click()
    }

    async geoAlways(){
        await $(this.always).click()
        await $(this.latihere)
        await $(this.longhere)
        await $(this.stopObs).click()
        await $(this.latihere)
        await $(this.longhere)
        await $(this.obeservationButton).click()
    }

    async draw(){
            await $(this.tela)
            /*const driver = await remote({
                hostname: 'localhost',
                port: 4724,
                capabilities: {
                    platformName: 'Android',
                    "appium:deviceName": 'Pixel 8 API 34',
                    "appium:app": 'C:\\QA\\mobile\\appium-android-automation\\app\\Android-MyDemoAppRN.1.3.0.build-244.apk',
                    "appium:automationName": 'UIAutomator2'
                }
            })
            const startX = 300
            const startY = 500
            const endX = 600
            const endY = 800
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: {pointerType: 'touch'},
                    actions: [
                        {type: 'pointerMove', duration: 0, x:300, y:500},
                        {type: 'pointerDown'},
                        {type: 'pointerMove', duration: 500, x:600, y:800},
                        {type: 'pointerUp'}
                    ]
                }
            ])
            await $(this.saveDraw).click()
            await $(this.drawAllow).click()
            await $(this.okButton).click()
            await driver.deleteSession()*/
        }

    async aboutPage(){
        await $(this.aboutImage)
    }

    async fingerMessage(){
        await $(this.okButton).click()
        await $(this.fingerMessage1)
        await $(this.fingerMessage2)
        await $(this.fingerMessage3)
    }

    async sauceBotVideo(){
        await $(this.video)
        await $(this.pauseButton).click()
        await $(this.muteButton).click()
        await $(this.avanceButton).click()
        await $(this.avanceButton).click()
        await $(this.playButton).click()
        await $(this.backButton).click()
        await $(this.desmuteButton).click()
        await $(this.pauseButton).click()
    }

}
export default new OrthersScreens