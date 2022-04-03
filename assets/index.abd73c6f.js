const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function u(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=u(o);fetch(o.href,s)}};v();function L(){const e=k();m(e),h(e.length),b(e),S(e)}L();const c=document.querySelector("dialog"),d=document.querySelector("#createBook"),f=document.querySelector("#clearFields");function y(e){let t=document.getElementById("overlay");t!==null&&(t.style.display=e)}function l(e){let t=document.getElementById(e);t!==null&&(t.value="")}function p(){l("titleInput"),l("authorInput"),l("pagesInput"),l("statusInput")}d==null||d.addEventListener("click",()=>{p(),c==null||c.setAttribute("open",""),n==null||n.classList.add("blur"),q()});const n=document.querySelector("#overlay");n==null||n.addEventListener("click",()=>{c==null||c.removeAttribute("open"),n==null||n.classList.remove("blur"),g()});const i=document.querySelector("form");i==null||i.addEventListener("submit",()=>{const e=new FormData(i),t={title:e.get("title"),author:e.get("author"),numberOfPages:parseInt(e.get("pages")),status:e.get("status")};C(t),n==null||n.classList.remove("blur"),g()});f==null||f.addEventListener("click",e=>{p(),e.preventDefault()});function q(){y("block")}function g(){y("none")}function m(e){const t=document.querySelector("#content");t.innerHTML="";const u=document.querySelector("#book-template");e.forEach(r=>{const o=document.createElement("div");o.appendChild(u.content.cloneNode(!0)),o.querySelector(".title").textContent="Title: "+r.title,o.querySelector(".author").textContent="Author: "+r.author,o.querySelector(".pages").textContent="Number of pages: "+r.numberOfPages.toString(),o.querySelector(".status").textContent="Status: "+r.status,t==null||t.appendChild(o)})}function B(e){const t=JSON.stringify(e);localStorage.setItem("books",t)}function k(){const e=localStorage.getItem("books");return e===null?[]:JSON.parse(e)}function C(e){const t=k();t.push(e),B(t),m(t),h(t.length),b(t),S(t)}function h(e){const t=document.querySelector("#bookCount");t.innerHTML="Total books count: "+e}function b(e){const t=document.querySelector("#booksReadCount"),u=e.filter(r=>r.status==="read");t.innerHTML="Read: "+u.length}function S(e){const t=document.querySelector("#booksNotReadCount"),u=e.filter(r=>r.status==="not-read");t.innerHTML="Not read: "+u.length}
