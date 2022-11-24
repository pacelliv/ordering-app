import "./index.css"
import { menuArray } from "./data.js"
import { v4 as uuidv4 } from "https://jspm.dev/uuid"

let orderedItems = []

/* This event listener handles the submit events */
document.addEventListener("submit", (e) => {
    handleRatingClick(e)
})

/* This event listener handles the click events */
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal")
    let clickInside = modal.contains(e.target)

    if (e.target.dataset.add) {
        document.getElementById("order-feed").classList.remove("hidden")
        handleAddClick(e.target.dataset.add)
    } else if (e.target.dataset.cross) {
        document.getElementById("order-feed").classList.remove("hidden")
        handleAddClick(e.target.dataset.cross)
    } else if (e.target.id === "order-btn") {
        modal.classList.remove("hidden")
    } else if (e.target.id === "pay-btn") {
        handlePayClick(e)
    } else if (e.target.dataset.remove) {
        handleRemoveClick(e.target.dataset.remove)
    } else if (!clickInside) {
        modal.classList.add("hidden")
    }
})

/* handleRatingClick renders a greeting message to the DOM after 
after the user submits a rating */
function handleRatingClick(event) {
    event.preventDefault()
    document.getElementById("rating").innerHTML = `
        <h3 class="feedback-text">Thanks for your feedback!</h3>
    `
}

/* handleAddClick filters the selected item from menuArray, push it to
orderedItems array and calls getOrderHtml */
function handleAddClick(id) {
    const targetItemObj = menuArray.filter((item) => {
        return item.id == id
    })[0]

    // Adds an uuid to a selected item
    orderedItems.push({
        ...targetItemObj,
        uuid: uuidv4(),
    })

    getOrderHtml(orderedItems)
}

/* handleRemoveClick filters the item removed from orderedItems array
and pass the remaining items to getOrderHtml */
function handleRemoveClick(id) {
    orderedItems = orderedItems.filter((item) => item.uuid != id)
    getOrderHtml(orderedItems)
}

/* getFeedHtml creates a HTML string of the avaliable items using menuArray */
function getFeedHtml() {
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

//                 // <i class="fa-solid fa-plus"></i>

/* getOrderHtml uses the item returned by handleAddClick or handleRemoveClick 
to create and HTML string of ordered items and renders them to the DOM */
function getOrderHtml(items) {
    let orderHtml = ""
    let totalPrice = 0

    if (orderedItems.length === 0) {
        document.getElementById("order-feed").classList.add("hidden")
    }

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

    if (orderedItems.length > 0) {
        items.forEach((item) => {
            const { name, price, uuid } = item
            orderHtml += `
            <div class="items">
                <h3 class="item-name">${name}</h3>
                <button class="remove-btn" data-remove="${uuid}">remove</button>
                <p class="item-price right">$${price}</p>
            </div>
            `
        })
        document.getElementById("ordered-items").innerHTML = orderHtml
    }
}

/* handlePayClick creates the rating element */
function handlePayClick(event) {
    event.preventDefault()
    modal.classList.add("hidden")
    document.getElementById("order").innerHTML = `
            <div class="order-confirmed">
                <h1 class="order-confirmed-text">${
                    document.getElementById("name").value
                }, your order is on its way!</h1>
                <div id="rating" class="rating">
                    <div class="star-widget" id="star-widget">
                        <input type="radio" name="rate" id="rate-5" />
                        <label for="rate-5" class="fa-solid fa-star"></label>
                        <input type="radio" name="rate" id="rate-4" />
                        <label for="rate-4" class="fa-solid fa-star"></label>
                        <input type="radio" name="rate" id="rate-3" />
                        <label for="rate-3" class="fa-solid fa-star"></label>
                        <input type="radio" name="rate" id="rate-2" />
                        <label for="rate-2" class="fa-solid fa-star"></label>
                        <input type="radio" name="rate" id="rate-1" />
                        <label for="rate-1" class="fa-solid fa-star"></label>
                    </div>
                    <form>
                        <button class="rate-btn" id="rate-btn" type="submit">Rate us</button>
                    </form>
                </div>
            </div>
        `
    orderedItems = []
}

/* This function renders to the DOM the HTML string returned by getFeedHtml() */
function render() {
    document.getElementById("feed").innerHTML = getFeedHtml()
}

render()
