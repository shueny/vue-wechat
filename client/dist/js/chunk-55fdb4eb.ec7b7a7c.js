(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55fdb4eb"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeft,expression:"isLeft"}],staticClass:"header-button is-left"},[n("button",{on:{click:function(e){return t.$router.go(-1)}}},[n("font-awesome-icon",{attrs:{icon:"angle-left"}})],1)]),n("h1",{staticClass:"header-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"header-button is-right"},[n("button",{on:{click:function(e){return t.$emit("rightClick")}}},[n("font-awesome-icon",{attrs:{icon:[t.btn_icon_type,t.btn_icon]}}),n("i",{class:t.btn_icon_type+" fa-"+t.btn_icon})],1)])])},a=[],o={name:"header",props:{title:String,isLeft:{type:Boolean,default:!1},btn_icon:String,btn_icon_type:String}},i=o,s=(n("c959"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"04cd4004",null);e["a"]=c.exports},"04e1":function(t,e,n){"use strict";var r=n("7afa");function a(t){this.message=t}a.prototype=new Error,a.prototype.name="InvalidTokenError",t.exports=function(t,e){if("string"!==typeof t)throw new a("Invalid token specified");e=e||{};var n=!0===e.header?0:1;try{return JSON.parse(r(t.split(".")[n]))}catch(o){throw new a("Invalid token specified: "+o.message)}},t.exports.InvalidTokenError=a},"07ed":function(t,e,n){"use strict";var r=n("7348"),a=n.n(r);a.a},"0a99":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"me"},[n("Header",{attrs:{title:"Me"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"cell_wrapper"},[t.user?n("div",{staticClass:"cell_title"},[n("div",{staticClass:"user_avatar",style:{"background-image":"url("+t.user.avatar+")"}}),n("span",[t._v(t._s(t.user.name))])]):t._e()]),n("div",{staticClass:"btn_wrapper"},[n("YButton",{attrs:{btn_style:"btnStyle1"},on:{click:t.logout}},[t._v("Logout")])],1)])],1)},a=[],o=n("0418"),i=n("04e1"),s=n.n(i),c=n("a9ab"),l={name:"me",props:{},components:{Header:o["a"],YButton:c["a"]},computed:{user:function(){var t=localStorage.friendsToken,e=s()(t);return e}},methods:{logout:function(){localStorage.removeItem("friendsToken"),this.$router.push("/login")}}},u=l,d=(n("07ed"),n("2877")),f=Object(d["a"])(u,r,a,!1,null,"4a71fed0",null);e["default"]=f.exports},"18ac":function(t,e,n){},"4b6e":function(t,e,n){},7348:function(t,e,n){},"7afa":function(t,e,n){var r=n("9b81");function a(t){return decodeURIComponent(r(t).replace(/(.)/g,(function(t,e){var n=e.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}t.exports=function(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return a(e)}catch(n){return r(e)}}},"9b81":function(t,e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function r(t){this.message=t}function a(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,o,i=0,s=0,c="";o=e.charAt(s++);~o&&(a=i%4?64*a+o:o,i++%4)?c+=String.fromCharCode(255&a>>(-2*i&6)):0)o=n.indexOf(o);return c}r.prototype=new Error,r.prototype.name="InvalidCharacterError",t.exports="undefined"!==typeof window&&window.atob&&window.atob.bind(window)||a},a9ab:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"y-button",class:{"is-disabled":t.disabled,"btn-style1":"btnStyle1"===t.btn_style,"btn-style2":"btnStyle2"===t.btn_style},attrs:{type:t.type,disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},a=[],o={name:"ybutton",props:{type:String,disabled:{type:Boolean,default:!1},btn_style:String}},i=o,s=(n("d67a"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"16851ef4",null);e["a"]=c.exports},c959:function(t,e,n){"use strict";var r=n("4b6e"),a=n.n(r);a.a},d67a:function(t,e,n){"use strict";var r=n("18ac"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-55fdb4eb.ec7b7a7c.js.map