(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40dea9e9"],{"2ac8":function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"j",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"k",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"i",(function(){return o})),n.d(e,"h",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"l",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return m})),n.d(e,"m",(function(){return h})),n.d(e,"e",(function(){return b}));n("99af");var i=n("365c");function a(t){return i["b"].get("api/admin/question/all/".concat(t))}function r(){return i["b"].get("api/user/question/totalCount")}function c(t){return i["b"].get("api/admin/question/question/detail/".concat(t))}function s(t,e,n,a){return i["b"].get("api/admin/question/search/".concat(t),{params:{categoryId:e,keyword:n,type:a}})}function u(t){return i["a"].delete("api/admin/question/delete",{data:t})}function o(t,e){return i["b"].get("api/user/question/all/".concat(t,"/").concat(e))}function d(t){return i["b"].get("api/user/question/detail/".concat(t))}function l(t){return i["b"].post("api/user/question/new",t)}function f(t,e){return i["b"].put("api/user/question/update/".concat(t),e)}function p(t){return i["b"].delete("api/user/question/delete/".concat(t))}function m(t,e){return i["a"].post("api/admin/question/newReply/".concat(t),e)}function h(t,e){return i["b"].put("api/admin/question/updateReply/".concat(t),e)}function b(t){return i["a"].delete("api/admin/question/deleteReply/".concat(t))}},5836:function(t,e,n){"use strict";n("afe1")},afe1:function(t,e,n){},d6fa:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-container question"},[t._m(0),n("div",{staticClass:"question-container"},[n("div",{staticClass:"question-header"},[n("h5",[t._v(" "+t._s(t.createDate&&t.createDate.substr(0,10))+" "+t._s(t.showEnumAsString(t.categoryId))+" 관련 문의 ")]),n("h3",[t._v(t._s(t.title))])]),n("div",{staticClass:"question-body"},[n("div",{staticClass:"content marB-20",domProps:{innerHTML:t._s(t.contents)}}),n("img",{attrs:{src:"https://preview.ibb.co/gQbzQ5/colt_steele_firemarshall.jpg"}}),n("img",{attrs:{src:t.imgPath2}}),n("img",{attrs:{src:t.imgPath3}})]),t._l(t.commentList,(function(e,i){return n("ul",{key:i,staticClass:"answer-body"},[n("li",[n("p",{staticClass:"body2"},[t._v(" "+t._s(e.contents)+" ")]),n("p",{staticClass:"body2"},[t._v(" 관리자"+t._s(e.createId)+" "+t._s(e&&e.createDate.substr(0,10))+" ")])])])})),n("div",{staticClass:"button-container"},[n("router-link",{attrs:{to:{name:"EditUserQuestion",params:{id:t.detailId}}}},[n("button",{staticClass:"btn write-btn large",attrs:{type:"button"}},[t._v(" 수정 ")])]),n("button",{staticClass:"btn write-btn",on:{click:function(e){return t.deleteQuestion(t.detailId)}}},[t._v(" 삭제 ")])],1)],2)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title center"},[n("h2",[t._v("1:1 문의")])])}],r=(n("96cf"),n("1da1")),c=n("2ac8"),s=n("ee13"),u={created:function(){this.detailId=this.$route.params.id,this.fetchQuestionDetail(this.detailId)},data:function(){return{detailId:"",categoryId:"",commentList:[],title:"",contents:"",createDate:"",imgPath1:"",imgPath2:"",imgPath3:""}},methods:{goto:function(t){this.$router.push({path:t})},fetchQuestionDetail:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["h"])(t);case 2:i=n.sent,a=i.data,console.log("data",a),e.categoryId=a.categoryId,e.commentList=a.commentList,e.title=a.title,e.contents=a.contents,e.createDate=a.createDate,e.imgPath1=a.imgPath1,e.imgPath2=a.imgPath2,e.imgPath3=a.imgPath3;case 13:case"end":return n.stop()}}),n)})))()},deleteQuestion:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c["d"])(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:return e.prev=8,history.back(),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,5,8,11]])})))()},showEnumAsString:function(t){return Object(s["a"])(t)}}},o=u,d=(n("5836"),n("2877")),l=Object(d["a"])(o,i,a,!1,null,"f51a4b10",null);e["default"]=l.exports},ee13:function(t,e,n){"use strict";function i(t){return"AC"===t?"계정":"PR"===t?"프로그램":"GD"===t?"굿즈":"NT"===t?"공지사항":"NS"===t?"대외뉴스":"YT"===t?"유튜브":"CL"===t?"칼럼":"PY"===t?"결제":"SH"===t?"배송":"ER"===t?"교환 및 환불":"ETC"===t?"기타":"T"===t?"제목":"I"===t?"아이디":void 0}n.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=chunk-40dea9e9.8cb52419.js.map