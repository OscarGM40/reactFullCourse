(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{65:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=n(6),i=n(20),l=n(41),u=n(4),d="[ui] Open modal",j="[ui] Close modal",b="[event] Set active",m="[event] Add new",p="[event] Clear active event",f="[event] Update event",O="[event] Delete event",v="[event] Events loaded",h="[event] Logout",x="[auth] Checking finish",g="[auth] Login success",y="[auth] Logout",k={checking:!0,uid:null,name:null},w=n(34),N={events:[],activeEvent:null},E={modalOpen:!1},S=Object(i.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case p:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case f:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:Object(w.a)(t.payload)});case h:return Object(u.a)({},N);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{checking:!1,uid:t.payload.uid,name:t.payload.name});case x:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return Object(u.a)(Object(u.a)({},e),{},{uid:null,name:null});default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,D=Object(i.d)(S,C(Object(i.a)(l.a))),T=n(22),P=n(5),I=n(10),_=n.n(I),A=n(16),L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat("https://calendar-mern-server.herokuapp.com/api","/").concat(e),r={"Content-type":"application/json"};return"GET"===n?fetch(a):fetch(a,{method:n,body:JSON.stringify(t),headers:r})},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat("https://calendar-mern-server.herokuapp.com/api","/").concat(e),r=localStorage.getItem("token")||"",c={"Content-type":"application/json","x-token":r};return"GET"===n?fetch(a,{method:n,headers:c}):fetch(a,{method:n,body:JSON.stringify(t),headers:c})},Y=n(13),F=n.n(Y),R=n(12),G=n.n(R),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return e.start=G()(e.start).toDate(),e.end=G()(e.end).toDate(),e}))},U=function(e){return{type:m,payload:e}},B=function(e){return{type:v,payload:e}},H=function(){return{type:p}},J=function(e){return{type:f,payload:e}},q=function(){return{type:O}},X=function(e){return{type:g,payload:e}},z=function(){return{type:x}},K=function(){return function(e,t){localStorage.removeItem("token"),localStorage.removeItem("token-init-date"),e({type:h}),e(Q())}},Q=function(){return{type:y}},W=n(9),Z=(n(65),n(18)),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(W.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=n(1),te=function(){var e=Object(s.b)(),t=$({lEmail:"test@test.com",lPassword:"ABCabc123"}),n=Object(W.a)(t,2),a=n[0],r=n[1],c=a.lEmail,o=a.lPassword,i=$({rName:"",rEmail:"",rPassword:"",rPassword2:""}),l=Object(W.a)(i,2),u=l[0],d=l[1],j=u.rName,b=u.rEmail,m=u.rPassword,p=u.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=o,function(){var e=Object(A.a)(_.a.mark((function e(t,r){var c,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:o.uid,name:o.name}))):F.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",value:c,onChange:r,name:"lEmail"})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:o,onChange:r,name:"lPassword"})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==p)return F.a.fire("Error","Las contrase\xf1as no coinciden","error");var n,a,r;e((n=j,a=b,r=m,function(){var e=Object(A.a)(_.a.mark((function e(t,c){var o,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("auth/new",{name:n,email:a,password:r},"POST");case 2:return o=e.sent,e.next=5,o.json();case 5:(s=e.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:s.uid,name:s.name}))):F.a.fire("Error",s.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",value:j,onChange:d,name:"rName"})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",value:b,onChange:d,name:"rEmail"})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:m,onChange:d,name:"rPassword"})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",value:p,onChange:d,name:"rPassword2"})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=r.a.memo(te),ae=n(33),re=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:e}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(K())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},ce=(n(68),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),oe=(n(69),function(e){var t=e.event,n=t.title,r=t.user,c=Object(a.useMemo)((function(){return r.name.charAt(0).toUpperCase()+r.name.slice(1)}),[r.name]);return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("span",{children:[n," - "]}),Object(ee.jsx)("strong",{children:c})]})}),se=n(31),ie=n.n(se),le=n(32),ue=n.n(le),de=(n(77),function(){return{type:d}}),je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var be=G()().minutes(0).seconds(0).add(1,"hours"),me=be.clone().add(1,"hours"),pe={title:"",notes:"",start:be.toDate(),end:me.toDate()},fe=function(){var e=Object(s.c)((function(e){return e.ui})).modalOpen,t=Object(s.c)((function(e){return e.calendar})).activeEvent,n=Object(s.b)(),r=Object(a.useState)(be.toDate()),c=Object(W.a)(r,2),o=c[0],i=c[1],l=Object(a.useState)(me.toDate()),d=Object(W.a)(l,2),b=d[0],m=d[1],p=Object(a.useState)(!0),f=Object(W.a)(p,2),O=f[0],v=f[1],h=Object(a.useState)(!0),x=Object(W.a)(h,2),g=x[0],y=x[1],k=Object(a.useState)(pe),w=Object(W.a)(k,2),N=w[0],E=w[1],S=N.title,C=N.notes,D=N.start,T=N.end;Object(a.useEffect)((function(){E(t||pe)}),[t]);var P=function(e){var t=e.target;E(Object(u.a)(Object(u.a)({},N),{},Object(Z.a)({},t.name,t.value)))},I=function(){n({type:j}),n(H()),E(pe)},L=G()(o).subtract(1,"day");return Object(ee.jsx)("div",{children:Object(ee.jsxs)(ie.a,{isOpen:e,onRequestClose:I,style:je,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=G()(D),c=G()(T);return r.isSameOrAfter(c)?(y(!1),F.a.fire({title:"Error",text:"La fecha final debe ser mayor que la inicial",icon:"error",confirmButtonText:"Ok"})):S.trim().length<2?v(!1):(n(t?(a=N,function(){var e=Object(A.a)(_.a.mark((function e(t,n){var r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events/".concat(a.id),a,"PUT");case 3:return r=e.sent,e.next=6,r.json();case 6:(c=e.sent).ok?t(J(a)):F.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(A.a)(_.a.mark((function t(n,a){var r,c,o,s,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,M("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento._id,e.user={_id:c,name:o},n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(N)),v(!0),y(!0),void I())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ue.a,{inputProps:{style:{width:"100%",height:"114%",cursor:"pointer",background:"black",position:"relative",top:"-2px",left:"-3px",color:"white"}},value:o,showTimeSelect:!0,onChange:function(e){i(e._d),E(Object(u.a)(Object(u.a)({},N),{},{start:e._d}))},dateFormat:"DD-MM-YYYY",timeFormat:"hh:mm A",className:g?"form-control m-0 py-0 pl-0 pr-4.5 is-valid":"form-control m-0 py-0 pl-0 pr-4.5 is-invalid",closeOnSelect:!0,closeOnClickOutside:!0})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ue.a,{inputProps:{style:{width:"100%",height:"114%",cursor:"pointer",background:"black",position:"relative",top:"-2px",left:"-3px",color:"white"}},value:b,onChange:function(e){m(e._d),E(Object(u.a)(Object(u.a)({},N),{},{end:e._d}))},dateFormat:"DD-MM-YYYY",timeFormat:"hh:mm A",closeOnSelect:!0,className:g?"form-control m-0 py-0 pl-0 pr-4.5 is-valid":"form-control m-0 py-0 pl-0 pr-4.5 is-invalid",closeOnClickOutside:!0,isValidDate:function(e){return e.isAfter(L)}})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:S,onChange:P,autoComplete:"off"}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:C,onChange:P,autoComplete:"off"}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})})},Oe=function(){var e=Object(s.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(H()),e(de())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})},ve=function(){var e=Object(s.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(A.a)(_.a.mark((function e(t,n){var a,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,M("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(q()):F.a.fire("Error",c.msg,"error").then((function(e){e.isConfirmed&&t(H())})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash mr-2"}),Object(ee.jsx)("span",{children:"Borrar evento"})]})};G.a.locale("es");var he=Object(ae.b)(G.a),xe=function(){var e=Object(s.c)((function(e){return e.calendar})),t=e.events,n=e.activeEvent,r=Object(s.c)((function(e){return e.auth})).uid,c=Object(s.b)(),o=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(W.a)(o,2),l=i[0],u=i[1];Object(a.useEffect)((function(){c(function(){var e=Object(A.a)(_.a.mark((function e(t){var n,a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=V(a.eventos),a.ok&&t(B(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[c]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(re,{}),Object(ee.jsx)(ae.a,{localizer:he,events:t,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user.id?"#059afdf9":"#574e4c",borderRadius:"10px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(e){c(de())},onSelectEvent:function(e){c({type:b,payload:e})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(e){c(H())},selectable:!0,view:l,components:{event:oe}}),Object(ee.jsx)(Oe,{}),!!n&&Object(ee.jsx)(ve,{}),Object(ee.jsx)(fe,{})]})},ge=function(e){var t=e.children;return Object(s.c)((function(e){return e.auth})).uid?t:Object(ee.jsx)(P.a,{to:"/login"})},ye=function(e){var t=e.children;return Object(s.c)((function(e){return e.auth})).uid?Object(ee.jsx)(P.a,{to:"/"}):t},ke=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).checking;return Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(_.a.mark((function e(t,n){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(X({uid:r.uid,name:r.name}))):t(z());case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[e]),t?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(T.a,{children:Object(ee.jsxs)(P.d,{children:[Object(ee.jsx)(P.b,{path:"/login",element:Object(ee.jsx)(ye,{children:Object(ee.jsx)(ne,{})})}),Object(ee.jsx)(P.b,{path:"/*",element:Object(ee.jsx)(ge,{children:Object(ee.jsx)(xe,{})})})]})})},we=function(){return Object(ee.jsx)(s.a,{store:D,children:Object(ee.jsx)(ke,{})})};n(78);o.a.render(Object(ee.jsx)(a.Suspense,{fallback:Object(ee.jsx)("div",{children:"Loading..."}),children:Object(ee.jsx)(we,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.882f176a.chunk.js.map