import { menuArray } from "./data.js"
import { v4 as uuidv4 } from "https://jspm.dev/uuid"

/* getOrderHtml uses the item returned by handleAddClick or handleRemoveClick 
to create and HTML string of ordered items and renders them to the DOM */
export function getOrderHtml(items) {
    let orderHtml = ""
    let totalPrice = 0
    let countPizza = 0
    let countHamburger = 0
    let countBeer = 0

    const itemsCount = items.map((item) => item.id)

    itemsCount.forEach((element) => {
        if (element === 0) {
            countPizza += 1
        }
    })

    itemsCount.forEach((element) => {
        if (element === 1) {
            countHamburger += 1
        }
    })

    itemsCount.forEach((element) => {
        if (element === 2) {
            countBeer += 1
        }
    })

    // Removing the duplicates from items array by id
    const newItemsArray = items.map((item) => [item.id, item]) // returns an array of arrays. Each nested array contains the id and the item
    const newMap = new Map(newItemsArray) // creates a Map in which each id become a unique key, since keys are unique any duplicate array will be removed
    const iterator = newMap.values() // returns a new Iterator object that contains the values of each element in the Map object in order of insertion
    const uniqueItems = [...iterator] // spread the values into as elements in a new array
    // The four lines from above can be reduce into:
    // const uniqueItems = [...new Map(items.map((item) => [item.id, item]).values())]

    items.forEach((item) => {
        totalPrice += item.price
    })

    document.getElementById("order-feed").innerHTML = `
        <div class="order" id="order">
            <h3 class="order-title">Your order</h3>
            <div class="ordered-items" id="ordered-items"></div>
            <div class="total" id="total">
                <h3 class="order-subtitle">Total price:</h3>
                <p class="total-price" id="total-price"></p>
            </div>
            <button class="order-btn" id="order-btn">Complete order</button>
        </div>
    `

    document.getElementById("total-price").textContent = `$${totalPrice}`
    document.getElementById("order-amount").textContent = `$${totalPrice}`
    document.getElementById("submit-btn").textContent = `Pay $${totalPrice}`
    document.getElementById("order-id").textContent = `${uuidv4().slice(0, 6)}`

    if (totalPrice === 0) {
        document.getElementById("order-feed").classList.add("hidden")
    }

    if (uniqueItems.length > 0) {
        uniqueItems.forEach((item) => {
            const { name, price, uuid, id } = item
            orderHtml += `
            <div class="items">
                <h3 class="item-name">${name}</h3>
                <button class="remove-btn" data-remove="${uuid}">remove</button>
                <p class="item-price right"><span>( ${
                    id === 0 ? countPizza : id === 1 ? countHamburger : countBeer
                } )</span> $${price}</p>
            </div>
            `
        })
        document.getElementById("ordered-items").innerHTML = orderHtml
    }
}

/* getFeedHtml creates a HTML string of the avaliable items using menuArray */
export function getFeedHtml() {
    let menuHtml = ""

    menuArray.forEach((item) => {
        const { foodPic, name, ingredients, price, id } = item
        menuHtml += `
          <div class="item">
                <img src="${foodPic}" class="item-image" />
                <div class="item-description">
                    <h3 class="item-name">${name}</h3>
                    <p class="item-ingredients">${ingredients.join(", ")}</p>
                    <p clas="item-price">$${price}</p>
                </div>
                <button class="add-btn" data-add="${id}">
                    <i class="fa-solid fa-plus" data-cross="${id}"></i>
                </button>
          </div>
      `
    })
    return menuHtml
}
