(this.webpackJsonpdance=this.webpackJsonpdance||[]).push([[11],{146:function(t,n,e){"use strict";e.r(n),e.d(n,"amplify_federated_buttons",(function(){return s})),e.d(n,"amplify_strike",(function(){return d}));var i=e(23),o=e(5),r=e(186),u=e(185),a=e(67),c=e(187),s=function(){function t(t){Object(i.f)(this,t),this.authState=r.a.SignIn,this.federated={},this.handleAuthStateChange=c.d}return t.prototype.componentWillLoad=function(){if(!a.a||"function"!==typeof a.a.configure)throw new Error(u.d);var t=a.a.configure({}).oauth,n=void 0===t?{}:t;n.domain?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),n):n.awsCognito&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),n.awsCognito)),n.auth0&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),n.auth0))},t.prototype.render=function(){if(!Object.values(r.a).includes(this.authState))return null;if(Object(o.c)(this.federated))return null;var t=this.federated,n=t.amazonClientId,e=t.auth0Config,u=t.facebookAppId,a=t.googleClientId,c=t.oauthConfig;return Object(i.e)("div",null,a&&Object(i.e)("div",null,Object(i.e)("amplify-google-button",{clientId:a,handleAuthStateChange:this.handleAuthStateChange})),u&&Object(i.e)("div",null,Object(i.e)("amplify-facebook-button",{appId:u,handleAuthStateChange:this.handleAuthStateChange})),n&&Object(i.e)("div",null,Object(i.e)("amplify-amazon-button",{clientId:n,handleAuthStateChange:this.handleAuthStateChange})),c&&Object(i.e)("div",null,Object(i.e)("amplify-oauth-button",{config:c})),e&&Object(i.e)("div",null,Object(i.e)("amplify-auth0-button",{config:e,handleAuthStateChange:this.handleAuthStateChange})))},t}(),d=function(){function t(t){Object(i.f)(this,t)}return t.prototype.render=function(){return Object(i.e)("span",{class:"strike-content"},Object(i.e)("slot",null))},t}();d.style=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}"},185:function(t,n,e){"use strict";e.d(n,"a",(function(){return C})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return g})),e.d(n,"e",(function(){return l})),e.d(n,"f",(function(){return f})),e.d(n,"g",(function(){return w})),e.d(n,"h",(function(){return O})),e.d(n,"i",(function(){return y})),e.d(n,"j",(function(){return h})),e.d(n,"k",(function(){return m})),e.d(n,"l",(function(){return b})),e.d(n,"m",(function(){return c})),e.d(n,"n",(function(){return u})),e.d(n,"o",(function(){return p})),e.d(n,"p",(function(){return S})),e.d(n,"q",(function(){return d})),e.d(n,"r",(function(){return r})),e.d(n,"s",(function(){return a})),e.d(n,"t",(function(){return i}));var i="username",o="email",r="code",u="phone",a="password",c="country-dial-code-select",s="+1",d="amplify-auth-source",f="amplify-signin-with-hostedUI",h="amplify-authenticator-authState",l="Phone number can not be empty",g="No Auth module found, please ensure @aws-amplify/auth is imported",p="SETUP_TOTP",m="User has not set up software token mfa",b="User has not verified software token mfa",S="SUCCESS",C="auth",O="UI Auth",w="ToastAuthError",y="AuthStateChange"},186:function(t,n,e){"use strict";var i,o,r,u,a;e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return u})),function(t){t.SignUp="signup",t.SignOut="signout",t.SignIn="signin",t.Loading="loading",t.SignedOut="signedout",t.SignedIn="signedin",t.SigningUp="signingup",t.ConfirmSignUp="confirmSignUp",t.confirmingSignUpCustomFlow="confirmsignupcustomflow",t.ConfirmSignIn="confirmSignIn",t.confirmingSignInCustomFlow="confirmingsignincustomflow",t.VerifyingAttributes="verifyingattributes",t.ForgotPassword="forgotpassword",t.ResetPassword="resettingpassword",t.SettingMFA="settingMFA",t.TOTPSetup="TOTPSetup",t.CustomConfirmSignIn="customConfirmSignIn",t.VerifyContact="verifyContact"}(i||(i={})),function(t){t.TOTP="TOTP",t.SMS="SMS",t.NOMFA="NOMFA"}(o||(o={})),function(t){t.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",t.SMSMFA="SMS_MFA",t.NewPasswordRequired="NEW_PASSWORD_REQUIRED",t.MFASetup="MFA_SETUP",t.CustomChallenge="CUSTOM_CHALLENGE"}(r||(r={})),function(t){t.Password="password"}(u||(u={})),function(t){t.username="username",t.email="email",t.phone_number="phone_number"}(a||(a={}))},187:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return u}));var i=e(93),o=e(186),r=e(185),u=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){i.a.dispatch(r.h,{event:r.g,message:t.message})},c=function(t,n){i.a.dispatch(r.h,{event:r.i,message:t,data:n})},s=function(t){if(!t.phoneNumberValue)throw new Error(r.e);var n=t.phoneNumberValue.replace(/[-()\s]/g,"");return""+t.countryDialCodeValue+n},d=function(t){if(!(t in o.d))throw new Error("Invalid username Alias - "+t+". Instead use "+Object.values(o.d))}}}]);
//# sourceMappingURL=11.0e511243.chunk.js.map