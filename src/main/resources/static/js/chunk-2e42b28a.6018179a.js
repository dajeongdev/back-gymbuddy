(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e42b28a"],{"0c24":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"file-wrapper"},[i("div",{staticClass:"preview-container"},[t.files[0]?i("div",{staticClass:"file-preview-wrapper"},[i("label",{attrs:{for:t.refName}},[i("img",{attrs:{src:t.files[0].preview}})]),i("div",{staticClass:"img-info"},[i("span",[t._v(t._s(t.files[0].file.name))]),i("div",{on:{click:t.fileDeleteButton}},[i("Close",{attrs:{name:t.files[0].number}})],1)])]):i("div",{staticClass:"file-upload"},[i("div",{staticClass:"image-box"},[i("label",{attrs:{for:t.refName}},[i("ImagePlus")],1),i("input",{ref:"files",attrs:{type:"file",id:t.refName},on:{change:t.imageAddUpload}})])])])])},n=[],s=(i("4de4"),i("b0c0"),i("a9e3"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("f2c6")),o=i("fa4d"),r={components:{ImagePlus:s["a"],Close:o["a"]},props:{refName:{type:String},image:{type:Object}},created:function(){console.log(this.refName),this.image&&this.image.imgName&&(this.image.name=this.image.imgName,this.files=[{file:this.image,preview:this.image.imgPath,number:1}])},data:function(){return{files:[],filesPreview:[],uploadImageIndex:0}},methods:{imageAddUpload:function(){this.files=[{file:this.$refs.files.files[0],preview:URL.createObjectURL(this.$refs.files.files[0]),number:1}],console.log(this.refName),this.$emit(this.refName,this.files[0].file)},fileDeleteButton:function(t){this.$emit(this.refName,{});var e=t.target.getAttribute("name");this.files=this.files.filter((function(t){return t.number!==Number(e)}))}}},c=r,l=(i("8535"),i("2877")),u=Object(l["a"])(c,a,n,!1,null,"1116737c",null);e["a"]=u.exports},"383a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sub-container"},[i("ul",{staticClass:"tabs sub"},[i("li",{on:{click:function(e){return t.goto("/admin/program")}}},[t._v("프로그램")]),i("li",{staticClass:"current",on:{click:function(e){return t.goto("/admin/goods")}}},[t._v("굿즈")])]),i("div",{staticClass:"contents-container"},[i("p",{staticClass:"contents-title underline marB-20 body3"},[t._v("굿즈 등록")]),i("div",{staticClass:"input-container marB-40"},[i("section",{staticClass:"marB-40"},[i("p",{staticClass:"body3 marB-10"},[t._v("대표 이미지")]),i("div",{staticClass:"input-item align-top"},[i("input",{attrs:{type:"file",id:"files",name:"file"}}),t.thumb?i("AddImageSingle",{attrs:{refName:"mainImage",image:t.thumb},on:{change:t.setMainImage}}):t._e()],1)]),i("section",{staticClass:"basic-info"},[i("p",{staticClass:"body3 marB-20"},[t._v("기본 정보")]),i("div",{staticClass:"input-item"},[i("p",{staticClass:"small-title"},[t._v("굿즈명")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"admin-input medium",attrs:{type:"text",name:"contents"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),i("div",{staticClass:"input-item"},[i("p",{staticClass:"small-title"},[t._v("가격")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"admin-input medium",attrs:{type:"text",name:"contents"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])]),i("section",{staticClass:"options"},[i("p",{staticClass:"body3 marB-20"},[t._v("옵션")]),t._l(t.options,(function(e,a){return i("div",{key:e,staticClass:"input-item marB-20"},[i("p",{staticClass:"small-title"},[t._v("옵션 "+t._s(a+1))]),i("div",{staticClass:"input-item-body"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.colorAndSize,expression:"option.colorAndSize"}],staticClass:"admin-input medium",attrs:{type:"text",placeholder:"옵션명"},domProps:{value:e.colorAndSize},on:{input:function(i){i.target.composing||t.$set(e,"colorAndSize",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.inventory,expression:"option.inventory"}],staticClass:"admin-input small",attrs:{type:"text",placeholder:"재고"},domProps:{value:e.inventory},on:{input:function(i){i.target.composing||t.$set(e,"inventory",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.extraPrice,expression:"option.extraPrice"}],staticClass:"admin-input small",attrs:{type:"text",placeholder:"추가가격"},domProps:{value:e.extraPrice},on:{input:function(i){i.target.composing||t.$set(e,"extraPrice",i.target.value)}}}),i("div",{on:{click:function(e){return t.removeField(a)}}},[i("CloseRed")],1)])])})),i("button",{staticClass:"solid-btn green marB-30",attrs:{type:"button"},on:{click:t.addField}},[t._v(" 옵션 추가 ")])],2),i("section",{staticClass:"marB-40"},[i("div",{staticClass:"img-upload-container"},[i("p",{staticClass:"body3"},[t._v("상세 이미지")]),i("div",{staticClass:"input-item align-top"},[t.detailImg?i("AddImageSingle",{attrs:{refName:"detailImage",image:t.detailImg},on:{change:t.setDetailImage}}):t._e()],1)])]),i("button",{staticClass:"outlined-btn",on:{click:t.updateGoods}},[t._v("등록")])])])])},n=[],s=(i("a434"),i("b0c0"),i("96cf"),i("1da1")),o=i("5530"),r=i("0c24"),c=i("4360"),l=i("c40e"),u=i("2f62"),d=i("9e6b"),m={components:{AddImageSingle:r["a"],CloseRed:d["a"]},data:function(){return{id:this.$route.params.id,name:"",price:"",detailImg:"",programName:"",options:[{colorAndSize:"",inventory:"",extraPrice:""}]}},computed:Object(o["a"])({},Object(u["b"])(["main","detail"])),created:function(){c["a"].commit("SET_MAIN",null),c["a"].commit("SET_DETAIL",null),this.id=this.$route.params.id,this.fetchGoodsDetail(this.id)},methods:{goto:function(t){this.$router.push({path:t})},addField:function(){this.options.push({colorAndSize:"",inventory:"",extraPrice:""})},removeField:function(t){this.options.splice(t,1)},fetchGoodsDetail:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(l["d"])(t);case 3:a=i.sent,e.name=a.data.name,e.price=a.data.price,e.options=a.data.options,e.thumb={imgPath:a.data.thumbnailImgPath,imgName:a.data.thumbnailImgName},e.detailImg={imgPath:a.data.detailImgPath,imgName:a.data.detailImgName},i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](0),console.log(i.t0);case 14:case"end":return i.stop()}}),i,null,[[0,11]])})))()},updateGoods:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=new FormData,t.main&&i.append("thumbnailFile",t.main),t.detail&&i.append("detailFile",t.detail),i.append("name",t.name),i.append("price",t.price),i.append("optionList",JSON.stringify(t.options)),e.prev=6,e.next=9,Object(l["f"])(t.id,i);case 9:a=e.sent,console.log(a),200==a.status?(alert("상품이 수정되었습니다"),t.$router.go()):alert("에러가 발생했습니다"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](6),alert("에러가 발생했습니다");case 17:case"end":return e.stop()}}),e,null,[[6,14]])})))()},setMainImage:function(t){c["a"].commit("SET_MAIN",t),this.thumb=this.main},setDetailImage:function(t){c["a"].commit("SET_DETAIL",t),this.detailImg=this.detail}}},p=m,f=(i("b0f5"),i("2877")),g=Object(f["a"])(p,a,n,!1,null,"78612673",null);e["default"]=g.exports},8535:function(t,e,i){"use strict";i("d681")},"9e6b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M7.05029 7.05029L16.9498 16.9498",stroke:"#FF585D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M7.05029 16.9497L16.9498 7.05021",stroke:"#FF585D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])},n=[],s={},o=s,r=i("2877"),c=Object(r["a"])(o,a,n,!1,null,"14d255fe",null);e["a"]=c.exports},a434:function(t,e,i){"use strict";var a=i("23e7"),n=i("23cb"),s=i("a691"),o=i("50c4"),r=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),m=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m||!p},{splice:function(t,e){var i,a,u,d,m,p,b=r(this),C=o(b.length),w=n(t,C),x=arguments.length;if(0===x?i=a=0:1===x?(i=0,a=C-w):(i=x-2,a=g(f(s(e),0),C-w)),C+i-a>v)throw TypeError(h);for(u=c(b,a),d=0;d<a;d++)m=w+d,m in b&&l(u,d,b[m]);if(u.length=a,i<a){for(d=w;d<C-a;d++)m=d+a,p=d+i,m in b?b[p]=b[m]:delete b[p];for(d=C;d>C-a+i;d--)delete b[d-1]}else if(i>a)for(d=C-a;d>w;d--)m=d+a-1,p=d+i-1,m in b?b[p]=b[m]:delete b[p];for(d=0;d<i;d++)b[d+w]=arguments[d+2];return b.length=C-a+i,u}})},b0f5:function(t,e,i){"use strict";i("f1b4")},c40e:function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return r})),i.d(e,"f",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"g",(function(){return u})),i.d(e,"h",(function(){return d}));i("99af");var a=i("365c");function n(){return a["a"].get("api/goods/totalCount")}function s(t){return a["a"].get("api/goods/all/".concat(t))}function o(t){return a["a"].get("api/goods/detail/".concat(t))}function r(t){return a["b"].post("api/admin/goods/new",t)}function c(t,e){return a["b"].put("api/admin/goods/update/".concat(t),e)}function l(t){return a["b"].delete("api/admin/goods/delete",{data:t})}function u(t,e){return a["b"].put("/api/admin/goods/setMainYn/".concat(t,"/").concat(e))}function d(t,e){return a["b"].put("/api/admin/goods/updateStatus/".concat(t),e)}},d681:function(t,e,i){},f1b4:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2e42b28a.6018179a.js.map