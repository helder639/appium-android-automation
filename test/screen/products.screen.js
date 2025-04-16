import MenuScreen from '../screen/menu.screen.js'

class ProductsScreen{
    constructor(){
        this.selectBackpack = 'android=new UiSelector().className("android.widget.ImageView").instance(4)',
        this.color = 'android=new UiSelector().className("android.view.ViewGroup").instance(34)',
        this.addButton = 'android=new UiSelector().className("android.widget.ImageView").instance(5)',
        this.removeButton = 'android=new UiSelector().className("android.widget.ImageView").instance(4)',
        this.addProduct ='~Add To Cart button',
        this.confirm3ProductInCart = 'android=new UiSelector().text("3").instance(0)',
        this.selectJacket = 'android=new UiSelector().className("android.widget.ImageView").instance(7)',
        this.confirm4ProductInCart='android=new UiSelector().text("4")',
        this.confirm5ProductInCart='android=new UiSelector().text("5")',
        this.selectTShirt = 'android=new UiSelector().className("android.widget.ImageView").instance(9)',
        this.confirm6ProductInCart = 'android=new UiSelector().text("6")',
        this.cartButton = '~cart badge',
        this.removeButton2Cart ='android=new UiSelector().className("android.widget.ImageView").instance(7)',
        this.removeFirstItem = 'android=new UiSelector().text("Remove Item").instance(0)',
        this.confirm2ProductInCart='android=new UiSelector().text("2")',
        this.addIn2ItemCart = 'android=new UiSelector().className("android.widget.ImageView").instance(8)',
        this.confirm3ItemInCart= 'android=new UiSelector().text("3")',
        this.confirmBuy = "~Proceed To Checkout button",
        this.cartButtonInMenu = 'android=new UiSelector().className("android.widget.ImageView").instance(3)',
        this.noItemCart ='android=new UiSelector().text("No Items")',
        this.sadCart ='android=new UiSelector().className("android.widget.ImageView").instance(3)',
        this.goShoppingButton = '~Go Shopping button',
        this.changeTheOrder = 'android=new UiSelector().className("android.widget.ImageView").instance(2)',
        this.descending = '~nameDesc',
        this.tShirtDescending = 'android=new UiSelector().className("android.widget.ImageView").instance(4)',
        this.backpackDescending= 'android=new UiSelector().className("android.widget.ImageView").instance(9)',
        this.priceAscending = '~priceAsc',
        this.onesiePriceAsc = 'android=new UiSelector().className("android.widget.ImageView").instance(4)',
        this.jacketPriceAsc = 'android=new UiSelector().className("android.widget.ImageView").instance(9)',
        this.priceDescending = '~priceDesc',
        this.jacketPriceDesc = 'android=new UiSelector().className("android.widget.ImageView").instance(4)',
        this.onesiePriceDesc = 'android=new UiSelector().className("android.widget.ImageView").instance(4)',
        this.selectBikeLight = 'android=new UiSelector().className("android.widget.ImageView").instance(5)',
        this.confirm2IntemInCart = 'android=new UiSelector().text("2").instance(0)',
        this.selectBolt = 'android=new UiSelector().className("android.widget.ImageView").instance(6)',
        this.selectOnesie = 'android=new UiSelector().className("android.widget.ImageView").instance(8)',
        this.blackCircleButton = '~black circle',
        this.firtsItemCart = 'android=new UiSelector().className("android.widget.ImageView").instance(3)',
        this.secondItemCart = 'android=new UiSelector().className("android.widget.ImageView").instance(6)',
        this.thirdItemCart = 'android=new UiSelector().className("android.widget.ImageView").instance(9)',
        this.nameAscen = '~nameAsc',
        this.avaliItem1FourStars = 'android=new UiSelector().text("󰓏").instance(3)',
        this.modalButton = '~Close Modal button'
        this.avaliItem1TwoStars = 'android=new UiSelector().text("󰓏").instance(1)',
        this.avaliItem3Three = 'android=new UiSelector().text("󰓏").instance(12)',
        this.avaliItem6Five = 'android=new UiSelector().text("󰓏").instance(29)',
        this.avaliinside5 = 'android=new UiSelector().text("󰓏").instance(4)',
        this.avaliinside4 = 'android=new UiSelector().text("󰓏").instance(3)',
        this.avaliinside3 = 'android=new UiSelector().text("󰓏").instance(2)',
        this.avaliinside2 = 'android=new UiSelector().text("󰓏").instance(1)',
        this.avaliinside1 = 'android=new UiSelector().text("󰓏").instance(0)'
    }

