import{a as v,c as g,x as C,m as E,j as R,e as y,b as e,t as b,g as T,v as S,y as z,z as L,F as N,k as O,h as Y,n as q,p as B,f as G,A as J,o as K,T as Q,s as X,d as F}from"./index.b10aad60.js";import"./HackTimer.min.640bcee2.js";import{f as k}from"./useFormatNumber.15502b88.js";function Z(){let i=new Date,o=i.getFullYear(),n=k(i.getMonth()+1),s=k(i.getDate()),m=k(i.getHours()),f=k(i.getMinutes()),_=k(i.getSeconds());return`${o}-${n}-${s} ${m}:${f}:${_}`}function U(i){let o=document.body,n,s;if(document.createRange&&window.getSelection){n=document.createRange(),s=window.getSelection(),s.removeAllRanges();try{n.selectNodeContents(i),s.addRange(n)}catch{n.selectNode(i),s.addRange(n)}}else o.createTextRange&&(n=o.createTextRange(),n.moveToElementText(i),n.select());document.execCommand("Copy"),document.getSelection().removeAllRanges()}const j={key:0,class:"copyed-msg"},ee={__name:"WorkingHoursCalculationNotice",props:{isShowCopyed:Boolean},setup(i){const o=i;return(n,s)=>o.isShowCopyed?(v(),g("div",j,"\u5DF2\u8907\u88FD\u5230\u526A\u8CBC\u7C3F")):C("",!0)}};var te="/joy-tools/assets/cuckoo-clock-trimmed.33833c85.mp3";const oe={class:"container"},ae={class:"row"},ne={class:"col-12"},le={class:"upper-inner"},se={id:"js-timer",class:"timer-wrap"},re={class:"timer-text"},ie={class:"btn-wrap"},ue=["data-type"],de={class:"group-wrap"},ce={class:"form-group"},me=e("label",{for:"chk-alert-sound"},"\u5E03\u7A40\u63D0\u793A\u97F3 (\u6BCF\u5C0F\u6642\u64AD\u653E)",-1),_e=e("source",{src:te,type:"audio/mpeg"},null,-1),pe=[_e],ve={class:"form-group"},ge=e("label",{for:"chk-hour"},"\u9B54\u6CD5\u6642\u6578: \u6642\u6578\u9032\u4F4D\u70BA0.25\u7684\u500D\u6578 (\u704C\u6C3410\u5206\u9418\u4EE5\u5167)",-1),fe={class:"form-group"},he=e("label",{for:"fragmentary-mode"},"\u96F6\u788E\u6642\u9593\u6A21\u5F0F (\u9B54\u6CD5\u6642\u6578\u50C5\u97FF\u61C9\u5728\u52A0\u7E3D\u6642\u9593)",-1),ye={__name:"WorkingHoursCalculationHeader",props:E({timerData:Object},{isFragmentaryMode:{},isFragmentaryModeModifiers:{},isAlertSound:{},isAlertSoundModifiers:{},isHoursMagic:{},isHoursMagicModifiers:{}}),emits:E(["eventWorkRecord","eventCopyTableData"],["update:isFragmentaryMode","update:isAlertSound","update:isHoursMagic"]),setup(i,{expose:o,emit:n}){const s=i,m=n,f=R(i,"isFragmentaryMode"),_=R(i,"isAlertSound"),x=R(i,"isHoursMagic");let d=y(null);o({alertPlayer:d});function $(){m("eventWorkRecord")}function M(){m("eventCopyTableData")}function w(){!_.value||(d.value.pause(),console.log("\u6253\u52FE"))}function a(){d.value.play(),console.log("\u8A66\u807D\u63D0\u793A\u97F3")}function h(){d.value.pause(),console.log("\u505C\u6B62\u64AD\u653E\u63D0\u793A\u97F3")}return(l,r)=>(v(),g("section",null,[e("div",oe,[e("div",ae,[e("div",ne,[e("div",le,[e("div",se,[e("span",re,b(s.timerData.timer_text),1)]),e("div",ie,[e("button",{"data-type":s.timerData.timer_btn_type,onClick:r[0]||(r[0]=t=>$()),class:"text-btn"},b(s.timerData.timer_btn_text),9,ue),e("button",{onClick:r[1]||(r[1]=t=>M()),class:"icon-btn copy-all","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"\u8907\u88FD\u8868\u683C\u5230\u526A\u8CBC\u7C3F"})]),e("div",de,[e("fieldset",ce,[T(e("input",{type:"checkbox",name:"chk-alert-sound",id:"chk-alert-sound","onUpdate:modelValue":r[2]||(r[2]=t=>_.value=t),onChange:r[3]||(r[3]=t=>w())},null,544),[[S,_.value]]),me,e("button",{onClick:r[4]||(r[4]=t=>a()),class:"icon-btn play","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"\u8A66\u807D"}),e("button",{onClick:r[5]||(r[5]=t=>h()),class:"icon-btn pause","data-bs-container":"body","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"\u505C\u6B62\u64AD\u653E"}),e("audio",{loop:"",preload:"auto",ref_key:"alertPlayer",ref:d,class:"audio-player"},pe,512)]),e("fieldset",ve,[T(e("input",{type:"checkbox",name:"chk-hour",id:"chk-hour","onUpdate:modelValue":r[6]||(r[6]=t=>x.value=t)},null,512),[[S,x.value]]),ge]),e("fieldset",fe,[T(e("input",{type:"checkbox",name:"fragmentary-mode",id:"fragmentary-mode","onUpdate:modelValue":r[7]||(r[7]=t=>f.value=t)},null,512),[[S,f.value]]),he])])])])])])]))}},be={class:"container"},ke={class:"row"},$e={class:"col-12"},Me={class:"container-inner"},xe={class:"table-wrap"},we=e("table",{class:"table-header table table-hover",width:"100%"},[e("thead",null,[e("th",null,"\u65E5\u671F"),e("th",null,"\u6642\u6BB5"),e("th",null,"\u6642\u6578"),e("th",null,"\u5099\u8A3B"),e("th",null,"\u64CD\u4F5C")])],-1),Ce={key:0},Te={key:0,class:"text-magic"},De={key:1},Re={key:0,class:"comment-text"},Se=["data-id","onUpdate:modelValue","onBlur"],Fe=["onClick"],He=["onClick","disabled"],Ae=e("td",{colspan:"2"},"\u7E3D\u8A08",-1),Ee=e("td",null,null,-1),Ne={__name:"WorkingHoursCalculationBody",props:{record_arr:Array,total_hour:Number,isFragmentaryMode:Boolean,isHoursMagic:Boolean},emits:["eventEnableComment","eventRemoveRecord","eventCopyTrData"],setup(i,{expose:o,emit:n}){const s=i,m=n;let f=y(null);o({recordTable:f});let _=[];const x=function(a){a&&_.push({id:a.getAttribute("data-id"),el:a})};z(()=>{_=[]}),L(()=>{});function d(a,h){let l=a.r_start?a.r_start.split(" ")[0].split("-"):void 0,r=a.r_start?a.r_start.split(" ")[1].split(":"):void 0,t=a.r_end?a.r_end.split(" ")[1].split(":"):void 0;switch(h){case"start-date":return a.r_start?`${l[1]}/${l[2]}`:"";case"start-time":return a.r_start?`${r[0]}:${r[1]}`:"";case"end-time":return a.r_end?`${t[0]}:${t[1]}`:"";case"real-hours":return a.origin_hs?a.origin_hs.toFixed(2):"-";case"magic-hours":return a.magic_hs?a.magic_hs.toFixed(2):"-";case"number":return a?a.toFixed(2):"-"}}function $(a){m("eventRemoveRecord",a)}function M(a,h){m("eventEnableComment",a,h),B(()=>{!h||_.forEach(l=>{l.id==a&&l.el.focus()})})}function w(a){m("eventCopyTrData",a)}return(a,h)=>(v(),g("section",null,[e("div",be,[e("div",ke,[e("div",$e,[e("div",Me,[e("div",xe,[we,e("table",{class:"table-body table table-hover",ref_key:"recordTable",ref:f,width:"100%"},[e("tbody",null,[(v(!0),g(N,null,O(s.record_arr,(l,r)=>(v(),g("tr",{key:r},[e("td",null,b(d(l,"start-date")),1),e("td",null,b(d(l,"start-time"))+"~"+b(d(l,"end-time")),1),e("td",null,[s.isFragmentaryMode?(v(),g("span",Ce,b(d(l,"real-hours")),1)):(v(),g(N,{key:1},[s.isHoursMagic?(v(),g("span",Te,b(d(l,"magic-hours")),1)):C("",!0),s.isHoursMagic?C("",!0):(v(),g("span",De,b(d(l,"real-hours")),1))],64))]),e("td",null,[l.comment_editable?C("",!0):(v(),g("span",Re,b(l.r_comment),1)),l.comment_editable?T((v(),g("input",{key:1,type:"text","data-id":l.r_id,ref_for:!0,ref:x,"onUpdate:modelValue":t=>l.r_comment=t,onBlur:t=>M(l.r_id,!1)},null,40,Se)),[[Y,l.r_comment]]):C("",!0)]),e("td",null,[e("button",{onClick:t=>M(l.r_id,!0),class:"icon-btn edit"},null,8,Fe),e("button",{onClick:t=>$(l.r_id),disabled:l.del_btn_enable,class:"icon-btn del"},null,8,He),e("button",{onClick:h[0]||(h[0]=t=>w(t)),class:"icon-btn copy"})])]))),128)),e("tr",null,[Ae,e("td",null,[e("span",{class:q({"text-magic":s.isFragmentaryMode})},b(d(s.total_hour,"number")),3)]),Ee])])],512)])])])])])]))}},Ue={class:"container"},Be={class:"row"},Ve={class:"col-12"},We={class:"working-hours-calculation"},Le={__name:"WorkingHoursCalculation",setup(i){const o=y([]),n=y({timer:null,timer_text:"00:00:00",timer_btn_type:"start",timer_btn_text:"Start"}),s=y(!1),m=y(!1),f=y(!1),_=y(!1),x=G(()=>(10/60).toFixed(3)),d=y(0);J(()=>{let t=0,c=0,u=0;for(let p=0;p<o.value.length;p++)o.value[p].magic_hs&&(u+=o.value[p].magic_hs),o.value[p].origin_hs&&(c+=o.value[p].origin_hs);s.value?m.value?t=Math.ceil(c*4)/4:t=c:m.value?t=u:t=c,d.value=t});let $=y(null),M=y(null);K(()=>{new Q(document.body,{selector:"[data-bs-toggle='tooltip']"}),B(()=>{})});function w(){let t=Z();switch(n.value.timer_btn_type){case"start":n.value.timer_text="00:00:01",n.value.timer=setInterval(()=>{let W=new Date(t),P=new Date,D=Math.ceil((P.getTime()-W.getTime())/1e3),I=k(Math.floor(D/60/60)%24),H=k(Math.floor(D/60)%60),A=k(Math.floor(D)%60);n.value.timer_text=`${I}:${H}:${A}`,console.log(n.value.timer_text),!!f.value&&H=="00"&&A=="00"&&($.value.alertPlayer.play(),console.log("\u6574\u9EDE\u63D0\u793A\u97F3"))},1e3),n.value.timer_btn_text="Stop",n.value.timer_btn_type="end",o.value.push({r_id:o.value.length,r_start:t,r_end:void 0,r_comment:void 0,origin_hs:void 0,magic_hs:void 0,del_btn_enable:!0,comment_editable:!1});break;case"end":clearInterval(n.value.timer),n.value.timer=null,$.value.alertPlayer.pause(),console.log("\u95DC\u9589\u6574\u9EDE\u63D0\u793A\u97F3"),n.value.timer_text="00:00:00",n.value.timer_btn_text="Start",n.value.timer_btn_type="start";let u=(new Date(t).getTime()-new Date(o.value[o.value.length-1].r_start).getTime())/1e3/60/60,p=Math.ceil(u*4)/4,V=p-u<=x.value?p:u;o.value[o.value.length-1].r_end=t,o.value[o.value.length-1].del_btn_enable=!1,o.value[o.value.length-1].origin_hs=u,o.value[o.value.length-1].magic_hs=V;break}}function a(t){!window.confirm("\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u7B46\u7D00\u9304\u55CE\uFF1F")||(o.value=o.value.filter(u=>u.r_id!=t))}function h(t,c){for(let u of o.value)u.r_id==t&&(u.comment_editable=c)}function l(){U(M.value.recordTable),_.value=!0,setTimeout(()=>{_.value=!1},1e3)}function r(t){let u=t.target.parentNode.parentNode.cloneNode(!0),p=document.createElement("table");p.append(u),document.body.append(p),U(p),_.value=!0,setTimeout(()=>{_.value=!1},1e3),p.remove()}return X(()=>{clearInterval(n.value.timer)}),(t,c)=>(v(),g("div",Ue,[e("div",Be,[e("div",Ve,[e("section",We,[F(ee,{isShowCopyed:_.value},null,8,["isShowCopyed"]),F(ye,{ref_key:"headerRef",ref:$,timerData:n.value,isFragmentaryMode:s.value,"onUpdate:isFragmentaryMode":c[0]||(c[0]=u=>s.value=u),isHoursMagic:m.value,"onUpdate:isHoursMagic":c[1]||(c[1]=u=>m.value=u),isAlertSound:f.value,"onUpdate:isAlertSound":c[2]||(c[2]=u=>f.value=u),onEventWorkRecord:w,onEventCopyTableData:l},null,8,["timerData","isFragmentaryMode","isHoursMagic","isAlertSound"]),F(Ne,{ref_key:"bodyRef",ref:M,record_arr:o.value,total_hour:d.value,isFragmentaryMode:s.value,isHoursMagic:m.value,onEventEnableComment:h,onEventRemoveRecord:a,onEventCopyTrData:r},null,8,["record_arr","total_hour","isFragmentaryMode","isHoursMagic"])])])])]))}};export{Le as default};
