!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));d.style.backgroundColor=t}),1e3),e.disabled=!0,a.disabled=!1}));a.addEventListener("click",(function(){clearInterval(t),a.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.4bb468b7.js.map
