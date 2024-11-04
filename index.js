import{i as d,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="46887087-5e19c9c0c2a23badfaaee9a20",g="https://pixabay.com/api/";async function m(n,t=1,a=20){const o=`${g}?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;try{const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}function h(n){const t=document.querySelector(".gallery"),a=n.map(({webformatURL:o,largeImageURL:e,tags:r,likes:i,views:l,comments:u,downloads:f})=>`
    <a class="gallery-item" href="${e}">
      <img src="${o}" alt="${r}" loading="lazy" />
      <div class="info">
        <p><strong>Likes:</strong> ${i}</p>
        <p><strong>Views:</strong> ${l}</p>
        <p><strong>Comments:</strong> ${u}</p>
        <p><strong>Downloads:</strong> ${f}</p>
      </div>
    </a>
  `).join("");t.innerHTML=a}function L(){document.querySelector(".gallery").innerHTML=""}function s(n,t){d.error({title:"Error",message:t})}let w=new p(".gallery a",{captionsData:"alt",captionDelay:250});const $=document.querySelector(".search-form"),c=document.querySelector(".loader");function q(){c.style.display="block"}function b(){c.style.display="none"}$.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements.query,a=t.value.trim();if(!a){s("error","Please enter a search term.");return}L(),q(),t.value="";try{const o=await m(a);if(o.hits.length===0){s("error","No images matching your search query. Try again!");return}h(o.hits),w.refresh()}catch{s("error","Failed to fetch images.")}finally{b()}});
//# sourceMappingURL=index.js.map
