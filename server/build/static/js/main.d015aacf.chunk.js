(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),o=c(2),j=(c(9),c(0)),r="[GiftBox] Toggle",l={open:!1,wasOpen:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,c=t.type;switch(c){case r:return{open:!e.open,wasOpen:e.open};default:return e}},b=function(){var e=Object(n.useReducer)(d,l),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"floor",children:[Object(j.jsx)("div",{className:"shadow"}),Object(j.jsx)("div",{className:"shadow2"}),Object(j.jsx)("div",{className:"shadow3"}),Object(j.jsxs)("div",{className:"box",children:[c.open?Object(j.jsx)("i",{className:"heart-gift",children:"\u2764\ufe0f"}):Object(j.jsx)(j.Fragment,{}),Object(j.jsxs)("div",{className:c.open?"lid open":c.wasOpen?"lid close":"lid",onClick:function(e){return s({type:r})},children:[Object(j.jsx)("div",{className:"qmark",children:c.open?"!":"?"}),Object(j.jsx)("div",{className:"face ltop"}),Object(j.jsx)("div",{className:"face lleft"}),Object(j.jsx)("div",{className:"face lright"})]}),Object(j.jsx)("div",{className:"face top"}),Object(j.jsx)("div",{className:"face left"}),Object(j.jsx)("div",{className:"face right"})]})]})};c(11);var u=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(o.a)(a,2),r=i[0],l=i[1],d=Object(n.useState)(!1),u=Object(o.a)(d,2),O=u[0],f=u[1],h="/poll/",p=function(e){s(e);var t=0;e.forEach((function(e){t+=e.votes})),l(t)};Object(n.useEffect)((function(){fetch(h).then((function(e){return e.json()})).then((function(e){p(e)}))}),[]);var v,x=function(e){if(e.preventDefault(),!1===O){var t=e.target.id;f(!O);var c={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})};fetch(h,c).then((function(e){return e.json()})).then((function(e){return p(e)}))}};return c&&(v=c.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("button",{onClick:x,id:e.id,children:[e.optionName,"- got ",e.votes," votes"]})]},e.id)}))),Object(j.jsxs)("div",{className:"poll",children:[Object(j.jsx)("h1",{children:"Choose the gift behind mystery box"}),Object(j.jsx)("ul",{className:O?"results":"options",children:v}),Object(j.jsxs)("p",{children:["TOTAL VOTES: ",r]})]})};c(12);var O=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u,{})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.d015aacf.chunk.js.map