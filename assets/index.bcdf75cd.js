import{v4 as u}from"https://jspm.dev/uuid";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}})();const f=[{name:"Pizza",foodPic:"./images/pizza.png",ingredients:["pepperoni","mushroom","mozarella"],id:0,price:14,emoji:"\u{1F355}"},{name:"Hamburger",foodPic:"./images/hamburger.png",ingredients:["beef","cheese","lettuce"],price:12,emoji:"\u{1F354}",id:1},{name:"Beer",foodPic:"./images/beer.png",ingredients:["grain, hops, yeast, water"],price:12,emoji:"\u{1F37A}",id:2}];function p(e){let r="",d=0,o=0,t=0,i=0;const n=e.map(a=>a.id);n.forEach(a=>{a===0&&(o+=1)}),n.forEach(a=>{a===1&&(t+=1)}),n.forEach(a=>{a===2&&(i+=1)});const g=e.map(a=>[a.id,a]),l=[...new Map(g).values()];s.length===0&&document.getElementById("order-feed").classList.add("hidden"),e.forEach(a=>{d+=a.price}),document.getElementById("order-feed").innerHTML=`
        <div class="order" id="order">
            <h3 class="order-title">Your order</h3>
            <div class="ordered-items" id="ordered-items"></div>
            <div class="total" id="total">
                <h3 class="order-subtitle">Total price:</h3>
                <p class="total-price" id="total-price"></p>
            </div>
            <button class="order-btn" id="order-btn">Complete order</button>
        </div>
    `,document.getElementById("total-price").textContent=`$${d}`,document.getElementById("order-amount").textContent=`$${d}`,document.getElementById("submit-btn").textContent=`Pay $${d}`,document.getElementById("order-id").textContent=`${u().slice(0,6)}`,l.length>0&&(l.forEach(a=>{const{name:h,price:b,uuid:y,id:c}=a;r+=`
            <div class="items">
                <h3 class="item-name">${h}</h3>
                <button class="remove-btn" data-remove="${y}">remove</button>
                <p class="item-price right"><span>( ${c===0?o:c===1?t:i} )</span> $${b}</p>
            </div>
            `}),document.getElementById("ordered-items").innerHTML=r)}function v(){let e="";return f.forEach(r=>{const{foodPic:d,name:o,ingredients:t,price:i,id:n}=r;e+=`
          <div class="item">
                <img src="${d}" class="item-image" />
                <div class="item-description">
                    <h3 class="item-name">${o}</h3>
                    <p class="item-ingredients">${t.join(", ")}</p>
                    <p clas="item-price">$${i}</p>
                </div>
                <button class="add-btn" data-add="${n}">
                    <i class="fa-solid fa-plus" data-cross="${n}"></i>
                </button>
          </div>
      `}),e}let s=[];document.addEventListener("submit",e=>{e.preventDefault(),e.target.id==="modal-form"?$():e.target.id==="order-form"&&E()});document.addEventListener("click",e=>{const r=document.getElementById("modal");let d=r.contains(e.target);e.target.dataset.add?(document.getElementById("order-feed").classList.remove("hidden"),m(e.target.dataset.add)):e.target.dataset.cross?(document.getElementById("order-feed").classList.remove("hidden"),m(e.target.dataset.cross)):e.target.id==="order-btn"?r.classList.remove("hidden"):e.target.dataset.remove?I(e.target.dataset.remove):d||r.classList.add("hidden")});function E(){document.getElementById("rating").innerHTML=`
        <h3 class="feedback-text">Thanks for your feedback!</h3>
    `}function m(e){const r=f.filter(d=>d.id==e)[0];s.push({...r,uuid:u()}),p(s)}function I(e){s=s.filter(r=>r.uuid!=e),p(s)}function $(){modal.classList.add("hidden"),document.getElementById("order").innerHTML=`
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
        `,s=[]}function L(){document.getElementById("feed").innerHTML=v()}L();
