import u from"./QutJzA67.js";import{z as _,D as h,h as c,E as e,i as s,t as i,k as f,j as g,g as p}from"./BlO4tDVS.js";import{u as d}from"./DJCePywR.js";import{q as y}from"./BfGgd8ho.js";import"./23_UNKEH.js";import"./BfmnzaN-.js";import"./DpdoV0jE.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./XohjeAEl.js";import"./B53XcJJ7.js";const w={key:0,class:"flow"},k=["src","alt"],j={__name:"[...slug]",async setup(v){let r,a;const n=_();console.log("Route params:",n.params);const{data:t,error:l}=([r,a]=h(async()=>d("post",async()=>{try{const o=await y("/blog").where({slug:n.params.slug[0]}).findOne();return console.log("Fetched post:",o),o}catch(o){throw console.error("Error fetching post:",o),o}})),r=await r,a(),r);return l.value?console.error("Error fetching post:",l.value):console.log("Fetched post:",t.value),(o,C)=>{const m=u;return p(),c("div",null,[e(t)?(p(),c("article",w,[s("h1",null,i(e(t).title),1),s("p",null,i(e(t).description),1),s("img",{src:e(t).image,alt:e(t).title},null,8,k),s("section",null,[f(m,{path:e(t)._path,class:"flow"},null,8,["path"])])])):g("",!0)])}}};export{j as default};
