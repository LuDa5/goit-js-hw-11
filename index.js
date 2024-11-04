import{i as d,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="46887087-5e19c9c0c2a23badfaaee9a20",g="https://pixabay.com/api/";async function m(n,t=1,o=20){const a=`${g}?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;try{const e=await fetch(a);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}function h(n){const t=document.querySelector(".gallery"),o=n.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:l,comments:u,downloads:f})=>`
    <a class="gallery-item" href="${e}">
      <img src="${a}" alt="${r}" loading="lazy" />
      <div class="info">
        <p><strong>Likes:</strong> ${i}</p>
        <p><strong>Views:</strong> ${l}</p>
        <p><strong>Comments:</strong> ${u}</p>
        <p><strong>Downloads:</strong> ${f}</p>
      </div>
    </a>
  `).join("");t.innerHTML=o}function L(){document.querySelector(".gallery").innerHTML=""}function s(n,t){d.error({title:"Error",message:t})}let w=new p(".gallery a",{captionsData:"alt",captionDelay:250});const $=document.querySelector(".search-form"),c=document.querySelector(".loader");$.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements.query.value.trim();if(!t){s("error","Please enter a search term.");return}L(),b();try{const o=await m(t);if(o.hits.length===0){s("error","No images matching your search query. Try again!");return}h(o.hits),w.refresh()}catch{s("error","Failed to fetch images.")}finally{q()}});function b(){c.style.display="block"}function q(){c.style.display="none"}
//# sourceMappingURL=index.js.map
