(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(14),s=c.n(r),i=c(5),j=c.n(i),o=c(15),d=c(3),b=c(16),l=c.n(b),u=c.p+"static/media/logo.e6ecab44.png",O=c(0),h=function(){return Object(O.jsx)("header",{className:"center",children:Object(O.jsx)("img",{src:u,alt:"logo"})})},x=c.p+"static/media/spinner.11d9cde8.gif",m=function(){return Object(O.jsx)("img",{src:x,alt:"Loading",style:{width:"200px",margin:"auto",display:"block"}})},g=function(e){var t=e.item;return Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-inner",children:[Object(O.jsx)("div",{className:"card-front",children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsxs)("div",{className:"card-back",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},p=function(e){var t=e.items;return e.isLoading?Object(O.jsx)(m,{}):Object(O.jsx)("section",{className:"cards",children:t.map((function(e){return Object(O.jsx)(g,{item:e},e.char_id)}))})},f=function(e){var t=e.getQuery,c=Object(n.useState)(""),a=Object(d.a)(c,2),r=a[0],s=a[1];return Object(O.jsx)("section",{className:"search",children:Object(O.jsx)("form",{children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:r,onChange:function(e){return c=e.target.value,s(c),void t(r);var c},autoFocus:!0})})})},v=(c(41),function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),s=Object(d.a)(r,2),i=s[0],b=s[1],u=Object(n.useState)(""),x=Object(d.a)(u,2),m=x[0],g=x[1];return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,l()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 3:t=e.sent,console.log(t.data),a(t.data),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{}),Object(O.jsx)(f,{getQuery:function(e){return g(e)}}),Object(O.jsx)(p,{isLoading:i,items:c})]})});s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.34de6f50.chunk.js.map