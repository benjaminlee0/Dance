(this.webpackJsonpdance=this.webpackJsonpdance||[]).push([[10],{143:function(n,t,e){"use strict";e.r(t),e.d(t,"amplify_button",(function(){return i})),e.d(t,"amplify_loading_spinner",(function(){return a})),e.d(t,"amplify_section",(function(){return c}));var r=e(23),o=(e(186),e(185),e(187)),i=function(){function n(n){var t=this;Object(r.f)(this,n),this.type="button",this.variant="button",this.disabled=!1,this.handleClick=function(n){if(t.handleButtonClick)t.handleButtonClick(n);else if(Object(o.e)(t.el)&&"submit"==t.type){var e=t.el.closest("form");if(!e){var r=t.el.closest("amplify-form-section");e=r&&r.shadowRoot.querySelector("form")}if(e){n.preventDefault();var i=document.createElement("button");i.type=t.type,i.style.display="none",e.appendChild(i),i.click(),i.remove()}}}}return n.prototype.render=function(){var n;return Object(r.e)("button",{class:(n={},n[this.variant]=!0,n),type:this.type,disabled:this.disabled,onClick:this.handleClick},Object(r.e)("slot",null))},Object.defineProperty(n.prototype,"el",{get:function(){return Object(r.d)(this)},enumerable:!0,configurable:!0}),n}();i.style=":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);width:100%;text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-xxs);font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);text-transform:uppercase;padding:14px;letter-spacing:1.1px;background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.anchor{color:var(--link-color);padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";var a=function(){function n(n){Object(r.f)(this,n)}return n.prototype.render=function(){return Object(r.e)("amplify-icon",{class:"loading-spinner",name:"loading"})},n}();a.style=".loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:0.875rem;height:0.875rem}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var c=function(){function n(n){Object(r.f)(this,n),this.role="application"}return n.prototype.render=function(){return Object(r.e)("section",{class:"section",role:this.role},Object(r.e)("slot",null))},Object.defineProperty(n.prototype,"el",{get:function(){return Object(r.d)(this)},enumerable:!0,configurable:!0}),n}();c.style=":host{--background-color:var(--amplify-white);--font-family:var(--amplify-font-family)}.section{position:relative;margin-bottom:20px;background-color:var(--background-color);padding:35px 40px;text-align:left;display:inline-block;border-radius:6px;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:320px}@media (min-width: 672px){.section{width:auto;min-width:460px}}"},185:function(n,t,e){"use strict";e.d(t,"a",(function(){return v})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return m})),e.d(t,"e",(function(){return p})),e.d(t,"f",(function(){return l})),e.d(t,"g",(function(){return k})),e.d(t,"h",(function(){return w})),e.d(t,"i",(function(){return S})),e.d(t,"j",(function(){return f})),e.d(t,"k",(function(){return h})),e.d(t,"l",(function(){return b})),e.d(t,"m",(function(){return u})),e.d(t,"n",(function(){return a})),e.d(t,"o",(function(){return g})),e.d(t,"p",(function(){return y})),e.d(t,"q",(function(){return d})),e.d(t,"r",(function(){return i})),e.d(t,"s",(function(){return c})),e.d(t,"t",(function(){return r}));var r="username",o="email",i="code",a="phone",c="password",u="country-dial-code-select",s="+1",d="amplify-auth-source",l="amplify-signin-with-hostedUI",f="amplify-authenticator-authState",p="Phone number can not be empty",m="No Auth module found, please ensure @aws-amplify/auth is imported",g="SETUP_TOTP",h="User has not set up software token mfa",b="User has not verified software token mfa",y="SUCCESS",v="auth",w="UI Auth",k="ToastAuthError",S="AuthStateChange"},186:function(n,t,e){"use strict";var r,o,i,a,c;e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return c})),e.d(t,"e",(function(){return a})),function(n){n.SignUp="signup",n.SignOut="signout",n.SignIn="signin",n.Loading="loading",n.SignedOut="signedout",n.SignedIn="signedin",n.SigningUp="signingup",n.ConfirmSignUp="confirmSignUp",n.confirmingSignUpCustomFlow="confirmsignupcustomflow",n.ConfirmSignIn="confirmSignIn",n.confirmingSignInCustomFlow="confirmingsignincustomflow",n.VerifyingAttributes="verifyingattributes",n.ForgotPassword="forgotpassword",n.ResetPassword="resettingpassword",n.SettingMFA="settingMFA",n.TOTPSetup="TOTPSetup",n.CustomConfirmSignIn="customConfirmSignIn",n.VerifyContact="verifyContact"}(r||(r={})),function(n){n.TOTP="TOTP",n.SMS="SMS",n.NOMFA="NOMFA"}(o||(o={})),function(n){n.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",n.SMSMFA="SMS_MFA",n.NewPasswordRequired="NEW_PASSWORD_REQUIRED",n.MFASetup="MFA_SETUP",n.CustomChallenge="CUSTOM_CHALLENGE"}(i||(i={})),function(n){n.Password="password"}(a||(a={})),function(n){n.username="username",n.email="email",n.phone_number="phone_number"}(c||(c={}))},187:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return d})),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return a}));var r=e(93),o=e(186),i=e(185),a=function(n){return!!n.shadowRoot&&!!n.attachShadow},c=function(n){r.a.dispatch(i.h,{event:i.g,message:n.message})},u=function(n,t){r.a.dispatch(i.h,{event:i.i,message:n,data:t})},s=function(n){if(!n.phoneNumberValue)throw new Error(i.e);var t=n.phoneNumberValue.replace(/[-()\s]/g,"");return""+n.countryDialCodeValue+t},d=function(n){if(!(n in o.d))throw new Error("Invalid username Alias - "+n+". Instead use "+Object.values(o.d))}}}]);
//# sourceMappingURL=10.35c0b5cd.chunk.js.map