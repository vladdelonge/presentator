(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df4b6"],{"88ff":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"full-page-flex"},[e("div",{staticClass:"flex-fill-block"}),e("div",{staticClass:"block txt-center txt-hint p-base"},[e("span",{staticClass:"loader loader-blend v-align-middle m-r-5"}),e("span",{staticClass:"txt v-align-middle"},[t._v(t._s(t.$t("Please wait."))+" "+t._s(t.$t("Redirecting...")))])]),e("div",{staticClass:"flex-fill-block"})])},o=[],a=(e("a481"),e("0abc")),s=e("3d48"),l=e("dd93"),r=e("f744"),c={name:"auth-callback",data:function(){return{isAuthorizing:!1}},beforeMount:function(){var t=l["a"].getQueryParams(window.location.href);this.authorize(t.code,t.state)},methods:{authorize:function(t,i){var e=this;if(!this.isAuthorizing){var n=s["a"].getItem(a["a"].get("VUE_APP_AUTH_CLIENT_NAME_STORAGE_KEY")),o=s["a"].getItem(a["a"].get("VUE_APP_AUTH_CLIENT_STATE_STORAGE_KEY"));if(!n||!o||!i||i!==o)return this.$toast(this.$t("Invalid callback session."),"danger"),void this.cancelAuthorization();this.isAuthorizing=!0,r["a"].Users.authorizeAuthClient(n,t).then((function(t){e.$loginByResponse(t,!1),window.opener&&!window.opener.closed?(window.opener.location.reload(),window.opener.focus(),window.close()):e.$router.go({name:"home"})})).catch((function(t){e.$toast(e.$t("Invalid or expired authorization code."),"danger"),e.cancelAuthorization()})).finally((function(){e.isAuthorizing=!1}))}},cancelAuthorization:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;this.isAuthorizing=!1,setTimeout((function(){window.opener&&!window.opener.closed?(window.opener.location.reload(),window.opener.focus(),window.close()):t.$router.replace({name:"login"})}),i)}}},d=c,u=e("2877"),h=Object(u["a"])(d,n,o,!1,null,null,null);i["default"]=h.exports}}]);