import{_}from"./BTh5BWQi.js";import{u as m}from"./DJCePywR.js";import{q as d}from"./BfGgd8ho.js";import{D as p,h as r,F as g,G as h,E as f,i as s,g as n,t as i,k as y,w as x,q as w}from"./BlO4tDVS.js";import"./XohjeAEl.js";const k=s("h1",null,"Blog",-1),v=["src","alt"],V={__name:"index",async setup(B){let o,a;const{data:l,error:c}=([o,a]=p(async()=>m("posts-list",async()=>{try{const e=await d("/blog").find();return console.log("Fetched posts:",e),e}catch(e){throw console.error("Error fetching posts:",e),e}})),o=await o,a(),o);return c.value?console.error("Error fetching posts:",c.value):console.log("Fetched posts:",l.value),(e,E)=>{const u=_;return n(),r("div",null,[k,(n(!0),r(g,null,h(f(l),t=>(n(),r("div",{key:t.slug,class:"flow"},[s("h2",null,i(t.title),1),s("p",null,i(t.description),1),s("img",{src:t.image,alt:t.title},null,8,v),y(u,{to:`/blog/${t.slug}`},{default:x(()=>[w("Read more")]),_:2},1032,["to"])]))),128))])}}};export{V as default};
