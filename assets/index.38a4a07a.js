import{v4 as g}from"https://jspm.dev/uuid";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const c=[{name:"Pizza",foodPic:"./images/pizza.png",ingredients:["pepperoni","mushroom","mozarella"],id:0,price:14,emoji:"\u{1F355}"},{name:"Hamburger",foodPic:"./images/hamburger.png",ingredients:["beef","cheese","lettuce"],price:12,emoji:"\u{1F354}",id:1},{name:"Beer",foodPic:"./images/beer.png",ingredients:["grain, hops, yeast, water"],price:12,emoji:"\u{1F37A}",id:2}];let n=[];document.addEventListener("submit",e=>{h(e)});document.addEventListener("click",e=>{const r=document.getElementById("modal");let a=r.contains(e.target);e.target.dataset.add?(document.getElementById("order-feed").classList.remove("hidden"),l(e.target.dataset.add)):e.target.dataset.cross?(document.getElementById("order-feed").classList.remove("hidden"),l(e.target.dataset.cross)):e.target.id==="order-btn"?r.classList.remove("hidden"):e.target.id==="pay-btn"?y(e):e.target.dataset.remove?b(e.target.dataset.remove):a||r.classList.add("hidden")});function h(e){e.preventDefault(),document.getElementById("rating").innerHTML=`
        <h3 class="feedback-text">Thanks for your feedback!</h3>
    `}function l(e){const r=c.filter(a=>a.id==e)[0];n.includes(r.id===0)||n.push({...r,uuid:g()}),m(n)}function b(e){n=n.filter(r=>r.uuid!=e),m(n)}function v(){let e="";return c.forEach(r=>{const{foodPic:a,name:s,ingredients:t,price:i,id:d}=r;e+=`
          <div class="item">
                <img src="${a}" class="item-image" />
                <div class="item-description">
                    <h3 class="item-name">${s}</h3>
                    <p class="item-ingredients">${t.join(", ")}</p>
                    <p clas="item-price">$${i}</p>
                </div>
                <button class="add-btn" data-add="${d}">
                    <i class="fa-solid fa-plus" data-cross="${d}"></i>
                </button>
          </div>
      `}),e}function m(e){let r="",a=0;const s=e.map(o=>[o.id,o]),d=[...new Map(s).values()];n.length===0&&document.getElementById("order-feed").classList.add("hidden"),e.forEach(o=>{a+=o.price}),document.getElementById("order-feed").innerHTML=`
        <div class="order" id="order">
            <h3 class="order-title">Your order</h3>
            <div class="ordered-items" id="ordered-items"></div>
            <div class="total" id="total">
                <h3 class="order-subtitle">Total price:</h3>
                <p class="total-price" id="total-price"></p>
            </div>
            <button class="order-btn" id="order-btn">Complete order</button>
        </div>
    `,document.getElementById("total-price").textContent=`$${a}`,d.length>0&&(d.forEach(o=>{console.log(o);const{name:u,price:f,uuid:p}=o;r+=`
            <div class="items">
                <h3 class="item-name">${u}</h3>
                <button class="remove-btn" data-remove="${p}">remove</button>
                <p class="item-price right">$${f}</p>
            </div>
            `}),document.getElementById("ordered-items").innerHTML=r)}function y(e){e.preventDefault(),modal.classList.add("hidden"),document.getElementById("order").innerHTML=`
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
        `,n=[]}function L(){document.getElementById("feed").innerHTML=v()}L();
