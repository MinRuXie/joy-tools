"use strict";(self["webpackChunkvue3_tools"]=self["webpackChunkvue3_tools"]||[]).push([[822],{3293:function(t,l,a){function i(t){return t.toString().padStart(2,"0")}function u(t){return Math.round(100*(t+Number.EPSILON))/100}a.d(l,{R:function(){return u},m:function(){return i}})},6822:function(t,l,a){a.r(l),a.d(l,{default:function(){return B}});var i=a(6768),u=a(5130),n=a(4232);const e={class:"container"},o={class:"row"},d={class:"col-12"},r={class:"ratio-aspect"},s=(0,i.Lk)("h1",null,"寬高求比例計算機",-1),_={class:"container"},p={class:"row"},h={class:"col-12 col-lg-6"},k={class:"inner-wrap"},L={class:"text-danger"},v={key:0,class:"text-danger"},w={class:"col-12 col-lg-5"},m={class:"inner-wrap"},c=(0,i.Lk)("h4",null,"建議尺寸",-1),g=(0,i.Lk)("h5",null,"標準比例 (橫式)",-1),x={class:"table table-striped"},T=(0,i.Lk)("th",null,"比例",-1),F=(0,i.Lk)("th",null,"2:1",-1),D=(0,i.Lk)("th",null,"16:9",-1),f=(0,i.Lk)("th",null,"16:10",-1),b=(0,i.Lk)("th",null,"3:2",-1),R=(0,i.Lk)("th",null,"4:3",-1),V=(0,i.Lk)("th",null,"5:4",-1),y=(0,i.Lk)("h5",null,"標準比例 (直式)",-1),W={class:"table table-striped"},C=(0,i.Lk)("th",null,"比例",-1),E=(0,i.Lk)("th",null,"1:2",-1),A=(0,i.Lk)("th",null,"9:16",-1),I=(0,i.Lk)("th",null,"10:16",-1),G=(0,i.Lk)("th",null,"2:3",-1),X=(0,i.Lk)("th",null,"3:4",-1),J=(0,i.Lk)("th",null,"4:5",-1);function S(t,l,a,S,U,z){const K=(0,i.g2)("RatioAspectGraph");return(0,i.uX)(),(0,i.CE)("div",e,[(0,i.Lk)("div",o,[(0,i.Lk)("div",d,[(0,i.Lk)("div",r,[s,(0,i.Lk)("div",_,[(0,i.Lk)("div",p,[(0,i.Lk)("div",h,[(0,i.Lk)("div",k,[(0,i.Lk)("fieldset",null,[(0,i.Lk)("h5",null,[(0,i.eW)("寬度 (width): "),(0,i.bo)((0,i.Lk)("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=t=>S.data.width=t),onInput:l[1]||(l[1]=(...t)=>S.getRatio&&S.getRatio(...t))},null,544),[[u.Jo,S.data.width]])]),(0,i.Lk)("h5",null,[(0,i.eW)("高度 (height): "),(0,i.bo)((0,i.Lk)("input",{type:"number","onUpdate:modelValue":l[2]||(l[2]=t=>S.data.height=t),onInput:l[3]||(l[3]=(...t)=>S.getRatio&&S.getRatio(...t))},null,544),[[u.Jo,S.data.height]])]),(0,i.bo)((0,i.Lk)("span",L,"請輸入正數",512),[[u.aG,S.flag_zero]])]),(0,i.Lk)("fieldset",null,[(0,i.Lk)("h4",null,[(0,i.eW)("比例 (aspect-ratio): "),S.data.ratio?((0,i.uX)(),(0,i.CE)("span",v,(0,n.v_)(S.data.width_ratio)+":"+(0,n.v_)(S.data.height_ratio)+" 或 "+(0,n.v_)(2*S.data.width_ratio)+":"+(0,n.v_)(2*S.data.height_ratio),1)):(0,i.Q3)("",!0)])]),(0,i.bF)(K,{ratio:S.data.ratio,isVertical:S.data.isVertical},null,8,["ratio","isVertical"])])]),(0,i.Lk)("div",w,[(0,i.Lk)("div",m,[c,(0,i.Lk)("fieldset",null,[(0,i.Lk)("h5",null,[(0,i.eW)("等比縮放倍數: "),(0,i.bo)((0,i.Lk)("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>S.data.multiple=t),step:"0.1"},null,512),[[u.Jo,S.data.multiple]])])]),(0,i.Lk)("fieldset",null,[g,(0,i.Lk)("table",x,[(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[T,(0,i.Lk)("th",null,"寬度 "+(0,n.v_)(S.data.multiple_w),1),(0,i.Lk)("th",null,"高度 "+(0,n.v_)(S.data.multiple_h),1)])]),(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[F,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(.5*S.data.multiple_w)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_h/.5))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[D,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(.5625*S.data.multiple_w)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_h/.5625))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[f,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(.625*S.data.multiple_w)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_h/.625))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[b,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(.6667*S.data.multiple_w)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_h/.6667))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[R,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(.75*S.data.multiple_w)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_h/.75))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[V,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(.8*S.data.multiple_w)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_h/.8))+" x "+(0,n.v_)(S.data.multiple_h),1)])])])]),(0,i.Lk)("fieldset",null,[y,(0,i.Lk)("table",W,[(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[C,(0,i.Lk)("th",null,"寬度 "+(0,n.v_)(S.data.multiple_w),1),(0,i.Lk)("th",null,"高度 "+(0,n.v_)(S.data.multiple_h),1)])]),(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[E,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_w/.5)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(.5*S.data.multiple_h))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[A,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_w/.5625)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(.5625*S.data.multiple_h))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[I,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_w/.625)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(.625*S.data.width))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[G,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_w/.6667)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(.6667*S.data.multiple_h))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[X,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_w/.75)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(.75*S.data.multiple_h))+" x "+(0,n.v_)(S.data.multiple_h),1)]),(0,i.Lk)("tr",null,[J,(0,i.Lk)("td",null,(0,n.v_)(S.data.multiple_w)+" x "+(0,n.v_)(S.roundTwoFloatDigits(S.data.multiple_w/.8)),1),(0,i.Lk)("td",null,(0,n.v_)(S.roundTwoFloatDigits(.8*S.data.multiple_h))+" x "+(0,n.v_)(S.data.multiple_h),1)])])])])])])])])])])])])}var U=a(144);const z={class:"text-wrap"},K=(0,i.Fv)('<span class="ratio-1-1"></span><span class="ratio-2-1"></span><span class="ratio-3-2"></span><span class="ratio-4-3"></span><span class="ratio-5-4"></span><span class="ratio-16-9"></span><span class="ratio-16-10"></span>',7);function N(t,l,a,u,e,o){return(0,i.uX)(),(0,i.CE)("div",{class:(0,n.C4)(["box",{"box-v":u.flagIsVertical}])},[u.initRatio?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"graph",style:(0,n.Tr)({"aspect-ratio":u.initRatio})},[(0,i.Lk)("div",z,(0,n.v_)(u.initRatio),1)],4)):(0,i.Q3)("",!0),K],2)}var Q={name:"RatioAspectGraph",props:["ratio","isVertical"],setup(t){let l=(0,U.lW)(t,"ratio"),a=(0,U.lW)(t,"isVertical");return{initRatio:l,flagIsVertical:a}}},$=a(1241);const M=(0,$.A)(Q,[["render",N]]);var O=M,P=a(3293),j={name:"RatioAspect",components:{RatioAspectGraph:O},setup(){const t=(0,U.Kh)({width:0,height:0,width_ratio:null,height_ratio:null,ratio:null,isVertical:!1,multiple:1});t.multiple_w=(0,i.EW)((()=>t.width*t.multiple)),t.multiple_h=(0,i.EW)((()=>t.height*t.multiple));let l,a=(0,U.KR)(!1);function u(t,l){var a=0;do{a=t%l,t=l,l=a}while(0!==a);return t}function n(){clearTimeout(l),l=setTimeout((()=>{if(a.value=!1,t.width<=0||t.height<=0)return void(a.value=!0);let l=u(t.width,t.height);t.width_ratio=t.width/l,t.height_ratio=t.height/l,t.ratio=`${t.width_ratio}/${t.height_ratio}`,t.isVertical=+t.width<+t.height}),300)}return{data:t,flag_zero:a,getRatio:n,roundTwoFloatDigits:P.R}}};const q=(0,$.A)(j,[["render",S]]);var B=q}}]);
//# sourceMappingURL=822.6ba37e01.js.map