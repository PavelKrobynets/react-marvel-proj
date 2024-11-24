"use strict";(self.webpackChunkreact_marvel_proj=self.webpackChunkreact_marvel_proj||[]).push([[175],{973:(e,s,t)=>{t.d(s,{A:()=>i});const a=t.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=t.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=t(579);const i=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:a,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:c,alt:"Avengers logo"})]})},523:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(579);function c(){return(0,a.jsx)("div",{className:"errorMessage",children:(0,a.jsx)("img",{src:"https://media.tenor.com/8ND8TbjZqh0AAAAi/error.gif",alt:"error"})})}},637:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t(973),c=t(43),n=t(475),i=t(897),r=t(656),o=t(579);function l(){const[e,s]=(0,c.useState)([]),[t,l]=(0,c.useState)(8),{getAllComics:d,loadMore:m,listLoaded:u,process:h,setProcess:p}=(0,i.A)();(0,c.useEffect)((()=>{g(t,!1)}),[]);const g=(e,t)=>{d(e,t).then(s).then((()=>{p("confirmed")}))};return(0,o.jsxs)("div",{className:"comics",children:[(0,o.jsx)(a.A,{}),(0,o.jsx)("div",{className:"comics__list",children:(0,r.A)(m,h,(()=>function(e){const s=e.map((e=>(0,o.jsx)("li",{className:"comics__item",children:(0,o.jsxs)(n.N_,{to:"/comics/".concat(e.id),children:[(0,o.jsx)("div",{className:"comics__item-img",children:(0,o.jsx)("img",{src:e.thumbnail,alt:e.name,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail?{height:"100%"}:{objectFit:"fill"}})}),(0,o.jsx)("div",{className:"comics__item-name",children:e.name}),(0,o.jsx)("div",{className:"comics__item-price",children:e.price})]})},e.id)));return(0,o.jsx)("ul",{className:"comics__grid",children:s})}(e)))}),u?(0,o.jsx)("button",{className:"button button__main button__long button__load",onClick:()=>(()=>{const e=t+8;l(e),g(e,!0)})(),style:!0===m?{animation:"glowing 1300ms infinite"}:{animation:"glowing"},children:(0,o.jsx)("div",{className:"inner",children:"load more"})}):null]})}var d=t(591);function m(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.m,{children:[(0,o.jsx)("meta",{name:"description",content:"Page with comics list"}),(0,o.jsx)("title",{children:"Marvel comics list"})]}),(0,o.jsx)(l,{})]})}},897:(e,s,t)=>{t.d(s,{A:()=>c});var a=t(43);function c(){const{request:e,clearError:s,process:t,setProcess:c}=function(){const[e,s]=(0,a.useState)("waiting"),t=(0,a.useCallback)((async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};c();try{const s=await fetch(e,{method:t,body:a,headers:n});if(!s.ok)throw new Error(s.statusText);return await s.json()}catch(i){throw s("error"),i}}),[]),c=(0,a.useCallback)((()=>{s("loading")}),[]);return{request:t,clearError:c,process:e,setProcess:s}}(),[n,i]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),l="https://gateway.marvel.com:443/v1/public/",d="apikey=44c2cf8b8380798bbd06178bc0325db8";console.log("API Base URL:",l),console.log("API Key:",d);const m=e=>{const s=""!==e.description?e.description.slice(0,140)+"...":"Hero have no description";return{id:e.id,name:e.name,description:s,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},u=e=>({id:e.id,name:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No info about pages",language:e.textObjects.language||"en-us"});return{getAllCharacters:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;i(arguments.length>1?arguments[1]:void 0);const t=await e("".concat(l,"characters?limit=").concat(s,"&offset=210&").concat(d));return i(!1),o(!0),t.data.results.map(m)},getCharacter:async s=>{const t=await e("".concat(l,"characters/").concat(s,"?").concat(d));return m(t.data.results[0])},clearError:s,getAllComics:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;i(arguments.length>1?arguments[1]:void 0);const t=await e("".concat(l,"comics?limit=").concat(s,"&offset=2&").concat(d));return i(!1),o(!0),t.data.results.map(u)},getComic:async s=>{const t=await e("".concat(l,"comics/").concat(s,"?").concat(d));return u(t.data.results[0])},loadMore:n,listLoaded:r,getCharacterByName:async s=>(await e("".concat(l,"characters?name=").concat(s,"&").concat(d))).data.results.map(m),process:t,setProcess:c}}},656:(e,s,t)=>{t.d(s,{A:()=>r});var a=t(579);function c(){return(0,a.jsx)("div",{className:"loader"})}var n=t(523);const i=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,a.jsxs)("div",{className:"skeleton",children:[(0,a.jsxs)("div",{className:"pulse skeleton__header",children:[(0,a.jsx)("div",{className:"pulse skeleton__circle"}),(0,a.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"})]})]});function r(e,s,t,r){switch(s){case"waiting":return(0,a.jsx)(i,{});case"loading":return e?(0,a.jsx)(t,{...r}):(0,a.jsx)(c,{});case"confirmed":return(0,a.jsx)(t,{...r});case"error":return(0,a.jsx)(n.A,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=175.2ee2d30c.chunk.js.map