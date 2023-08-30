/*! For license information please see 442.72976d12.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[442],{1442:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,o,i,a,c,s,u,l,d,p,h,f=e(9439),m=e(168),x=e(5867),v=x.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  margin: 18px auto 48px;\n  gap: 8px;\n  font-weight: bold;\n  font-size: 18px;\n"]))),g=x.ZP.input(o||(o=(0,m.Z)(["\n  border-radius: 20px;\n  display: block;\n  border: 2px solid black;\n  padding: 8px 16px;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none;\n    border-color: #007aff;\n  }\n"]))),b=x.ZP.button(i||(i=(0,m.Z)(["\n  border-radius: 20px;\n  background-color: black;\n  color: #e5e5e5;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n  border: none;\n  padding: 8px 16px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #007aff;\n  }\n"]))),y=e(2791),w=e(6916),j=function(n){return n.contacts.items},k=function(n){return n.filter},L=function(n){return n.contacts},Z=(0,w.P1)([j,k],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),C=e(9434),E=e(5218),A=e(6938),P=e(184),_=function(){var n=(0,C.v9)(j),t=(0,C.I0)(),e=(0,y.useState)(""),r=(0,f.Z)(e,2),o=r[0],i=r[1],a=(0,y.useState)(""),c=(0,f.Z)(a,2),s=c[0],u=c[1],l=function(n){var t=n.target,e=t.name,r=t.value;"name"===e&&i(r),"number"===e&&u(r)};return(0,P.jsxs)(v,{onSubmit:function(e){e.preventDefault();var r=n.find((function(n){return o.toLowerCase()===n.name.toLowerCase()})),a=n.find((function(n){return s.toLowerCase()===n.number.toLowerCase()}));r?E.Am.error("".concat(o," is already in contacts."),{duration:1500}):a?E.Am.error("Number ".concat(s," already exists in contacts with the name ").concat(a.name,".")):(t((0,A.uK)({name:o,number:s})),i(""),u(""))},children:[(0,P.jsx)("label",{htmlFor:"input_name",children:"Name"}),(0,P.jsx)(g,{id:"input_name",type:"text",name:"name",placeholder:"Enter contact name",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0491\u0490\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454]+((['\u2019\u02bc \\-][A-Za-z\u0410-\u042f\u0430-\u044f\u0491\u0490\u0401\u0451\u0406\u0456\u0407\u0457\u0404\u0454 ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l,value:o}),(0,P.jsx)("label",{htmlFor:"input_tel",children:"Phone number"}),(0,P.jsx)(g,{id:"input_tel",type:"tel",name:"number",placeholder:"Enter phone number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and contain more than 5 characters. Can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:l,value:s}),(0,P.jsx)(b,{type:"submit",children:"Add contact"})]})},N=x.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  margin: 0 auto 16px;\n  gap: 8px;\n  font-weight: bold;\n  font-size: 18px;\n  color: #007aff;\n"]))),z=e(6895),O=function(){var n=(0,C.v9)(k),t=(0,C.I0)();return(0,P.jsxs)(N,{children:[(0,P.jsx)("label",{htmlFor:"input_filter",children:"\ud83d\udc47 Find contact by name"}),(0,P.jsx)(g,{id:"input_filter",type:"text",name:"filter",placeholder:"Start enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){t((0,z.T)(n.target.value.toLowerCase().trim()))},value:n})]})},S=x.ZP.li(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n\n  flex-wrap: wrap;\n  margin: 0 auto;\n  gap: 8px;\n  font-size: 18px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #767676;\n\n  @media screen and (min-width: 570px) {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: baseline;\n    gap: 16px;\n  }\n\n  & p {\n    flex-basis: calc((100% - 2 * 16px - 70px) / 2);\n    text-align: center;\n    \n    @media screen and (min-width: 570px) {\n      text-align: start;\n    }\n  }\n  & p:last-of-type {\n    word-break: break-word;\n  }\n  & p:last-of-type:hover {\n    color: #007aff;\n  }\n"]))),F=x.ZP.div(s||(s=(0,m.Z)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  gap: 8px;\n"]))),G=x.ZP.button(u||(u=(0,m.Z)(["\n  border-radius: 8px;\n  background-color: black;\n  color: #e5e5e5;\n  font-size: 14px;\n  line-height: 1.5;\n  border: none;\n  padding: 4px 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #007aff;\n  }\n"]))),T=e(2497),I=e(7425),Y=x.ZP.div(l||(l=(0,m.Z)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  //transform: scale(0);\n  //transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  pointer-events: none;\n  transition: 0.5s;\n\n  &.active {\n    //transform: scale(1);\n    opacity: 1;\n    pointer-events: all;\n  }\n"]))),D=x.ZP.div(d||(d=(0,m.Z)(["\n  padding: 28px 32px;\n  margin: 20px;\n  background-color: #e5e5e5;\n  border-radius: 30px;\n\n  transform: scale(0);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: 300px;\n  &.active {\n    transform: scale(1);\n  }\n"]))),K=x.ZP.div(p||(p=(0,m.Z)(["\n  text-align: center;\n"]))),q=(0,x.ZP)(I.tgW)(h||(h=(0,m.Z)(["\n  position: fixed;\n  top: 18px;\n  right: 18px;\n  width: 18px;\n  height: 18px;\n  padding: 10px;\n  cursor: pointer;\n"]))),J=function(n){var t=n.children,e=n.active,r=n.setActive;return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(Y,{className:e?"active":"",onClick:function(){return r(!1)},children:(0,P.jsxs)(D,{className:e?"active":"",onClick:function(n){return n.stopPropagation()},children:[(0,P.jsx)(q,{type:"button","aria-label":"close",onClick:function(){return r(!1)}}),(0,P.jsx)(K,{children:t})]})})})},B=e(5861),H=e(8433),M=e(5705),V=e(4120);function W(){W=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,r=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{s({},"")}catch(E){s=function(n,t,e){return n[t]=e}}function u(n,t,e,o){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new Z(o||[]);return r(a,"_invoke",{value:w(n,e,c)}),a}function l(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(E){return{type:"throw",arg:E}}}n.wrap=u;var d={};function p(){}function h(){}function f(){}var m={};s(m,i,(function(){return this}));var x=Object.getPrototypeOf,v=x&&x(x(C([])));v&&v!==t&&e.call(v,i)&&(m=v);var g=f.prototype=p.prototype=Object.create(m);function b(n){["next","throw","return"].forEach((function(t){s(n,t,(function(n){return this._invoke(t,n)}))}))}function y(n,t){function o(r,i,a,c){var s=l(n[r],n,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&e.call(d,"__await")?t.resolve(d.__await).then((function(n){o("next",n,a,c)}),(function(n){o("throw",n,a,c)})):t.resolve(d).then((function(n){u.value=n,a(u)}),(function(n){return o("throw",n,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){o(n,e,t,r)}))}return i=i?i.then(r,r):r()}})}function w(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=l(n,t,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function j(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,j(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=l(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function k(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function L(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function Z(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function C(n){if(n||""===n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}throw new TypeError(typeof n+" is not iterable")}return h.prototype=f,r(g,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:h,configurable:!0}),h.displayName=s(f,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,f):(n.__proto__=f,s(n,c,"GeneratorFunction")),n.prototype=Object.create(g),n},n.awrap=function(n){return{__await:n}},b(y.prototype),s(y.prototype,a,(function(){return this})),n.AsyncIterator=y,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new y(u(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(g),s(g,c,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=C,Z.prototype={constructor:Z,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),d},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),L(e),d}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:C(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},n}var $=function(n){var t=n.update,e=n.contact,r=n.setContact,o=n.setActive,i=(0,C.v9)(j).filter((function(n){return n.id!==e.id})),a=function(){var n=(0,B.Z)(W().mark((function n(e){var a,c;return W().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=i.find((function(n){return e.name.toLowerCase()===n.name.toLowerCase()})),c=i.find((function(n){return e.number.toLowerCase()===n.number.toLowerCase()})),!a){n.next=5;break}return E.Am.error("".concat(e.name," is already exists in contacts with the name ").concat(a.number),{duration:1500}),n.abrupt("return");case 5:if(!c){n.next=8;break}return E.Am.error("Number ".concat(e.number," already exists in contacts with the name ").concat(c.name,".")),n.abrupt("return");case 8:t(e),r(""),o(!1);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(T.Z,{message:"\ud83d\udc47 Edit contact"}),(0,P.jsx)(M.J9,{initialValues:{name:e.name||"",number:e.number||""},validationSchema:V.OD,onSubmit:a,children:function(n){var t=n.errors,e=n.touched,r=n.isSubmitting,o=n.isValid,i=n.dirty;return(0,P.jsxs)(H.HT,{children:[(0,P.jsx)("label",{children:"Name"}),(0,P.jsx)(H.tl,{type:"text",name:"name",className:t.name&&e.name?"input-error":""}),(0,P.jsx)(H.AL,{component:"p",name:"name"}),(0,P.jsx)("label",{children:"Phone number"}),(0,P.jsx)(H.tl,{type:"tel",name:"number",className:t.number&&e.number?"input-error":""}),(0,P.jsx)(H.AL,{component:"p",name:"number"}),(0,P.jsx)(H.XY,{type:"submit",disabled:!o||r||!i,children:"Edit contact"})]})}})]})},X=function(){var n=(0,y.useState)(!1),t=(0,f.Z)(n,2),e=t[0],r=t[1];document.body.style.overflow=e?"hidden":"auto";var o=(0,y.useState)(""),i=(0,f.Z)(o,2),a=i[0],c=i[1],s=(0,C.v9)(Z),u=(0,C.I0)();return(0,P.jsxs)(P.Fragment,{children:[s&&(0===s.length?(0,P.jsx)(T.Z,{message:"\ud83e\udd37\u200d\u2642\ufe0f Nothing found"}):(0,P.jsx)("ul",{children:s.map((function(n){var t=n.id,e=n.name,o=n.number;return(0,P.jsx)(S,{children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("p",{children:[e,":"]}),(0,P.jsx)("p",{onClick:function(){return function(n){window.location="tel:"+n}(o)},children:o}),(0,P.jsxs)(F,{children:[(0,P.jsx)(G,{type:"button",onClick:function(){r(!0),c(n)},children:(0,P.jsx)(I.cpK,{})}),(0,P.jsx)(G,{type:"button",onClick:function(){return n=t,void u((0,A.GK)(n));var n},children:(0,P.jsx)(I.GnT,{})})]})]})},t)}))})),e&&(0,P.jsx)(J,{active:e,setActive:r,children:(0,P.jsx)($,{update:function(n){u((0,A.Tk)({id:a.id,body:n}))},contact:a,setContact:c,setActive:r})})]})},Q=e(7725),R=e(1441),U=function(){var n=(0,C.v9)(L),t=n.items,e=n.isLoading,r=n.error,o=(null===t||void 0===t?void 0:t.length)<0;return(0,P.jsxs)(Q.W2,{children:[(0,P.jsx)("h1",{hidden:!0,children:"Phonebook"}),(0,P.jsx)(Q.Dx,{children:"Your phonebook"}),(0,P.jsx)(T.Z,{message:"\ud83d\udc47 Add number to contacts"}),(0,P.jsx)(_,{}),(0,P.jsx)(Q.Dx,{children:"Contacts"}),o?(0,P.jsx)(T.Z,{message:"\ud83e\udd26\u200d\u2642\ufe0f Your phonebook is empty"}):(0,P.jsx)(O,{}),e&&!t&&(0,P.jsx)(R.a,{}),r&&(0,P.jsx)(T.Z,{message:r}),t&&(0,P.jsx)(X,{}),(0,P.jsx)(E.x7,{toastOptions:Q.HK})]})}}}]);
//# sourceMappingURL=442.72976d12.chunk.js.map