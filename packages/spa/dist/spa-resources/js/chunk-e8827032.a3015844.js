(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8827032"],{"097d":function(t,e,s){"use strict";var a=s("5ca1"),i=s("8378"),n=s("7726"),r=s("ebd6"),o=s("bcaa");a(a.P+a.R,"Promise",{finally:function(t){var e=r(this,i.Promise||n.Promise),s="function"==typeof t;return this.then(s?function(s){return o(e,t()).then(function(){return s})}:t,s?function(s){return o(e,t()).then(function(){throw s})}:t)}})},"11b2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},i=[],n={name:"relocator",props:{container:{default:"body"}},computed:{containerElem(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted(){if(this.containerElem){let t=this.$refs.slotWrapper;t.parentNode.removeChild(t),this.containerElem.appendChild(t),this.$once("hook:beforeDestroy",()=>{t&&(t.parentNode.removeChild(t),this.$el.appendChild(t))})}}},r=n,o=s("2877"),l=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=l.exports},3905:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},i=[],n={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data(){return{isActive:!1,isClosing:!1}},methods:{open(){this.isActive=!0,this.isClosing=!1,this.$nextTick(()=>{this.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(()=>{let t=this.$el.querySelector("form input");t&&t.focus()})},close(){this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(()=>{this.isActive=!1,this.isClosing=!1},300))}}},r=n,o=s("2877"),l=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=l.exports},"438c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[t._v("Presentator v2.0.6")]),s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-github"}),s("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id?s("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[s("i",{staticClass:"fe fe-life-buoy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),s("div",{staticClass:"info-item"},[s("languages-select")],1)]),!(t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0)?t._e():s("div",{staticClass:"credits"},[s("i18n",{attrs:{path:"Crafted by {author}"}},[s("a",{attrs:{place:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"}},[t._v("Gani")])])],1),s("relocator",[s("feedback-popup",{ref:"feedbackPopup"})],1)],1)},i=[],n=(s("ac6a"),s("ade3")),r=s("2f62"),o=s("11b2"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[s("p",[t._v("\n                    "+t._s(t.$t("Found a bug or have a feature request?"))+" "),s("br"),s("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[s("a",{attrs:{place:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),s("form-field",{staticClass:"required",attrs:{name:"message"}},[s("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},c=[],u=(s("097d"),s("f744")),p=s("3905"),d={name:"feedback-popup",components:{popup:p["a"]},data(){return{isProcessing:!1,message:""}},methods:{open(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close(){this.$refs.popup.close(),this.$emit("close")},resetForm(){this.message=""},submitForm(){this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then(t=>{this.$toast(this.$t("Thank you for the feedback!")),this.close(),this.resetForm()}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isProcessing=!1}))}}},f=d,g=s("2877"),m=Object(g["a"])(f,l,c,!1,null,null,null),h=m.exports,v=s("f7ef");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach(function(e){Object(n["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var C={name:"app-footer",components:{relocator:o["a"],"feedback-popup":h,"languages-select":v["a"]},computed:_({},Object(r["d"])({loggedUser:t=>t.user.user})),methods:{openFeedbackPopup(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=C,k=Object(g["a"])(y,a,i,!1,null,null,null);e["a"]=k.exports},5401:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return!t.isLoadingClients&&t.clientsList.length?s("div",{staticClass:"auth-clients-bar"},[t.heading?s("div",{staticClass:"heading"},[t._v(t._s(t.heading))]):t._e(),s("div",{staticClass:"auth-clients-list"},t._l(t.clientsList,function(e){return s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:e.title,expression:"client.title",modifiers:{bottom:!0}}],staticClass:"auth-client",class:e.name,attrs:{tabindex:"0"},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:(s.preventDefault(),t.openClientPopup(e))},click:function(s){return s.preventDefault(),t.openClientPopup(e)}}})}),0)]):t._e()},i=[],n=(s("097d"),s("0abc")),r=s("3d48"),o=s("dd93"),l=s("f744"),c=s("9242");class u extends c["a"]{load(t){t=t||{},super.load(t),this.name=o["a"].isEmpty(t.name)?"":t.name,this.title=o["a"].isEmpty(t.title)?"":t.title,this.state=o["a"].isEmpty(t.state)?"":t.state,this.authUrl=o["a"].isEmpty(t.authUrl)?"":t.authUrl}}var p={name:"auth-clients-bar",props:{heading:{type:String}},data(){return{isLoadingClients:!1,clientsList:[]}},mounted(){this.loadClients()},methods:{loadClients(){this.isLoadingClients||(this.isLoadingClients=!0,l["a"].Users.getAuthClients().then(t=>{this.clientsList=u.createInstances(t.data)}).catch(t=>{}).finally(()=>{this.isLoadingClients=!1}))},openClientPopup(t){r["a"].setItem(n["a"].get("VUE_APP_AUTH_CLIENT_NAME_STORAGE_KEY"),t.name),r["a"].setItem(n["a"].get("VUE_APP_AUTH_CLIENT_STATE_STORAGE_KEY"),t.state),o["a"].openInWindow(t.authUrl)}}},d=p,f=s("2877"),g=Object(f["a"])(d,a,i,!1,null,null,null);e["a"]=g.exports},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},a5b8:function(t,e,s){"use strict";var a=s("d8e8");function i(t){var e,s;this.promise=new t(function(t,a){if(void 0!==e||void 0!==s)throw TypeError("Bad Promise constructor");e=t,s=a}),this.resolve=a(e),this.reject=a(s)}t.exports.f=function(t){return new i(t)}},bcaa:function(t,e,s){var a=s("cb7c"),i=s("d3f4"),n=s("a5b8");t.exports=function(t,e){if(a(t),i(e)&&e.constructor===t)return e;var s=n.f(t),r=s.resolve;return r(e),s.promise}},dbb6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"app-logo-wrapper"},[a("router-link",{staticClass:"app-logo",attrs:{to:{name:"home"}}},[a("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"44"}}),a("span",{staticClass:"txt"},[t._v("Presentator")])])],1)},i=[],n={name:"app-header"},r=n,o=s("2877"),l=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=l.exports},e0c2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-container"},[s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"container-wrapper container-wrapper-sm"},[s("app-header"),s("div",{staticClass:"clearfix m-b-large"}),s("div",{staticClass:"panel auth-panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("Sign up")))]),t.registerSuccess?s("div",{staticClass:"panel-content"},[s("div",{staticClass:"alert alert-transp-primary txt-center"},[s("p",[t._v("\n                        "+t._s(t.$t("Check your email to finish signing up."))),s("br"),t._v("\n                        "+t._s(t.$t("We sent a signup link to you at:"))),s("br"),s("strong",[t._v(t._s(t.email))])])])]):s("div",{staticClass:"panel-content"},[s("form",{staticClass:"register-form disabled",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("form-field",{staticClass:"form-group-lg",attrs:{name:"email"}},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"input-addon p-r-0",attrs:{for:"sign_up_email"}},[s("i",{staticClass:"fe fe-mail"})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"sign_up_email",placeholder:t.$t("Email"),required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("form-field",{staticClass:"form-group-lg",attrs:{name:"password"}},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"input-addon p-r-0",attrs:{for:"sign_up_password"}},[s("i",{staticClass:"fe fe-unlock"})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"sign_up_password",placeholder:t.$t("Password"),required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("form-field",{staticClass:"form-group-lg",attrs:{name:"passwordConfirm"}},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"input-addon no-b-r no-bg p-r-0",attrs:{for:"sign_up_password_confirm"}},[s("i",{staticClass:"fe fe-lock"})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],attrs:{type:"password",id:"sign_up_password_confirm",placeholder:t.$t("Password confirm"),required:""},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})])]),s("button",{staticClass:"btn btn-primary btn-lg btn-loader block",class:{"btn-loader-active":t.isProcessing}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Sign up")))]),s("i",{staticClass:"fe fe-arrow-right-circle"})]),t.$getAppConfig("VUE_APP_TERMS_URL")?s("div",{staticClass:"block txt-center m-t-small txt-hint"},[s("i18n",{attrs:{path:'By clicking "Sign up" you agree to our {termsLink}.'}},[s("a",{attrs:{place:"termsLink",href:t.$getAppConfig("VUE_APP_TERMS_URL"),target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("Terms and Privacy policy")))])])],1):t._e()],1),s("div",{staticClass:"clearfix m-b-base"}),s("auth-clients-bar",{attrs:{heading:t.$t("Or sign up via:")}})],1)]),s("div",{staticClass:"clearfix m-b-base"}),s("div",{staticClass:"auth-meta"},[s("router-link",{attrs:{to:{name:"login"}}},[t._v("\n                "+t._s(t.$t("Already have an account?"))+"\n                "),s("strong",[t._v(t._s(t.$t("Sign in.")))])])],1)],1),s("div",{staticClass:"flex-fill-block m-b-base"}),s("app-footer")],1)},i=[],n=(s("097d"),s("f744")),r=s("dbb6"),o=s("438c"),l=s("5401"),c={name:"register",components:{"app-header":r["a"],"app-footer":o["a"],"auth-clients-bar":l["a"]},data(){return{email:"",password:"",passwordConfirm:"",isProcessing:!1,registerSuccess:!1}},beforeMount(){this.$setDocumentTitle(()=>this.$t("Sign up"))},methods:{onSubmit(){this.isProcessing||(this.isProcessing=!0,n["a"].Users.register({email:this.email,password:this.password,passwordConfirm:this.passwordConfirm}).then(t=>{this.registerSuccess=!0}).catch(t=>{this.registerSuccess=!1,this.$errResponseHandler(t)}).finally(()=>{this.isProcessing=!1}))}}},u=c,p=s("2877"),d=Object(p["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},f7ef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v("\n        ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,function(e,a){return s("div",{key:"language_"+a,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==a},on:{click:function(e){return e.preventDefault(),t.changeLanguage(a)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==a?"label-transp-primary":"label-light-border"},[t._v(t._s(a))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])}),0)],1)},i=[],n=(s("097d"),s("9225")),r={name:"languages-select",data(){return{isChanging:!1,languages:Object.assign({},n["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode(){return this.$i18n.locale},activeLanguageTitle(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage(t){this.isChanging=!0,Object(n["a"])(t).finally(()=>{this.isChanging=!1})}}},o=r,l=s("2877"),c=Object(l["a"])(o,a,i,!1,null,null,null);e["a"]=c.exports}}]);