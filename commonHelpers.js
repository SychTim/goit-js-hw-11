import{S as m,i as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),d=new m(".gallery a");function f(s){if(s.hits.length===0){p.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red"}),c.innerHTML="";return}const o=s.hits.map(({comments:t,downloads:i,views:e,likes:r,largeImageURL:n,webformatURL:l,tags:u})=>`
        <a class="gallery-item" href="${n}">
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
                <p class="insc-value">${i}</p>
            </div>
            </div>
        </a>`).join("");c.innerHTML=o,d.refresh()}function g(s,o){fetch(`https://pixabay.com/api/?key=${s}&q="${o}"&image_type="photo"&orientation="horizontal"&safesearch="true"`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{f(t)}).catch(t=>console.log(t))}const a=document.querySelector(".form"),h=document.querySelector(".gallery"),y="44874409-49a696090f67a7075082072ae";a.addEventListener("submit",v);function v(s){s.preventDefault(),h.innerHTML='<span class="loader"></span>',g(y,encodeURIComponent(a.imgName.value.trim())),a.imgName.value=""}
//# sourceMappingURL=commonHelpers.js.map
