(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{6086:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers",function(){return t(41808)}])},84747:function(e,a,t){"use strict";t.d(a,{U:function(){return n}});var r=t(85893),n=(0,t(54235).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download")},97169:function(e,a,t){"use strict";t.d(a,{o:function(){return n}});var r=t(85893),n=(0,t(54235).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search")},2248:function(e,a,t){"use strict";t.d(a,{g:function(){return n}});var r=t(85893),n=(0,t(54235).Z)((0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload")},41808:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return H}});var r=t(85893),n=t(9008),i=t.n(n),s=t(61953),c=t(36336),d=t(26042),o=t(69396),l=t(99534),h=t(67294),u=t(51964),x=t.n(u),v=t(45697),m=t.n(v),g=t(32912),p=t(49837),j=t(90244),Z=t(93978),f=t(69417),y=t(5605),w=t(31362),A=t(39807),k=t(44731),U=t(29630),S=t(20271),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")},C=function(e){var a=e.customers,t=(0,l.Z)(e,["customers"]),n=(0,h.useState)([]),i=n[0],c=n[1],u=(0,h.useState)(10),v=u[0],m=u[1],C=(0,h.useState)(0),P=C[0],R=C[1];return(0,r.jsxs)(p.Z,(0,o.Z)((0,d.Z)({},t),{children:[(0,r.jsx)(x(),{children:(0,r.jsx)(s.Z,{sx:{minWidth:1050},children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(Z.Z,{children:(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(y.Z,{padding:"checkbox",children:(0,r.jsx)(w.Z,{checked:i.length===a.length,color:"primary",indeterminate:i.length>0&&i.length<a.length,onChange:function(e){var t;t=e.target.checked?a.map((function(e){return e.id})):[],c(t)}})}),(0,r.jsx)(y.Z,{children:"Name"}),(0,r.jsx)(y.Z,{children:"Email"}),(0,r.jsx)(y.Z,{children:"Location"}),(0,r.jsx)(y.Z,{children:"Phone"}),(0,r.jsx)(y.Z,{children:"Registration date"})]})}),(0,r.jsx)(A.Z,{children:a.slice(0,v).map((function(e){return(0,r.jsxs)(f.Z,{hover:!0,selected:-1!==i.indexOf(e.id),children:[(0,r.jsx)(y.Z,{padding:"checkbox",children:(0,r.jsx)(w.Z,{checked:-1!==i.indexOf(e.id),onChange:function(a){return function(e,a){var t=i.indexOf(a),r=[];-1===t?r=r.concat(i,a):0===t?r=r.concat(i.slice(1)):t===i.length-1?r=r.concat(i.slice(0,-1)):t>0&&(r=r.concat(i.slice(0,t),i.slice(t+1))),c(r)}(0,e.id)},value:"true"})}),(0,r.jsx)(y.Z,{children:(0,r.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,r.jsx)(k.Z,{src:e.avatarUrl,sx:{mr:2},children:_(e.name)}),(0,r.jsx)(U.Z,{color:"textPrimary",variant:"body1",children:e.name})]})}),(0,r.jsx)(y.Z,{children:e.email}),(0,r.jsx)(y.Z,{children:"".concat(e.address.city,", ").concat(e.address.state,", ").concat(e.address.country)}),(0,r.jsx)(y.Z,{children:e.phone}),(0,r.jsx)(y.Z,{children:(0,g.Z)(e.createdAt,"dd/MM/yyyy")})]},e.id)}))})]})})}),(0,r.jsx)(S.Z,{component:"div",count:a.length,onPageChange:function(e,a){R(a)},onRowsPerPageChange:function(e){m(e.target.value)},page:P,rowsPerPage:v,rowsPerPageOptions:[5,10,25]})]}))};C.propTypes={customers:m().array.isRequired};var P=t(75084),R=t(91359),b=t(4944),z=t(9041),M=t(81645),L=t(97169),E=t(2248),B=t(84747),D=function(e){return(0,r.jsxs)(s.Z,(0,o.Z)((0,d.Z)({},e),{children:[(0,r.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",flexWrap:"wrap",m:-1},children:[(0,r.jsx)(U.Z,{sx:{m:1},variant:"h4",children:"Customers"}),(0,r.jsxs)(s.Z,{sx:{m:1},children:[(0,r.jsx)(P.Z,{startIcon:(0,r.jsx)(E.g,{fontSize:"small"}),sx:{mr:1},children:"Import"}),(0,r.jsx)(P.Z,{startIcon:(0,r.jsx)(B.U,{fontSize:"small"}),sx:{mr:1},children:"Export"}),(0,r.jsx)(P.Z,{color:"primary",variant:"contained",children:"Add Customers"})]})]}),(0,r.jsx)(s.Z,{sx:{mt:3},children:(0,r.jsx)(p.Z,{children:(0,r.jsx)(R.Z,{children:(0,r.jsx)(s.Z,{sx:{maxWidth:500},children:(0,r.jsx)(b.Z,{fullWidth:!0,InputProps:{startAdornment:(0,r.jsx)(z.Z,{position:"start",children:(0,r.jsx)(M.Z,{color:"action",fontSize:"small",children:(0,r.jsx)(L.o,{})})})},placeholder:"Search customer",variant:"outlined"})})})})})]}))},I=t(42961),N=t(57632),O=[{id:(0,N.Z)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"/static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"ekaterina.tankova@devias.io",name:"Ekaterina Tankova",phone:"304-428-3097"},{id:(0,N.Z)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"/static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"cao.yu@devias.io",name:"Cao Yu",phone:"712-351-5711"},{id:(0,N.Z)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"/static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"alexa.richardson@devias.io",name:"Alexa Richardson",phone:"770-635-2682"},{id:(0,N.Z)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"/static/images/avatars/avatar_5.png",createdAt:155493e7,email:"anje.keizer@devias.io",name:"Anje Keizer",phone:"908-691-3242"},{id:(0,N.Z)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"/static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"clarke.gillebert@devias.io",name:"Clarke Gillebert",phone:"972-333-4106"},{id:(0,N.Z)(),address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},avatarUrl:"/static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"adam.denisov@devias.io",name:"Adam Denisov",phone:"858-602-3409"},{id:(0,N.Z)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"/static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"ava.gregoraci@devias.io",name:"Ava Gregoraci",phone:"415-907-2647"},{id:(0,N.Z)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"/static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"emilee.simchenko@devias.io",name:"Emilee Simchenko",phone:"702-661-1654"},{id:(0,N.Z)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"/static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"kwak.seong.min@devias.io",name:"Kwak Seong-Min",phone:"313-812-8947"},{id:(0,N.Z)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"/static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"merrile.burgett@devias.io",name:"Merrile Burgett",phone:"801-301-7894"}],W=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"Customers | Material Kit"})}),(0,r.jsx)(s.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsxs)(c.Z,{maxWidth:!1,children:[(0,r.jsx)(D,{}),(0,r.jsx)(s.Z,{sx:{mt:3},children:(0,r.jsx)(C,{customers:O})})]})})]})};W.getLayout=function(e){return(0,r.jsx)(I.c,{children:e})};var H=W}},function(e){e.O(0,[448,583,383,944,914,367,215,961,774,888,179],(function(){return a=6086,e(e.s=a);var a}));var a=e.O();_N_E=a}]);