(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{84:function(e,t,n){var o=n(2),i=n(85);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=o(i,a),s=i.locals?i.locals:{};i.locals||e.hot.accept(85,(function(){var t=n(85);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]),r(t)})),e.hot.dispose((function(){r()})),e.exports=s},85:function(e,t,n){(t=n(3)(!1)).push([e.i,'.login-container[data-v-657094ba]{padding-top:20%;height:100%;position:fixed;left:0;right:0}.login-container .img-container[data-v-657094ba]{height:100px;width:100px;margin:0 auto}.login-container .img-container img[data-v-657094ba]{border-radius:3px}.login-container h3[data-v-657094ba]{text-align:center}.login-container .form-group[data-v-657094ba]{margin-top:10%}.login-container .form-group .group[data-v-657094ba]{text-align:center;padding:3%}.login-container .form-group .group .group-row[data-v-657094ba]{display:flex;align-items:center}.login-container .form-group .group .group-row .box[data-v-657094ba]{flex-grow:1;width:20%;height:30px;line-height:30px}.login-container .form-group .group .group-row input[type="text"][data-v-657094ba]{flex-grow:1;text-align:center;font-size:18px;outline-style:none;border:0px;width:50%}.login-container .form-group .group .group-row input[type="text"][data-v-657094ba]:placeholder-shown{text-align:center}.login-container .form-group .group .group-row .box-radio[data-v-657094ba]{width:10%}.login-container .form-group .group .group-row input[type="radio"][data-v-657094ba]{margin-left:5%}.login-container .form-group .group .underline[data-v-657094ba]{margin:0 auto;width:30%;border-bottom:1px solid grey}.login-container .btn-container[data-v-657094ba]{margin-top:10%;text-align:center}.login-container .btn-container .btn-login[data-v-657094ba]{border:0;outline:none;border-radius:3px;padding:3%;font-size:1rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;background:#1ab188;color:#fff;transition:all 0.5s ease;-webkit-appearance:none}.login-container .btn-container .btn-login-touched[data-v-657094ba]{background:#179b77}\n',""]),e.exports=t},86:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"img-container"},[n("input",{ref:"userPic",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*",capture:"camera",multiple:""},on:{change:e.showImg}}),e._v(" "),n("img",{ref:"userPicdisplay",attrs:{src:e.imgURL,height:"100%",width:"100%"},on:{click:e.uploadImg}})]),e._v(" "),n("h3",[e._v("点击图片上传头像")]),e._v(" "),n("form",{staticClass:"form-group"},[n("div",{staticClass:"group"},[n("div",{staticClass:"group-row"},[n("div",{staticClass:"box"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",required:"",placeholder:"请输入昵称",maxlength:"12"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),n("div",{staticClass:"box"})]),e._v(" "),n("div",{staticClass:"underline"})]),e._v(" "),n("div",{staticClass:"group"},[n("div",{staticClass:"group-row"},[n("div",{staticClass:"box box-radio"}),e._v(" "),n("label",[e._v("你的性别:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selfSex,expression:"selfSex"}],attrs:{type:"radio",name:"self-sex",value:"男"},domProps:{checked:e._q(e.selfSex,"男")},on:{change:function(t){e.selfSex="男"}}}),e._v("男\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selfSex,expression:"selfSex"}],attrs:{type:"radio",name:"self-sex",value:"女"},domProps:{checked:e._q(e.selfSex,"女")},on:{change:function(t){e.selfSex="女"}}}),e._v("女\n        "),n("div",{staticClass:"box box-radio"})]),e._v(" "),n("div",{staticClass:"group-row"},[n("div",{staticClass:"box box-radio"}),e._v(" "),n("label",[e._v("匹配性别:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.findSex,expression:"findSex"}],attrs:{type:"radio",name:"find-sex",value:"男"},domProps:{checked:e._q(e.findSex,"男")},on:{change:function(t){e.findSex="男"}}}),e._v("男\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.findSex,expression:"findSex"}],attrs:{type:"radio",name:"find-sex",value:"女"},domProps:{checked:e._q(e.findSex,"女")},on:{change:function(t){e.findSex="女"}}}),e._v("女\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.findSex,expression:"findSex"}],attrs:{type:"radio",name:"find-sex",value:"不限"},domProps:{checked:e._q(e.findSex,"不限")},on:{change:function(t){e.findSex="不限"}}}),e._v("不限\n        "),n("div",{staticClass:"box box-radio"})])]),e._v(" "),n("div",{staticClass:"btn-container"},[n("input",{staticClass:"btn-login",class:{"btn-login-touched":e.loginbtnTouched},attrs:{type:"button",value:"Get Started"},on:{click:e.login}})])])])},i=[];o._withStripped=!0},87:function(e,t,n){"use strict";var o=n(90),i=n.n(o),a={name:"",data:function(){return{loginbtnTouched:!1,userName:"",selfSex:"",findSex:"不限",imgURL:"src/lib/image/theme.jpg"}},components:{},methods:{checkbtnTouchEnd:function(){var e=this;if(1!=this.checkbtnTouched){this.checkbtnTouched=!0,console.log("end");var t=10,n=setInterval((function(){console.log(t),e.checkbtnStr=t+"s重试",0==(t-=1)&&(clearInterval(n),e.checkbtnStr="获取验证码",e.checkbtnTouched=!1)}),1e3)}else console.log("has been touched")},uploadImg:function(){this.$refs.userPic.click()},showImg:function(){var e=this,t=new FileReader;t.onload=function(n){console.log(t.result),console.log(e.$refs.userPicdisplay),e.imgURL=t.result},t.readAsDataURL(this.$refs.userPic.files[0])},login:function(){var e=this;if(""!==this.userName)if(""!==this.selfSex)if(""!==this.findSex){this.loginbtnTouched=!0;var t="昵称:"+this.userName+";性别:"+this.selfSex+";匹配:"+this.findSex;console.log(t),this.$messagebox({title:"Notice",message:t,showCancelButton:!0}).then((function(t){console.log(t);var n={userName:e.userName,selfSex:e.selfSex,findSex:e.findSex,userPic:e.imgURL};e.$store.commit("SetuserInfo",n),e.$store.commit("Login"),"confirm"===t&&e.$router.push("/chat"),e.loginbtnTouched=!0})).catch((function(e){}))}else this.$toast("请输入匹配性别");else this.$toast("请输入性别");else this.$toast("请输入用户名")}},created:function(){console.log(this.$refs),this.$store.commit("HideHeader"),this.$store.commit("ShowFooter")},mounted:function(){console.log(i()()),i()()&&this.$refs.userPic&&(console.log("removed"),this.$refs.userPic.removeAttribute("capture"))}};t.a=a},90:function(e,t){e.exports=function(){return"iphone os"==navigator.userAgent.toLowerCase().match(/iPhone\sOS/i)}},91:function(e,t,n){"use strict";var o=n(84);n.n(o).a},92:function(e,t,n){"use strict";n.r(t);var o=n(86),i=n(87),a=(n(91),n(4)),r=Object(a.a)(i.a,o.render,o.staticRenderFns,!1,null,"657094ba",null),s=n(9);s.install(n(0)),s.compatible&&(e.hot.accept(),s.isRecorded("657094ba")?s.reload("657094ba",r.options):s.createRecord("657094ba",r.options),e.hot.accept(86,function(e){o=n(86),s.rerender("657094ba",{render:o.render,staticRenderFns:o.staticRenderFns})}.bind(this))),r.options.__file="src/components/Login/Login.vue",t.default=r.exports}}]);