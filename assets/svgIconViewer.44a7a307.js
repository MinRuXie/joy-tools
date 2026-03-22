import{e as d,a as t,c,b as s,g as v,h as g,F as p,k as h,i as l,H as m,t as b}from"./index.05b16d96.js";const w={class:"svg-icon-wrap"},k={class:"container"},f=s("div",{class:"row"},[s("div",{class:"col-12"},[s("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),x={class:"row"},$={class:"col-5"},y={class:"inner-wrap"},C=s("h2",{class:"inner-title"},[l("\u592A\u61F6\u4E86 "),s("code",null,"_icons.scss"),l(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),V={class:"col-7"},B={class:"inner-wrap"},L=s("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List",-1),S={class:"icon-wrap"},E={key:0,class:"icon-list"},I={class:"icon-name"},z={key:1},D=s("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),s("code",null,"@include icon($icon: 'dropdown', $color: 'E29C01');")],-1),F={class:"btns-wrap fixed-bottom-wrap"},H=["disabled"],M=["disabled"],N=`\u7BC4\u4F8B: 
// \u984F\u8272\u53EA\u80FD\u4F7F\u7528 Hex\uFF0C\u524D\u9762\u4E0D\u8981\u7528#\u5B57\u865F
// \u7BC4\u4F8B @include icon($icon: 'dropdown', $color: 'E29C01');
@mixin icon(
  $icon: 'link',
  $color: 'ffffff',
) {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @if $icon == 'dropdown' {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.13 6.81"><path d="M.37.34l5.09,5.73L10.76.34" fill="none" stroke="%23#{$color}"/></svg>');
  }
}`,R={__name:"svgIconViewer",setup(T){const o=d(""),i=d([]);function r(){const a=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g;let n;for(;(n=a.exec(o.value))!==null;){let e=n[2];e=e.replace(/#\{\$color\}/g,"000000"),i.value.push({name:n[1],img:e})}}function _(){o.value="",i.value=[]}return(a,n)=>(t(),c("div",w,[s("div",k,[f,s("div",x,[s("div",$,[s("div",y,[C,v(s("textarea",{class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e),placeholder:N},null,512),[[g,o.value]])])]),s("div",V,[s("div",B,[L,s("div",S,[i.value.length!=0?(t(),c("ul",E,[(t(!0),c(p,null,h(i.value,(e,u)=>(t(),c("li",{key:u,class:"icon-item"},[s("div",{class:"icon-img",style:m({"background-image":`url('${e.img}')`})},null,4),s("span",I,b(e.name),1)]))),128))])):(t(),c("p",z,"\u5C1A\u7121\u8CC7\u6599")),D])])])])]),s("div",F,[s("button",{type:"button",class:"btn btn-dark",onClick:r,disabled:!o.value},"\u9810\u89BD",8,H),s("button",{type:"button",class:"btn btn-dark",onClick:_,disabled:!o.value},"\u91CD\u7F6E",8,M)])]))}};export{R as default};
