"use strict";(self["webpackChunkvue3_tools"]=self["webpackChunkvue3_tools"]||[]).push([[380],{7380:function(t,a,i){i.r(a),i.d(a,{default:function(){return G}});var e=i(6768),o=i(5130),n=i(4232);const s={class:"container"},r={class:"row"},l={class:"col-12"},h={class:"ratio-aspect"},u=(0,e.Lk)("h1",null,"比例計算機",-1),c={class:"inner-wrap"},d={class:"control-wrap"},p={class:"text-danger"},g={class:"text-danger"},v=(0,e.Lk)("h3",null,"比例 (aspect-ratio):",-1),k={key:0,class:"text-danger"};function _(t,a,i,_,w,f){const L=(0,e.g2)("RatioAspectGraph");return(0,e.uX)(),(0,e.CE)("div",s,[(0,e.Lk)("div",r,[(0,e.Lk)("div",l,[(0,e.Lk)("div",h,[u,(0,e.Lk)("div",c,[(0,e.Lk)("div",d,[(0,e.Lk)("fieldset",null,[(0,e.Lk)("h4",null,[(0,e.eW)("寬度 (width): "),(0,e.bo)((0,e.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>_.data.width=t),onInput:a[1]||(a[1]=(...t)=>_.getRatio&&_.getRatio(...t))},null,544),[[o.Jo,_.data.width]])]),(0,e.Lk)("h4",null,[(0,e.eW)("高度 (height): "),(0,e.bo)((0,e.Lk)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=t=>_.data.height=t),onInput:a[3]||(a[3]=(...t)=>_.getRatio&&_.getRatio(...t))},null,544),[[o.Jo,_.data.height]])]),(0,e.bo)((0,e.Lk)("span",p,"請輸入正數",512),[[o.aG,_.flag_zero]]),(0,e.bo)((0,e.Lk)("span",g,"建議輸入「寬>高」的數字",512),[[o.aG,_.flag_compare]])]),(0,e.Lk)("fieldset",null,[v,_.data.ratio?((0,e.uX)(),(0,e.CE)("h2",k,(0,n.v_)(_.data.width_ratio)+":"+(0,n.v_)(_.data.height_ratio)+" 或 "+(0,n.v_)(2*_.data.width_ratio)+":"+(0,n.v_)(2*_.data.height_ratio),1)):(0,e.Q3)("",!0)])]),(0,e.bF)(L,{ratio:_.data.ratio},null,8,["ratio"])])])])])])}var w=i(144);const f={key:0,class:"text-wrap"},L=(0,e.Fv)('<span class="ratio-1-1"></span><span class="ratio-2-1"></span><span class="ratio-3-2"></span><span class="ratio-4-3"></span><span class="ratio-5-4"></span><span class="ratio-16-9"></span><span class="ratio-16-10"></span>',7);function R(t,a,i,o,s,r){return(0,e.uX)(),(0,e.CE)("div",{class:"box",style:(0,n.Tr)({"aspect-ratio":o.initRatio})},[o.initRatio?((0,e.uX)(),(0,e.CE)("div",f,(0,n.v_)(o.initRatio),1)):(0,e.Q3)("",!0),L],4)}var m={name:"RatioAspectGraph",props:["ratio"],setup(t){let a=(0,w.lW)(t,"ratio");return{initRatio:a}}},b=i(1241);const x=(0,b.A)(m,[["render",R]]);var A=x,C={name:"RatioAspect",components:{RatioAspectGraph:A},setup(){const t=(0,w.Kh)({width:0,height:0,width_ratio:null,height_ratio:null,ratio:null});let a,i=(0,w.KR)(!1),e=(0,w.KR)(!1);function o(t,a){var i=0;do{i=t%a,t=a,a=i}while(0!==i);return t}function n(){clearTimeout(a),a=setTimeout((()=>{if(i.value=!1,t.width<=0||t.height<=0)return void(i.value=!0);e.value=+t.width<+t.height;let a=o(t.width,t.height);t.width_ratio=t.width/a,t.height_ratio=t.height/a,t.ratio=`${t.width_ratio}/${t.height_ratio}`}),300)}return{data:t,flag_zero:i,flag_compare:e,getRatio:n}}};const y=(0,b.A)(C,[["render",_]]);var G=y}}]);
//# sourceMappingURL=380.ceb0739b.js.map