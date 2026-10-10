import{e as r,f as w,a as t,c as n,b as e,g as N,h as R,F as x,k as $,i as a,t as g,u as d,x as v,H as b}from"./index.711d5321.js";const z={class:"svg-icon-wrap"},H={class:"container"},I=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),M={class:"row"},O={class:"col-12 col-md-3"},D={class:"inner-wrap"},U=e("h2",{class:"inner-title text-start"},[a("\u592A\u61F6\u4E86"),e("br"),e("code",null,"_icons.scss"),a(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),A={class:"col-12 col-md-9"},F={class:"inner-wrap"},Z=e("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List (\u9EDE\u64CA\u53EF\u8907\u88FD^0^)",-1),G={class:"icon-wrap"},P=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 Hex (\u524D\u65B9\u7121#\u865F) \u7248\u672C",-1),j=e("p",null,[a("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon($icon: 'dropdown', $color: '000000');")],-1),q={key:0,class:"icon-list"},J=["onClick"],K={class:"icon-img-wrap"},Q={class:"icon-name"},W={key:0,class:"msg text-success"},X=e("span",{class:"material-symbols-rounded text-success"},"check",-1),Y={key:1,class:"text-body-secondary text-center"},ee={class:"icon-wrap"},se=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 CSS \u8B8A\u6578 \u7248\u672C (\u50C5\u5FEB\u901F\u65B9\u6848\u6709\u4F7F\u7528)",-1),oe=e("p",null,[a("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon-dynamic($icon: 'clock', $color: var(--color-primary));")],-1),ce={key:0,class:"icon-list"},te=["onClick"],ne={class:"icon-img-wrap"},le={class:"icon-name"},ae={key:0,class:"msg text-success"},ie=e("span",{class:"material-symbols-rounded text-success"},"check",-1),re={key:1,class:"text-body-secondary text-center"},de={class:"btns-wrap fixed-bottom-wrap"},ue={key:0,class:"msg text-success"},me=e("span",{class:"material-symbols-rounded text-success"},"check",-1),pe=["disabled"],_e=["disabled"],C=`// \u7BC4\u4F8B: 
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
`,he={__name:"svgIconViewer",setup(ge){const l=r(""),f=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g,L=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\("([^"]+)"\)/g,S=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*'([^']+)'/g,T=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*"([^"]+)"/g,h=w(()=>{try{let c=[],o;for(;(o=f.exec(l.value))!==null;)c.push({name:o[1],img:o[2].replace(/#\{\$color\}/g,"000000"),raw:o[2]});for(;(o=L.exec(l.value))!==null;){let s=decodeURIComponent(o[2]);s=s.replace(/##\{\$color\}/g,"@@COLOR@@"),s=s.replace(/#/g,"%23"),s=s.replace(/@@COLOR@@/g,"%23#{$color}"),s=s.replace(/'/g,'\\"').replace(/\n/g,""),c.push({name:o[1],img:s.replace(/%23#\{\$color\}/g,"%23000000"),raw:s})}return c}catch{return[]}}),k=w(()=>{try{let c=[],o;for(;(o=S.exec(l.value))!==null;)c.push({name:o[1],img:o[2],raw:o[2]});for(;(o=T.exec(l.value))!==null;){const s=decodeURIComponent(o[2]).replace(/##\{\$color\}/g,"%23#{$color}").replace(/'/g,'\\"').replace(/\n/g,"");c.push({name:o[1],img:s,raw:s})}return c}catch{return[]}}),p=r(!1);let u=r(""),m=r(""),_=r("");async function y(c,o){u.value=c,m.value=o;let s="";switch(o){case"normal":s=`@include icon($icon: '${c}', $color: '000000');`;break;case"dynamic":s=`@include icon-dynamic($icon: '${c}', $color: var(--color-primary));`;break}try{await navigator.clipboard.writeText(s),p.value=!0,_.value=s}catch(i){console.error("\u8907\u88FD\u6587\u5B57\u5931\u6557",i)}}function V(){l.value="",p.value=!1,_.value="",u.value="",m.value=""}function B(){l.value=C}return(c,o)=>(t(),n("div",z,[e("div",H,[I,e("div",M,[e("div",O,[e("div",D,[U,N(e("textarea",{class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>l.value=s),placeholder:C},null,512),[[R,l.value]])])]),e("div",A,[e("div",F,[Z,e("div",G,[P,j,h.value.length!=0?(t(),n("ul",q,[(t(!0),n(x,null,$(h.value,(s,i)=>(t(),n("li",{key:i,class:"icon-item click-copy",onClick:E=>y(s.name,"normal")},[e("div",K,[e("div",{class:"icon-img normal",style:b({"background-image":`url('${s.img}')`})},null,4)]),e("div",null,[e("span",Q,g(s.name),1),d(m)=="normal"&&s.name==d(u)?(t(),n("div",W,[X,a(" Copy! ")])):v("",!0)])],8,J))),128))])):(t(),n("p",Y,"\u5C1A\u7121\u8CC7\u6599"))]),e("div",ee,[se,oe,k.value.length!=0?(t(),n("ul",ce,[(t(!0),n(x,null,$(k.value,(s,i)=>(t(),n("li",{key:i,class:"icon-item click-copy",onClick:E=>y(s.name,"dynamic")},[e("div",ne,[e("div",{class:"icon-img dynamic",style:b({"-webkit-mask-image":`url('${s.img}')`,"mask-image":`url('${s.img}')`})},null,4)]),e("div",null,[e("span",le,g(s.name),1),d(m)=="dynamic"&&s.name==d(u)?(t(),n("div",ae,[ie,a(" Copy! ")])):v("",!0)])],8,te))),128))])):(t(),n("p",re,"\u5C1A\u7121\u8CC7\u6599"))])])])])]),e("div",de,[p.value?(t(),n("div",ue,[me,a(" \u5DF2\u8907\u88FD "+g(d(_)),1)])):v("",!0),e("button",{type:"button",class:"btn btn-dark",onClick:B,disabled:l.value.length!=0},"\u586B\u5165\u7BC4\u4F8B",8,pe),e("button",{type:"button",class:"btn btn-dark",onClick:V,disabled:!l.value},"\u5168\u90E8\u91CD\u7F6E",8,_e)])]))}};export{he as default};
