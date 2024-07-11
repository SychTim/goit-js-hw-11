import{i as m,S as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery");function d(s){if(s.hits.length===0){m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"}),c.innerHTML="";return}const o=s.hits.map(({comments:t,downloads:n,views:e,likes:r,largeImageURL:i,webformatURL:l,tags:u})=>`
        <a class="gallery-item" href="${i}">
            <img src="${l}" alt="${u}">
            <div class="inscriptions">
            <div>
                <p class="insc-name">Likes</p>
                <p class="insc-value">${r}</p>
            </div>
            <div>
                <p class="insc-name">Views</p>
                <p class="insc-value">${e}</p>
            </div>
            <div>
                <p class="insc-name">Comments</p>
                <p class="insc-value">${t}</p>
            </div>
            <div>
                <p class="insc-name">Downloads</p>
                <p class="insc-value">${n}</p>
            </div>
            </div>
        </a>`).join("");c.innerHTML=o,new p(".gallery a")}function f(s,o){fetch(`https://pixabay.com/api/?key=${s}&q="${o}"&image_type="photo"&orientation="horizontal"&safesearch="true"`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{d(t)}).catch(t=>console.log(t))}const a=document.querySelector(".form"),g=document.querySelector(".gallery"),y="44874409-49a696090f67a7075082072ae";a.addEventListener("submit",h);function h(s){s.preventDefault(),g.innerHTML='<p class="info-load">Loading images, please wait...</p>',f(y,encodeURIComponent(a.imgName.value.trim())),a.imgName.value=""}
//# sourceMappingURL=commonHelpers.js.map
