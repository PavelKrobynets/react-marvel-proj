"use strict";(self.webpackChunkreact_marvel_proj=self.webpackChunkreact_marvel_proj||[]).push([[225],{973:(e,s,c)=>{c.d(s,{A:()=>r});const a=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",t=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=c(579);const r=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:a,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:t,alt:"Avengers logo"})]})},523:(e,s,c)=>{c.d(s,{A:()=>t});var a=c(579);function t(){return(0,a.jsx)("div",{className:"errorMessage",children:(0,a.jsx)("img",{src:"https://media.tenor.com/8ND8TbjZqh0AAAAi/error.gif",alt:"error"})})}},586:(e,s,c)=>{c.d(s,{A:()=>m});var a=c(216),t=c(475),n=c(43),r=c(591),i=c(897),o=c(973),l=c(656),d=c(579);function m(e){const{itemId:s}=(0,a.g)(),[c,t]=(0,n.useState)(null),{getComic:r,getCharacter:m,process:h,setProcess:p}=(0,i.A)();(0,n.useEffect)((()=>{g()}),[s]);const g=()=>{"char"===e.char?m(s).then(t).then(p("confirmed")):r(s).then(t).then(p("confirmed"))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.A,{}),(0,l.A)(!1,h,u,c)]})}const u=e=>{let{name:s,thumbnail:c,price:a,description:n,pageCount:i,language:l}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.m,{children:[(0,d.jsx)("meta",{name:"description",content:"".concat(s," page")}),(0,d.jsx)("title",{children:s})]}),(0,d.jsx)(o.A,{}),(0,d.jsxs)("div",{className:"single-comic",children:[(0,d.jsx)("img",{src:c,alt:s,className:"single-comic__img"}),(0,d.jsxs)("div",{className:"single-comic__info",children:[(0,d.jsx)("h2",{className:"single-comic__name",children:s}),(0,d.jsx)("p",{className:"single-comic__descr",children:n}),(0,d.jsx)("p",{className:"single-comic__descr",children:i}),(0,d.jsx)("p",{className:"single-comic__descr",children:l}),(0,d.jsx)("div",{className:"single-comic__price",children:a})]}),(0,d.jsx)(t.N_,{to:a?"/comics":"/",className:"single-comic__back",children:"Back to all"})]})]})}},947:(e,s,c)=>{c.r(s),c.d(s,{default:()=>n});c(605);var a=c(586),t=c(579);function n(){return(0,t.jsx)(a.A,{char:"char"})}},897:(e,s,c)=>{c.d(s,{A:()=>t});var a=c(43);function t(){const{request:e,clearError:s,process:c,setProcess:t}=function(){const[e,s]=(0,a.useState)("waiting"),c=(0,a.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t();try{const s=await fetch(e,{method:c,body:a,headers:n});if(!s.ok)throw new Error(s.statusText);return await s.json()}catch(r){throw s("error"),r}}),[]),t=(0,a.useCallback)((()=>{s("loading")}),[]);return{request:c,clearError:t,process:e,setProcess:s}}(),[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1),l="https://gateway.marvel.com:443/v1/public/",d="apikey=44c2cf8b8380798bbd06178bc0325db8";console.log("API Base URL:",l),console.log("API Key:",d);const m=e=>{const s=""!==e.description?e.description.slice(0,140)+"...":"Hero have no description";return{id:e.id,name:e.name,description:s,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},u=e=>({id:e.id,name:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No info about pages",language:e.textObjects.language||"en-us"});return{getAllCharacters:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;r(arguments.length>1?arguments[1]:void 0);const c=await e("".concat(l,"characters?limit=").concat(s,"&offset=210&").concat(d));return r(!1),o(!0),c.data.results.map(m)},getCharacter:async s=>{const c=await e("".concat(l,"characters/").concat(s,"?").concat(d));return m(c.data.results[0])},clearError:s,getAllComics:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;r(arguments.length>1?arguments[1]:void 0);const c=await e("".concat(l,"comics?limit=").concat(s,"&offset=2&").concat(d));return r(!1),o(!0),c.data.results.map(u)},getComic:async s=>{const c=await e("".concat(l,"comics/").concat(s,"?").concat(d));return u(c.data.results[0])},loadMore:n,listLoaded:i,getCharacterByName:async s=>(await e("".concat(l,"characters?name=").concat(s,"&").concat(d))).data.results.map(m),process:c,setProcess:t}}},656:(e,s,c)=>{c.d(s,{A:()=>i});var a=c(579);function t(){return(0,a.jsx)("div",{className:"loader"})}var n=c(523);const r=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,a.jsxs)("div",{className:"skeleton",children:[(0,a.jsxs)("div",{className:"pulse skeleton__header",children:[(0,a.jsx)("div",{className:"pulse skeleton__circle"}),(0,a.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"})]})]});function i(e,s,c,i){switch(s){case"waiting":return(0,a.jsx)(r,{});case"loading":return e?(0,a.jsx)(c,{...i}):(0,a.jsx)(t,{});case"confirmed":return(0,a.jsx)(c,{...i});case"error":return(0,a.jsx)(n.A,{});default:throw new Error("Unexpected process state")}}},605:()=>{}}]);
//# sourceMappingURL=225.bf9c2d99.chunk.js.map