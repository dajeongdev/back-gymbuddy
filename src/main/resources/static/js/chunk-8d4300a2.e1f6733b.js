(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d4300a2"],{"7d13":function(t,e,n){},"8e43":function(t,e,n){"use strict";n("7d13")},"9ca8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-container"},[n("h2",{staticClass:"board-title"},[t._v("개인정보 처리방침")]),n("div",{staticClass:"terms-content"},[n("img",{staticClass:"web",attrs:{src:t.mobileImage.imgPath}}),n("img",{staticClass:"mobile",attrs:{src:t.webImage.imgPath}})])])},a=[],i=(n("4de4"),n("96cf"),n("1da1")),c=n("b096"),o={created:function(){this.fetchFooterPrivate()},data:function(){return{webImage:[],mobileImage:[]}},methods:{goto:function(t){this.$router.push({path:t})},fetchFooterPrivate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:n=e.sent,r=n.data,t.webImage=r.filter((function(t){return"WEB"==t.webMobile})),t.mobileImage=r.filter((function(t){return"MOBILE"==t.webMobile})),t.webImage=t.webImage[0],t.mobileImage=t.mobileImage[0];case 8:case"end":return e.stop()}}),e)})))()}}},u=o,s=(n("8e43"),n("2877")),m=Object(s["a"])(u,r,a,!1,null,"f0bdda66",null);e["default"]=m.exports},b096:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return u}));var r=n("365c");function a(){return r["b"].get("api/admin/term/all")}function i(t){return r["a"].get("api/admin/term/detail/".concat(t))}function c(){return r["a"].get("api/term/footer/private_policy")}function o(){return r["a"].get("api/term/footer/term_of_use")}function u(t,e){return r["b"].put("api/admin/term/update/".concat(t),e)}}}]);
//# sourceMappingURL=chunk-8d4300a2.e1f6733b.js.map