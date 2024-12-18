import{a as v,c as h,x as C,m as E,j as S,e as b,b as t,t as g,g as R,v as N,y as V,z as W,F,k as H,h as P,p as U,o as A,T as I,s as z,d as D}from"./index-B9zeznOU.js";import"./HackTimer.min-CywYfK41.js";import{f as y}from"./useFormatNumber-CAl325wE.js";function L(){let r=new Date,l=r.getFullYear(),o=y(r.getMonth()+1),s=y(r.getDate()),u=y(r.getHours()),d=y(r.getMinutes()),_=y(r.getSeconds());return`${l}-${o}-${s} ${u}:${d}:${_}`}function B(r){let l=document.body,o,s;if(document.createRange&&window.getSelection){o=document.createRange(),s=window.getSelection(),s.removeAllRanges();try{o.selectNodeContents(r),s.addRange(o)}catch{o.selectNode(r),s.addRange(o)}}else l.createTextRange&&(o=l.createTextRange(),o.moveToElementText(r),o.select());document.execCommand("Copy"),document.getSelection().removeAllRanges()}const O={key:0,class:"copyed-msg"},X={__name:"WorkingHoursCalculationNotice",props:{show_copyed:Boolean},setup(r){const l=r;return(o,s)=>l.show_copyed?(v(),h("div",O,"已複製到剪貼簿")):C("",!0)}},Y="/assets/cuckoo-clock-trimmed-D193XRVz.mp3",q={class:"container"},G={class:"row"},J={class:"col-12"},K={class:"upper-inner"},Q={id:"js-timer",class:"timer-wrap"},Z={class:"timer-text"},j={class:"btn-wrap"},ee=["data-type"],te={class:"group-wrap"},oe={class:"form-group"},ae=t("label",{for:"chk-alert-sound"},"布穀提示音 (每小時播放)",-1),ne=t("source",{src:Y,type:"audio/mpeg"},null,-1),le=[ne],re={class:"form-group"},se=t("label",{for:"chk-hour"},"時數進位為0.25的倍數 (灌水10分鐘以內)",-1),ie={__name:"WorkingHoursCalculationHeader",props:E({timerData:Object},{alert_sound:{},alert_soundModifiers:{},hours_magic:{},hours_magicModifiers:{}}),emits:E(["eventWorkRecord","eventCopyTableData"],["update:alert_sound","update:hours_magic"]),setup(r,{expose:l,emit:o}){const s=r,u=o,d=S(r,"alert_sound"),_=S(r,"hours_magic");let p=b(null);l({alertPlayer:p});function f(){u("eventWorkRecord")}function $(){u("eventCopyTableData")}function k(){d.value&&(p.value.pause(),console.log("打勾"))}function w(){p.value.play(),console.log("試聽提示音")}function a(){p.value.pause(),console.log("停止播放提示音")}return(i,e)=>(v(),h("section",null,[t("div",q,[t("div",G,[t("div",J,[t("div",K,[t("div",Q,[t("span",Z,g(s.timerData.timer_text),1)]),t("div",j,[t("button",{"data-type":s.timerData.timer_btn_type,onClick:e[0]||(e[0]=n=>f()),class:"text-btn"},g(s.timerData.timer_btn_text),9,ee),t("button",{onClick:e[1]||(e[1]=n=>$()),class:"icon-btn copy-all","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"複製表格到剪貼簿"})]),t("div",te,[t("fieldset",oe,[R(t("input",{type:"checkbox",name:"chk-alert-sound",id:"chk-alert-sound","onUpdate:modelValue":e[2]||(e[2]=n=>d.value=n),onChange:e[3]||(e[3]=n=>k())},null,544),[[N,d.value]]),ae,t("button",{onClick:e[4]||(e[4]=n=>w()),class:"icon-btn play","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"試聽"}),t("button",{onClick:e[5]||(e[5]=n=>a()),class:"icon-btn pause","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"停止播放"}),t("audio",{loop:"",preload:"auto",ref_key:"alertPlayer",ref:p,class:"audio-player"},le,512)]),t("fieldset",re,[R(t("input",{type:"checkbox",name:"chk-hour",id:"chk-hour","onUpdate:modelValue":e[6]||(e[6]=n=>_.value=n)},null,512),[[N,_.value]]),se])])])])])])]))}},ce={class:"container"},de={class:"row"},ue={class:"col-12"},_e={class:"container-inner"},me={class:"table-wrap"},pe=t("table",{class:"table-header table table-hover",width:"100%"},[t("thead",null,[t("th",null,"日期"),t("th",null,"時段"),t("th",null,"時數"),t("th",null,"備註"),t("th",null,"操作")])],-1),ve={key:0},he={key:1},fe={key:0,class:"comment-text"},be=["data-id","onUpdate:modelValue","onBlur"],ge=["onClick"],ye=["onClick","disabled"],ke={__name:"WorkingHoursCalculationBody",props:{record_arr:Array,hours_magic:Boolean},emits:["eventEnableComment","eventRemoveRecord","eventCopyTrData"],setup(r,{expose:l,emit:o}){const s=r,u=o;let d=b(null);l({recordTable:d});let _=[];const p=function(a){a&&_.push({id:a.getAttribute("data-id"),el:a})};V(()=>{_=[]}),W(()=>{});function f(a,i){let e=a.r_start?a.r_start.split(" ")[0].split("-"):void 0,n=a.r_start?a.r_start.split(" ")[1].split(":"):void 0,c=a.r_end?a.r_end.split(" ")[1].split(":"):void 0,m=a.r_end?((new Date(a.r_end).getTime()-new Date(a.r_start).getTime())/1e3/60/60).toFixed(2):void 0,T=m&&(Math.ceil(m*4)/4).toFixed(2),x=T-m<=.167?T:m;switch(i){case"start-date":return a.r_start?`${e[1]}/${e[2]}`:"";case"start-time":return a.r_start?`${n[0]}:${n[1]}`:"";case"end-time":return a.r_end?`${c[0]}:${c[1]}`:"";case"real-hours":return m||"-";case"magic-hours":return x||"-"}}function $(a){u("eventRemoveRecord",a)}function k(a,i){u("eventEnableComment",a,i),U(()=>{i&&_.forEach(e=>{e.id==a&&e.el.focus()})})}function w(a){u("eventCopyTrData",a)}return(a,i)=>(v(),h("section",null,[t("div",ce,[t("div",de,[t("div",ue,[t("div",_e,[t("div",me,[pe,t("table",{class:"table-body table table-hover",ref_key:"recordTable",ref:d,width:"100%"},[t("tbody",null,[(v(!0),h(F,null,H(s.record_arr,(e,n)=>(v(),h("tr",{key:n},[t("td",null,g(f(e,"start-date")),1),t("td",null,g(f(e,"start-time"))+"~"+g(f(e,"end-time")),1),t("td",null,[s.hours_magic?(v(),h("span",ve,g(f(e,"magic-hours")),1)):C("",!0),s.hours_magic?C("",!0):(v(),h("span",he,g(f(e,"real-hours")),1))]),t("td",null,[e.comment_editable?C("",!0):(v(),h("span",fe,g(e.r_comment),1)),e.comment_editable?R((v(),h("input",{key:1,type:"text","data-id":e.r_id,ref_for:!0,ref:p,"onUpdate:modelValue":c=>e.r_comment=c,onBlur:c=>k(e.r_id,!1)},null,40,be)),[[P,e.r_comment]]):C("",!0)]),t("td",null,[t("button",{onClick:c=>k(e.r_id,!0),class:"icon-btn edit"},null,8,ge),t("button",{onClick:c=>$(e.r_id),disabled:e.del_btn_enable,class:"icon-btn del"},null,8,ye),t("button",{onClick:i[0]||(i[0]=c=>w(c)),class:"icon-btn copy"})])]))),128))])],512)])])])])])]))}},$e={class:"container"},we={class:"row"},xe={class:"col-12"},Ce={class:"working-hours-calculation"},Me={__name:"WorkingHoursCalculation",setup(r){const l=b([]),o=b({timer:null,timer_text:"00:00:00",timer_btn_type:"start",timer_btn_text:"Start"}),s=b(!1),u=b(!1),d=b(!1);let _=b(null),p=b(null);A(()=>{new I(document.body,{selector:"[data-bs-toggle='tooltip']"}),U(()=>{})});function f(){let i=L();switch(o.value.timer_btn_type){case"start":o.value.timer_text="00:00:01",o.value.timer=setInterval(()=>{let n=new Date(i),m=Math.ceil((new Date().getTime()-n.getTime())/1e3),T=y(Math.floor(m/60/60)%24),x=y(Math.floor(m/60)%60),M=y(Math.floor(m)%60);o.value.timer_text=`${T}:${x}:${M}`,console.log(o.value.timer_text),u.value&&x=="00"&&M=="00"&&(_.value.alertPlayer.play(),console.log("整點提示音"))},1e3),o.value.timer_btn_text="Stop",o.value.timer_btn_type="end",l.value.push({r_id:l.value.length,r_start:i,r_end:void 0,r_comment:void 0,del_btn_enable:!0,comment_editable:!1});break;case"end":clearInterval(o.value.timer),o.value.timer=null,_.value.alertPlayer.pause(),console.log("關閉整點提示音"),o.value.timer_text="00:00:00",o.value.timer_btn_text="Start",o.value.timer_btn_type="start",l.value[l.value.length-1].r_end=i,l.value[l.value.length-1].del_btn_enable=!1;break}}function $(i){window.confirm("確定要刪除此筆紀錄嗎？")&&(l.value=l.value.filter(n=>n.r_id!=i))}function k(i,e){for(let n of l.value)n.r_id==i&&(n.comment_editable=e)}function w(){B(p.value.recordTable),d.value=!0,setTimeout(()=>{d.value=!1},1e3)}function a(i){let n=i.target.parentNode.parentNode.cloneNode(!0),c=document.createElement("table");c.append(n),document.body.append(c),B(c),d.value=!0,setTimeout(()=>{d.value=!1},1e3),c.remove()}return z(()=>{clearInterval(o.value.timer)}),(i,e)=>(v(),h("div",$e,[t("div",we,[t("div",xe,[t("section",Ce,[D(X,{show_copyed:d.value},null,8,["show_copyed"]),D(ie,{ref_key:"headerRef",ref:_,timerData:o.value,hours_magic:s.value,"onUpdate:hours_magic":e[0]||(e[0]=n=>s.value=n),alert_sound:u.value,"onUpdate:alert_sound":e[1]||(e[1]=n=>u.value=n),onEventWorkRecord:f,onEventCopyTableData:w},null,8,["timerData","hours_magic","alert_sound"]),D(ke,{ref_key:"bodyRef",ref:p,record_arr:l.value,hours_magic:s.value,onEventEnableComment:k,onEventRemoveRecord:$,onEventCopyTrData:a},null,8,["record_arr","hours_magic"])])])])]))}};export{Me as default};
