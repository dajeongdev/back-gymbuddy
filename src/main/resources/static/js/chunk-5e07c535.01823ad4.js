(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e07c535"],{"002f":function(e,t,n){"use strict";n("0cd9")},"0cd9":function(e,t,n){},"29cc":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"FormSelect",on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab"))return null;e.tabKeyPressed=!0},"!blur":function(t){return e.handleBlur(t)}}},[n("div",{staticClass:"FormSelect__control"},[n("button",{ref:"button",staticClass:"FormSelect__button",attrs:{id:e._uid+"-button","aria-haspopup":"listbox","aria-labelledby":e._uid+"-label "+e._uid+"-button","aria-expanded":e.optionsVisible},on:{click:e.toggleOptions,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.showOptions(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.selectPrevOption(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.selectNextOption(t))}]}},[e._v(" "+e._s(e.value.label)+" "),e.isEmptyObject(e.value)?n("span",{staticClass:"FormSelect__placeholder"},[e._v(e._s(e.placeholder))]):e._e(),n("SvgAngle",{staticClass:"FormSelect__icon",class:{"FormSelect__icon--rotate-180":e.optionsVisible}})],1),e.tabKeyPressed?e._e():n("input",{staticClass:"u-visually-hidden",attrs:{"aria-hidden":"true"},on:{focus:e.handleFocusTrap}}),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.optionsVisible,expression:"optionsVisible"}],ref:"options",staticClass:"FormSelect__options",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":e._uid+"-label","aria-activedescendant":e.activeDescendant},on:{focus:e.setupFocus,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.selectPrevOption(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.selectNextOption(t))}],keydown:[e.search,function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.preventDefault(),e.reset(t))}]}},e._l(e.options,(function(t,i){return n("li",{key:t.label||t,staticClass:"FormSelect__option",class:e.activeOptionIndex===i&&"has-focus",attrs:{id:e._uid+"-option-"+i,"aria-selected":e.activeOptionIndex===i,role:"option"},on:{click:function(n){return e.handleOptionClick(t)}}},[e._v(" "+e._s(t.label||t)+" ")])})),0)])])},r=[],s=(n("99af"),n("7db0"),n("c740"),n("b64b"),n("2ca0"),n("96cf"),n("1da1")),o=n("adad"),c={name:"FormSelect",components:{SvgAngle:o["a"]},model:{event:"change"},props:{label:{type:String},placeholder:{type:String,default:"Select"},options:{type:Array,default:function(){return[]}},value:{type:Object}},data:function(){return{keysSoFar:"",tabKeyPressed:!1,optionsVisible:!1}},computed:{activeOptionIndex:function(){var e=this;return this.options.findIndex((function(t){return t.value===e.value||t===e.value}))},prevOptionIndex:function(){var e=this.activeOptionIndex-1;return e>=0?e:this.options.length-1},nextOptionIndex:function(){var e=this.activeOptionIndex+1;return e<=this.options.length-1?e:0},activeDescendant:function(){return"".concat(this._uid,"-option-").concat(this.activeOptionIndex)}},methods:{handleFocusTrap:function(e){console.log(e),this.optionsVisible=!0,this.$refs.button.focus()},handleOptionClick:function(e){this.$emit("change",e),this.reset()},handleBlur:function(e){this.$el.contains(e.relatedTarget)||this.hideOptions()},toggleOptions:function(){this.optionsVisible?this.hideOptions():this.showOptions()},showOptions:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.optionsVisible=!0,t.next=3,e.$nextTick();case 3:e.$refs.options.focus();case 4:case"end":return t.stop()}}),t)})))()},hideOptions:function(){this.optionsVisible=!1},reset:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.hideOptions(),t.next=3,e.$nextTick();case 3:e.$refs.button.focus();case 4:case"end":return t.stop()}}),t)})))()},setupFocus:function(){this.value||this.$emit("change",this.options[0])},selectPrevOption:function(){this.$emit("change",this.options[this.prevOptionIndex])},selectNextOption:function(){this.$emit("change",this.options[this.nextOptionIndex])},search:function(e){var t=this;if(clearTimeout(i),!(e.key.length>1)){i=setTimeout((function(){t.keysSoFar=""}),500),this.keysSoFar+=e.key;var n=this.options.find((function(e){return(e.value||e).toLowerCase().startsWith(t.keysSoFar)}));n&&this.$emit("change",n)}},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object}}},u=c,l=(n("7791"),n("2877")),d=Object(l["a"])(u,a,r,!1,null,null,null);t["a"]=d.exports},"29ea":function(e,t,n){"use strict";n("4fe5")},"2ac8":function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"j",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"k",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"l",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"m",(function(){return h})),n.d(t,"e",(function(){return b}));n("99af");var i=n("365c");function a(e){return i["b"].get("api/admin/question/all/".concat(e))}function r(){return i["b"].get("api/user/question/totalCount")}function s(e){return i["b"].get("api/admin/question/question/detail/".concat(e))}function o(e,t,n,a){return i["b"].get("api/admin/question/search/".concat(e),{params:{categoryId:t,keyword:n,type:a}})}function c(e){return i["a"].delete("api/admin/question/delete",{data:e})}function u(e,t){return i["b"].get("api/user/question/all/".concat(e,"/").concat(t))}function l(e){return i["b"].get("api/user/question/detail/".concat(e))}function d(e){return i["b"].post("api/user/question/new",e)}function p(e,t){return i["b"].put("api/user/question/update/".concat(e),t)}function f(e){return i["b"].delete("api/user/question/delete/".concat(e))}function m(e,t){return i["a"].post("api/admin/question/newReply/".concat(e),t)}function h(e,t){return i["b"].put("api/admin/question/updateReply/".concat(e),t)}function b(e){return i["a"].delete("api/admin/question/deleteReply/".concat(e))}},"4fe5":function(e,t,n){},7791:function(e,t,n){"use strict";n("b80a")},"7fd6":function(e,t,n){"use strict";n("b6f1")},"8ce9":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-wrapper"},[n("div",{staticClass:"preview-container"},[e.files[0]?n("div",{staticClass:"file-preview-wrapper"},[n("label",{attrs:{for:e.refName}},[n("img",{attrs:{src:e.files[0].preview}})]),n("div",{staticClass:"img-info"},[n("span",[e._v(e._s(e.files[0].file.name))]),n("div",{on:{click:e.fileDeleteButton}},[n("Close",{attrs:{name:e.files[0].number}})],1)])]):n("div",{staticClass:"file-upload"},[n("div",{staticClass:"image-box"},[n("label",{attrs:{for:e.refName}},[n("ImagePlus")],1),n("input",{ref:"files",attrs:{type:"file",id:e.refName},on:{change:e.imageAddUpload}})])])])])},a=[],r=(n("4de4"),n("b0c0"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("f2c6")),s=n("fa4d"),o={components:{ImagePlus:r["a"],Close:s["a"]},props:{refName:{type:String},image:{type:Object}},created:function(){this.image&&this.image.imgName&&(this.image.name=this.image.imgName,this.files=[{file:this.image,preview:this.image.imgPath,number:1}])},data:function(){return{files:[],filesPreview:[],uploadImageIndex:0}},methods:{imageAddUpload:function(){this.files=[{file:this.$refs.files.files[0],preview:URL.createObjectURL(this.$refs.files.files[0]),number:1}],this.$emit(this.refName,this.files[0].file)},fileDeleteButton:function(e){console.log("here"),this.$emit(this.refName,{});var t=e.target.getAttribute("name");this.files=this.files.filter((function(e){return e.number!==Number(t)}))}}},c=o,u=(n("7fd6"),n("2877")),l=Object(u["a"])(c,i,a,!1,null,"1c3bbbd0",null);t["a"]=l.exports},adad:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"SvgAngle"},[n("svg",{staticClass:"SvgAngle__svg",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",focusable:"false"}},[n("path",{attrs:{fill:"currentColor",d:"M9.012 12.751a.655.655 0 0 1-.464-.193L2.19 6.109a.674.674 0 0 1 .028-.914.651.651 0 0 1 .9-.027l5.894 5.978 5.894-5.978a.651.651 0 0 1 .901.027c.246.25.258.65.027.914l-6.357 6.449a.655.655 0 0 1-.465.194","fill-rule":"evenodd"}})])])},a=[],r=(n("29ea"),n("2877")),s={},o=Object(r["a"])(s,i,a,!1,null,null,null);t["a"]=o.exports},b6f1:function(e,t,n){},b80a:function(e,t,n){},c0fd:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sub-container form"},[e._m(0),n("SelectBox",{staticClass:"marB_20",attrs:{options:e.options,placeholder:"카테고리를 선택해주세요"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"textform marB_20",attrs:{type:"text",placeholder:"제목을 입력해주세요"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("CKEditor",{ref:"editor",staticClass:"marB_20",attrs:{contents:e.contents}}),n("div",{staticClass:"multiple-images"},[n("AddImageMultiple",{attrs:{refName:"image1"},on:{image1:e.setImage1}}),n("AddImageMultiple",{attrs:{refName:"image2"},on:{image2:e.setImage2}}),n("AddImageMultiple",{attrs:{refName:"image3"},on:{image3:e.setImage3}})],1),n("div",{staticClass:"botton-box center"},[n("button",{staticClass:"btn dark",on:{click:e.addQuestion}},[e._v("등록")])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-title center"},[n("h2",[e._v("문의 작성")])])}],r=(n("96cf"),n("1da1")),s=n("5530"),o=n("29cc"),c=n("2ac8"),u=n("8698"),l=n("8ce9"),d=n("2f62"),p=n("4360"),f={components:{AddImageMultiple:l["a"],SelectBox:o["a"],CKEditor:u["a"]},computed:Object(s["a"])({},Object(d["b"])(["image1","image2","image3"])),created:function(){p["a"].commit("SET_IMAGE1",null),p["a"].commit("SET_IMAGE2",null),p["a"].commit("SET_IMAGE3",null)},data:function(){return{options:[{id:"NONE",label:"카테고리를 선택하세요"},{id:"PR",label:"프로그램"},{id:"GD",label:"굿즈"},{id:"AC",label:"계정"},{id:"SH",label:"배송"},{id:"ER",label:"교환 및 환불"},{id:"ETC",label:"기타"}],selected:{},title:"",contents:"",errMsg:""}},methods:{addQuestion:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("NONE"!=e.selected){t.next=4;break}return e.errMsg="카테고리를 선택해주세요",alert(e.errMsg),t.abrupt("return",!1);case 4:if(e.title){t.next=8;break}return e.errMsg="제목을 등록해주세요",alert(e.errMsg),t.abrupt("return",!1);case 8:return e.contents=e.$refs.editor.getContents(),n=new FormData,n.append("title",e.title),n.append("categoryId",e.selected.id),n.append("contents",e.contents),e.image1&&n.append("file1",e.image1),e.image2&&n.append("file2",e.image2),e.image3&&n.append("file3",e.image3),t.prev=16,t.next=19,Object(c["a"])(n);case 19:return alert("1:1 문의가 등록되었습니다"),t.next=22,e.initForm();case 22:t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](16),alert(t.t0);case 27:return t.prev=27,history.back(),t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[16,24,27,30]])})))()},initForm:function(){this.selected="",this.title="",this.contents="",p["a"].commit("SET_IMAGE1",""),p["a"].commit("SET_IMAGE2",""),p["a"].commit("SET_IMAGE3","")},setImage1:function(e){p["a"].commit("SET_IMAGE1",e)},setImage2:function(e){p["a"].commit("SET_IMAGE2",e)},setImage3:function(e){p["a"].commit("SET_IMAGE3",e)}}},m=f,h=(n("002f"),n("2877")),b=Object(h["a"])(m,i,a,!1,null,"20a7618b",null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-5e07c535.01823ad4.js.map