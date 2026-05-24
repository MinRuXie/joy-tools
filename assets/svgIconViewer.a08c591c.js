import{e as x,f as g,a as c,c as n,b as e,g as y,h as b,F as m,k as p,t,i as a,H as _}from"./index.292ca5be.js";const f={class:"svg-icon-wrap"},C={class:"container"},S=e("div",{class:"row"},[e("div",{class:"col-12"},[e("h1",{class:"page-title"},"svg icon \u9810\u89BD\u5DE5\u5177")])],-1),L={class:"row"},V={class:"col-12 col-md-4"},T={class:"inner-wrap"},B=e("h2",{class:"inner-title"},[a("\u592A\u61F6\u4E86 "),e("code",null,"_icons.scss"),a(" \u5168\u90E8\u8CBC\u9032\u4F86\u5566\uFF01")],-1),E={class:"col-12 col-md-8"},z={class:"inner-wrap"},H=e("h2",{class:"inner-title"},"\u53EF\u4F7F\u7528\u7684 icons List",-1),I={class:"icon-wrap"},M=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 Hex (\u524D\u65B9\u7121#\u865F) \u7248\u672C",-1),D=e("p",null,[a("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon($icon: 'dropdown', $color: 'E29C01');")],-1),N={key:0,class:"icon-list"},R={class:"icon-img-wrap"},U={class:"icon-name"},A={key:1,class:"text-body-secondary text-center"},F={class:"icon-wrap"},Z=e("h3",{class:"icon-wrap-title"},"icon \u984F\u8272\u4F7F\u7528 CSS \u8B8A\u6578 \u7248\u672C (\u50C5\u5FEB\u901F\u65B9\u6848\u6709\u4F7F\u7528)",-1),G=e("p",null,[a("\u4F7F\u7528\u7BC4\u4F8B\uFF1A"),e("code",null,"@include icon-dynamic($icon: 'clock', $color: var(--color-primary));")],-1),P={key:0,class:"icon-list"},j={class:"icon-img-wrap"},q={class:"icon-name"},J={key:1,class:"text-body-secondary text-center"},K={class:"btns-wrap fixed-bottom-wrap"},O=["disabled"],Q=`\u7BC4\u4F8B: 
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
`,Y={__name:"svgIconViewer",setup(W){const i=x(""),v=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\('([^']+)'\)/g,h=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*background-image:\s*url\("([^"]+)"\)/g,w=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*'([^']+)'/g,k=/@if\s+\$icon\s+==\s+'([^']+)'\s*\{\s*\$svg:\s*"([^"]+)"/g,r=g(()=>{try{let l=[],s;for(;(s=v.exec(i.value))!==null;)l.push({name:s[1],img:s[2].replace(/#\{\$color\}/g,"000000"),raw:s[2]});for(;(s=h.exec(i.value))!==null;){const o=decodeURIComponent(s[2]).replace(/##\{\$color\}/g,"%23#{$color}").replace(/'/g,'\\"').replace(/\n/g,"");l.push({name:s[1],img:o.replace(/%23#\{\$color\}/g,"%23000000"),raw:o})}return l}catch{return[]}}),d=g(()=>{try{let l=[],s;for(;(s=w.exec(i.value))!==null;)l.push({name:s[1],img:s[2],raw:s[2]});for(;(s=k.exec(i.value))!==null;){const o=decodeURIComponent(s[2]).replace(/##\{\$color\}/g,"%23#{$color}").replace(/'/g,'\\"').replace(/\n/g,"");l.push({name:s[1],img:o,raw:o})}return l}catch{return[]}});function $(){i.value=""}return(l,s)=>(c(),n(m,null,[e("div",f,[e("div",C,[S,e("div",L,[e("div",V,[e("div",T,[B,y(e("textarea",{class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>i.value=o),placeholder:Q},null,512),[[b,i.value]])])]),e("div",E,[e("div",z,[H,e("div",I,[M,D,r.value.length!=0?(c(),n("ul",N,[(c(!0),n(m,null,p(r.value,(o,u)=>(c(),n("li",{key:u,class:"icon-item"},[e("div",R,[e("div",{class:"icon-img normal",style:_({"background-image":`url('${o.img}')`})},null,4)]),e("span",U,t(o.name),1)]))),128))])):(c(),n("p",A,"\u5C1A\u7121\u8CC7\u6599"))]),e("div",F,[Z,G,d.value.length!=0?(c(),n("ul",P,[(c(!0),n(m,null,p(d.value,(o,u)=>(c(),n("li",{key:u,class:"icon-item"},[e("div",j,[e("div",{class:"icon-img dynamic",style:_({"-webkit-mask-image":`url('${o.img}')`,"mask-image":`url('${o.img}')`})},null,4)]),e("span",q,t(o.name),1)]))),128))])):(c(),n("p",J,"\u5C1A\u7121\u8CC7\u6599"))])])])])]),e("div",K,[e("button",{type:"button",class:"btn btn-dark",onClick:$,disabled:!i.value},"\u91CD\u7F6E",8,O)])]),e("pre",null,t(r.value),1),e("pre",null,t(d.value),1)],64))}};export{Y as default};
