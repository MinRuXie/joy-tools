"use strict";(self["webpackChunkvue3_tools"]=self["webpackChunkvue3_tools"]||[]).push([[998],{6998:function(a,e,n){n.r(e),n.d(e,{default:function(){return ha}});var l=n(6768);const t={class:"container"},u={class:"row"},i={class:"col-12"},s={class:"quote-calculation"},o={class:"card_wrap"};function r(a,e,n,r,c,_){const d=(0,l.g2)("QuoteCalculationQuotation"),h=(0,l.g2)("QuoteCalculationFinalActualCollar");return(0,l.uX)(),(0,l.CE)("div",t,[(0,l.Lk)("div",u,[(0,l.Lk)("div",i,[(0,l.Lk)("section",s,[(0,l.Lk)("section",o,[(0,l.bF)(d),(0,l.bF)(h)])])])])])}var c=n(4232),_=n(5130);const d={class:"card-inner"},h=(0,l.Lk)("h2",null,"報價計算機",-1),m={class:"grid-wrap"},k={class:"grid-row"},v=(0,l.Lk)("div",{class:"grid-item layout-left"},"報價（支領金額）",-1),L={class:"grid-item layout-right"},p={class:"chinese-wrap"},g={class:"grid-row"},b={class:"grid-item layout-left"},C=(0,l.Lk)("label",{for:"health_insurance_fare"}," 健保補充保費 2.11% ",-1),f={class:"grid-item layout-right"},x={class:"chinese-wrap"},N={class:"grid-row"},q={class:"grid-item layout-left"},w=(0,l.Lk)("label",{for:"income_tax_fare"}," 代扣所得稅 10% ",-1),y={class:"grid-item layout-right"},M={class:"chinese-wrap"},Q={class:"grid-row"},W=(0,l.Lk)("div",{class:"grid-item layout-left"},"最終實領（支領淨額）",-1),E={class:"grid-item layout-right"},K={class:"chinese-wrap"};function A(a,e,n,t,u,i){return(0,l.uX)(),(0,l.CE)("div",d,[h,(0,l.Lk)("div",m,[(0,l.Lk)("div",k,[v,(0,l.Lk)("div",L,[(0,l.Lk)("div",null,(0,c.v_)(t.data.quotation),1),(0,l.Lk)("div",p,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[0])+"元",1)])])]),(0,l.Lk)("div",g,[(0,l.Lk)("div",b,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"health_insurance_fare",name:"insurance","onUpdate:modelValue":e[0]||(e[0]=a=>t.data.health_toggle=a)},null,512),[[_.lH,t.data.health_toggle]]),C]),(0,l.Lk)("div",f,[(0,l.Lk)("div",null,(0,c.v_)(t.data.health_insurance)+" (四捨五入)",1),(0,l.Lk)("div",x,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[0])+"元",1)])])]),(0,l.Lk)("div",N,[(0,l.Lk)("div",q,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"income_tax_fare",name:"income_tax","onUpdate:modelValue":e[1]||(e[1]=a=>t.data.income_tax_toggle=a)},null,512),[[_.lH,t.data.income_tax_toggle]]),w]),(0,l.Lk)("div",y,[(0,l.Lk)("div",null,(0,c.v_)(t.data.income_tax)+" (四捨五入)",1),(0,l.Lk)("div",M,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[0])+"元",1)])])]),(0,l.Lk)("div",Q,[W,(0,l.Lk)("div",E,[(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"number",min:"0",placeholder:"請輸入金額","onUpdate:modelValue":e[2]||(e[2]=a=>t.data.final_actual_collar=a)},null,512),[[_.Jo,t.data.final_actual_collar]])]),(0,l.Lk)("div",K,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[0])+"元",1)])])])])])}var U=n(144);function V(a){const e=(0,U.Kh)({0:"零",1:"壹",2:"貳",3:"參",4:"肆",5:"伍",6:"陸",7:"柒",8:"捌",9:"玖",10:"拾"});let n=Math.trunc(a%10),l=Math.trunc(a/10%10),t=Math.trunc(a/100%10),u=Math.trunc(a/1e3%10),i=Math.trunc(a/1e4%10);return[e[n],e[l],e[t],e[u],e[i]]}var F={name:"QuoteCalculationQuotation",setup(){let a=(0,U.Kh)({final_actual_collar:2e4,quotation:0,health_toggle:!0,health_insurance_rate:.0211,health_insurance:0,income_tax_toggle:!0,income_tax_rate:.1,income_tax:0});return a.health_insurance=(0,l.EW)((()=>a.health_toggle?Math.round(a.health_insurance_rate*a.final_actual_collar/(1-a.health_insurance_rate-a.income_tax_rate)):0)),a.income_tax=(0,l.EW)((()=>a.income_tax_toggle?Math.round(a.income_tax_rate*a.final_actual_collar/(1-a.health_insurance_rate-a.income_tax_rate)):0)),a.quotation=(0,l.EW)((()=>Math.round(parseInt(a.final_actual_collar)+a.health_insurance+a.income_tax))),(0,l.wB)((()=>a.quotation),((a,e)=>{console.log("quotation變了",a,e),a<2e4?console.log(a,"小於20K"):2e4==a?console.log(a,"等於20K"):a>2e4&&console.log(a,"大於20K")}),{immediate:!0}),{data:a,useChineseNumber:V}}},H=n(1241);const X=(0,H.A)(F,[["render",A]]);var J=X;const B={class:"card-inner"},I=(0,l.Lk)("h2",null,"最終實領計算機",-1),j={class:"grid-wrap"},z={class:"grid-row"},D=(0,l.Lk)("div",{class:"grid-item layout-left"},"報價（支領金額）",-1),G={class:"grid-item layout-right"},O={class:"chinese-wrap"},P={class:"grid-row"},R={class:"grid-item layout-left"},S=(0,l.Lk)("label",{for:"health_insurance_fare-2"},[(0,l.eW)(" 健保補充保費 2.11%"),(0,l.Lk)("br"),(0,l.eW)("（報價>=20K） ")],-1),T={class:"grid-item layout-right"},Y={class:"chinese-wrap"},Z={class:"grid-row"},$={class:"grid-item layout-left"},aa=(0,l.Lk)("label",{for:"income_tax_fare-2"},[(0,l.eW)(" 代扣所得稅 10%"),(0,l.Lk)("br"),(0,l.eW)("（報價>20K） ")],-1),ea={class:"grid-item layout-right"},na={class:"chinese-wrap"},la={class:"grid-row"},ta=(0,l.Lk)("div",{class:"grid-item layout-left"},"最終實領（支領淨額）",-1),ua={class:"grid-item layout-right"},ia={class:"chinese-wrap"};function sa(a,e,n,t,u,i){return(0,l.uX)(),(0,l.CE)("div",B,[I,(0,l.Lk)("div",j,[(0,l.Lk)("div",z,[D,(0,l.Lk)("div",G,[(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"number",min:"0",placeholder:"請輸入金額","onUpdate:modelValue":e[0]||(e[0]=a=>t.data.quotation=a)},null,512),[[_.Jo,t.data.quotation]])]),(0,l.Lk)("div",O,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.quotation)[0])+"元",1)])])]),(0,l.Lk)("div",P,[(0,l.Lk)("div",R,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"health_insurance_fare-2",name:"insurance","onUpdate:modelValue":e[1]||(e[1]=a=>t.data.health_toggle=a)},null,512),[[_.lH,t.data.health_toggle]]),S]),(0,l.Lk)("div",T,[(0,l.Lk)("div",null,(0,c.v_)(t.data.health_insurance)+" (四捨五入)",1),(0,l.Lk)("div",Y,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.health_insurance)[0])+"元",1)])])]),(0,l.Lk)("div",Z,[(0,l.Lk)("div",$,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"income_tax_fare-2",name:"income_tax","onUpdate:modelValue":e[2]||(e[2]=a=>t.data.income_tax_toggle=a)},null,512),[[_.lH,t.data.income_tax_toggle]]),aa]),(0,l.Lk)("div",ea,[(0,l.Lk)("div",null,(0,c.v_)(t.data.income_tax)+" (四捨五入)",1),(0,l.Lk)("div",na,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.income_tax)[0])+"元",1)])])]),(0,l.Lk)("div",la,[ta,(0,l.Lk)("div",ua,[(0,l.Lk)("div",null,(0,c.v_)(t.data.final_actual_collar),1),(0,l.Lk)("div",ia,[(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[4])+"萬",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[3])+"千",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[2])+"百",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[1])+"拾",1),(0,l.Lk)("span",null,(0,c.v_)(t.useChineseNumber(t.data.final_actual_collar)[0])+"元",1)])])])])])}var oa={name:"QuoteCalculationFinalActualCollar",setup(){let a=(0,U.Kh)({final_actual_collar:0,quotation:2e4,health_toggle:!0,health_insurance_rate:.0211,health_insurance:0,income_tax_toggle:!0,income_tax_rate:.1,income_tax:0});return a.health_insurance=(0,l.EW)((()=>a.health_toggle&&a.quotation>=2e4?Math.round(a.health_insurance_rate*a.quotation):0)),a.income_tax=(0,l.EW)((()=>a.income_tax_toggle&&a.quotation>2e4?Math.round(a.income_tax_rate*a.quotation):0)),a.final_actual_collar=(0,l.EW)((()=>a.quotation-a.health_insurance-a.income_tax)),{data:a,useChineseNumber:V}}};const ra=(0,H.A)(oa,[["render",sa]]);var ca=ra,_a={name:"QuoteCalculation",components:{QuoteCalculationQuotation:J,QuoteCalculationFinalActualCollar:ca},setup(){return{}}};const da=(0,H.A)(_a,[["render",r]]);var ha=da}}]);
//# sourceMappingURL=998.5ba57cef.js.map