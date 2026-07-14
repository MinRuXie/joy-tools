import{e as b,f as u,a as n,c as t,b as e,g as f,h as C,F as g,k as m,i as l,H as p,t as _}from"./index.5c1ec554.js";const L={class:"svg-icon-wrap"},S={class:"container"},V=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),E={class:"row"},T={class:"col-12 col-md-4"},B={class:"inner-wrap"},R=e("h2",{class:"inner-title"},[l("\u592A\u61F6\u4E86 "),e("code",null,"_icons.scss"),l(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),z={class:"col-12 col-md-8"},H={class:"inner-wrap"},I=e("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List",-1),M={class:"icon-wrap"},O=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 Hex (\u524D\u65B9\u7121#\u865F) \u7248\u672C",-1),D=e("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon($icon: 'dropdown', $color: 'E29C01');")],-1),N={key:0,class:"icon-list"},U={class:"icon-img-wrap"},A={class:"icon-name"},F={key:1,class:"text-body-secondary text-center"},Z={class:"icon-wrap"},G=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 CSS \u8B8A\u6578 \u7248\u672C (\u50C5\u5FEB\u901F\u65B9\u6848\u6709\u4F7F\u7528)",-1),P=e("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon-dynamic($icon: 'clock', $color: var(--color-primary));")],-1),j={key:0,class:"icon-list"},q={class:"icon-img-wrap"},J={class:"icon-name"},K={key:1,class:"text-body-secondary text-center"},Q={class:"btns-wrap fixed-bottom-wrap"},W=["disabled"],X=["disabled"],h=`// \u7BC4\u4F8B: 
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
`,se={__name:"svgIconViewer",setup(Y){const c=b(""),v=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g,k=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\("([^"]+)"\)/g,w=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*'([^']+)'/g,$=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*"([^"]+)"/g,r=u(()=>{try{let i=[],o;for(;(o=v.exec(c.value))!==null;)i.push({name:o[1],img:o[2].replace(/#\{\$color\}/g,"000000"),raw:o[2]});for(;(o=k.exec(c.value))!==null;){let s=decodeURIComponent(o[2]);s=s.replace(/##\{\$color\}/g,"@@COLOR@@"),s=s.replace(/#/g,"%23"),s=s.replace(/@@COLOR@@/g,"%23#{$color}"),s=s.replace(/'/g,'\\"').replace(/\n/g,""),i.push({name:o[1],img:s.replace(/%23#\{\$color\}/g,"%23000000"),raw:s})}return i}catch{return[]}}),d=u(()=>{try{let i=[],o;for(;(o=w.exec(c.value))!==null;)i.push({name:o[1],img:o[2],raw:o[2]});for(;(o=$.exec(c.value))!==null;){const s=decodeURIComponent(o[2]).replace(/##\{\$color\}/g,"%23#{$color}").replace(/'/g,'\\"').replace(/\n/g,"");i.push({name:o[1],img:s,raw:s})}return i}catch{return[]}});function x(){c.value=""}function y(){c.value=h}return(i,o)=>(n(),t("div",L,[e("div",S,[V,e("div",E,[e("div",T,[e("div",B,[R,f(e("textarea",{class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),placeholder:h},null,512),[[C,c.value]])])]),e("div",z,[e("div",H,[I,e("div",M,[O,D,r.value.length!=0?(n(),t("ul",N,[(n(!0),t(g,null,m(r.value,(s,a)=>(n(),t("li",{key:a,class:"icon-item"},[e("div",U,[e("div",{class:"icon-img normal",style:p({"background-image":`url('${s.img}')`})},null,4)]),e("span",A,_(s.name),1)]))),128))])):(n(),t("p",F,"\u5C1A\u7121\u8CC7\u6599"))]),e("div",Z,[G,P,d.value.length!=0?(n(),t("ul",j,[(n(!0),t(g,null,m(d.value,(s,a)=>(n(),t("li",{key:a,class:"icon-item"},[e("div",q,[e("div",{class:"icon-img dynamic",style:p({"-webkit-mask-image":`url('${s.img}')`,"mask-image":`url('${s.img}')`})},null,4)]),e("span",J,_(s.name),1)]))),128))])):(n(),t("p",K,"\u5C1A\u7121\u8CC7\u6599"))])])])])]),e("div",Q,[e("button",{type:"button",class:"btn btn-dark",onClick:y,disabled:c.value.length!=0},"\u586B\u5165\u7BC4\u4F8B",8,W),e("button",{type:"button",class:"btn btn-dark",onClick:x,disabled:!c.value},"\u91CD\u7F6E",8,X)])]))}};export{se as default};
