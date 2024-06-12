"use strict";(self["webpackChunkvue3_tools"]=self["webpackChunkvue3_tools"]||[]).push([[519],{9519:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var o=a(6768),n=a(4232),r=a(5130);const l={class:"working-hours-calculation"},c={class:"container"},i={class:"row"},d={class:"col-12"},s={class:"container-inner"},u={class:"table-wrap"},m=(0,o.Lk)("table",{class:"table-header table table-hover",width:"100%"},[(0,o.Lk)("thead",null,[(0,o.Lk)("th",null,"日期"),(0,o.Lk)("th",null,"時段"),(0,o.Lk)("th",null,"時數"),(0,o.Lk)("th",null,"備註"),(0,o.Lk)("th",null,"操作")])],-1),p={class:"table-body table table-hover",ref:"recordTable",width:"100%"},b={key:0},_={key:1},k={key:0,class:"comment-text"},h=["data-id","onUpdate:modelValue","onBlur"],g=["onClick"],y=["onClick","disabled"];function v(e,t,a,v,f,C){const L=(0,o.g2)("WorkingHoursCalculationNotice"),w=(0,o.g2)("WorkingHoursCalculationHeader");return(0,o.uX)(),(0,o.CE)("section",l,[(0,o.bF)(L,{showCopyed:v.data.showCopyed},null,8,["showCopyed"]),(0,o.bF)(w,{ref:"headerRef",data:v.data,onEventWorkRecord:v.workRecord,onEventCopyTableData:v.copyTableData},null,8,["data","onEventWorkRecord","onEventCopyTableData"]),(0,o.Lk)("section",null,[(0,o.Lk)("div",c,[(0,o.Lk)("div",i,[(0,o.Lk)("div",d,[(0,o.Lk)("div",s,[(0,o.Lk)("div",u,[m,(0,o.Lk)("table",p,[(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(v.data.record_arr,((e,a)=>((0,o.uX)(),(0,o.CE)("tr",{key:a},[(0,o.Lk)("td",null,(0,n.v_)(v.formatTableData(e,"start-date")),1),(0,o.Lk)("td",null,(0,n.v_)(v.formatTableData(e,"start-time"))+"~"+(0,n.v_)(v.formatTableData(e,"end-time")),1),(0,o.Lk)("td",null,[v.data.hours_magic?((0,o.uX)(),(0,o.CE)("span",b,(0,n.v_)(v.formatTableData(e,"magic-hours")),1)):(0,o.Q3)("",!0),v.data.hours_magic?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("span",_,(0,n.v_)(v.formatTableData(e,"real-hours")),1))]),(0,o.Lk)("td",null,[e.comment_editable?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("span",k,(0,n.v_)(e.r_comment),1)),e.comment_editable?(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{key:1,type:"text","data-id":e.r_id,ref_for:!0,ref:v.setItemRef,"onUpdate:modelValue":t=>e.r_comment=t,onBlur:t=>v.enableComment(e.r_id,!1)},null,40,h)),[[r.Jo,e.r_comment]]):(0,o.Q3)("",!0)]),(0,o.Lk)("td",null,[(0,o.Lk)("button",{onClick:t=>v.enableComment(e.r_id,!0),class:"icon-btn edit"},null,8,g),(0,o.Lk)("button",{onClick:t=>v.removeRecord(e.r_id),disabled:e.del_btn_enable,class:"icon-btn del"},null,8,y),(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>v.copyTrData(e)),class:"icon-btn copy"})])])))),128))])],512)])])])])])])])}a(4114);var f=a(144),C=a(8077);function L(e){return e.toString().padStart(2,"0")}function w(){let e=new Date,t=e.getFullYear(),a=L(e.getMonth()+1),o=L(e.getDate()),n=L(e.getHours()),r=L(e.getMinutes()),l=L(e.getSeconds());return`${t}-${a}-${o} ${n}:${r}:${l}`}function D(e){let t,a,o=document.body;if(document.createRange&&window.getSelection){t=document.createRange(),a=window.getSelection(),a.removeAllRanges();try{t.selectNodeContents(e),a.addRange(t)}catch(n){t.selectNode(e),a.addRange(t)}}else o.createTextRange&&(t=o.createTextRange(),t.moveToElementText(e),t.select());document.execCommand("Copy"),document.getSelection().removeAllRanges()}const T={key:0,class:"copyed-msg"};function R(e,t,a,n,r,l){return n.isShow?((0,o.uX)(),(0,o.CE)("div",T,"已複製到剪貼簿")):(0,o.Q3)("",!0)}var x={name:"WorkingHoursCalculationNotice",props:["showCopyed"],setup(e){let t=(0,f.lW)(e,"showCopyed");return{isShow:t}}},E=a(1241);const $=(0,E.A)(x,[["render",R]]);var S=$;const H={class:"container"},W={class:"row"},X={class:"col-12"},N={class:"upper-inner"},M={id:"js-timer",class:"timer-wrap"},A={class:"timer-text"},F={class:"btn-wrap"},I=["data-type"],K={class:"group-wrap"},P={class:"form-group"},Q=(0,o.Lk)("label",{for:"chk-alert-sound"},"布穀提示音 (每小時播放)",-1),V={loop:"",preload:"auto",ref:"alertPlayer",class:"audio-player"},U=(0,o.Lk)("source",{src:"/audio/cuckoo-clock-trimmed.mp3",type:"audio/mpeg"},null,-1),Y=[U],B={class:"form-group"},j=(0,o.Lk)("label",{for:"chk-hour"},"時數進位為0.25的倍數 (灌水10分鐘以內)",-1);function J(e,t,a,l,c,i){return(0,o.uX)(),(0,o.CE)("section",null,[(0,o.Lk)("div",H,[(0,o.Lk)("div",W,[(0,o.Lk)("div",X,[(0,o.Lk)("div",N,[(0,o.Lk)("div",M,[(0,o.Lk)("span",A,(0,n.v_)(l.initData.timer_text),1)]),(0,o.Lk)("div",F,[(0,o.Lk)("button",{"data-type":l.initData.timer_btn_type,onClick:t[0]||(t[0]=e=>l.workRecord()),class:"text-btn"},(0,n.v_)(l.initData.timer_btn_text),9,I),(0,o.Lk)("button",{onClick:t[1]||(t[1]=e=>l.copyTableData()),class:"icon-btn copy-all","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"複製表格到剪貼簿"})]),(0,o.Lk)("div",K,[(0,o.Lk)("fieldset",P,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",name:"chk-alert-sound",id:"chk-alert-sound","onUpdate:modelValue":t[2]||(t[2]=e=>l.initData.alert_sound=e),onChange:t[3]||(t[3]=e=>l.controlPlayer())},null,544),[[r.lH,l.initData.alert_sound]]),Q,(0,o.Lk)("button",{onClick:t[4]||(t[4]=e=>l.playSound()),class:"icon-btn play","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"試聽"}),(0,o.Lk)("button",{onClick:t[5]||(t[5]=e=>l.pauseSound()),class:"icon-btn pause","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"停止播放"}),(0,o.Lk)("audio",V,Y,512)]),(0,o.Lk)("fieldset",B,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",name:"chk-hour",id:"chk-hour","onUpdate:modelValue":t[6]||(t[6]=e=>l.initData.hours_magic=e)},null,512),[[r.lH,l.initData.hours_magic]]),j])])])])])])])}var q={name:"WorkingHoursCalculationHeader",props:["data"],emits:["eventWorkRecord","eventCopyTableData"],setup(e,t){let a=(0,f.lW)(e,"data"),o=(0,f.KR)(null);function n(){t.emit("eventWorkRecord")}function r(){t.emit("eventCopyTableData")}function l(){a.value.alert_sound&&(o.value.pause(),console.log("打勾"))}function c(){o.value.play(),console.log("試聽提示音")}function i(){o.value.pause(),console.log("停止播放提示音")}return{initData:a,alertPlayer:o,workRecord:n,copyTableData:r,controlPlayer:l,playSound:c,pauseSound:i}}};const z=(0,E.A)(q,[["render",J]]);var G=z,O={name:"WorkingHoursCalculation",components:{WorkingHoursCalculationNotice:S,WorkingHoursCalculationHeader:G},setup(){let e=(0,f.Kh)({record_arr:[],timer:null,timer_text:"00:00:00",timer_btn_type:"start",timer_btn_text:"Start",hours_magic:!1,alert_sound:!1,showCopyed:!1}),t=(0,f.KR)(null),a=(0,f.KR)(null),n=[];const r=function(e){e&&n.push({id:e.getAttribute("data-id"),el:e})};function l(e,t){let a=e.r_start?e.r_start.split(" ")[0].split("-"):void 0,o=e.r_start?e.r_start.split(" ")[1].split(":"):void 0,n=e.r_end?e.r_end.split(" ")[1].split(":"):void 0,r=e.r_end?((new Date(e.r_end).getTime()-new Date(e.r_start).getTime())/1e3/60/60).toFixed(2):void 0,l=r?(Math.ceil(4*r)/4).toFixed(2):r,c=l-r<=.167?l:r;switch(t){case"start-date":return e.r_start?`${a[1]}/${a[2]}`:"";case"start-time":return e.r_start?`${o[0]}:${o[1]}`:"";case"end-time":return e.r_end?`${n[0]}:${n[1]}`:"";case"real-hours":return r||"-";case"magic-hours":return c||"-"}}function c(){let a=w(),o=e.timer_btn_type;switch(o){case"start":e.timer_text="00:00:01",e.timer=setInterval((()=>{let o=new Date(a),n=new Date,r=Math.ceil((n.getTime()-o.getTime())/1e3),l=L(Math.floor(r/60/60)%24),c=L(Math.floor(r/60)%60),i=L(Math.floor(r)%60);e.timer_text=`${l}:${c}:${i}`,console.log(e.timer_text),e.alert_sound&&"00"==c&&"00"==i&&(t.value.alertPlayer.play(),console.log("整點提示音"))}),1e3),e.timer_btn_text="Stop",e.timer_btn_type="end",e.record_arr.push({r_id:e.record_arr.length,r_start:a,r_end:void 0,r_comment:void 0,del_btn_enable:!0,comment_editable:!1});break;case"end":clearInterval(e.timer),e.timer=null,e.timer_text="00:00:00",e.timer_btn_text="Start",e.timer_btn_type="start",e.record_arr[e.record_arr.length-1].r_end=a,e.record_arr[e.record_arr.length-1].del_btn_enable=!1;break}}function i(t){let a=window.confirm("確定要刪除此筆紀錄嗎？");a&&(e.record_arr=e.record_arr.filter((e=>e.r_id!=t)))}function d(t,a){for(let o of e.record_arr)o.r_id==t&&(o.comment_editable=a);(0,o.dY)((()=>{a&&n.forEach((e=>{e.id==t&&e.el.focus()}))}))}function s(){D(a.value),e.showCopyed=!0,setTimeout((()=>{e.showCopyed=!1}),1e3)}function u(t){let a=t.target.parentNode.parentNode,o=a.cloneNode(!0),n=document.createElement("table");n.append(o),document.body.append(n),D(n),e.showCopyed=!0,setTimeout((()=>{e.showCopyed=!1}),1e3),n.remove()}return(0,o.Ic)((()=>{n=[]})),(0,o.$u)((()=>{})),(0,o.sV)((()=>{new C.m_(document.body,{selector:"[data-bs-toggle='tooltip']"}),(0,o.dY)((()=>{}))})),{data:e,headerRef:t,recordTable:a,setItemRef:r,formatTableData:l,workRecord:c,removeRecord:i,enableComment:d,copyTableData:s,copyTrData:u}}};const Z=(0,E.A)(O,[["render",v]]);var ee=Z}}]);
//# sourceMappingURL=519.fb38f759.js.map