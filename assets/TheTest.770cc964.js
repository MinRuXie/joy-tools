import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{L as t,r as m,a as p,c as h,d as a,b as _}from"./index.b5eb2a33.js";const i=[{name:"\u5F35\u4E09",age:18,job:{j1:{salarly:20}},hobby:["\u559D\u9152","\u62BD\u83F8","\u71D9\u982D"]},{name:"\u674E\u56DB",age:30,job:{j1:{salarly:10}},hobby:["\u5B78\u7FD2","\u770B\u96FB\u8996","\u6253\u96FB\u52D5"]}],b=[{name:"\u7B2C\u4E00\u4E2D\u5B78"},{name:"\u7B2C\u4E8C\u4E2D\u5B78"}];var c={person:i,schools:b};const d={name:"TheTest",setup(){console.log("--- TheTest ---");let s=t({title:"\u5927\u5BB6\u597D",list:["\u9805\u76EE1","\u9805\u76EE2","\u9805\u76EE3"],cate:{c1:{type:"Hello"}}}),n=t(c.person),r=t(c.schools);return{testObj:s,personData:n,schoolData:r}}},j={class:"wrapper-inner test"},u=_("h2",null,"\u7DF4\u7FD2",-1);function D(s,n,r,o,f,v){const e=m("router-view");return p(),h("div",j,[u,a(e),a(e,{name:"name1"}),a(e,{name:"name2",testObj:o.testObj},null,8,["testObj"]),a(e,{name:"name3",personData:o.personData,schoolData:o.schoolData},null,8,["personData","schoolData"])])}var O=l(d,[["render",D]]);export{O as default};
