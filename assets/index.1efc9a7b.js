const g=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};g();const l=document.querySelector("dialog"),a=document.querySelector("#clearFields");function y(r){let e=document.getElementById("overlay");e!==null&&(e.style.display=r)}function u(r){let e=document.getElementById(r);e!==null&&(e.value="")}const f=document.querySelector("#createBook");function p(){u("titleInput"),u("authorInput"),u("pagesInput"),u("statusInput")}f==null||f.addEventListener("click",()=>{p(),l==null||l.setAttribute("open",""),o==null||o.classList.add("blur"),v()});const o=document.querySelector("#overlay");o==null||o.addEventListener("click",()=>{l==null||l.removeAttribute("open"),o==null||o.classList.remove("blur"),m()});const s=document.querySelector("form");s==null||s.addEventListener("submit",()=>{var c;const r=new FormData(s),e=document.createElement("div"),i=document.getElementById("book-template");e.appendChild(i.content.cloneNode(!0)),e.querySelector(".title").textContent="Title: "+r.get("title"),e.querySelector(".author").textContent="Author: "+r.get("author"),e.querySelector(".pages").textContent="Number of Pages: "+r.get("pages"),e.querySelector(".status").textContent="Status: "+r.get("status"),(c=document.getElementById("content"))==null||c.appendChild(e),o==null||o.classList.remove("blur"),m()});a==null||a.addEventListener("click",r=>{p(),r.preventDefault()});function v(){y("block")}function m(){y("none")}