import{e as b,f as u,a as c,c as t,b as e,g as f,h as C,F as m,k as g,i as l,H as p,t as _}from"./index.66d65674.js";const S={class:"svg-icon-wrap"},L={class:"container"},V=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),E={class:"row"},T={class:"col-12 col-md-4"},B={class:"inner-wrap"},z=e("h2",{class:"inner-title"},[l("\u592A\u61F6\u4E86 "),e("code",null,"_icons.scss"),l(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),H={class:"col-12 col-md-8"},I={class:"inner-wrap"},M=e("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List",-1),D={class:"icon-wrap"},N=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 Hex (\u524D\u65B9\u7121#\u865F) \u7248\u672C",-1),R=e("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon($icon: 'dropdown', $color: 'E29C01');")],-1),U={key:0,class:"icon-list"},A={class:"icon-img-wrap"},F={class:"icon-name"},Z={key:1,class:"text-body-secondary text-center"},G={class:"icon-wrap"},P=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 CSS \u8B8A\u6578 \u7248\u672C (\u50C5\u5FEB\u901F\u65B9\u6848\u6709\u4F7F\u7528)",-1),j=e("p",null,[l("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon-dynamic($icon: 'clock', $color: var(--color-primary));")],-1),q={key:0,class:"icon-list"},J={class:"icon-img-wrap"},K={class:"icon-name"},O={key:1,class:"text-body-secondary text-center"},Q={class:"btns-wrap fixed-bottom-wrap"},W=["disabled"],X=["disabled"],h=`// \u7BC4\u4F8B: 
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
`,se={__name:"svgIconViewer",setup(Y){const n=b(""),v=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g,k=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\("([^"]+)"\)/g,w=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*'([^']+)'/g,$=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*"([^"]+)"/g,r=u(()=>{try{let i=[],s;for(;(s=v.exec(n.value))!==null;)i.push({name:s[1],img:s[2].replace(/#\{\$color\}/g,"000000"),raw:s[2]});for(;(s=k.exec(n.value))!==null;){const o=decodeURIComponent(s[2]).replace(/##\{\$color\}/g,"%23#{$color}").replace(/'/g,'\\"').replace(/\n/g,"");i.push({name:s[1],img:o.replace(/%23#\{\$color\}/g,"%23000000"),raw:o})}return i}catch{return[]}}),d=u(()=>{try{let i=[],s;for(;(s=w.exec(n.value))!==null;)i.push({name:s[1],img:s[2],raw:s[2]});for(;(s=$.exec(n.value))!==null;){const o=decodeURIComponent(s[2]).replace(/##\{\$color\}/g,"%23#{$color}").replace(/'/g,'\\"').replace(/\n/g,"");i.push({name:s[1],img:o,raw:o})}return i}catch{return[]}});function x(){n.value=""}function y(){n.value=h}return(i,s)=>(c(),t("div",S,[e("div",L,[V,e("div",E,[e("div",T,[e("div",B,[z,f(e("textarea",{class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),placeholder:h},null,512),[[C,n.value]])])]),e("div",H,[e("div",I,[M,e("div",D,[N,R,r.value.length!=0?(c(),t("ul",U,[(c(!0),t(m,null,g(r.value,(o,a)=>(c(),t("li",{key:a,class:"icon-item"},[e("div",A,[e("div",{class:"icon-img normal",style:p({"background-image":`url('${o.img}')`})},null,4)]),e("span",F,_(o.name),1)]))),128))])):(c(),t("p",Z,"\u5C1A\u7121\u8CC7\u6599"))]),e("div",G,[P,j,d.value.length!=0?(c(),t("ul",q,[(c(!0),t(m,null,g(d.value,(o,a)=>(c(),t("li",{key:a,class:"icon-item"},[e("div",J,[e("div",{class:"icon-img dynamic",style:p({"-webkit-mask-image":`url('${o.img}')`,"mask-image":`url('${o.img}')`})},null,4)]),e("span",K,_(o.name),1)]))),128))])):(c(),t("p",O,"\u5C1A\u7121\u8CC7\u6599"))])])])])]),e("div",Q,[e("button",{type:"button",class:"btn btn-dark",onClick:y,disabled:n.value.length!=0},"\u586B\u5165\u7BC4\u4F8B",8,W),e("button",{type:"button",class:"btn btn-dark",onClick:x,disabled:!n.value},"\u91CD\u7F6E",8,X)])]))}};export{se as default};
