import{a as n,S as c,i as f}from"./assets/vendor-DRle9_Im.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=r=>n.get("https://pixabay.com/api/",{params:{key:"51362773-b845efdff4000eb7d694ec90c",q:r,orientation:"horizontal",safesearch:"true",image_type:"photo"}}),i={galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},d=new c(".js-gallery a",{captionsData:"alt",captionDelay:250}),u=r=>{const o=r.map(t=>`<li class="gallery-card">
  <a href="${t.largeImageURL}">
    <img
      class="js-gallery-img"
      src="${t.webformatURL}"
      alt="${t.tags}"
      width="360"
  /></a>
  <ul class="info-list">
    <li class="info-item">
      <h3 class="info-item-title">Likes</h3>
      <p class="info-item-text">${t.likes}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Views</h3>
      <p class="info-item-text">${t.views}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Comments</h3>
      <p class="info-item-text">${t.comments}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Downloads</h3>
      <p class="info-item-text">${t.downloads}</p>
    </li>
  </ul>
</li>`).join("");i.galleryList.innerHTML=o,d.refresh()},h=()=>{i.galleryList.innerHTML=""},p=()=>{i.loader.classList.remove("is-hidden")},y=()=>{i.loader.classList.add("is-hidden")},g={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},L=r=>{r.preventDefault(),h(),p();const o=r.target.elements["search-text"].value.trim();m(o).then(({data:t})=>{t.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u(t.hits)}).catch(t=>{console.log(t)}).finally(()=>{y()})};g.searchForm.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
