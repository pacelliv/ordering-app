import{v4 as u}from"https://jspm.dev/uuid";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const f=[{name:"Pizza",foodPic:"./images/pizza.png",ingredients:["pepperoni","mushroom","mozarella"],id:0,price:14,emoji:"\u{1F355}"},{name:"Hamburger",foodPic:"./images/hamburger.png",ingredients:["beef","cheese","lettuce"],price:12,emoji:"\u{1F354}",id:1},{name:"Beer",foodPic:"./images/beer.png",ingredients:["grain, hops, yeast, water"],price:12,emoji:"\u{1F37A}",id:2}];function p(e){let r="",n=0,i=0,t=0,a=0;const o=e.map(d=>d.id);o.forEach(d=>{d===0&&(i+=1)}),o.forEach(d=>{d===1&&(t+=1)}),o.forEach(d=>{d===2&&(a+=1)});const g=e.map(d=>[d.id,d]),l=[...new Map(g).values()];e.forEach(d=>{n+=d.price}),document.getElementById("order-feed").innerHTML=`
        <div class="order" id="order">
            <h3 class="order-title">Your order</h3>
            <div class="ordered-items" id="ordered-items"></div>
            <div class="total" id="total">
                <h3 class="order-subtitle">Total price:</h3>
                <p class="total-price" id="total-price"></p>
            </div>
            <button class="order-btn" id="order-btn">Complete order</button>
        </div>
    `,document.getElementById("total-price").textContent=`$${n}`,document.getElementById("order-amount").textContent=`$${n}`,document.getElementById("submit-btn").textContent=`Pay $${n}`,document.getElementById("order-id").textContent=`${u().slice(0,6)}`,n===0&&document.getElementById("order-feed").classList.add("hidden"),l.length>0&&(l.forEach(d=>{const{name:h,price:b,uuid:y,id:c}=d;r+=`
            <div class="items">
                <h3 class="item-name">${h}</h3>
                <button class="remove-btn" data-remove="${y}">remove</button>
                <p class="item-price right"><span>( ${c===0?i:c===1?t:a} )</span> $${b}</p>
            </div>
            `}),document.getElementById("ordered-items").innerHTML=r)}function v(){let e="";return f.forEach(r=>{const{foodPic:n,name:i,ingredients:t,price:a,id:o}=r;e+=`
          <div class="item">
                <img src="${n}" class="item-image" />
                <div class="item-description">
                    <h3 class="item-name">${i}</h3>
                    <p class="item-ingredients">${t.join(", ")}</p>
                    <p clas="item-price">$${a}</p>
                </div>
                <button class="add-btn" data-add="${o}">
                    <i class="fa-solid fa-plus" data-cross="${o}"></i>
                </button>
          </div>
      `}),e}function E(){const e=["hamburguer-unplash.jpg","steak-unplash.jpg","grill-unplash.jpg","people-unplash.jpg","drinks-unplash.jpg"],r=e[Math.floor(Math.random()*e.length)];document.querySelector(".header").style.backgroundImage=`url(./images/${r})`,document.querySelector(".header").style.backgroundSize="100% 100%",document.querySelector(".header").style.backgroundRepeat="no-repeat",document.querySelector(".header").innerHTML=`
        <h1 class="diner-name">Pacelli's Diner</h1>
    `}setInterval(E,5e3);let s=[];document.addEventListener("submit",e=>{e.preventDefault(),e.target.id==="modal-form"?L():e.target.id==="order-form"&&I()});document.addEventListener("click",e=>{const r=document.getElementById("modal");let n=r.contains(e.target);document.querySelector(".order-btn").disabled=!1,document.querySelectorAll(".add-btn").forEach(i=>{i.disabled=!1}),e.target.dataset.add?(document.getElementById("order-feed").classList.remove("hidden"),m(e.target.dataset.add)):e.target.dataset.cross?(document.getElementById("order-feed").classList.remove("hidden"),m(e.target.dataset.cross)):e.target.id==="order-btn"?(r.classList.remove("hidden"),document.querySelectorAll(".add-btn").forEach(i=>{i.disabled=!0}),document.querySelector(".order-btn").disabled=!0):e.target.dataset.remove?$(e.target.dataset.remove):n||r.classList.add("hidden")});function I(){document.getElementById("rating").innerHTML=`
        <h3 class="feedback-text">Thanks for your feedback!</h3>
    `}function m(e){const r=f.filter(n=>n.id==e)[0];s.push({...r,uuid:u()}),p(s)}function $(e){s=s.filter(r=>r.uuid!=e),p(s)}function L(){modal.classList.add("hidden"),document.getElementById("order").innerHTML=`
            <div class="order-confirmed">
                <h1 class="order-confirmed-text">${document.getElementById("name").value}, your order is on its way!</h1>
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
        `,s=[]}function B(){document.getElementById("feed").innerHTML=v()}B();
