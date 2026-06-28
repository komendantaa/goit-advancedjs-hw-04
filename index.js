import{a as E,S as P,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const q="https://pixabay.com/api/",B="56484715-4feb3714114ac9072e3add113",d=15;async function f(o,a=1){return(await E.get(q,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:d}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function m(o){const a=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:s,comments:v,downloads:S})=>`
      <li class="gallery__item">
        <a class="gallery__link" href="${i}">
          <img
            class="gallery__image"
            src="${r}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <ul class="gallery__info">
          <li class="gallery__info-item">
            <span class="gallery__info-label">Likes</span>
            <span class="gallery__info-value">${t}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-label">Views</span>
            <span class="gallery__info-value">${s}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-label">Comments</span>
            <span class="gallery__info-value">${v}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-label">Downloads</span>
            <span class="gallery__info-value">${S}</span>
          </li>
        </ul>
      </li>`).join("");y.insertAdjacentHTML("beforeend",a),M.refresh()}function R(){y.innerHTML=""}function h(){g.classList.remove("is-hidden")}function _(){g.classList.add("is-hidden")}function $(){p.classList.remove("is-hidden")}function u(){p.classList.add("is-hidden")}const L=document.querySelector(".form"),O=L.elements["search-text"],x=document.querySelector(".load-more");let c="",l=1,b=0;L.addEventListener("submit",A);x.addEventListener("click",H);async function A(o){o.preventDefault();const a=O.value.trim();if(a===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}c=a,l=1,R(),u(),h();try{const r=await f(c,l);if(b=r.totalHits,r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(r.hits),w()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{_()}}async function H(){l+=1,u(),h();try{const o=await f(c,l);m(o.hits),w(),C()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{_()}}function w(){l*d>=b?(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):$()}function C(){const o=document.querySelector(".gallery__item");if(!o)return;const{height:a}=o.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
