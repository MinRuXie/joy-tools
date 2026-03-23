import{e as d,a as o,c as n,b as s,g as k,h as w,F as _,k as m,i as a,H as v,t as g}from"./index.3200330d.js";const b={class:"svg-icon-wrap"},x={class:"container"},$=s("div",{class:"row"},[s("div",{class:"col-12"},[s("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),y={class:"row"},f={class:"col-12 col-md-5"},C={class:"inner-wrap"},S=s("h2",{class:"inner-title"},[a("\u592A\u61F6\u4E86 "),s("code",null,"_icons.scss"),a(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),L={class:"col-12 col-md-7"},V={class:"inner-wrap"},B=s("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List",-1),z={class:"icon-wrap"},H=s("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 Hex (\u524D\u65B9\u7121#\u865F) \u7248\u672C",-1),M=s("p",null,[a("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),s("code",null,"@include icon($icon: 'dropdown', $color: 'E29C01');")],-1),T={key:0,class:"icon-list"},D={class:"icon-img-wrap"},E={class:"icon-name"},I={key:1,class:"text-body-secondary text-center"},N={class:"icon-wrap"},F=s("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 CSS \u8B8A\u6578 \u7248\u672C (\u50C5\u5FEB\u901F\u65B9\u6848\u6709\u4F7F\u7528)",-1),Z=s("p",null,[a("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),s("code",null,"@include icon-dynamic($icon: 'clock', $color: var(--color-primary));")],-1),G={key:0,class:"icon-list"},P={class:"icon-img-wrap"},R={class:"icon-name"},U={key:1,class:"text-body-secondary text-center"},j={class:"btns-wrap fixed-bottom-wrap"},q=["disabled"],A=["disabled"],J=`\u7BC4\u4F8B: 
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
`,Q={__name:"svgIconViewer",setup(K){const i=d(""),c=d([]),t=d([]);function p(){c.value=[],t.value=[];const u=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g,l=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*'([^']+)'/g;let e;for(;(e=u.exec(i.value))!==null;)c.value.push({name:e[1],img:e[2].replace(/#\{\$color\}/g,"000000"),raw:e[2]});for(;(e=l.exec(i.value))!==null;)t.value.push({name:e[1],img:e[2],raw:e[2]})}function h(){i.value="",c.value=[],t.value=[]}return(u,l)=>(o(),n("div",b,[s("div",x,[$,s("div",y,[s("div",f,[s("div",C,[S,k(s("textarea",{class:"form-control","onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),placeholder:J},null,512),[[w,i.value]])])]),s("div",L,[s("div",V,[B,s("div",z,[H,M,c.value.length!=0?(o(),n("ul",T,[(o(!0),n(_,null,m(c.value,(e,r)=>(o(),n("li",{key:r,class:"icon-item"},[s("div",D,[s("div",{class:"icon-img normal",style:v({"background-image":`url('${e.img}')`})},null,4)]),s("span",E,g(e.name),1)]))),128))])):(o(),n("p",I,"\u5C1A\u7121\u8CC7\u6599"))]),s("div",N,[F,Z,t.value.length!=0?(o(),n("ul",G,[(o(!0),n(_,null,m(t.value,(e,r)=>(o(),n("li",{key:r,class:"icon-item"},[s("div",P,[s("div",{class:"icon-img dynamic",style:v({"-webkit-mask-image":`url('${e.img}')`,"mask-image":`url('${e.img}')`})},null,4)]),s("span",R,g(e.name),1)]))),128))])):(o(),n("p",U,"\u5C1A\u7121\u8CC7\u6599"))])])])])]),s("div",j,[s("button",{type:"button",class:"btn btn-dark",onClick:p,disabled:!i.value},"\u9810\u89BD",8,q),s("button",{type:"button",class:"btn btn-dark",onClick:h,disabled:!i.value},"\u91CD\u7F6E",8,A)])]))}};export{Q as default};
