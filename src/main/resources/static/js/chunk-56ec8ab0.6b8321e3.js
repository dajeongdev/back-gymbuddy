(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56ec8ab0"],{"28af":function(e,t,a){},"2cda":function(e,t,a){"use strict";a("28af")},8194:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var n=a("365c");function i(){return n["a"].get("api/member/all")}function r(e,t){return n["b"].put("api/admin/member/update/".concat(e),t)}},d815:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-container"},[a("section",{staticClass:"about-us-section about-member"},[e._m(0),a("div",{staticClass:"about-section-contents"},[a("div",{staticClass:"card"},[a("img",{staticClass:"member-img web",attrs:{src:e.mobileImage.imgPath}}),a("img",{staticClass:"member-img mobile",attrs:{src:e.webImage.imgPath}})])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-section-title"},[a("h2",[e._v("운동친구 멤버")])])}],r=(a("4de4"),a("96cf"),a("1da1")),c=a("8194"),s={created:function(){this.fetchMember()},data:function(){return{webImage:[],mobileImage:[]}},methods:{goto:function(e){this.$router.push({path:e})},fetchMember:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])();case 2:a=t.sent,n=a.data,e.webImage=n.filter((function(e){return"WEB"==e.webMobile})),e.mobileImage=n.filter((function(e){return"MOBILE"==e.webMobile})),e.webImage=e.webImage[0],e.mobileImage=e.mobileImage[0];case 8:case"end":return t.stop()}}),t)})))()}}},u=s,o=(a("2cda"),a("2877")),m=Object(o["a"])(u,n,i,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-56ec8ab0.6b8321e3.js.map