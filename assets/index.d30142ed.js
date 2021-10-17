import{j as F,L as W,r as n,u as P,a as H,S as z,R as v,b as V,c as T,H as U}from"./vendor.f3110a35.js";const K=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};K();const e=F.exports.jsx,c=F.exports.jsxs,O=F.exports.Fragment;function $({onClickFn:t,children:r}){return e("button",{className:"flex items-center justify-center bg-yellow-700 min-w-max px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold",onClick:t,children:r})}function A(){return e("input",{type:"submit",value:"Search!",className:"cursor-pointer flex items-center justify-center bg-yellow-700 w-24 px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold"})}const D=({isAppear:t})=>e(W,{to:"/",className:`transition-all duration-200 h-full w-16 flex items-center justify-center absolute left-0 ${t?"visible cursor-pointer":"invisible cursor-default"}`,children:c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z",fill:"#B45309"})]})}),G=({onClickFn:t})=>{const[r,o]=n.exports.useState(!1);return e("button",{type:"button",onClick:()=>{o(!r),t()},className:`h-full w-11 flex items-center justify-center absolute top-0 right-0 active:appearance-none ${r?"rotate-180 rounded-full ":""}transform transition-transform duration-200`,children:c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22",children:[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"})]})})};function _(){const{pathname:t}=P();return e("nav",{className:"w-full h-16 bg-yellow-50 shadow-md absolute items-stretch flex justify-center",children:c("div",{className:"h-full flex items-center justify-center flex-row w-full max-w-4xl relative",children:[e(D,{isAppear:t!="/"}),e("h1",{className:"text-2xl font-chuck-norris text-yellow-700",children:"CHUCK NORRIS"})]})})}const I=()=>new URLSearchParams(P().search);var X="/chuck-norris-jokes-generator-react/assets/chuck-norris.2f480c0f.png";function Q(){return e("img",{src:X})}function M({text:t}){return c("div",{className:"w-full flex items-center flex-col justify-center space-y-4 font-semibold text-yellow-700",children:[e(Q,{}),e("span",{children:t})]})}const N="https://api.chucknorris.io/jokes",S=async(t,r)=>{try{const o=await fetch(t,r);if(o.status==200)return await o.json();if(o.status==400)return"bad request";if(o.status==404)return"not found"}catch(o){return"error"}},j={randomJoke:{one:()=>S(`${N}/random`),byCategory:t=>S(`${N}/random?category=${t}`)},categories:()=>S(`${N}/categories`),searchJokes:t=>S(`${N}/search?query=${t}`)};function q({jokeValue:t}){return e("div",{className:"flex items-center flex-col justify-start space-y-6",children:c("p",{className:"font-semibold italic text-center",children:['"',t,'"']})})}function C({children:t}){return e("h1",{className:"font-semibold text-gray-300",children:t})}function J({children:t}){return e("h1",{className:"font-semibold text-red-700 text-center text-sm",children:t})}function Y(){const r=I().get("category"),[o,i]=n.exports.useState(""),[s,a]=n.exports.useState(!1),[d,p]=n.exports.useState(""),f=u=>{a(!0),j.randomJoke.byCategory(u).then(m=>{m=="error"?p("Error fetching data!"):m=="not found"?p("Error! No jokes found. Wrong category, I guess."):i(m),a(!1)})};return n.exports.useEffect(()=>f(r),[]),c("div",{className:"w-full h-full flex items-center flex-col pt-2 space-y-6",children:[e(M,{text:`Category: ${r}`}),s?e(C,{children:"Loading fetching joke..."}):d==""?e("div",{className:"overflow-auto w-full scrollbar-hide",style:{maxHeight:303+"px"},children:e(q,{jokeValue:o.value})}):e(J,{children:d}),e($,{onClickFn:()=>f(r),children:"Another!"})]})}function Z({onSubmitFn:t,inputValue:r,onChangeFn:o,inputPlaceholder:i}){return e(O,{children:c("form",{onSubmit:t,className:"flex flex-row items-center w-full justify-between h-11",children:[e("input",{type:"text",value:r,onChange:o,required:!0,placeholder:i,className:"placeholder-gray-300` transition-colors duration-300 place w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400"}),e(A,{children:"Search"})]})})}const ee=(t,r)=>{n.exports.useEffect(()=>{const o=i=>{t.current&&!t.current.contains(i.target)&&r(!1)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[t])};function te({listOfCategories:t,fetchingDataLoading:r,fetchingDataError:o}){const i=H(),[s,a]=n.exports.useState(""),[d,p]=n.exports.useState(!1),[f,u]=n.exports.useState(!1),[m,y]=n.exports.useState([]),x=n.exports.useRef(null),g=n.exports.useRef(null),L=h=>{const{target:{value:l}}=h;a(l),o!=""||E(l)},w=()=>{i.push(`/jokes/random?category=${s}`)},B=h=>{h.preventDefault(),w()},k=()=>{p(!d),u(!f)},R=h=>{const{target:{innerText:l}}=h;a(l),k()},E=h=>{const l=[];t.filter(b=>{b.startsWith(h)&&l.push(b)}),h.length>=1?y(l):y(t)};return ee(x,u),n.exports.useEffect(()=>(t==null?void 0:t.length)>0&&y(t),[t]),c("div",{className:"w-full group relative",ref:x,children:[c("div",{id:"list-of-categories",className:`w-64 border-2 rounded-md border-gray-200 flex flex-col items-center justify-center absolute bottom-11 transform transition-all duration-300 bg-white ${f?"translate-y-0 visible opacity-100 max-h-52":"translate-y-11 h-0 invisible opacity-0"}`,children:[(o!=""||r)&&e("div",{className:"w-full h-52 flex items-center justify-center",children:r?e(C,{children:"Loading Jokes Categories..."}):o!=""?e(J,{children:o}):null}),(t==null?void 0:t.length)>0&&e("div",{className:"h-full w-full flex flex-col overflow-y-scroll scrollbar-hide",children:m.length>0?m==null?void 0:m.map((h,l)=>e("button",{ref:g,className:"w-full flex items-center justify-start font-bold hover:bg-gray-200 px-4 py-2",onClick:R,children:h},l)):e("span",{className:"flex px-4 py-2 w-full items-center justify-start text-gray-400 font-semibold",children:"No matching categories"})})]}),c("form",{onSubmit:B,className:"flex flex-row items-center w-full justify-between h-11 relative",children:[c("div",{id:"input-wrapper",className:"h-full relative",children:[e("input",{type:"text",value:s,onClickCapture:()=>u(!0),onChange:L,required:!0,placeholder:"Search jokes by category",className:"placeholder-gray-300` transition-colors duration-300 w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400"}),e(G,{onClickFn:k})]}),e(A,{children:"Search"})]})]})}function re(){const t=H(),[r,o]=n.exports.useState(""),[i,s]=n.exports.useState(null),[a,d]=n.exports.useState([]),[p,f]=n.exports.useState(!1),[u,m]=n.exports.useState(""),[y,x]=n.exports.useState(!1),[g,L]=n.exports.useState(""),w=()=>{x(!0),j.randomJoke.one().then(l=>{l=="error"?L("Error fetching data!"):s(l),x(!1)})},B=()=>{f(!0),j.categories().then(l=>{l=="error"?m("Error fetching categories!"):d(l),f(!1)})},k=()=>{w(),B()},R=l=>{const{target:{value:b}}=l;o(b)},E=()=>{t.push(`/jokes/search?context=${r}`)},h=l=>{l.preventDefault(),E()};return n.exports.useEffect(()=>k(),[]),c("div",{className:"w-full h-full flex flex-col items-center space-y-8",children:[e(Z,{onSubmitFn:h,inputValue:r,onChangeFn:R,inputPlaceholder:"Search jokes by text"}),c("div",{id:"random-joke-wrapper",className:"flex items-center flex-col justify-start flex-grow space-y-6",children:[e(Q,{className:"w-full"}),e("div",{className:"w-full overflow-auto scrollbar-hide",style:{maxHeight:325+"px"},children:y?e(C,{children:"Fetching random joke..."}):g==""?e(q,{jokeValue:i==null?void 0:i.value}):e(J,{children:g})}),e($,{onClickFn:w,children:"Another!"})]}),e(te,{listOfCategories:a,fetchingDataError:u,fetchingDataLoading:p})]})}function oe(){const r=I().get("context"),[o,i]=n.exports.useState([]),[s,a]=n.exports.useState(""),[d,p]=n.exports.useState(!1),f=()=>{p(!0),j.searchJokes(r).then(u=>{u=="error"?a("Error fetching data!"):u=="bad request"?a("Bad Request: Query must be between 3 and 120 characters."):i(u.result),p(!1)})};return n.exports.useEffect(()=>f(),[]),c("div",{className:"w-full h-full flex items-center flex-col pt-2 space-y-6",children:[e(M,{text:`Search Text: ${r}`}),c("div",{id:"jokes-found-wrapper",className:"w-full flex items-center flex-col space-y-4 overflow-auto scrollbar-hide",style:{maxHeight:487+"px"},children:[d&&e(C,{children:"Fetching jokes..."}),s&&e(J,{children:s}),o==null?void 0:o.map(u=>e(q,{jokeValue:u.value}))]})]})}function se(){const t=H();return c("div",{className:"w-full h-full flex flex-col",children:[c("div",{className:"w-full flex-grow flex items-center justify-center flex-row space-x-4 text-gray-400",children:[e("span",{className:"text-4xl",children:"404 "}),e("span",{className:"block h-10 w-0.5 bg-gray-400"}),e("span",{children:" Page Not Found"})]}),e("div",{className:"h-11 w-full flex items-center justify-center",children:e($,{onClickFn:()=>t.push("/"),children:"Back to Home Page"})})]})}function ne(){return c("section",{className:"flex flex-col items-center relative sm:w-411 sm:h-731 sm:shadow-md h-screen",children:[e("main",{className:"w-full flex-grow order-4 items-stretch mt-16 pb-4 pt-6 px-5 font-body-custom",children:c(z,{children:[e(v,{path:"/",exact:!0,children:e(re,{})}),e(v,{exact:!0,path:"/jokes/search",children:e(oe,{})}),e(v,{path:"/jokes/random",children:e(Y,{})}),e(v,{path:"*",children:e(se,{})})]})}),e(_,{})]})}V.render(e(T.StrictMode,{children:e(U,{basename:"/",children:e(ne,{})})}),document.getElementById("react-root"));
