(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84321444"],{"4bae":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("div",{staticClass:"spinner-background"}):e._e(),e.loading?n("div",{staticClass:"spinner"}):e._e()])},a=[],i={components:{},props:{loading:{type:Boolean,required:!0}},data:function(){return{}}},c=i,o=n("2877"),s=Object(o["a"])(c,r,a,!1,null,"6dbc9d3b",null);t["a"]=s.exports},"7ecc":function(e,t,n){"use strict";n("d36d")},b096:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return s}));var r=n("365c");function a(){return r["b"].get("api/admin/term/all")}function i(e){return r["a"].get("api/admin/term/detail/".concat(e))}function c(){return r["a"].get("api/term/footer/private_policy")}function o(){return r["a"].get("api/term/footer/term_of_use")}function s(e,t){return r["b"].put("api/admin/term/update/".concat(e),t)}},d36d:function(e,t,n){},d64e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sub-container"},[n("h2",{staticClass:"board-title"},[e._v("이용 약관")]),n("div",{staticClass:"terms-content"},[n("img",{staticClass:"web",attrs:{src:e.mobileImage.imgPath}}),n("img",{staticClass:"mobile",attrs:{src:e.webImage.imgPath}})]),n("LoadingSpinner",{attrs:{loading:e.isLoading}})],1)},a=[],i=(n("4de4"),n("96cf"),n("1da1")),c=n("b096"),o=n("4bae"),s={components:{LoadingSpinner:o["a"]},created:function(){this.fetchFooterUserTerm()},data:function(){return{webImage:[],mobileImage:[],isLoading:!1}},methods:{goto:function(e){this.$router.push({path:e})},fetchFooterUserTerm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,Object(c["b"])();case 4:n=t.sent,r=n.data,e.webImage=r.filter((function(e){return"WEB"==e.webMobile})),e.mobileImage=r.filter((function(e){return"MOBILE"==e.webMobile})),e.webImage=e.webImage[0],e.mobileImage=e.mobileImage[0],t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log(t.t0);case 15:return t.prev=15,e.isLoading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})))()}}},u=s,d=(n("7ecc"),n("2877")),l=Object(d["a"])(u,r,a,!1,null,"8f99acac",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-84321444.b66d1bcc.js.map