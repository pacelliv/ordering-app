import "./index.css"
import { menuArray } from "./src/data.js"
import { getFeedHtml, getOrderHtml } from "./src/feed.js"
import { v4 as uuidv4 } from "https://jspm.dev/uuid"
import { randomImage } from "./src/banner.js"

setInterval(randomImage, 5000)

let orderedItems = []

/* This event listener handles the submit events */
document.addEventListener("submit", (e) => {
    e.preventDefault()
    if (e.target.id === "modal-form") {
        handlePayClick()
    } else if (e.target.id === "order-form") {
        handleRatingClick()
    }
})

/* This event listener handles the click events */
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal")
    let clickInside = modal.contains(e.target)
    document.querySelector(".order-btn").disabled = false
    document.querySelectorAll(".add-btn").forEach((button) => {
        button.disabled = false
    })

    if (e.target.dataset.add) {
        document.getElementById("order-feed").classList.remove("hidden")
        handleAddClick(e.target.dataset.add)
    } else if (e.target.dataset.cross) {
        document.getElementById("order-feed").classList.remove("hidden")
        handleAddClick(e.target.dataset.cross)
    } else if (e.target.id === "order-btn") {
        modal.classList.remove("hidden")
        document.querySelectorAll(".add-btn").forEach((button) => {
            button.disabled = true
        })
        document.querySelector(".order-btn").disabled = true
    } else if (e.target.dataset.remove) {
        handleRemoveClick(e.target.dataset.remove)
    } else if (!clickInside) {
        modal.classList.add("hidden")
    }
})

/* handleRatingClick renders a greeting message to the DOM 
after the user submits a rating */
function handleRatingClick() {
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

    orderedItems.push({
        ...targetItemObj,
        uuid: uuidv4(), // Adds an uuid to a selected item
    })

    getOrderHtml(orderedItems)
}

/* handleRemoveClick filters the item removed from orderedItems array
and pass the remaining items to getOrderHtml */
function handleRemoveClick(id) {
    orderedItems = orderedItems.filter((item) => item.uuid != id)
    getOrderHtml(orderedItems)
}

/* handlePayClick creates the rating element */
function handlePayClick() {
    modal.classList.add("hidden")
    document.getElementById("order").innerHTML = `
            <div class="order-confirmed">
                <h1 class="order-confirmed-text">${
                    document.getElementById("name").value
                }, your order is on its way!</h1>
                <div id="rating" class="rating">
                    <form class="order-form" id="order-form">
                        <div class="star-widget" id="star-widget">
                            <input type="radio" name="rate" id="rate-5" required/>
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
                    
                        <button class="rate-btn" id="rate-btn" type="subtmit">Rate us</button>
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
