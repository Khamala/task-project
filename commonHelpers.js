(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const i=document.querySelector(".js-list");i.addEventListener("click",d);async function u(){const t=await fetch("https://books-backend.p.goit.global/books/top-books");if(!t.ok)throw new Error(t.statusText);return t.json()}u().then(t=>{i.insertAdjacentHTML("beforeend",l(t))}).catch(t=>console.log("Error"));function l(t){return t.map(({list_name:r,books:s})=>`<li>
    <h2>${r}</h2>
    <ul>${a(s)}</ul>
    <button type="button" class ="js-seeMore" data-genre="${r}">See more</button>
  </li>`)}function a(t){return t.map(({_id:r,author:s,book_image:n,title:e})=>`<li data-id="${r}">
      <img src="${n}" alt="${e}">
      <h3>${e}</h3>
      <p>${s}</p>
    </li>`)}async function f(t){const r=await fetch(`https://books-backend.p.goit.global/books/category?category=${t}`);if(!r.ok)throw new Error(r.statusText);return r.json()}async function d(t){if(t.target.classList.contains("js-seeMore")){const r=t.target.dataset.genre,s=await f(r);i.innerHTML=a(s)}}
//# sourceMappingURL=commonHelpers.js.map
