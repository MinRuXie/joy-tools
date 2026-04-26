import{e as w,f as m,a as o,c as n,b as s,g as y,h as x,F as u,k as _,i as l,H as g,t as p}from"./index.18a61146.js";const $={class:"svg-icon-wrap"},b={class:"container"},f=s("div",{class:"row"},[s("div",{class:"col-12"},[s("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),C={class:"row"},S={class:"col-12 col-md-4"},L={class:"inner-wrap"},V=s("h2",{class:"inner-title"},[l("\u592A\u61F6\u4E86 "),s("code",null,"_icons.scss"),l(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),B={class:"col-12 col-md-8"},z={class:"inner-wrap"},H=s("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List",-1),M={class:"icon-wrap"},T=s("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 Hex (\u524D\u65B9\u7121#\u865F) \u7248\u672C",-1),D=s("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),s("code",null,"@include icon($icon: 'dropdown', $color: 'E29C01');")],-1),E={key:0,class:"icon-list"},N={class:"icon-img-wrap"},A={class:"icon-name"},F={key:1,class:"text-body-secondary text-center"},I={class:"icon-wrap"},Z=s("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 CSS \u8B8A\u6578 \u7248\u672C (\u50C5\u5FEB\u901F\u65B9\u6848\u6709\u4F7F\u7528)",-1),G=s("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),s("code",null,"@include icon-dynamic($icon: 'clock', $color: var(--color-primary));")],-1),P={key:0,class:"icon-list"},R={class:"icon-img-wrap"},U={class:"icon-name"},j={key:1,class:"text-body-secondary text-center"},q={class:"btns-wrap fixed-bottom-wrap"},J=["disabled"],K=`\u7BC4\u4F8B: 
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
}
  
// \u65B0\u7684 mixin\uFF0C\u5C08\u9580\u7D66 CSS \u8B8A\u6578\u7528
// \u4F7F\u7528\u4F8B\u5982 @include icon-dynamic($icon: 'clock', $color: var(--color-primary));
@mixin icon-dynamic(
  $icon: 'link',
  $color: currentColor // \u9810\u8A2D\u53EF\u4EE5\u4F7F\u7528 currentColor \u6216\u50B3\u5165 var(--color-xxx)
) {
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  background-color: $color;
  $svg: null;

  // SVG \u5167\u90E8\u7684 stroke \u6216 fill \u662F\u9ED1\u8272\u7684 (\u6216\u4EFB\u4F55\u5BE6\u8272)\uFF0C\u4E0D\u80FD\u662F none
  @if $icon == 'clock' {
    $svg: 'data:image/svg+xml,<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08333 0C6.15314 0 5.23205 0.183216 4.37266 0.539187C3.51327 0.895158 2.73241 1.41691 2.07466 2.07466C0.746278 3.40304 0 5.20472 0 7.08333C0 8.96195 0.746278 10.7636 2.07466 12.092C2.73241 12.7498 3.51327 13.2715 4.37266 13.6275C5.23205 13.9835 6.15314 14.1667 7.08333 14.1667C8.96195 14.1667 10.7636 13.4204 12.092 12.092C13.4204 10.7636 14.1667 8.96195 14.1667 7.08333C14.1667 6.15314 13.9835 5.23205 13.6275 4.37266C13.2715 3.51327 12.7498 2.73241 12.092 2.07466C11.4343 1.41691 10.6534 0.895158 9.79401 0.539187C8.93462 0.183216 8.01353 0 7.08333 0ZM10.0583 10.0583L6.375 7.79167V3.54167H7.4375V7.225L10.625 9.1375L10.0583 10.0583Z" fill="black"/></svg>';
  }

  @if $svg != null {
    -webkit-mask-image: url($svg);
    mask-image: url($svg);
  }
}
`,W={__name:"svgIconViewer",setup(O){const i=w(""),v=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g,h=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*'([^']+)'/g,r=m(()=>{try{let t=[],e;for(;(e=v.exec(i.value))!==null;)t.push({name:e[1],img:e[2].replace(/#\{\$color\}/g,"000000"),raw:e[2]});return t}catch{return[]}}),d=m(()=>{try{let t=[],e;for(;(e=h.exec(i.value))!==null;)t.push({name:e[1],img:e[2],raw:e[2]});return t}catch{return[]}});function k(){i.value=""}return(t,e)=>(o(),n("div",$,[s("div",b,[f,s("div",C,[s("div",S,[s("div",L,[V,y(s("textarea",{class:"form-control","onUpdate:modelValue":e[0]||(e[0]=c=>i.value=c),placeholder:K},null,512),[[x,i.value]])])]),s("div",B,[s("div",z,[H,s("div",M,[T,D,r.value.length!=0?(o(),n("ul",E,[(o(!0),n(u,null,_(r.value,(c,a)=>(o(),n("li",{key:a,class:"icon-item"},[s("div",N,[s("div",{class:"icon-img normal",style:g({"background-image":`url('${c.img}')`})},null,4)]),s("span",A,p(c.name),1)]))),128))])):(o(),n("p",F,"\u5C1A\u7121\u8CC7\u6599"))]),s("div",I,[Z,G,d.value.length!=0?(o(),n("ul",P,[(o(!0),n(u,null,_(d.value,(c,a)=>(o(),n("li",{key:a,class:"icon-item"},[s("div",R,[s("div",{class:"icon-img dynamic",style:g({"-webkit-mask-image":`url('${c.img}')`,"mask-image":`url('${c.img}')`})},null,4)]),s("span",U,p(c.name),1)]))),128))])):(o(),n("p",j,"\u5C1A\u7121\u8CC7\u6599"))])])])])]),s("div",q,[s("button",{type:"button",class:"btn btn-dark",onClick:k,disabled:!i.value},"\u91CD\u7F6E",8,J)])]))}};export{W as default};
