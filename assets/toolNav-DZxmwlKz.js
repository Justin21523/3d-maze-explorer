(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const s=[{key:"game",label:"Game",href:"/"},{key:"hub",label:"Debug Hub",href:"/debug-hub.html"},{key:"levels",label:"Level Lab",href:"/level-lab.html"},{key:"lab",label:"Enemy Lab",href:"/enemy-lab.html"},{key:"ai",label:"AI Test",href:"/test-ai.html"},{key:"meta",label:"Meta Preview",href:"/test-enemy-meta.html"},{key:"char",label:"Character Meta",href:"/test-enemy-meta.html"},{key:"diag",label:"Diagnostics",href:"/diagnostic.html"}];function c(){const e=String(window.location?.pathname||"/");return e===""?"/":e}function d(e){const n=c();return e==="/"?n==="/"||n.endsWith("/index.html"):n===e||n.endsWith(e)}function u(){const e=document.getElementById("ui-overlay");if(!e)return 12;const n=e.getBoundingClientRect(),r=n.top+n.height+10;return Number.isFinite(r)?Math.max(12,Math.round(r)):12}function p(){if(document.getElementById("tool-nav-styles"))return;const e=document.createElement("style");e.id="tool-nav-styles",e.textContent=`
    #tool-nav {
      position: fixed;
      left: 12px;
      top: 12px;
      z-index: 1400;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.92);
      pointer-events: auto;
      user-select: none;
    }

    #tool-nav .tool-nav-title {
      font-weight: 650;
      opacity: 0.9;
      margin-right: 4px;
    }

    #tool-nav a, #tool-nav button {
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      background: rgba(255, 255, 255, 0.06);
      color: rgba(255, 255, 255, 0.92);
      padding: 6px 10px;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    #tool-nav a:hover, #tool-nav button:hover {
      background: rgba(255, 255, 255, 0.12);
    }

    #tool-nav a.active {
      border-color: rgba(122, 162, 255, 0.55);
      background: rgba(122, 162, 255, 0.22);
    }

    #tool-nav button {
      appearance: none;
    }
  `,document.head.appendChild(e)}function l(){if(document.getElementById("tool-nav"))return;p();const e=document.createElement("div");e.id="tool-nav",e.style.top=`${u()}px`;const n=document.createElement("span");n.className="tool-nav-title",n.textContent="Tools",e.appendChild(n);const r=document.createElement("button");r.type="button",r.textContent="Back to Game",r.title="Return to the main game (/)",r.addEventListener("click",()=>{try{window.location.assign("/")}catch{}}),e.appendChild(r);for(const a of s){const t=document.createElement("a");t.href=a.href,t.textContent=a.label,d(a.href)&&t.classList.add("active"),e.appendChild(t)}document.body.appendChild(e)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>l(),{once:!0}):l();
