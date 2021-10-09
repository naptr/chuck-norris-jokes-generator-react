import{j as R,L as z,r as o,u as P,a as $,S as V,R as x,b as U,c as W,B as K}from"./vendor.aa17ae38.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};O();const e=R.exports.jsx,c=R.exports.jsxs,q=R.exports.Fragment;function A({onClickFn:t,children:r}){return e("button",{className:"flex items-center justify-center bg-yellow-700 min-w-max px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold",onClick:t,children:r})}function I(){return e("input",{type:"submit",value:"Search!",className:"flex items-center justify-center bg-yellow-700 w-24 px-3 py-2 rounded-md shadow-md text-white font-body-custom font-bold"})}const D=({isAppear:t})=>e(z,{to:"/",className:`transition-all duration-200 h-full w-16 flex items-center justify-center absolute left-0 ${t?"visible cursor-pointer":"invisible cursor-default"}`,children:c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z",fill:"#B45309"})]})}),G=({onClickFn:t})=>{const[r,n]=o.exports.useState(!1);return e("button",{type:"button",onClick:()=>{n(!r),t()},className:`h-full w-11 flex items-center justify-center absolute top-0 right-0 active:appearance-none ${r?"rotate-180 rounded-full ":""}transform transition-transform duration-200`,children:c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22",children:[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"})]})})};function _(){const{pathname:t}=P();return e("nav",{className:"w-full h-16 bg-yellow-50 shadow-md absolute items-stretch flex justify-center",children:c("div",{className:"h-full flex items-center justify-center flex-row w-full max-w-4xl relative",children:[e(D,{isAppear:t!="/"}),e("h1",{className:"text-2xl font-chuck-norris text-yellow-700",children:"CHUCK NORRIS"})]})})}const M=()=>new URLSearchParams(P().search);var X="/assets/chuck-norris.2f480c0f.png";function Q(t){return e("img",{src:X})}function T({text:t}){return c("div",{className:"w-full flex items-center flex-col justify-center space-y-4 font-semibold text-yellow-700",children:[e(Q,{}),e("span",{children:t})]})}const N="https://api.chucknorris.io/jokes",S=async(t,r)=>{try{const n=await fetch(t,r);if(n.status==200)return await n.json()}catch(n){return"error"}},w={randomJoke:{one:()=>S(`${N}/random`),byCategory:t=>S(`${N}/random?category=${t}`)},categories:()=>S(`${N}/categories`),searchJokes:t=>S(`${N}/search?query=${t}`)};function H({buttonClickFn:t,jokeValue:r}){return e("div",{className:"flex items-center flex-col justify-start space-y-6",children:c("p",{className:"font-semibold italic text-center",children:['"',r,'"']})})}function j({children:t}){return e("h1",{className:"font-semibold text-gray-300",children:t})}function J({children:t}){return e("h1",{className:"font-semibold text-red-700",children:t})}function Y(){const r=M().get("category"),[n,i]=o.exports.useState(""),[s,a]=o.exports.useState(!1),[h,p]=o.exports.useState(""),f=d=>{a(!0),w.randomJoke.byCategory(d).then(m=>{m=="error"?p("Error fetching data!"):i(m),a(!1)})};return o.exports.useEffect(()=>f(r),[]),c("div",{className:"w-full h-full flex items-center flex-col pt-2 space-y-6",children:[e(T,{text:`Category: ${r}`}),s?e(j,{children:"Loading fetching joke..."}):h==""?e("div",{className:"overflow-auto w-full",style:{maxHeight:303+"px"},children:e(H,{jokeValue:n.value})}):e(J,{children:h}),e(A,{onClickFn:()=>f(r),children:"Another!"})]})}function Z({onSubmitFn:t,inputValue:r,onChangeFn:n,inputPlaceholder:i}){return e(q,{children:c("form",{onSubmit:t,className:"flex flex-row items-center w-full justify-between h-11",children:[e("input",{type:"text",value:r,onChange:n,required:!0,placeholder:i,className:"placeholder-gray-300` transition-colors duration-300 place w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400"}),e(I,{children:"Search"})]})})}const ee=(t,r)=>{o.exports.useEffect(()=>{const n=i=>{t.current&&!t.current.contains(i.target)&&r(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t])};function te({listOfCategories:t,fetchingDataLoading:r,fetchingDataError:n}){const i=$(),[s,a]=o.exports.useState(""),[h,p]=o.exports.useState(!1),[f,d]=o.exports.useState(!1),[m,g]=o.exports.useState([]),y=o.exports.useRef(null),k=o.exports.useRef(null),L=u=>{const{target:{value:l}}=u;a(l),n!=""||F(l)},b=()=>{i.push(`/jokes/random?category=${s}`)},B=u=>{u.preventDefault(),b()},v=()=>{p(!h),d(!f)},E=u=>{const{target:{innerText:l}}=u;a(l),v()},F=u=>{const l=[];t.forEach(C=>{u.length==0||u.charCodeAt(1)==32||u.length>=1&&C.toLowerCase().includes(u.toLowerCase())&&l.push(C)}),u.length==0||u.charCodeAt(1)==32?g(t):g(l)};return ee(y,d),o.exports.useEffect(()=>(t==null?void 0:t.length)>0&&g(t),[t]),o.exports.useEffect(()=>console.log(f),[f]),c("div",{className:"w-full group relative",ref:y,children:[c("div",{id:"list-of-categories",className:`w-64 border-2 rounded-md border-gray-200 flex flex-col items-center justify-center absolute bottom-11 transform transition-all duration-300 bg-white ${f?"translate-y-0 visible opacity-100 max-h-52":"translate-y-11 h-0 invisible opacity-0"}`,children:[(n!=""||r)&&e("div",{className:"w-full h-52 flex items-center justify-center",children:r?e(j,{children:"Loading Jokes Categories..."}):n!=""?e(J,{children:n}):null}),(t==null?void 0:t.length)>0&&e("div",{className:"h-full w-full flex flex-col overflow-y-scroll scrollbar-hide",children:m.length>0?m==null?void 0:m.map((u,l)=>e("button",{ref:k,className:"w-full flex items-center justify-start font-bold hover:bg-gray-200 px-4 py-2",onClick:E,children:u},l)):e("span",{className:"flex px-4 py-2 w-full items-center justify-start text-gray-400 font-semibold",children:"No matching categories"})})]}),c("form",{onSubmit:B,className:"flex flex-row items-center w-full justify-between h-11 relative",children:[c("div",{id:"input-wrapper",className:"h-full relative",children:[e("input",{type:"text",value:s,onClickCapture:()=>d(!0),onChange:L,required:!0,placeholder:"Search jokes by category",className:"placeholder-gray-300` transition-colors duration-300 w-64 h-full px-3 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-gray-400"}),e(G,{onClickFn:v})]}),e(I,{children:"Search"})]})]})}function re(){const t=$(),[r,n]=o.exports.useState(""),[i,s]=o.exports.useState(null),[a,h]=o.exports.useState([]),[p,f]=o.exports.useState(!1),[d,m]=o.exports.useState(""),[g,y]=o.exports.useState(!1),[k,L]=o.exports.useState(""),b=()=>{y(!0),w.randomJoke.one().then(l=>{l=="error"?L("Error fetching data!"):s(l),y(!1)})},B=()=>{f(!0),w.categories().then(l=>{l=="error"?m("Error fetching categories!"):h(l),f(!1)})},v=()=>{b(),B()},E=l=>{const{target:{value:C}}=l;n(C)},F=()=>{t.push(`/jokes/search?context=${r}`)},u=l=>{l.preventDefault(),F()};return o.exports.useEffect(()=>v(),[]),c("div",{className:"w-full h-full flex flex-col items-center space-y-8",children:[e(Z,{onSubmitFn:u,inputValue:r,onChangeFn:E,inputPlaceholder:"Search jokes by text"}),c("div",{id:"random-joke-wrapper",className:"flex items-center flex-col justify-start flex-grow space-y-6",children:[e(Q,{className:"w-full"}),g?e(j,{children:"Fetching random joke..."}):k==""?e(H,{jokeValue:i==null?void 0:i.value}):e(J,{children:k}),e(A,{onClickFn:b,children:"Another!"})]}),e(te,{listOfCategories:a,fetchingDataError:d,fetchingDataLoading:p})]})}function oe(){const r=M().get("context"),[n,i]=o.exports.useState([]),[s,a]=o.exports.useState(""),[h,p]=o.exports.useState(!1),f=()=>{p(!0),w.searchJokes(r).then(d=>{d=="error"?a("Error fetching data!"):i(d.result),p(!1)})};return o.exports.useEffect(()=>f(),[]),c("div",{className:"w-full h-full flex items-center flex-col pt-2 space-y-6",children:[e(T,{text:`Search Text: ${r}`}),c("div",{id:"jokes-found-wrapper",className:"w-full flex items-center flex-col space-y-4 overflow-auto scrollbar-hide",style:{maxHeight:487+"px"},children:[h&&e(j,{children:"Fetching jokes..."}),s&&e(J,{children:"Error fetching jokesx"}),n==null?void 0:n.map(d=>e(H,{jokeValue:d.value}))]})]})}function ne(){const t=$();return c("div",{className:"w-full h-full flex flex-col",children:[c("div",{className:"w-full flex-grow flex items-center justify-center flex-row space-x-4 text-gray-400",children:[e("span",{className:"text-4xl",children:"404 "}),e("span",{className:"block h-10 w-0.5 bg-gray-400"}),e("span",{children:" Page Not Found"})]}),e("div",{className:"h-11 w-full flex items-center justify-center",children:e(A,{onClickFn:()=>t.push("/"),children:"Back to Home Page"})})]})}function se(){const t=()=>{w.randomJoke.one().then(r=>{})};return o.exports.useEffect(()=>t(),[]),e(q,{children:"TestPage"})}function ae(){return c("section",{className:"flex flex-col items-center relative sm:w-411 sm:shadow-md",style:{height:731+"px"},children:[e("main",{className:"w-full flex-grow order-4 items-stretch mt-16 pb-4 pt-6 px-5 font-body-custom",children:c(V,{children:[e(x,{path:"/",exact:!0,children:e(re,{})}),e(x,{exact:!0,path:"/jokes/search",children:e(oe,{})}),e(x,{path:"/jokes/random",children:e(Y,{})}),e(x,{path:"/test",children:e(se,{})}),e(x,{path:"*",children:e(ne,{})})]})}),e(_,{})]})}U.render(e(W.StrictMode,{children:e(K,{children:e(ae,{})})}),document.getElementById("react-root"));
