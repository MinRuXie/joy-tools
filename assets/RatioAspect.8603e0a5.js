import{a as h,c as v,E as j,b as l,t,x,n as B,D as C,e as _,f as y,i as T,g as p,h as $,u as e,G as V,H as k,d as N,p as A}from"./index.e84dc73f.js";import{r as a}from"./useFormatNumber.15502b88.js";const I={class:"text-wrap"},z=["src"],E=C('<span class="ratio-1-1"></span><span class="ratio-2-1"></span><span class="ratio-3-2"></span><span class="ratio-4-3"></span><span class="ratio-5-4"></span><span class="ratio-16-9"></span><span class="ratio-16-10"></span>',7),U={__name:"RatioAspectGraph",props:{ratio:String,isVertical:Boolean,imgUrl:String},setup(g){const d=g;return(u,s)=>(h(),v("div",{class:B(["box",{"box-v":d.isVertical}])},[d.ratio?(h(),v("div",{key:0,class:"graph",style:j({"aspect-ratio":d.ratio})},[l("div",I,t(d.ratio),1),d.imgUrl?(h(),v("img",{key:0,src:d.imgUrl,alt:"\u5716\u7247",class:"image"},null,8,z)):x("",!0)],4)):x("",!0),E],2))}},G={class:"inner-wrap"},W=l("h3",null,"\u5EFA\u8B70\u5C3A\u5BF8",-1),H={class:"mt-4"},K=l("h5",null,"\u6A19\u6E96\u6BD4\u4F8B (\u6A6B\u5F0F)",-1),L={class:"table table-striped"},M=l("th",null,"\u6BD4\u4F8B",-1),O=l("th",null,"2:1",-1),q=l("th",null,"16:9",-1),J=l("th",null,"16:10",-1),P=l("th",null,"3:2",-1),Q=l("th",null,"4:3",-1),X=l("th",null,"5:4",-1),Y=l("h5",null,"\u6A19\u6E96\u6BD4\u4F8B (\u76F4\u5F0F)",-1),Z={class:"table table-striped"},ll=l("th",null,"\u6BD4\u4F8B",-1),tl=l("th",null,"1:2",-1),el=l("th",null,"9:16",-1),al=l("th",null,"10:16",-1),sl=l("th",null,"2:3",-1),il=l("th",null,"3:4",-1),nl=l("th",null,"4:5",-1),ul={__name:"RatioAspectRecommend",props:{data:Object},setup(g){const d=g,u=_(1),s=y(()=>d.data.width*u.value),i=y(()=>d.data.height*u.value);return(n,m)=>(h(),v("div",G,[W,l("fieldset",null,[l("h5",null,[T("\u7B49\u6BD4\u7E2E\u653E\u500D\u6578: "),p(l("input",{type:"number","onUpdate:modelValue":m[0]||(m[0]=f=>u.value=f),step:"0.1"},null,512),[[$,u.value]])])]),l("fieldset",H,[K,l("table",L,[l("thead",null,[l("tr",null,[M,l("th",null,"\u5BEC\u5EA6 "+t(e(a)(s.value)),1),l("th",null,"\u9AD8\u5EA6 "+t(e(a)(i.value)),1)])]),l("tbody",null,[l("tr",null,[O,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value*.5)),1),l("td",null,t(e(a)(i.value/.5))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[q,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value*.5625)),1),l("td",null,t(e(a)(i.value/.5625))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[J,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value*.625)),1),l("td",null,t(e(a)(i.value/.625))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[P,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value*.6667)),1),l("td",null,t(e(a)(i.value/.6667))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[Q,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value*.75)),1),l("td",null,t(e(a)(i.value/.75))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[X,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value*.8)),1),l("td",null,t(e(a)(i.value/.8))+" x "+t(e(a)(i.value)),1)])])])]),l("fieldset",null,[Y,l("table",Z,[l("thead",null,[l("tr",null,[ll,l("th",null,"\u5BEC\u5EA6 "+t(e(a)(s.value)),1),l("th",null,"\u9AD8\u5EA6 "+t(e(a)(i.value)),1)])]),l("tbody",null,[l("tr",null,[tl,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value/.5)),1),l("td",null,t(e(a)(i.value*.5))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[el,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value/.5625)),1),l("td",null,t(e(a)(i.value*.5625))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[al,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value/.625)),1),l("td",null,t(e(a)(s.value*.625))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[sl,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value/.6667)),1),l("td",null,t(e(a)(i.value*.6667))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[il,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value/.75)),1),l("td",null,t(e(a)(i.value*.75))+" x "+t(e(a)(i.value)),1)]),l("tr",null,[nl,l("td",null,t(e(a)(s.value))+" x "+t(e(a)(s.value/.8)),1),l("td",null,t(e(a)(i.value*.8))+" x "+t(e(a)(i.value)),1)])])])])]))}},ol={class:"container"},rl={class:"row"},dl={class:"col-12"},cl={class:"ratio-aspect"},hl=l("h1",null,"\u5BEC\u9AD8\u6C42\u6BD4\u4F8B\u8A08\u7B97\u6A5F",-1),vl={class:"container"},_l={class:"row"},pl={class:"col-12 col-lg-6"},gl={class:"inner-wrap"},ml={class:"row"},fl={class:"col-3"},wl=l("label",{for:"width",class:"form-label"},"\u5BEC\u5EA6 (width)",-1),xl={class:"text-danger"},$l=l("span",{class:"material-symbols-outlined"}," sync_alt ",-1),bl=[$l],yl={class:"col-3"},Vl=l("label",{for:"width",class:"form-label"},"\u9AD8\u5EA6 (height)",-1),kl={class:"text-danger"},Ul={class:"row mt-3"},Tl={class:"col-8"},Rl={class:"mb-3"},Dl=l("label",{for:"formFile",class:"form-label"},"\u4E0A\u50B3\u5716\u7247",-1),Fl=["src"],Sl={class:"mt-5"},jl={key:0,class:"text-danger"},Bl={class:"col-12 col-lg-5"},Al={__name:"RatioAspect",setup(g){const d=_(0),u=_({width:0,height:0}),s=_(null),i=_(""),n=_({width:0,height:0,width_ratio:null,height_ratio:null,ratio:null,isVertical:!1});function m(c,o){var r=0;do r=c%o,c=o,o=r;while(r!==0);return c}function f(c,o){n.value.width=c,n.value.height=o;let r=m(n.value.width,n.value.height);n.value.width_ratio=n.value.width/r,n.value.height_ratio=n.value.height/r,n.value.ratio=`${n.value.width_ratio}/${n.value.height_ratio}`,n.value.isVertical=+n.value.width<+n.value.height}let b;function w(){i.value="",s.value="",d.value++,clearTimeout(b),b=setTimeout(()=>{u.value.width<=0||u.value.height<=0||f(u.value.width,u.value.height)},300)}function R(){[n.value.width,n.value.height]=[n.value.height,n.value.width],[u.value.width,u.value.height]=[u.value.height,u.value.width],w()}function D(c){if(c.target.files&&c.target.files[0]){if(!S(c.target.files[0])){alert("\u50C5\u9650 png, jpeg, gif \u683C\u5F0F\u7684\u5716\u7247"),d.value++;return}var o=new FileReader;o.onload=function(r){i.value=r.target.result,A(()=>{f(s.value.width,s.value.height),u.value.width=s.value.width,u.value.height=s.value.height})},o.readAsDataURL(c.target.files[0])}}const F=["image/jpeg","image/pjpeg","image/png","image/gif"];function S(c){return F.includes(c.type)}return(c,o)=>(h(),v("div",ol,[l("div",rl,[l("div",dl,[l("div",cl,[hl,l("div",vl,[l("div",_l,[l("div",pl,[l("div",gl,[l("div",ml,[l("div",fl,[l("div",null,[wl,p(l("input",{type:"number",class:"form-control",id:"width","onUpdate:modelValue":o[0]||(o[0]=r=>u.value.width=r),onInput:w},null,544),[[$,u.value.width]]),p(l("span",xl,"\u8ACB\u8F38\u5165\u6B63\u6578",512),[[V,u.value.width<=0]])])]),l("div",{class:"col-auto"},[l("button",{onClick:R,class:"btn btn-secondary"},bl)]),l("div",yl,[l("div",null,[Vl,p(l("input",{type:"number",class:"form-control",id:"width","onUpdate:modelValue":o[1]||(o[1]=r=>u.value.height=r),onInput:w},null,544),[[$,u.value.height]]),p(l("span",kl,"\u8ACB\u8F38\u5165\u6B63\u6578",512),[[V,u.value.height<=0]])])])]),l("div",Ul,[l("div",Tl,[l("div",Rl,[Dl,(h(),v("input",{key:d.value,class:"form-control",type:"file",id:"formFile",accept:"image/png, image/gif, image/jpeg",onChange:o[2]||(o[2]=r=>D(r))},null,32)),l("img",{ref_key:"imgWrap",ref:s,src:i.value,alt:"\u5716\u7247",style:{display:"none"}},null,8,Fl)])])]),l("fieldset",Sl,[l("h4",null,[T("\u6BD4\u4F8B (aspect-ratio): "),n.value.ratio?(h(),v("span",jl,t(n.value.width_ratio)+":"+t(n.value.height_ratio)+" \u6216 "+t(n.value.width_ratio*2)+":"+t(n.value.height_ratio*2),1)):x("",!0)])]),i.value?(h(),k(U,{key:1,ratio:n.value.ratio,isVertical:n.value.isVertical,imgUrl:i.value},null,8,["ratio","isVertical","imgUrl"])):(h(),k(U,{key:0,ratio:n.value.ratio,isVertical:n.value.isVertical},null,8,["ratio","isVertical"]))])]),l("div",Bl,[N(ul,{data:n.value},null,8,["data"])])])])])])])]))}};export{Al as default};
