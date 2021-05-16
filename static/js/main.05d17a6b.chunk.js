(this["webpackJsonpmy-redux-notes"]=this["webpackJsonpmy-redux-notes"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(7),r=n.n(o),s=(n(17),n(18),n(2)),i=n(3),l="ADD_NOTE",u="DELETE_NOTE",d="LOAD_NOTES",j="EDIT_NOTE",b="UPDATE_NOTE",O=n(23);var p=n(1),m=Object(s.b)()((function(e){var t=e.note,n=e.dispatch;return Object(p.jsxs)("div",{className:"note",children:[Object(p.jsx)("h2",{className:"note_title",children:t.title}),Object(p.jsx)("p",{className:"note_message",children:t.content}),Object(p.jsxs)("div",{className:"control-buttons",children:[Object(p.jsx)("button",{className:"btn btn-primary px-4 m-1",onClick:function(){return n((e=t.id,{type:j,payload:e}));var e},children:"Edit"}),Object(p.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){return n((e=t.id,{type:u,payload:e}));var e},children:"Delete"})]})]})})),h=function(){var e=Object(s.e)((function(e){return e.notes}),s.c);return Object(p.jsxs)("div",{children:[console.log("notes",e),Object(p.jsxs)("p",{className:"text-center",children:["Number of Notes: ",e.length]})]})},f=n(4),x=function(e){var t=e.note,n=Object(c.useState)(t.title),a=Object(f.a)(n,2),o=a[0],r=a[1],l=Object(c.useState)(t.content),u=Object(f.a)(l,2),d=u[0],j=u[1],O=Object(s.d)();return Object(p.jsx)("div",{className:"note",children:Object(p.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault();var n={title:o,content:d};console.log("dispatch update with ".concat(t.id),n),O(function(e,t){return{type:b,payload:Object(i.a)(Object(i.a)({},t),{},{id:e})}}(t.id,n))},children:[Object(p.jsx)("input",{className:"form-control p-2 mb-2",required:!0,type:"text",value:o,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("textarea",{className:"form-control p-2 mb-2",required:!0,rows:"5",value:d,onChange:function(e){return j(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})]})})},v=function(){var e=Object(s.e)((function(e){return e.notes}),s.c),t=e.map((function(e){return Object(p.jsx)("div",{children:e.editing?Object(p.jsx)(x,{note:e}):Object(p.jsx)(m,{note:e})},e.id)}));return Object(p.jsxs)("div",{className:"note-container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Notes"}),e&&e.length>0&&Object(p.jsx)(h,{}),Object(p.jsx)("div",{className:"note-container",children:e&&t})]})},N=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(f.a)(o,2),i=r[0],u=r[1],d=Object(s.d)();return Object(p.jsxs)("div",{className:"note-container",children:[Object(p.jsx)("h2",{className:"text-center",children:"Write a new note"}),Object(p.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),d(function(e,t){return{type:l,payload:{title:e,content:t,id:O()},editing:!1}}(n,i)),u(""),a("")},children:[Object(p.jsx)("input",{className:"form-control",required:!0,type:"text",name:"title",placeholder:"enter title",value:n,onChange:function(e){return a(e.target.value)}}),Object(p.jsx)("textarea",{className:"form-control",name:"content",required:!0,rows:5,placeholder:"enter content",value:i,onChange:function(e){return u(e.target.value)}}),Object(p.jsx)("button",{className:"btn btn-primary btn-lg",type:"submit",children:"Submit"})]})]})},g=function(){var e=Object(s.d)();return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){console.log("p",t),e({type:"LOAD_NOTES",payload:t.slice(0,5)})}))}),[]),Object(p.jsx)("div",{className:"container fluid",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col",children:Object(p.jsx)(N,{dispatch:e})}),Object(p.jsx)("div",{className:"col",children:Object(p.jsx)(v,{})})]})})};var y=Object(s.b)((function(e){return{notes:e.notes}}),(function(e){return{dispatch:e}}))((function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(g,{})})})),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},_=n(12),D=n(5),S={notes:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{notes:[t.payload].concat(Object(D.a)(e.notes))};case d:return{notes:[].concat(Object(D.a)(e.notes),Object(D.a)(t.payload.map((function(e){return{id:e.id,title:e.title,content:e.body,editong:!1}}))))};case u:return{notes:Object(D.a)(e.notes.filter((function(e){return e.id!==t.payload})))};case j:return{notes:e.notes.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{editing:!0}):e}))};case b:return console.log("updating",t.payload),{notes:[Object(i.a)(Object(i.a)({},t.payload),{},{editing:!1})].concat(Object(D.a)(e.notes.filter((function(e){return e.id!==t.payload.id}))))};default:return e}},w=Object(_.a)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(27);window.store=w,r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(s.a,{store:w,children:Object(p.jsx)(y,{})})}),document.getElementById("root")),E()}},[[28,1,2]]]);
//# sourceMappingURL=main.05d17a6b.chunk.js.map