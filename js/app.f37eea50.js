(function(e){function t(t){for(var r,a,s=t[0],o=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ab51b":"e10cc0a5","chunk-2d21a36a":"c3771aea","chunk-43bc999a":"36d32ea2","chunk-5752ca85":"70c9eee8","chunk-8404fc98":"4cb3ab9a"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-43bc999a":1,"chunk-5752ca85":1,"chunk-8404fc98":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ab51b":"31d6cfe0","chunk-2d21a36a":"31d6cfe0","chunk-43bc999a":"41b9a1c3","chunk-5752ca85":"296c6720","chunk-8404fc98":"41b9a1c3"}[e]+".css",c=o.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"15db":function(e,t,n){e.exports=n.p+"img/fish.b9e243f7.svg"},"445a":function(e,t,n){},"5be5":function(e,t,n){e.exports=n.p+"img/elephant.5f7f0187.svg"},"5c0b":function(e,t,n){"use strict";n("9c0c")},8724:function(e,t,n){},"9c0c":function(e,t,n){},a9e3:function(e,t,n){e.exports=n.p+"img/lepaya.c06554b5.png"},ae8d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Card",class:[e.flipped?"Card--flipped":"",e.small?"Card--small":"","Card--"+e.color]},[n("div",{staticClass:"inner"},[n("div",{staticClass:"front face",on:{click:e.onClick}},[e.card?[e._v(" "+e._s(void 0!==e.card.indexAnswer?e.card.indexAnswer+1:"")+" ")]:e._e()],2),n("div",{staticClass:"back face"},[e.card?[e._v(" "+e._s(e.card.value)+" ")]:e._e()],2)])])},a=[],c=n("9ab4"),i=n("1b40"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c["d"])(t,e),t.prototype.onClick=function(){this.card&&void 0===this.card.indexAnswer&&this.$emit("click",this.card)},Object(c["c"])([Object(i["b"])()],t.prototype,"card",void 0),Object(c["c"])([Object(i["b"])({default:!1})],t.prototype,"flipped",void 0),Object(c["c"])([Object(i["b"])({default:!1})],t.prototype,"small",void 0),Object(c["c"])([Object(i["b"])()],t.prototype,"color",void 0),t=Object(c["c"])([i["a"]],t),t}(i["c"]),o=s,u=o,l=(n("af2c"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"13cd30d9",null);t["a"]=d.exports},af2c:function(e,t,n){"use strict";n("445a")},b7e4:function(e,t,n){"use strict";n("8724")},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("small",[n("router-link",{attrs:{to:{name:"History"}}},[e._v(" 🕑 view history ")])],1),n("router-view")],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"/"}},[r("img",{staticClass:"mr-1",attrs:{alt:"Lepaya",src:n("a9e3"),height:"50"}}),r("h1",{staticClass:"mt-0 d-flex align-items-center justify-content-center"},[e._v(" Memory Game (Ascending) ")])])}],i=(n("5c0b"),n("2877")),s={},o=Object(i["a"])(s,a,c,!1,null,null,null),u=o.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper__app"},[n("ChooseDifficulty")],1)},f=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Difficulty"},[r("h2",{staticClass:"mt-0"},[e._v("Choose Difficulty")]),r("div",[r("router-link",{staticClass:"option easy",attrs:{to:{name:"MemoryAscendingIntro",params:{numberOfCards:4}}}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"wrapper__img"},[r("img",{attrs:{alt:"",src:n("15db"),width:"40"}})]),r("h3",{staticClass:"mb-0 mt-0"},[e._v("Easy (4 cards)")])]),r("div",{staticClass:"cards__wrapper d-flex"},e._l(4,(function(e){return r("Card",{key:e,attrs:{small:!0,color:"easy"}})})),1)]),r("router-link",{staticClass:"option medium",attrs:{to:{name:"MemoryAscendingIntro",params:{numberOfCards:8}}}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"wrapper__img"},[r("img",{attrs:{alt:"",src:n("dfe7"),width:"40"}})]),r("h3",{staticClass:"mb-0 mt-0"},[e._v("Medium (8 cards)")])]),r("div",{staticClass:"cards__wrapper d-flex"},e._l(8,(function(e){return r("Card",{key:e,attrs:{small:!0,color:"medium"}})})),1)]),r("router-link",{staticClass:"option hard",attrs:{to:{name:"MemoryAscendingIntro",params:{numberOfCards:12}}}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"wrapper__img"},[r("img",{attrs:{alt:"",src:n("5be5"),width:"40"}})]),r("h3",{staticClass:"mb-0 mt-0"},[e._v("Hard (12 cards)")])]),r("div",{staticClass:"cards__wrapper d-flex"},e._l(12,(function(e){return r("Card",{key:e,attrs:{small:!0,color:"hard"}})})),1)])],1)])},p=[],h=n("9ab4"),b=n("1b40"),v=n("ae8d"),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(h["d"])(t,e),t=Object(h["c"])([Object(b["a"])({components:{Card:v["a"]}})],t),t}(b["c"]),y=g,_=y,C=(n("b7e4"),Object(i["a"])(_,m,p,!1,null,"56cc1999",null)),O=C.exports,j={name:"Home",components:{ChooseDifficulty:O}},w=j,k=Object(i["a"])(w,d,f,!1,null,null,null),E=k.exports;r["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:E},{path:"/games/memory-ascending/:numberOfCards/intro",name:"MemoryAscendingIntro",component:function(){return n.e("chunk-2d0ab51b").then(n.bind(null,"1589"))}},{path:"/games/memory-ascending/:numberOfCards/cards",name:"MemoryAscendingCards",component:function(){return n.e("chunk-8404fc98").then(n.bind(null,"afc4"))}},{path:"/games/memory-ascending/:numberOfCards/challenge",name:"MemoryAscendingChallenge",component:function(){return n.e("chunk-43bc999a").then(n.bind(null,"cd5d"))}},{path:"/games/memory-ascending/success",name:"Success",component:function(){return n.e("chunk-2d21a36a").then(n.bind(null,"bb0d"))}},{path:"/games/memory-ascending/history",name:"History",component:function(){return n.e("chunk-5752ca85").then(n.bind(null,"e4bb"))}}],S=new l["a"]({mode:"history",base:"/",routes:x}),A=S,T=n("2f62"),N="http://localhost:8081",I={get:P,post:D,delete:M};function P(e){return Object(h["b"])(this,void 0,Promise,(function(){var t;return Object(h["e"])(this,(function(n){switch(n.label){case 0:return[4,fetch(N+e,Object(h["a"])({},R()))];case 1:return t=n.sent(),L(t)?[2,[]]:[4,U(t)];case 2:return[2,n.sent()]}}))}))}function D(e,t){return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(r){switch(r.label){case 0:return[4,fetch(N+e,Object(h["a"])(Object(h["a"])({},R()),{method:"POST",body:JSON.stringify(t||{})}))];case 1:return n=r.sent(),L(n)?[2,null]:[4,U(n)];case 2:return[2,r.sent()]}}))}))}function M(e,t){return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(r){switch(r.label){case 0:return[4,fetch(N+e,Object(h["a"])(Object(h["a"])({},R()),{method:"DELETE",body:JSON.stringify(t||{})}))];case 1:return n=r.sent(),L(n)?[2,null]:[4,U(n)];case 2:return[2,r.sent()]}}))}))}function L(e){for(var t=!1,n=0,r=e.headers.entries();n<r.length;n++){var a=r[n];if("location"===a[0]){window.location.href=a[1],t=!0;break}}return 200!==e.status&&console.error("Looks like there was a problem. Status Code: "+e.status),t}function R(){return{headers:{Accept:"application/json","Content-Type":"application/json"},method:"GET",mode:"cors",credentials:"include"}}function U(e){return Object(h["b"])(this,void 0,void 0,(function(){var t;return Object(h["e"])(this,(function(n){switch(n.label){case 0:return[4,e.json().catch((function(e){console.error("e",e)}))];case 1:return t=n.sent(),[2,t]}}))}))}var $={state:{turn:{},indexCurr:0,fail:!1},mutations:{SET_TURN:function(e,t){var n={cards:t};if(e.turn=n,e.indexCurr=0,e.fail=!1,localStorage){var r="turn-"+(new Date).getTime().toString();localStorage.setItem(r,JSON.stringify(t))}},SET_FAIL:function(e,t){e.fail=t},SET_INDEX_CURR:function(e,t){e.indexCurr=t},SET_INDEX_ANSWER:function(e,t){var n=H(e.turn.cards,t.card);null!==n&&b["c"].set(e.turn.cards[n],"indexAnswer",t.index)},UNSET_INDEX_ANSWER:function(e,t){b["c"].delete(t,"indexAnswer")}},actions:{getCards:function(e,t){return Object(h["b"])(this,void 0,Promise,(function(){var n;return Object(h["e"])(this,(function(r){switch(r.label){case 0:return[4,I.get("/api/cards/"+t)];case 1:return n=r.sent(),e.commit("SET_TURN",n),[2,new Promise((function(e){e(n)}))]}}))}))},resetAllIndexes:function(e){return Object(h["b"])(this,void 0,Promise,(function(){return Object(h["e"])(this,(function(t){return e.state.turn.cards.forEach((function(t){e.commit("UNSET_INDEX_ANSWER",t)})),[2,null]}))}))},setIndexCurr:function(e,t){e.commit("SET_INDEX_CURR",t)},setIndexAnswer:function(e,t){e.commit("SET_INDEX_ANSWER",t)},setFail:function(e,t){e.commit("SET_FAIL",t)}}};function H(e,t){var n=null;return e.every((function(e,r){return t!==e||(n=r,!1)})),n}r["a"].use(T["a"]);var X=new T["a"].Store({state:{count:0},modules:{turns:$},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:X,render:function(e){return e(u)}}).$mount("#app")},dfe7:function(e,t,n){e.exports=n.p+"img/parrot.0a30c89c.svg"}});
//# sourceMappingURL=app.f37eea50.js.map