    async addingBackpackToCart(){
        await $(this.selectBackpack).click()
        await $(this.color).click()
        await $(this.addButton).click()
        await $(this.addButton).click()
        await $(this.addButton).click()
        await $(this.removeButton).click()
        await $(this.addProduct).click()
        await $(this.confirm3ProductInCart)
    }

    async addingJacketToCart(){
        await $(this.selectJacket).click()
        await $(this.addProduct).click()
        await $(this.confirm4ProductInCart)
        await $(this.addProduct).click()
        await $(this.confirm5ProductInCart)
    }

    async addingTShirtAndClickCart(){
        await $(this.selectTShirt).click()
        await $(this.addProduct).click()
        await $(this.confirm6ProductInCart)
        await $(this.cartButton).click()
    }

    async addingBikeLight(){
        await $(this.selectBikeLight).click()
        await $(this.removeButton).click()
        await $(this.addButton).click()
        await $(this.addButton).click()
        await $(this.addProduct).click()
        await $(this.confirm2IntemInCart)
    }

    async addingBolt(){
        await $(this.selectBolt).click()
        await $(this.addButton).click()
        await $(this.addProduct).click()
        await $(this.confirm3ItemInCart)
    }

    async addingOnesie(){
        await $(this.selectOnesie).click()
        await $(this.blackCircleButton).click()
        await $(this.addProduct).click()
        await $(this.confirm4ProductInCart)
    }

    async cartBadge(){
        await $(this.removeButton2Cart).click()
        await $(this.confirm5ProductInCart)
        await $(this.removeFirstItem).click()
        await $(this.confirm2ProductInCart)
        await $(this.addIn2ItemCart).click()
        await $(this.confirm3ItemInCart)
        await $(this.confirmBuy).click()
    }

    async otherCartBadge(){
        await $(this.firtsItemCart)
        await $(this.secondItemCart)
        await $(this.thirdItemCart)
        await $(this.confirmBuy).click()
    }

    async emptyCart(){
        await $(this.cartButtonInMenu).click()
        await $(this.noItemCart)
        await $(this.sadCart)
        await $(this.goShoppingButton).click()
    }

    async scroll(){
        await driver.execute('mobile: scroll', {
            strategy: '-android uiautomator',
            selector: 'new UiSelector().className("android.widget.ImageView").instance(9)', 
            direction: 'down',
          })
    }

    async descendingOrder(){
        await $(this.changeTheOrder).click()
        await $(this.descending).click()
        await $ (this.tShirtDescending)
        await $(this.backpackDescending)
    }

    async ascendingPrice(){
        await $(this.changeTheOrder).click()
        await $(this.priceAscending).click()
        await $(this.onesiePriceAsc)
        await $(this.jacketPriceAsc)
    }

    async descendingPrice(){
        await $(this.changeTheOrder).click()
        await $(this.priceDescending).click()
        await $(this.jacketPriceDesc)
        await $(this.onesiePriceDesc)
    }

    async ascendingName(){
        await $(this.changeTheOrder).click()
        await $(this.nameAscen).click()
    }

    async avaliation1(){
        await $(this.avaliItem1FourStars).click()
        await $(this.modalButton).click()
        await $(this.avaliItem1TwoStars).click()
        await $(this.modalButton).click()
        await $(this.avaliItem3Three).click()
        await $(this.modalButton).click()
        await $(this.avaliItem6Five).click()
        await $(this.modalButton).click()
    }

    async avaliation2(){
        await $(this.selectJacket).click()
        await $(this.avaliinside5).click()
        await $(this.modalButton).click()
        await MenuScreen.accessCatalog()
        await $(this.selectBackpack).click()
        await $(this.avaliinside3).click()
        await $(this.modalButton).click()
        await $(this.avaliinside4).click()
        await $(this.modalButton).click()
        await MenuScreen.accessCatalog()
        await $(this.selectOnesie).click()
        await $(this.avaliinside2).click()
        await $(this.modalButton).click()
        await MenuScreen.accessCatalog()
    }
}

export default new ProductsScreen
