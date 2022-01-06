(this.webpackJsonpDevForms=this.webpackJsonpDevForms||[]).push([[0],{81:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(30),s=n.n(a),o=(n(81),n(15)),i=n(16),l=n(0);function d(){return Object(l.jsx)("div",{children:"404 error!"})}var u=n(9);function j(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"font-extrabold text-2xl",children:"DEVFORMS"})})}function m(){var e=Object(i.g)();return Object(l.jsx)("button",{type:"button",className:"px-3 py-2 font-light text-white bg-blue-400 rounded-md",onClick:function(){localStorage.removeItem("__auth__token"),e.replace("/")},children:"Logout"})}function b(){return Object(l.jsxs)("div",{className:"font-bold space-x-10 text-blue-500",children:[Object(l.jsx)(o.b,{to:"/forms",className:"border-b-2 border-transparent hover:border-blue-500",children:"Forms"}),Object(l.jsx)(o.b,{to:"/account",className:"border-b-2 border-transparent hover:border-blue-500",children:"Account"}),Object(l.jsx)(m,{})]})}function p(){return Object(l.jsxs)("header",{className:"w-full  flex justify-between px-8 py-8 shadow-xl",children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{})]})}var x=n(6),f=n(17),h=Object(f.c)({name:"Notification",initialState:{Notify:!1,NotificationType:"",content:""},reducers:{DoNotify:function(e,t){e.Notify=!0,e.NotificationType=t.payload.NotificationType,e.content=t.payload.content},HideNotify:function(e){e.Notify=!1}}}),O=h.actions,g=O.DoNotify,y=O.HideNotify;function N(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(x.a)(a,2),o=s[0],d=s[1],j=Object(i.g)(),m=Object(u.b)();return Object(l.jsxs)("div",{className:"flex flex-col my-2",children:[Object(l.jsx)("label",{className:"py-2 font-medium",children:"Change Password"}),Object(l.jsx)("input",{type:"password",placeholder:"New Password",className:"bg-gray-200 rounded-md px-4 py-2",value:n,onChange:function(e){return c(e.target.value.trim())}}),Object(l.jsx)("input",{type:"password",placeholder:"Confirm New Password",className:"bg-gray-200 rounded-md px-4 py-2 my-4",value:o,onChange:function(e){return d(e.target.value.trim())}}),Object(l.jsx)("button",{type:"submit",onClick:function(e){if(e.preventDefault(),n===o){var t=localStorage.getItem("__auth__token");t&&fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":t}}).then((function(e){return e.json()})).then((function(e){e.user?fetch("https://devformms.herokuapp.com/changePassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.user.email,NewPassword:n})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status?m(g({NotificationType:"success",content:"Setting Saved!"})):m(g({NotificationType:"error",content:"Error! try again"}))})).catch((function(e){return m(g({NotificationType:"error",content:"Error! try again"}))})):j.replace("/")}))}},className:"bg-blue-500 text-gray-100 font-medium px-4 py-2 rounded-md w-36",children:"Save Changes"})]})}function v(){var e=Object(r.useState)((function(){var e=localStorage.getItem("__auth__token");if(e){var t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}})),t=Object(x.a)(e,1)[0];return t?Object(l.jsxs)("section",{className:"rounded-md w-5/6 px-8",children:[Object(l.jsx)("h2",{className:"font-bold text-2xl py-8",children:"Account"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("label",{className:"py-2 font-medium",children:"Your Name"}),Object(l.jsx)("input",{type:"text",value:t.name,className:"bg-gray-200 rounded-md px-4 py-2",disabled:!0})]}),Object(l.jsxs)("div",{className:"flex flex-col my-2",children:[Object(l.jsx)("label",{className:"py-2 font-medium",children:"Registered Email"}),Object(l.jsx)("input",{type:"text",disabled:!0,className:"bg-gray-200 rounded-md px-4 py-2 focus:cursor-not-allowed",value:t.email})]}),Object(l.jsx)(N,{})]})]}):Object(l.jsx)(i.a,{to:"/"})}var w=n(45),S=n(134),k=n(131),F=c.a.forwardRef((function(e,t){return Object(l.jsx)(k.a,Object(w.a)({elevation:6,ref:t,variant:"filled"},e))}));function T(){var e=Object(u.c)((function(e){return e.Notification})),t=e.Notify,n=e.NotificationType,r=e.content,c=Object(u.b)();function a(e,t){"clickaway"!==t&&c(y())}return Object(l.jsx)(S.a,{open:t,autoHideDuration:1e3,onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(l.jsx)(F,{onClose:a,severity:n,children:r})})}function C(){var e=Object(u.c)((function(e){return e.Notification.Notify}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsx)(v,{}),e&&Object(l.jsx)(T,{})]})}var I=n(137),P=n(139);function E(){return Object(l.jsx)(I.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(l.jsx)(P.a,{color:"inherit"})})}var _=Object(f.c)({name:"CreateFormWindow",initialState:{IsCreateFormWindowAppear:!1},reducers:{ShowForm:function(e){e.IsCreateFormWindowAppear=!0},HideForm:function(e){e.IsCreateFormWindowAppear=!1}}}),D=_.actions,L=D.ShowForm,W=D.HideForm;function A(){var e=Object(u.b)();return Object(l.jsxs)("section",{className:"flex flex-col px-8 pt-48",children:[Object(l.jsx)("h2",{className:"text-center font-bold text-3xl",children:"Your Forms"}),Object(l.jsx)("button",{className:"px-4 py-2 mx-24 my-4 bg-blue-500 text-white font-medium rounded-md shadow-2xl self-end",onClick:function(){return e(L())},children:"+ New Form"})]})}var R,M=n(7),J=n(58),H=n.n(J),Y=n(70),q=Object(f.b)("Forms/getForms",function(){var e=Object(Y.a)(H.a.mark((function e(t,n){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://devformms.herokuapp.com/create-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(f.c)({name:"Forms",initialState:{list:{projects:[]},IsLoading:!1},reducers:{ModifyList:function(e,t){var n=t.payload;e.list=n},ModifyFormName:function(e,t){var n,r=t.payload,c=r.NewFormName,a=r.FormId;e.list.projects.forEach((function(e,t){e._id===a&&(n=t)})),e.list.projects[n].formName=c},ModifyTargetEmail:function(e,t){var n,r=t.payload,c=r.NewTargetEmail,a=r.FormId;e.list.projects.forEach((function(e,t){e._id===a&&(n=t)})),e.list.projects[n].targetEmail=c},ModifyEnableSetting:function(e,t){var n,r=t.payload,c=r.FormId,a=r.NewEnableSetting;e.list.projects.forEach((function(e,t){e._id===c&&(n=t)})),e.list.projects[n].isEnabled=a}},extraReducers:(R={},Object(M.a)(R,q.pending,(function(e,t){e.IsLoading=!0})),Object(M.a)(R,q.fulfilled,(function(e,t){var n=t.payload;e.list=n.result,e.IsLoading=!1})),Object(M.a)(R,q.rejected,(function(e,t){e.IsLoading=!1})),R)}),V=z.actions,B=V.ModifyList,G=V.ModifyFormName,U=V.ModifyTargetEmail,Z=V.ModifyEnableSetting;function K(e){var t=e.user,n=Object(i.g)(),c=Object(u.b)(),a=Object(r.useState)(""),s=Object(x.a)(a,2),o=s[0],d=s[1],j=Object(r.useState)(t.email),m=Object(x.a)(j,2),b=m[0],p=m[1];return Object(l.jsx)("section",{className:"fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black z-auto",children:Object(l.jsxs)("div",{className:"bg-gray-50 rounded-md w-5/6 sm:2/3",children:[Object(l.jsx)("div",{children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 float-right m-2 cursor-pointer",viewBox:"0 0 20 20",fill:"black",onClick:function(){return c(W())},children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),Object(l.jsx)("h3",{className:"text-xl p-4 font-medium",children:"Create Form"}),Object(l.jsxs)("form",{className:"flex flex-col p-4",children:[Object(l.jsx)("label",{className:"py-2",children:"Form Name"}),Object(l.jsx)("input",{type:"text",value:o,placeholder:"My website",required:!0,className:"p-2 bg-gray-200 rounded-md",onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("label",{className:"py-2",children:"Send Emails To"}),Object(l.jsx)("input",{type:"email",value:b,placeholder:"Enter email",required:!0,className:"p-2 mb-2 bg-gray-200 rounded-md",onChange:function(e){return p(e.target.value.trim())}}),Object(l.jsx)("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white font-bold rounded-md my-2",onClick:function(e){if(e.preventDefault(),""===o||""===b)alert("can't empty");else{var r=localStorage.getItem("__auth__token");fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":r}}).then((function(e){return e.json()})).then((function(e){if(e.user){var r={userName:t.email,formName:o,targetEmail:b};c(q(r)).then((function(e){"Forms/getForms/fulfilled"===e.type?(c(g({NotificationType:"success",content:"Hurrah! created successfully"})),c(W())):c(g({NotificationType:"error",content:"Error! occurred"}))}))}else n.replace("/")}))}},children:"Create Form"})]})]})})}function Q(e){var t=e.id,n=Object(u.c)((function(e){return function(e,t){return e.Forms.list.projects.filter((function(e){return e._id===t}))}(e,t)})),r=Object(x.a)(n,1)[0],c=r.formName,a=r.totalSubmissions,s=r.isEnabled,d=Object(i.i)().path;return Object(l.jsxs)("tr",{className:"bg-gray-300 rounded-md border-b-8 border-gray-200",children:[Object(l.jsx)("td",{className:"text-xl p-4 text-blue-500 font-thin text-justify",children:Object(l.jsx)(o.b,{to:"".concat(d,"/").concat(t,"/integration"),className:"underline",children:c})}),Object(l.jsx)("td",{className:"p-4",children:a}),s?Object(l.jsx)("td",{className:"p-4 font-medium text-green-700",children:"Active"}):Object(l.jsx)("td",{className:"p-4 font-medium text-red-700",children:"Disabled"})]})}function X(e){var t,n=e.user,c=Object(u.c)((function(e){return function(e){return e.Forms.list.projects.length>0?e.Forms.list.projects.slice().reverse().map((function(e){return e._id})):null}(e)})),a=Object(u.b)();return Object(r.useEffect)((function(){fetch("https://devformms.herokuapp.com/send-initialData",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n.email})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status&&e.result&&a(B(e.result))})).catch((function(e){return console.log(e)}))}),[]),c&&(t=c.map((function(e){return Object(l.jsx)(Q,{id:e},e)}))),Object(l.jsx)("section",{children:c?Object(l.jsxs)("table",{className:"table-fixed mx-auto",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"px-8 py-4 text-xl",children:"Form"}),Object(l.jsx)("th",{className:"px-8 py-4 text-xl",children:"Total Submissions"}),Object(l.jsx)("th",{className:"px-8 py-4 text-xl",children:"Status"})]})}),Object(l.jsx)("tbody",{className:"bg-green-500 text-center",children:t})]}):Object(l.jsx)("h3",{className:"py-4 text-gray-600 text-center",children:"Oops! No Form Found"})})}function $(){var e=Object(i.h)().FormId,t=Object(u.c)((function(e){return e.Forms.list?e.Forms.list._id:""})),n="https://devformms.herokuapp.com/".concat(t,"/").concat(e);return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"px-16 py-8 bg-blue-300",children:[Object(l.jsx)("h3",{className:"font-medium text-xl",children:"Your Form's endpoint is :"}),Object(l.jsxs)("div",{className:"flex py-4 space-x-6",children:[Object(l.jsx)("div",{className:"pl-4 pr-28 py-3 bg-gray-300 rounded-md url-box",children:n}),Object(l.jsx)("button",{type:"button",className:"p-3 font-medium border-2 border-black rounded-md",onClick:function(){var e=document.querySelector(".url-box"),t=document.body.appendChild(document.createElement("input"));t.value=e.innerHTML,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("copied")},children:"Copy"})]})]}),Object(l.jsxs)("div",{className:"px-16 py-8 w-5/6",children:[Object(l.jsx)("h3",{className:"text-xl font-medium py-8",children:"Integration Guide"}),Object(l.jsx)("div",{className:"bg-gray-900 text-gray-50  py-8 text-sm  rounded-md",children:Object(l.jsxs)("div",{className:"w-full mx-auto flex flex-col px-4",children:[Object(l.jsxs)("span",{children:["<form action=",Object(l.jsx)("span",{className:"text-green-300 font-medium",children:'"'.concat(n,'"')}),' method="post">']}),Object(l.jsx)("span",{className:"px-4",children:'<label for="name">Your Name</label>'}),Object(l.jsx)("span",{className:"px-4",children:'<input name="name" id="name" type="text" />'}),Object(l.jsx)("span",{className:"px-4",children:'<button type="submit">Submit</button>'}),Object(l.jsx)("span",{children:"</form>"})]})}),Object(l.jsxs)("div",{className:"py-4 space-y-3",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"text-xl font-medium text-blue-500",children:"Step 1:"}),Object(l.jsx)("span",{className:"px-4",children:"You need to copy Form's endpoint from the endpoint section."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"text-xl font-medium text-blue-500",children:"Step 2:"}),Object(l.jsx)("span",{className:"px-4",children:"Paste the endpoint into front end code like mentioned above."})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"text-xl font-medium text-blue-500",children:"Step 3:"}),Object(l.jsx)("span",{className:"px-4",children:"Relax, when someone submits the form on your website we will handle automatically."})]})]}),Object(l.jsxs)("p",{className:"py-4 tetx-xl",children:[Object(l.jsx)("span",{className:"text-red-500 font-medium",children:"Note:"})," You can set form fields according to your requirements, not limited to demo form. "]})]})]})}function ee(e){var t=e.formName,n=e.FormId,c=Object(r.useState)(t),a=Object(x.a)(c,2),s=a[0],o=a[1],d=Object(r.useState)(!1),j=Object(x.a)(d,2),m=j[0],b=j[1],p=Object(i.g)(),f=Object(u.b)();return Object(l.jsxs)("form",{className:"py-2",children:[Object(l.jsx)("label",{className:"text-xl font-medium",children:"Form Name"}),Object(l.jsxs)("div",{className:"flex my-2",children:[Object(l.jsx)("input",{className:"bg-gray-300 rounded-md pl-3 py-2 w-1/2",type:"text",value:s,onChange:function(e){var n=e.target.value;o(n.trim()),b(n!==t)}}),m?Object(l.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-gray-100 rounded-md mx-4",type:"submit",onClick:function(e){e.preventDefault();var t=localStorage.getItem("__auth__token");fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":t}}).then((function(e){return e.json()})).then((function(e){e.user?fetch("https://devformms.herokuapp.com/update-formName",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e.user.email,NewFormName:s,FormId:n})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status&&(f(G({NewFormName:s,FormId:n})),f(g({NotificationType:"success",content:"Setting Saved!"})))})).catch((function(e){return f(g({NotificationType:"error",content:"Error! try again"}))})):p.replace("/")}))},children:"Save"}):Object(l.jsx)("button",{className:"px-4 py-2 bg-gray-300 rounded-md mx-4",type:"submit",children:"Save"})]})]})}function te(e){var t=e.targetEmail,n=e.FormId,c=Object(r.useState)(t),a=Object(x.a)(c,2),s=a[0],o=a[1],d=Object(r.useState)(!1),j=Object(x.a)(d,2),m=j[0],b=j[1],p=Object(u.b)(),f=Object(i.g)();return Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{className:"text-xl font-medium",children:"Target Email"}),Object(l.jsxs)("div",{className:"flex my-2",children:[Object(l.jsx)("input",{className:"bg-gray-300 rounded-md pl-3 py-2 w-1/2",type:"text",value:s,onChange:function(e){var n=e.target.value;o(n.trim()),b(n!==t)}}),m?Object(l.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-gray-100  rounded-md mx-4",type:"submit",onClick:function(e){e.preventDefault();var t=localStorage.getItem("__auth__token");fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":t}}).then((function(e){return e.json()})).then((function(e){e.user?fetch("https://devformms.herokuapp.com/update-targetEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e.user.email,NewTargetEmail:s,FormId:n})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status&&(p(U({NewTargetEmail:s,FormId:n})),p(g({NotificationType:"success",content:"Setting Saved!"})))})).catch((function(e){return p(g({NotificationType:"error",content:"Error! try again"}))})):f.replace("/")}))},children:"Save"}):Object(l.jsx)("button",{className:"px-4 py-2 bg-gray-300 rounded-md mx-4",type:"submit",children:"Save"})]})]})}var ne=n(133);function re(e){var t=e.isEnabled,n=e.FormId,r=c.a.useState(t),a=Object(x.a)(r,2),s=a[0],o=a[1],d=Object(u.b)(),j=Object(i.g)();return Object(l.jsxs)("div",{className:"flex items-center py-4",children:[Object(l.jsxs)("div",{className:"w-1/2",children:[Object(l.jsx)("h2",{className:"font-medium text-xl",children:"Form Enabled"}),Object(l.jsx)("p",{className:"text-gray-600",children:"Do check to allow new submissions"})]}),Object(l.jsx)(ne.a,{checked:s,onChange:function(e){o(e.target.checked);var t=localStorage.getItem("__auth__token");fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":t}}).then((function(e){return e.json()})).then((function(t){t.user?fetch("https://devformms.herokuapp.com/update-EnableSetting",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t.user.email,NewEnableSetting:e.target.checked,FormId:n})}).then((function(e){return e.json()})).then((function(t){"ok"===t.status&&(d(Z({NewEnableSetting:e.target.checked,FormId:n})),d(g({NotificationType:"success",content:"Setting Saved!"})))})).catch((function(e){return d(g({NotificationType:"error",content:"Error! try again"}))})):j.replace("/")}))},inputProps:{"aria-label":"controlled"}})]})}var ce=Object(f.c)({name:"DelDialog",initialState:{IsDelDialogOpen:!1},reducers:{DelDialogOpen:function(e){console.log("called"),e.IsDelDialogOpen=!0},DelDialogClose:function(e){e.IsDelDialogOpen=!1}}}),ae=ce.actions,se=ae.DelDialogOpen,oe=ae.DelDialogClose;function ie(){var e=Object(u.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"py-4 text-2xl font-medium",children:"Risk Zone"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsxs)("div",{className:"py-4 w-1/2",children:[Object(l.jsx)("h2",{className:"text-xl font-medium",children:"Delete Form"}),Object(l.jsx)("p",{className:"text-gray-600",children:"Deleting the form won't allow you to perform any type of submissions"})]}),Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 cursor-pointer",viewBox:"0 0 20 20",fill:"red",onClick:function(){return e(se())},children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})]})]})}var le=n(145),de=n(130),ue=n(144),je=n(142),me=n(143),be=n(141),pe=n(135),xe=c.a.forwardRef((function(e,t){return Object(l.jsx)(pe.a,Object(w.a)({direction:"up",ref:t},e))}));function fe(e){var t=e.FormId,n=Object(u.c)((function(e){return e.DelDialog.IsDelDialogOpen})),r=Object(i.g)(),c=Object(u.b)(),a=function(){c(oe())};return Object(l.jsx)("div",{children:Object(l.jsxs)(de.a,{open:n,TransitionComponent:xe,keepMounted:!0,onClose:a,"aria-describedby":"alert-dialog-slide-description",children:[Object(l.jsx)(be.a,{children:"Are You Sure?"}),Object(l.jsx)(je.a,{children:Object(l.jsx)(me.a,{id:"alert-dialog-slide-description",children:"Once you delete this form you won't be able to use it anymore."})}),Object(l.jsxs)(ue.a,{children:[Object(l.jsx)(le.a,{onClick:a,children:"Disagree"}),Object(l.jsx)(le.a,{onClick:function(){var e=localStorage.getItem("__auth__token");fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":e}}).then((function(e){return e.json()})).then((function(e){e.user?fetch("https://devformms.herokuapp.com/DeleteForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e.user.email,FormId:t})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status?(c(oe()),r.replace("/forms")):c(g({NotificationType:"error",content:"Error! try again"}))})).catch((function(e){return c(g({NotificationType:"error",content:"Error! try again"}))})):r.replace("/")}))},children:"Agree"})]})]})})}function he(){var e=Object(i.h)().FormId,t=Object(u.c)((function(t){return function(e,t){return e.Forms.list.projects.find((function(e){return e._id===t}))}(t,e)})),n=t.formName,r=t.targetEmail,c=t.isEnabled;return Object(l.jsxs)("section",{className:"px-16",children:[Object(l.jsx)("h2",{className:"font-medium text-2xl py-4",children:"General"}),Object(l.jsx)("hr",{}),Object(l.jsx)(ee,{formName:n,FormId:e}),Object(l.jsx)(te,{targetEmail:r,FormId:e}),Object(l.jsx)(re,{isEnabled:c,FormId:e}),Object(l.jsx)(ie,{}),Object(l.jsx)(T,{}),Object(l.jsx)(fe,{FormId:e})]})}function Oe(){var e=Object(i.i)().url,t=Object(i.g)();return Object(r.useEffect)((function(){t.replace("".concat(e,"/integration"))})),Object(l.jsx)("div",{})}function ge(){var e=Object(i.i)(),t=e.url,n=e.path,r=Object(i.h)().FormId,c=Object(u.c)((function(e){return function(e,t){if(e.Forms.list.projects.length>0)return e.Forms.list.projects.find((function(e){return e._id===t}))}(e,r)})),a=(c||"").formName;return c?Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"text-center text-2xl font-bold py-8",children:["You're viewing- ",a]}),Object(l.jsxs)("div",{className:"p-16 space-x-4",children:[Object(l.jsx)(o.b,{to:"".concat(t,"/integration"),className:"font-medium text-blue-500 text-xl",children:"Integration"}),Object(l.jsx)(o.b,{to:"".concat(t,"/settings"),className:"font-medium text-blue-500 text-xl",children:"Settings"})]}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:n,exact:!0,component:Oe}),Object(l.jsx)(i.b,{path:"".concat(n,"/integration"),exact:!0,component:$}),Object(l.jsx)(i.b,{path:"".concat(n,"/settings"),exact:!0,component:he})]})]}):Object(l.jsx)(i.a,{to:"/forms"})}function ye(){var e=function(){var e=Object(r.useState)(),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(i.g)();return Object(r.useEffect)((function(){var e=localStorage.getItem("__auth__token");e?fetch("https://devformms.herokuapp.com/verify-token",{headers:{"x-access-token":e}}).then((function(e){return e.json()})).then((function(e){e.user?c(e.user):a.replace("/login")})).catch((function(e){return a.replace("/login")})):a.replace("/login")}),[]),n}(),t=Object(u.c)((function(e){return e.CreateFormWindow.IsCreateFormWindowAppear})),n=Object(u.c)((function(e){return e.Forms.IsLoading})),c=Object(u.c)((function(e){return e.Notification.Notify})),a=Object(i.i)().path;return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsxs)(i.b,{path:"".concat(a),exact:!0,children:[Object(l.jsx)(A,{}),e&&Object(l.jsx)(X,{user:e}),t&&Object(l.jsx)(K,{user:e}),n&&Object(l.jsx)(E,{}),c&&Object(l.jsx)(T,{})]}),Object(l.jsx)(i.b,{path:"".concat(a,"/:FormId"),children:Object(l.jsx)(ge,{})})]})]})}function Ne(){return Object(l.jsxs)("header",{className:"flex justify-between px-8 py-4 bg-gray-100 shadow-xl",children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"space-x-2",children:[Object(l.jsx)(o.b,{to:"/register",className:"px-4 py-2 bg-blue-500 text-white font-medium rounded-md",children:"Get Started"}),Object(l.jsx)(o.b,{to:"/login",className:"px-4 py-2 bg-blue-200 text-blue-500 font-medium rounded-md",children:"Sign in"})]})]})}var ve=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(Ne,{}),Object(l.jsxs)("main",{className:"py-16",children:[Object(l.jsxs)("div",{className:"text-center py-12 space-y-1",children:[Object(l.jsx)("h2",{className:"text-2xl font-medium sm:text-4xl",children:"Looking for a Form Solution ? "}),Object(l.jsx)("p",{className:"py-4 text-xl",children:"Then you are on the right place,"}),Object(l.jsx)("p",{className:"text-xl",children:"No need to write server side programming anymore \ud83d\ude0e"})]}),Object(l.jsx)("div",{className:"bg-gray-900 text-gray-50 w-5/6 py-4 px-4 mx-auto sm:py-8 sm:px-8 rounded-md sm:w-1/2",children:Object(l.jsxs)("div",{className:"w-5/6 mx-auto flex flex-col",children:[Object(l.jsxs)("span",{children:["<form action=",Object(l.jsx)("span",{className:"text-green-300 font-medium",children:'"https://devformms.herokuapp.com/endpoint"'}),' method="post">']}),Object(l.jsx)("span",{className:"px-4",children:'<label for="name">Your Name</label>'}),Object(l.jsx)("span",{className:"px-4",children:'<input name="name" id="name" type="text" />'}),Object(l.jsx)("span",{className:"px-4",children:'<button type="submit">Submit</button>'}),Object(l.jsx)("span",{children:"</form>"})]})})]})]})};var we=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(x.a)(a,2),d=s[0],u=s[1],m=Object(i.g)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("header",{className:"px-8 py-4 bg-gray-100 shadow-xl",children:Object(l.jsx)(j,{})}),Object(l.jsx)("section",{className:"h-screen flex justify-center items-center",children:Object(l.jsxs)("div",{className:"w-3/4 sm:w-1/3",children:[Object(l.jsx)("h1",{className:"text-xl my-2",children:"Welcome to Login Page"}),Object(l.jsxs)("p",{className:"pb-8",children:[Object(l.jsx)("span",{className:"text-gray-600",children:"Or"})," ",Object(l.jsx)(o.b,{to:"/register",className:"text-blue-600 underline",children:"Register quickly"})]}),Object(l.jsxs)("form",{className:"flex flex-col",children:[Object(l.jsx)("input",{className:"p-2 my-2 bg-gray-200  outline-none focus:border-blue-500 border-2 rounded-md",type:"email",value:n,placeholder:"Your Registered Email",autoFocus:!0,required:!0,onChange:function(e){return c(e.target.value.trim())}}),Object(l.jsx)("input",{className:"p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none rounded-md",type:"password",value:d,placeholder:"Password",required:!0,onChange:function(e){return u(e.target.value.trim())}}),Object(l.jsx)("button",{className:"p-2 bg-blue-500 my-2 text-white hover:bg-blue-600 rounded-md",type:"submit",onClick:function(e){e.preventDefault(),fetch("https://devformms.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:d})}).then((function(e){return e.json()})).then((function(e){e.token?(window.localStorage.setItem("__auth__token",e.token),m.push("/forms")):alert("Wrong credentials")})).catch((function(e){return console.log(e)}))},children:"Login"})]}),Object(l.jsx)(o.b,{to:"/forget-password",className:"py-4 text-blue-600 underline",children:"Forget password?"})]})})]})},Se=Object(f.c)({name:"OtpWindow",initialState:{isOTPWindowVisible:!1},reducers:{Appear:function(e){e.isOTPWindowVisible=!0},Hide:function(e){e.isOTPWindowVisible=!1}}}),ke=Se.actions,Fe=ke.Appear,Te=ke.Hide,Ce=Object(f.c)({name:"Loader",initialState:{IsLoaderActive:!1},reducers:{Active:function(e){e.IsLoaderActive=!0},Disable:function(e){e.IsLoaderActive=!1}}}),Ie=Ce.actions,Pe=Ie.Active,Ee=Ie.Disable;function _e(e){var t=e.name,n=e.email,c=e.password,a=Object(r.useState)(""),s=Object(x.a)(a,2),o=s[0],d=s[1],j=Object(i.g)(),m=Object(u.b)();return Object(l.jsx)("section",{className:"w-full h-full fixed top-0 left-0 bg-black-transparent flex justify-center items-center",children:Object(l.jsxs)("div",{className:"w-5/6 bg-gray-200 rounded-md shadow-2xl sm:w-1/2",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 float-right m-2 cursor-pointer",viewBox:"0 0 20 20",fill:"black",onClick:function(){return m(Te())},children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),Object(l.jsxs)("div",{className:"text-center my-4",children:[Object(l.jsx)("p",{className:"py-2 font-medium text-xl",children:"Enter 6 digit OTP"}),Object(l.jsx)("p",{className:"text-green-700 text-center",children:"OTP Sent Successfully"})]}),Object(l.jsxs)("form",{className:"flex flex-col px-4 my-4",children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter OTP",value:o,className:"px-3 py-2 rounded-md",required:!0,onChange:function(e){var t=e.target.value;""===t&&void 0===t||d(parseInt(e.target.value))}}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),m(Pe()),fetch("https://devformms.herokuapp.com/register/verifyOTP",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,password:c,userOTP:o})}).then((function(e){return m(Ee()),e.json()})).then((function(e){"ok"===e.status?e.verified?(alert("Registered successfully"),j.push("/login")):alert("incorrect OTP"):alert("error occurred")}))},className:"bg-blue-500 font-medium text-gray-100 rounded-md py-2 my-2",children:"Verify"})]})]})})}var De=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(x.a)(s,2),d=i[0],m=i[1],b=Object(r.useState)(""),p=Object(x.a)(b,2),f=p[0],h=p[1],O=Object(u.c)((function(e){return e.OtpWindow.isOTPWindowVisible})),g=Object(u.c)((function(e){return e.Loader.IsLoaderActive})),y=Object(u.b)();return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)("header",{className:"px-8 py-4 bg-gray-100 shadow-xl",children:Object(l.jsx)(j,{})}),Object(l.jsx)("div",{className:"h-screen flex justify-center items-center",children:Object(l.jsxs)("div",{className:"w-3/4 sm:w-1/3",children:[Object(l.jsx)("h1",{className:"text-xl py-4 font-bold",children:"Welcome to Sign up Page"}),Object(l.jsxs)("form",{className:"flex flex-col",children:[Object(l.jsx)("input",{className:"p-2 my-2 bg-gray-200 outline-none rounded-md focus:border-blue-500 border-2",type:"text",value:n,placeholder:"Your Name",autoFocus:!0,required:!0,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("input",{className:"p-2 my-2 bg-gray-200 outline-none rounded-md focus:border-blue-500 border-2",type:"email",value:d,placeholder:"Your Email",required:!0,onChange:function(e){return m(e.target.value)}}),Object(l.jsx)("input",{className:"p-2 bg-gray-200 focus:border-blue-500 border-2 outline-none rounded-md",type:"password",value:f,placeholder:"Set Password",required:!0,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("button",{className:"p-2 bg-blue-500 my-2 text-white hover:bg-blue-600 rounded-md",type:"submit",onClick:function(e){e.preventDefault(),y(Pe()),fetch("https://devformms.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:d,password:f})}).then((function(e){return y(Ee()),e.json()})).then((function(e){"ok"===e.status?e.user?alert("User alreaady exists"):e.sent?y(Fe()):alert("OTP error"):alert("error occurred")})).catch((function(e){return console.log(e)}))},children:"Sign up"})]}),Object(l.jsxs)("p",{className:"py-4",children:[Object(l.jsx)("span",{className:"text-gray-600",children:"Already have an account?"}),Object(l.jsx)(o.b,{to:"/login",className:"px-2 text-blue-600",children:"Sign in!"})]})]})}),O&&Object(l.jsx)(_e,{name:n,email:d,password:f}),g&&Object(l.jsx)(E,{})]})},Le=Object(f.c)({name:"ForgetPassword",initialState:{IsForgetPasswordWindow:!1},reducers:{ShowForgetPasswordWindow:function(e){e.IsForgetPasswordWindow=!0},HideForgetPasswordWindow:function(e){e.IsForgetPasswordWindow=!1}}}),We=Le.actions,Ae=We.ShowForgetPasswordWindow,Re=We.HideForgetPasswordWindow;function Me(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(u.b)();return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"flex flex-col px-32 py-24 w-2/3",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"font-bold text-2xl py-2",children:"Enter Your Registered Email"}),Object(l.jsx)("h3",{className:"font-bold text-2xl",children:"We'll send you OTP to reset your password"})]}),Object(l.jsxs)("form",{className:"flex flex-col w-5/6 py-4 space-y-4",children:[Object(l.jsx)("input",{type:"email",placeholder:"xyz@gmail.com",className:"px-3 py-2 rounded-md bg-gray-200",onChange:function(e){return c(e.target.value.trim())},required:!0}),Object(l.jsx)("button",{className:"bg-blue-500 text-gray-100 font-medium py-2 px-3 rounded-md w-32",onClick:function(e){e.preventDefault(),fetch("https://devformms.herokuapp.com/forgetPassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status?a(Ae()):a(g({NotificationType:"error",content:"Error! try again"}))})).catch((function(e){return a(g({NotificationType:"error",content:"Error! try again"}))}))},children:"Send OTP"})]})]})})}function Je(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(x.a)(a,2),o=s[0],d=s[1],j=Object(r.useState)(""),m=Object(x.a)(j,2),b=m[0],p=m[1],f=Object(i.g)(),h=Object(u.b)();return Object(l.jsx)("div",{className:"w-full h-full fixed top-0 left-0 bg-black-transparent flex justify-center items-center",children:Object(l.jsxs)("div",{className:"w-5/6 bg-gray-200 rounded-md shadow-2xl sm:w-1/2",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 float-right m-2 cursor-pointer",viewBox:"0 0 20 20",fill:"black",onClick:function(){return h(Re())},children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),Object(l.jsxs)("form",{className:"my-8 px-8 flex flex-col space-y-4 w-full",children:[Object(l.jsx)("input",{type:"password",placeholder:"Set New Password",value:n,className:"px-3 py-2 rounded-md",onChange:function(e){return c(e.target.value.trim())}}),Object(l.jsx)("input",{type:"password",placeholder:"Confirm New Password",value:o,className:"px-3 py-2 rounded-md",onChange:function(e){return d(e.target.value.trim())}}),Object(l.jsx)("input",{type:"text",placeholder:"Enter 6 digit OTP",className:"px-3 py-2 rounded-md",onChange:function(e){var t=e.target.value;""===t&&void 0===t||p(parseInt(e.target.value))}}),Object(l.jsx)("button",{type:"submit",className:"bg-blue-500 font-medium text-gray-100 rounded-md py-2 my-2",onClick:function(e){e.preventDefault(),n===o&&fetch("https://devformms.herokuapp.com/forgetPassword/verifyOTP",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({NewPassword:n,userOTP:b})}).then((function(e){return e.json()})).then((function(e){"ok"===e.status?(h(g({NotificationType:"success",content:"changes successfully"})),f.replace("/login")):h(g({NotificationType:"error",content:"Error! try again"}))})).catch((function(e){return h(g({NotificationType:"error",content:"Error! try again"}))}))},children:"Change Password"})]})]})})}function He(){var e=Object(u.c)((function(e){return e.ForgetPassword.IsForgetPasswordWindow}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(Me,{}),e&&Object(l.jsx)(Je,{}),Object(l.jsx)(T,{})]})}var Ye=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",exact:!0,component:ve}),Object(l.jsx)(i.b,{path:"/login",exact:!0,component:we}),Object(l.jsx)(i.b,{path:"/forget-password",exact:!0,component:He}),Object(l.jsx)(i.b,{path:"/register",exact:!0,component:De}),Object(l.jsx)(i.b,{path:"/forms",component:ye}),Object(l.jsx)(i.b,{path:"/account",exact:!0,component:C}),Object(l.jsx)(i.b,{path:"*",exact:!0,component:d})]})})};var qe=function(){return Object(l.jsx)(Ye,{})},ze=Object(f.a)({reducer:{OtpWindow:Se.reducer,Loader:Ce.reducer,CreateFormWindow:_.reducer,Forms:z.reducer,Notification:h.reducer,DelDialog:ce.reducer,ForgetPassword:Le.reducer}});s.a.render(Object(l.jsx)(u.a,{store:ze,children:Object(l.jsx)(qe,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.0c788014.chunk.js.map