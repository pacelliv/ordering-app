export function randomImage() {
    const images = [
        "hamburguer-unplash.jpg",
        "steak-unplash.jpg",
        "grill-unplash.jpg",
        "people-unplash.jpg",
        "drinks-unplash.jpg",
    ]

    const image = images[Math.floor(Math.random() * images.length)]

    document.querySelector(".header").style.backgroundImage = `url(./images/${image})`
    document.querySelector(".header").style.backgroundSize = "100% 100%"
    document.querySelector(".header").style.backgroundRepeat = "no-repeat"

    document.querySelector(".header").innerHTML = `
        <h1 class="diner-name">Pacelli's Diner</h1>
    `

    // order the same as the images array
    // hamburger Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/s/photos/hamburger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    // steak Photo by <a href="https://unsplash.com/@emersonvieira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emerson Vieira</a> on <a href="https://unsplash.com/s/photos/steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    // grill Photo by <a href="https://unsplash.com/@emersonvieira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emerson Vieira</a> on <a href="https://unsplash.com/s/photos/barbecue?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    // people Photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/s/photos/drinks-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    // drinks Photo by <a href="https://unsplash.com/@georgebakos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">George Bakos</a> on <a href="https://unsplash.com/s/photos/drinks-bar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
}
