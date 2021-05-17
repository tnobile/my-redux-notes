(this["webpackJsonpmy-redux-notes"]=this["webpackJsonpmy-redux-notes"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(17),i=n.n(s),r=(n(30),n(31),n(4)),a=n(10),j=n(13),l=n(20),d=n(35),b=Object(l.b)({name:"notes",initialState:{notes:[]},reducers:{addNote:function(e,t){e.notes=[t.payload].concat(Object(j.a)(e.notes))},loadNotes:function(e,t){e.notes=[].concat(Object(j.a)(e.notes),Object(j.a)(t.payload.map((function(e){return{id:d(),title:e.title,content:e.body,editong:!1}}))))},deleteNote:function(e,t){e.notes=Object(j.a)(e.notes.filter((function(e){return e.id!==t.payload})))},editNote:function(e,t){e.notes=e.notes.map((function(e){return e.id===t.payload?Object(a.a)(Object(a.a)({},e),{},{editing:!0}):e}))},updateNote:function(e,t){e.notes=[Object(a.a)(Object(a.a)({},t.payload),{},{editing:!1})].concat(Object(j.a)(e.notes.filter((function(e){return e.id!==t.payload.id}))))}}}),u=b.actions,O=u.addNote,h=u.loadNotes,x=u.deleteNote,m=u.editNote,f=u.updateNote,p=b.reducer,N=n(1),v=Object(r.b)()((function(e){var t=e.note,n=e.dispatch;return Object(N.jsxs)("div",{className:"note",children:[Object(N.jsx)("h2",{className:"note_title",children:t.title}),Object(N.jsx)("p",{className:"note_message",children:t.content}),Object(N.jsx)("h2",{className:"note_message",children:t.id}),Object(N.jsxs)("div",{className:"control-buttons",children:[Object(N.jsx)("button",{className:"btn btn-primary px-4 m-1",onClick:function(){return n(m(t.id))},children:"Edit"}),Object(N.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){return n(x(t.id))},children:"Delete"})]})]})})),g=function(){var e=Object(r.e)((function(e){return e.notes}),r.c).notes;return Object(N.jsxs)("div",{children:[console.log("notes",e),Object(N.jsxs)("p",{className:"text-center",children:["Number of Notes: ",e.length]})]})},y=n(12),S=function(e){var t=e.note,n=Object(c.useState)(t.title),o=Object(y.a)(n,2),s=o[0],i=o[1],j=Object(c.useState)(t.content),l=Object(y.a)(j,2),d=l[0],b=l[1],u=Object(r.d)();return Object(N.jsx)("div",{className:"note",children:Object(N.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault();var n={title:s,content:d};console.log("dispatch update with ".concat(t.id),n),u(f(Object(a.a)(Object(a.a)({},n),{},{id:t.id})))},children:[Object(N.jsx)("input",{className:"form-control p-2 mb-2",required:!0,type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(N.jsx)("textarea",{className:"form-control p-2 mb-2",required:!0,rows:"5",value:d,onChange:function(e){return b(e.target.value)}}),Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})]})})},w=function(){var e=Object(r.e)((function(e){return e.notes}),r.c).notes,t=e.map((function(e){return Object(N.jsx)("div",{children:e.editing?Object(N.jsx)(S,{note:e}):Object(N.jsx)(v,{note:e})},e.id)}));return Object(N.jsxs)("div",{className:"note-container",children:[Object(N.jsx)("h3",{className:"text-center",children:"All Notes"}),e&&e.length>0&&Object(N.jsx)(g,{}),Object(N.jsx)("div",{className:"note-container",children:e&&t})]})},C=n(25),k=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(""),i=Object(y.a)(s,2),a=i[0],j=i[1],l=Object(r.d)();return Object(N.jsxs)("div",{className:"note-container",children:[Object(N.jsx)("h2",{className:"text-center",children:"Write a new note"}),Object(N.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),l(O({title:n,content:a,id:Object(C.a)(),editing:!1})),j(""),o("")},children:[Object(N.jsx)("input",{className:"form-control",required:!0,type:"text",name:"title",placeholder:"enter title",value:n,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)("textarea",{className:"form-control",name:"content",required:!0,rows:5,placeholder:"enter content",value:a,onChange:function(e){return j(e.target.value)}}),Object(N.jsx)("button",{className:"btn btn-primary btn-lg",type:"submit",children:"Submit"})]})]})},q=function(){var e=Object(r.d)();return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){console.log("p",t),e(h(t.slice(0,5)))}))}),[e]),Object(N.jsx)("div",{className:"container fluid ",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col",children:Object(N.jsx)(k,{dispatch:e})}),Object(N.jsx)("div",{className:"col",children:Object(N.jsx)(w,{})})]})})},D=n(16),F=n(3);var T=function(){return Object(N.jsx)("div",{children:"About"})},A=function(){return Object(N.jsx)("div",{children:"Todo"})},E=Object(r.b)((function(e){return{notes:e.notes}}),(function(e){return{dispatch:e}}))((function(){return Object(N.jsx)(D.a,{children:Object(N.jsxs)("div",{children:[Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)(D.b,{to:"/",children:"Home"})}),Object(N.jsx)("li",{children:Object(N.jsx)(D.b,{to:"/todo",children:"Todo"})}),Object(N.jsx)("li",{children:Object(N.jsx)(D.b,{to:"/about",children:"About"})})]}),Object(N.jsxs)(F.c,{children:[Object(N.jsx)(F.a,{exact:!0,path:"/",children:Object(N.jsx)(q,{})}),Object(N.jsx)(F.a,{path:"/todo",children:Object(N.jsx)(A,{})}),Object(N.jsx)(F.a,{path:"/about",children:Object(N.jsx)(T,{})})]})]})})})),_=(n(41),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))}),B=n(9),I=Object(B.b)({notes:p}),J=Object(l.a)({reducer:I});window.store=J,i.a.render(Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(r.a,{store:J,children:Object(N.jsx)(E,{})})}),document.getElementById("root")),_()}},[[42,1,2]]]);
//# sourceMappingURL=main.1e25aa80.chunk.js.map