import{v4 as c}from"https://jspm.dev/uuid";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const s=[{name:"Pizza",foodPic:"./images/pizza.png",ingredients:["pepperoni","mushroom","mozarella"],id:0,price:14,emoji:"\u{1F355}"},{name:"Hamburger",foodPic:"./images/hamburger.png",ingredients:["beef","cheese","lettuce"],price:12,emoji:"\u{1F354}",id:1},{name:"Beer",foodPic:"./images/beer.png",ingredients:["grain, hops, yeast, water"],price:12,emoji:"\u{1F37A}",id:2}];let n=[];document.addEventListener("submit",e=>{m(e)});document.addEventListener("click",e=>{const r=document.getElementById("modal");let a=r.contains(e.target);e.target.dataset.add?(document.getElementById("order-feed").classList.remove("hidden"),u(e.target.dataset.add)):e.target.id==="order-btn"?r.classList.remove("hidden"):e.target.id==="pay-btn"?g(e):e.target.dataset.remove?f(e.target.dataset.remove):a||r.classList.add("hidden")});function m(e){e.preventDefault(),document.getElementById("rating").innerHTML=`
        <h3 class="feedback-text">Thanks for your feedback!</h3>
    `}function u(e){const r=s.filter(a=>a.id==e)[0];n.push({...r,uuid:c()}),l(n)}function f(e){n=n.filter(r=>r.uuid!=e),l(n)}function p(){let e="";return s.forEach(r=>{const{foodPic:a,name:d,ingredients:t,price:i,id:o}=r;e+=`
          <div class="item">
                <img src="${a}" class="item-image" />
                <div class="item-description">
                    <h3 class="item-name">${d}</h3>
                    <p class="item-ingredients">${t.join(", ")}</p>
                    <p clas="item-price">$${i}</p>
                </div>
                <button class="add-btn" data-add="${o}">
                <i class="fa-solid fa-plus"></i>
                </button>
          </div>
      `}),e}function l(e){let r="",a=0;n.length===0&&document.getElementById("order-feed").classList.add("hidden"),e.forEach(d=>{a+=d.price}),document.getElementById("order-feed").innerHTML=`
        <div class="order" id="order">
            <h3 class="order-title">Your order</h3>
            <div class="ordered-items" id="ordered-items"></div>
            <div class="total" id="total">
                <h3 class="order-subtitle">Total price:</h3>
                <p class="total-price" id="total-price"></p>
            </div>
            <button class="order-btn" id="order-btn">Complete order</button>
        </div>
    `,document.getElementById("total-price").textContent=`$${a}`,n.length>0&&(e.forEach(d=>{const{name:t,price:i,uuid:o}=d;r+=`
            <div class="items">
                <h3 class="item-name">${t}</h3>
                <button class="remove-btn" data-remove="${o}">remove</button>
                <p class="item-price right">$${i}</p>
            </div>
            `}),document.getElementById("ordered-items").innerHTML=r)}function g(e){e.preventDefault(),modal.classList.add("hidden"),document.getElementById("order").innerHTML=`
            <div class="order-confirmed">
                <h1 class="order-confirmed-text">${document.getElementById("name").value}, your order is on its way!</h1>
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
        `,n=[]}function h(){document.getElementById("feed").innerHTML=p()}h();
