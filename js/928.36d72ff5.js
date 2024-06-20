"use strict";(self["webpackChunkvue3_tools"]=self["webpackChunkvue3_tools"]||[]).push([[928],{4928:function(e,t,a){a.r(t),a.d(t,{default:function(){return le}});var n=a(6768),o=a(5130);const r={class:"sixteen-grider"};function i(e,t,a,i,l,u){const c=(0,n.g2)("SixteenGriderBody"),g=(0,n.g2)("SixteenGriderToolbox"),s=(0,n.g2)("SixteenGriderOutput");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.bF)(c,{ref:"bodyRef",data:i.data},null,8,["data"]),(0,n.bF)(g,{data:i.data,onEventChangeYearDisplay:i.changeYearDisplay,onEventChangeYearText:i.changeYearText,onEventChangeYearColor:i.changeYearColor,onEventChangeYearWeight:i.changeYearWeight,onEventChangeYearFont:i.changeYearFont,onEventchangeFontLink:i.changeFontLink,onEventChangeBackgroundColor:i.changeBackgroundColor,onEventChangeOutputSize:i.changeOutputSize,onEventGetScreenshot:i.getScreenshot},null,8,["data","onEventChangeYearDisplay","onEventChangeYearText","onEventChangeYearColor","onEventChangeYearWeight","onEventChangeYearFont","onEventchangeFontLink","onEventChangeBackgroundColor","onEventChangeOutputSize","onEventGetScreenshot"]),(0,n.bo)((0,n.bF)(s,{ref:"outputRef",onEventClosedModal:i.closedModal},null,8,["onEventClosedModal"]),[[o.aG,i.isShowOutput]])])}var l=a(2125),u=a.n(l),c=a(144);const g={class:"toolbox-wrap"},s={class:"toolbox-inner"},p=(0,n.Lk)("h5",{class:"toolbox-title"},"年份樣式",-1),f={class:"form-group"},h=(0,n.Lk)("label",{for:"year-show"},"顯示文字",-1),d=["checked"],y={class:"form-group"},m=(0,n.Lk)("label",{for:"year-text"},"文字",-1),v={class:"form-group"},k=(0,n.Lk)("label",{for:"year-color"},"顏色",-1),_={class:"form-group"},C=(0,n.Lk)("label",{for:"year-font-size"},"字體大小",-1),b={class:"form-group"},x=(0,n.Lk)("label",{for:"year-font-weight"},"字重",-1),Y=(0,n.Fv)('<option value="normal">normal</option><option value="bold">bold</option><option value="bolder">bolder</option><option value="lighter">lighter</option><option value="100">100</option><option value="200">200</option><option value="300">300</option><option value="400">400</option><option value="500">500</option><option value="600">600</option><option value="700">700</option><option value="800">800</option><option value="900">900</option>',13),L=[Y],S={class:"form-group"},D=(0,n.Lk)("label",{for:"year-font-family-link"},"Google 字型 link",-1),z={class:"form-group"},w=(0,n.Lk)("label",{for:"year-font-family-name"},"Google 字型 CSS 名稱",-1),F=(0,n.Lk)("h5",{class:"toolbox-title"},"輸出",-1),R={class:"form-group"},E=(0,n.Lk)("label",{for:"bg-color"},"背景顏色",-1),G={class:"form-group"},I=(0,n.Lk)("label",{for:"output-size"},"輸出尺寸 (正方形)",-1),K={class:"form-group"};function T(e,t,a,r,i,l){return(0,n.uX)(),(0,n.CE)("section",g,[(0,n.Lk)("div",s,[p,(0,n.Lk)("div",f,[h,(0,n.Lk)("input",{type:"checkbox",id:"year-show",name:"year-show",checked:r.initData.year_display,onChange:t[0]||(t[0]=(...e)=>r.changeYearDisplay&&r.changeYearDisplay(...e))},null,40,d)]),(0,n.Lk)("div",y,[m,(0,n.bo)((0,n.Lk)("input",{id:"year-text",name:"year-text",type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.initData.year_text=e),onChange:t[2]||(t[2]=(...e)=>r.changeYearText&&r.changeYearText(...e)),onKeyup:t[3]||(t[3]=(...e)=>r.changeYearText&&r.changeYearText(...e))},null,544),[[o.Jo,r.initData.year_text]])]),(0,n.Lk)("div",v,[k,(0,n.bo)((0,n.Lk)("input",{id:"year-color",name:"year-color",type:"color","onUpdate:modelValue":t[4]||(t[4]=e=>r.initData.year_color=e),onChange:t[5]||(t[5]=(...e)=>r.changeYearColor&&r.changeYearColor(...e)),onKeyup:t[6]||(t[6]=(...e)=>r.changeYearColor&&r.changeYearColor(...e))},null,544),[[o.Jo,r.initData.year_color]])]),(0,n.Lk)("div",_,[C,(0,n.bo)((0,n.Lk)("input",{name:"year-font-size",min:"12",max:"100",type:"number","onUpdate:modelValue":t[7]||(t[7]=e=>r.initData.year_font_size=e),onChange:t[8]||(t[8]=(...t)=>e.changeYearSize&&e.changeYearSize(...t)),onKeyup:t[9]||(t[9]=(...t)=>e.changeYearSize&&e.changeYearSize(...t))},null,544),[[o.Jo,r.initData.year_font_size]]),(0,n.eW)("px ")]),(0,n.Lk)("div",b,[x,(0,n.bo)((0,n.Lk)("select",{name:"year-font-weight",id:"year-font-weight","onUpdate:modelValue":t[10]||(t[10]=e=>r.initData.year_font_weight=e),onChange:t[11]||(t[11]=(...e)=>r.changeYearWeight&&r.changeYearWeight(...e))},L,544),[[o.u1,r.initData.year_font_weight]])]),(0,n.Lk)("div",S,[D,(0,n.bo)((0,n.Lk)("textarea",{id:"year-font-family-link",name:"year-font-family-link",cols:"40",rows:"3","onUpdate:modelValue":t[12]||(t[12]=e=>r.initData.year_font_family_link=e),onKeydown:t[13]||(t[13]=(0,o.jR)((0,o.D$)((()=>{}),["exact","prevent"]),["enter"])),onKeyup:[t[14]||(t[14]=(0,o.jR)((0,o.D$)(((...e)=>r.changeFontLink&&r.changeFontLink(...e)),["exact"]),["enter"])),t[15]||(t[15]=(...e)=>r.changeFontLink&&r.changeFontLink(...e))]},null,544),[[o.Jo,r.initData.year_font_family_link]])]),(0,n.Lk)("div",z,[w,(0,n.bo)((0,n.Lk)("input",{id:"year-font-family-name",name:"year-font-family-name",type:"text","onUpdate:modelValue":t[16]||(t[16]=e=>r.initData.year_font_family_name=e),onChange:t[17]||(t[17]=(...e)=>r.changeYearFont&&r.changeYearFont(...e)),onKeyup:t[18]||(t[18]=(...e)=>r.changeYearFont&&r.changeYearFont(...e))},null,544),[[o.Jo,r.initData.year_font_family_name]])]),F,(0,n.Lk)("div",R,[E,(0,n.bo)((0,n.Lk)("input",{type:"color",id:"bg-color",name:"bg-color","onUpdate:modelValue":t[19]||(t[19]=e=>r.initData.background_color=e),onChange:t[20]||(t[20]=(...e)=>r.changeBackgroundColor&&r.changeBackgroundColor(...e))},null,544),[[o.Jo,r.initData.background_color]])]),(0,n.Lk)("div",G,[I,(0,n.bo)((0,n.Lk)("input",{type:"number",id:"output-size",name:"output-size","onUpdate:modelValue":t[21]||(t[21]=e=>r.initData.output_size=e),onChange:t[22]||(t[22]=(...e)=>r.changeOutputSize&&r.changeOutputSize(...e))},null,544),[[o.Jo,r.initData.output_size]])]),(0,n.Lk)("div",K,[(0,n.Lk)("button",{id:"takeshot-btn",onClick:t[23]||(t[23]=(...e)=>r.getScreenshot&&r.getScreenshot(...e))},"產生圖檔")])])])}var W={name:"SixteenGriderToolbox",props:["data"],emits:["eventChangeYearDisplay","eventChangeYearText","eventChangeYearColor","eventChangeYearWeight","eventChangeYearFont","eventchangeFontLink","eventGetScreenshot","eventChangeBackgroundColor","eventChangeOutputSize"],setup(e,t){const a=(0,c.lW)(e,"data");function n(){t.emit("eventChangeYearDisplay",!a.value.year_display)}function o(){t.emit("eventChangeYearText",a.value.year_text)}function r(){t.emit("eventChangeYearColor",a.value.year_color)}function i(){t.emit("eventChangeYearWeight",a.value.year_font_weight)}function l(){t.emit("eventChangeYearFont",a.value.year_font_family_name)}function u(){t.emit("eventchangeFontLink",a.value.year_font_family_link)}function g(){t.emit("eventChangeBackgroundColor",a.value.background_color)}function s(){t.emit("eventChangeOutputSize",a.value.output_size)}function p(){t.emit("eventGetScreenshot")}return{initData:a,changeYearDisplay:n,changeYearText:o,changeYearColor:r,changeYearWeight:i,changeYearFont:l,changeFontLink:u,changeBackgroundColor:g,changeOutputSize:s,getScreenshot:p}}},O=a(1241);const V=(0,O.A)(W,[["render",T]]);var $=V;const B={class:"output-wrap"},U={ref:"imgWrapRef"};function M(e,t,a,o,r,i){return(0,n.uX)(),(0,n.CE)("section",B,[(0,n.Lk)("div",{class:"colsed-btn",onClick:t[0]||(t[0]=(...e)=>o.closedModal&&o.closedModal(...e))}),(0,n.Lk)("div",U,null,512)])}var J={name:"SixteenGriderOutput",emits:["eventClosedModal"],setup(e,t){let a=(0,c.KR)(null);function n(){t.emit("eventClosedModal")}return{imgWrapRef:a,closedModal:n}}};const X=(0,O.A)(J,[["render",M]]);var A=X,j=a(4232);const q={class:"work-wrap"},H={ref:"captureRef",class:"capture-wrap"},N={class:"year-wrap"},P=["onChange"],Q=["onClick"],Z=["id","onUpdate:modelValue"],ee=["for"];function te(e,t,a,r,i,l){return(0,n.uX)(),(0,n.CE)("section",q,[(0,n.Lk)("div",H,[(0,n.bo)((0,n.Lk)("div",N,[(0,n.Lk)("span",{ref:"yearRef",style:(0,j.Tr)({color:r.initData.year_color,"font-size":r.initData.year_font_size+"px","font-weight":r.initData.year_font_weight,"font-family":r.initData.year_font_family_name,transform:"scale(1)"})},(0,j.v_)(r.initData.year_text),5)],512),[[o.aG,r.initData.year_display]]),(0,n.Lk)("div",{class:"grid-wrap",style:(0,j.Tr)({"grid-template-columns":`repeat(${r.initData.count_x}, 1fr)`,"grid-template-rows":`repeat(${r.initData.count_y}, 1fr)`,"background-color":r.initData.background_color})},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.initData.count_x*r.initData.count_y,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"image-wrap"},[((0,n.uX)(),(0,n.CE)("input",{type:"file",class:"edit-btn",onChange:e=>r.setImage(e,t),key:r.imgInfo[t].fileInputKey},null,40,P)),(0,n.bo)((0,n.Lk)("button",{class:"reset-btn",onClick:e=>r.resetImage(t)},"重設",8,Q),[[o.aG,r.imgInfo[t].imgSrc]]),(0,n.bo)((0,n.Lk)("fieldset",null,[(0,n.bo)((0,n.Lk)("input",{id:`img-type-${t}`,type:"checkbox","onUpdate:modelValue":e=>r.imgInfo[t].coverSize=e},null,8,Z),[[o.lH,r.imgInfo[t].coverSize]]),(0,n.Lk)("label",{for:`img-type-${t}`},"cover尺寸",8,ee)],512),[[o.aG,r.imgInfo[t].imgSrc]]),(0,n.bo)((0,n.Lk)("div",{class:"bg-img",style:(0,j.Tr)({"background-image":`url(${r.imgInfo[t].imgSrc})`,"background-size":r.imgInfo[t].coverSize?"cover":"contain"})},null,4),[[o.aG,r.imgInfo[t].imgSrc]])])))),128))],4)],512)])}a(4114);var ae={name:"SixteenGriderBody",props:["data"],setup(e){const t=(0,c.lW)(e,"data");let a=(0,c.Kh)([]);for(let l=0;l<t.value.count_x*t.value.count_y;l++)a.push({fileInputKey:`${l}-0`,imgSrc:"",coverSize:!0});let n=(0,c.KR)(null),o=(0,c.KR)(null);function r(e,t){if(e.target.files&&e.target.files[0]){var n=new FileReader;n.onload=function(e){a[t].imgSrc=e.target.result},n.readAsDataURL(e.target.files[0])}}function i(e){a[e].imgSrc="";let t=a[e].fileInputKey.split("-"),n=parseInt(t[1])+1;a[e].fileInputKey=`${t[0]}-${n}`}return{initData:t,imgInfo:a,captureRef:n,yearRef:o,setImage:r,resetImage:i}}};const ne=(0,O.A)(ae,[["render",te]]);var oe=ne,re={name:"SixteenGrider",components:{SixteenGriderToolbox:$,SixteenGriderOutput:A,SixteenGriderBody:oe},setup(){const e=(0,c.Kh)({count_x:4,count_y:4,year_text:"",year_display:!0,year_color:"#000000",year_font_size:35,year_font_weight:"400",year_font_family_link:"https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap",year_font_family_name:"Vast Shadow",background_color:"#FFFFFF",output_size:1024});let t=(0,c.KR)(!1),a=(0,c.KR)(null),o=(0,c.KR)(null);function r(t){e.year_display=t}function i(t){e.year_text=t}function l(t){e.year_color=t}function g(t){e.year_font_weight=t}function s(t){e.year_font_family_name=t}function p(t){e.background_color=t}function f(t){e.output_size=t}function h(t){e.year_font_family_link=t,document.querySelector('link[data-type="temp"]').href=e.year_font_family_link}function d(){t.value=!0;let n=e.output_size/a.value.captureRef.offsetWidth;a.value.yearRef.style.transform=`scale(${Math.floor(100*n)/100})`,a.value.captureRef.style.width=`${e.output_size}px`,a.value.captureRef.style.height=`${e.output_size}px`,o.value.imgWrapRef.replaceChildren(),u()(a.value.captureRef).then((e=>{o.value.imgWrapRef.append(e),a.value.captureRef.style.width="",a.value.captureRef.style.height="",a.value.yearRef.style.transform=""}))}function y(){t.value=!1}return(0,n.sV)((()=>{let t=new Date;e.year_text=t.getFullYear();let a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e.year_font_family_link,a.setAttribute("data-type","temp"),document.head.appendChild(a)})),(0,n.hi)((()=>{document.querySelector('link[data-type="temp"]').remove()})),{data:e,isShowOutput:t,bodyRef:a,outputRef:o,changeYearDisplay:r,changeYearText:i,changeYearColor:l,changeYearWeight:g,changeYearFont:s,changeFontLink:h,changeBackgroundColor:p,changeOutputSize:f,getScreenshot:d,closedModal:y}}};const ie=(0,O.A)(re,[["render",i]]);var le=ie}}]);
//# sourceMappingURL=928.36d72ff5.js.map