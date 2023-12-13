const productData = [
    {
        id: '1',
        name: 'Product 1',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac1.jpg"
    },
    {
        id: '2',
        name: 'Product 2',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac2.jpg"
    },
    {
        id: '3',
        name: 'Product 3',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac3.jpg"
    },
    {
        id: '4',
        name: 'Product 4',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac4.jpg"
    },
    {
        id: '5',
        name: 'Product 5',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac5.jpg"
    },
    {
        id: '6',
        name: 'Product 6',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac6.jpg"
    },
    {
        id: '7',
        name: 'Product 7',
        desc: 'lorem imsum lorem ipsum lorem ipsum',
        img_url: "mac7.jpg"
    },


]


const marketContainer = document.querySelector('#marketContainer')
const basketVal = document.querySelector("#basketVal")
const basketBtn = document.querySelector('#basketBtn')
const marketContain = document.querySelector('#marketContain')
const hiddenBasket = document.querySelector('#hiddenBasket')
const welcomeMarket = document.querySelector('#welcomeMarket')
const basketContainer = document.querySelector('#basketContainer')

let basketCount = 0;
let basketArr = []
window.addEventListener('DOMContentLoaded', handleShowProduct)
window.addEventListener('click', increaseBasketCount)
basketBtn.addEventListener('click', showBasketProducts)

function handleShowProduct() {
    marketContainer.innerHTML = productData.map((product) => (
        `
     <div class="card gap-4" style="width: 18rem;">
                    <img src="./assets/img/${product.img_url}" class="card-img-top" alt="product">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.desc}</p>
                            
                        <a href="#" class="btn btn-danger">Add to Basket</a>
                    </div>
                </div>

    
    `
    )).join('')
}

function increaseBasketCount(e) {
    console.log(e.target);
    if (e.target.className === 'btn btn-danger') {
        basketCount++
        basketVal.innerText = basketCount
        const productCart = e.target.parentElement
        const product = productCart.outerHTML
        basketArr.push(product)


    }


}

function showBasketProducts() {
    showBasketUI()
    basketContainer.innerHTML = basketArr.map((el) => el).join('')

}

function showBasketUI() {
    marketContain.style.display = 'none'
    hiddenBasket.style.display = 'block'
    welcomeMarket.innerText = 'Basket'
}
