(this["webpackJsonpneo-social"]=this["webpackJsonpneo-social"]||[]).push([[0],{17:function(e,t,s){e.exports={wallpict:"Profile_wallpict__2ikZf",ava:"Profile_ava__3iRdQ",about:"Profile_about__3wvmg",info:"Profile_info__M55Jm",total:"Profile_total__1I1oc"}},20:function(e,t,s){e.exports={header:"Header_header__yq7DA",ul:"Header_ul__clIVo",li:"Header_li__1aM2Y"}},23:function(e,t,s){e.exports={cart:"User_cart__SmJv7",s:"User_s__12tVB",selected:"User_selected__23s74",loader:"User_loader__1wXp3"}},28:function(e,t,s){e.exports={login:"Login_login__3p98m",check:"Login_check__2yQGi",error:"Login_error__1d7al"}},33:function(e,t,s){e.exports={post:"Posts_post__8yfIf",reaction:"Posts_reaction__1ihoC"}},34:function(e,t,s){e.exports={dialogsItems:"DialogItem_dialogsItems__1GXT4"}},35:function(e,t,s){e.exports={messages:"Message_messages__1yPf5"}},48:function(e,t,s){e.exports={posts:"MyPosts_posts__3Aa17"}},49:function(e,t,s){e.exports={text:"TextAreaButton_text__3VXHa",error:"TextAreaButton_error__3MrrZ"}},50:function(e,t,s){e.exports={loader:"Loader_loader__3x2eb"}},51:function(e,t,s){e.exports={dialogs:"Dialog_dialogs__eECuR"}},57:function(e,t,s){},58:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(26),a=s.n(c),r=(s(57),s(58),s(20)),i=s.n(r),o=s(7),l=s(3),u=s(2),j=s(46),d=s.n(j).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c52651a7-580b-433b-99e3-876a6eb54318"}}),b=function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},O=function(e){return d.post("follow/".concat(e)).then((function(e){return e.data}))},f=function(e){return d.delete("follow/".concat(e)).then((function(e){return e.data}))},h=function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e){return d.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return d.get("profile/status/".concat(e)).then((function(e){return e.data}))},x=function(e){return d.put("profile/status",{status:e})},g=function(e){var t=new FormData;return t.append("image",e),d.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},v=function(){return d.get("auth/me").then((function(e){return e.data}))},_=function(e,t,s){return d.post("auth/login",{email:e,password:t,rememberMe:s})},N=function(){return d.delete("auth/login")},w={userId:null,email:null,login:null,isAuth:!1,errorMessage:""},S=function(e,t,s,n){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:s,isAuth:n}}},A=function(e,t,s){return function(n){_(e,t,s).then((function(e){if(0==e.data.resultCode)n((function(e){v().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,c=s.email,a=s.login;e(S(n,c,a,!0))}}))}));else{var t=e.data.messages.length>0?e.data.messages[0]:"Some Error";n(function(e){return{type:"GET_ERROR",message:e}}(t))}}))}},T=s(0),E=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.AuthReducer}));return Object(T.jsxs)("header",{className:"".concat(i.a.header," fixed-top"),children:[Object(T.jsx)(o.b,{to:"#",children:Object(T.jsx)("h2",{children:"NEO"})}),Object(T.jsx)("nav",{className:i.a.nav,children:Object(T.jsxs)("ul",{className:i.a.ul,children:[Object(T.jsx)("li",{className:i.a.li,children:Object(T.jsx)(o.b,{to:"login",children:!0===t.isAuth?t.login:Object(T.jsx)("span",{children:Object(T.jsx)("i",{className:"fas fa-sign-out-alt"})})})}),Object(T.jsx)("li",{className:i.a.li,children:Object(T.jsx)(o.b,{to:t.isAuth?"profile":"login",children:!0===t.isAuth?Object(T.jsx)("span",{onClick:function(){e((function(e){N().then((function(t){0===t.data.resultCode&&e(S(null,null,null,!1))}))}))},children:Object(T.jsx)("i",{className:"fas fa-running"})}):"login"})})]})})]})},k=s(9),R=s.n(k),y=function(){return Object(T.jsx)("div",{children:Object(T.jsx)("nav",{className:"".concat(R.a.nav," "),children:Object(T.jsxs)("ul",{className:R.a.ul,children:[Object(T.jsx)("li",{className:R.a.li,children:Object(T.jsxs)(o.b,{activeClassName:R.a.active,to:"/profile",children:[Object(T.jsx)("i",{className:"fas fa-user"}),Object(T.jsx)("span",{children:"Profile"})]})}),Object(T.jsx)("li",{className:R.a.li,children:Object(T.jsxs)(o.b,{activeClassName:R.a.active,to:"/messages",children:[Object(T.jsx)("i",{className:"fas fa-envelope"}),Object(T.jsx)("span",{children:"Messages"})]})}),Object(T.jsx)("li",{className:R.a.li,children:Object(T.jsxs)(o.b,{activeClassName:R.a.active,to:"/news",children:[Object(T.jsx)("i",{className:"fas fa-newspaper"}),Object(T.jsx)("span",{children:"News"})]})}),Object(T.jsx)("li",{className:R.a.li,children:Object(T.jsxs)(o.b,{activeClassName:R.a.active,to:"/music",children:[Object(T.jsx)("i",{className:"fas fa-music"}),Object(T.jsx)("span",{children:"Music"})]})}),Object(T.jsx)("li",{className:R.a.li,children:Object(T.jsxs)(o.b,{activeClassName:R.a.active,to:"/setting",children:[Object(T.jsx)("i",{className:"fas fa-tools"}),Object(T.jsx)("span",{children:"Setting"})]})}),Object(T.jsx)("li",{className:R.a.li,children:Object(T.jsxs)(o.b,{activeClassName:R.a.active,to:"/Users",children:[Object(T.jsx)("i",{className:"fas fa-users"}),Object(T.jsx)("span",{children:"Users"})]})})]})})})},C=s(15),P=s(17),F=s.n(P),I=s(5),L={posts:[{id:1,post:"Hello world",likeCount:5,dislike:3},{id:2,post:"I want to be in USA",likeCount:55,dislike:0},{id:3,post:"I am learning js all time",likeCount:667,dislike:0},{id:4,post:"social network is evil",likeCount:856,dislike:800},{id:5,post:"Hello friend lets walk",likeCount:1250,dislike:1},{id:6,post:"It incubator is best courses",likeCount:1591,dislike:0}],profile:null,status:"as"},M=function(e){return{type:"GET_STATUS",status:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var s={id:55,post:t.messageText,likeCount:0,dislike:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(I.a)(e.posts),[s])});case"SET_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"GET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SAVE_PHOTO":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photo})});default:return e}},U=s(33),B=s.n(U),G=function(e){return Object(T.jsxs)("div",{className:B.a.post,children:[Object(T.jsx)("img",{src:"https://i0.wp.com/jasonstatham.org/wp-content/uploads/2021/08/1.jpg?resize=800%2C400&ssl=1",alt:""}),Object(T.jsx)("p",{children:e.postText}),Object(T.jsxs)("div",{className:B.a.reaction,children:[Object(T.jsxs)("span",{children:[Object(T.jsx)("i",{className:"far fa-thumbs-up"})," ",e.like]}),Object(T.jsxs)("span",{children:[Object(T.jsx)("i",{className:"far fa-thumbs-down"})," ",e.dislike]})]})]})},H=s(48),J=s.n(H),V=s(27),q=s(49),W=s.n(q),z=function(e){var t,s=Object(V.a)(),n=s.register,c=s.reset,a=s.formState.errors,r=s.handleSubmit;return Object(T.jsxs)("form",{className:W.a.text,onSubmit:r((function(t){console.log(t);var s=t.message;s&&(e.callBack(s),c())})),children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("textarea",Object(u.a)({placeholder:e.message},n("message",{required:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"}))),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("p",{children:null===a||void 0===a||null===(t=a.message)||void 0===t?void 0:t.message})})]}),Object(T.jsx)("input",{value:e.title,type:"submit"})]})},Q=Object(n.memo)((function(e){var t=e.postData,s=e.addPost;console.log("Render");var n=Object(I.a)(t).map((function(e){return Object(T.jsx)(G,{postText:e.post,like:e.likeCount,dislike:e.dislike},e.id)})).reverse();return Object(T.jsxs)("div",{className:J.a.posts,children:["My posts",Object(T.jsx)("div",{children:Object(T.jsx)(z,{title:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c",message:"New post",callBack:s})}),Object(T.jsx)("div",{children:n})]})})),X=function(){var e=Object(l.c)((function(e){return e})),t=Object(l.b)();return Object(T.jsx)(Q,{postData:e.profileReducer.posts,addPost:function(e){t({type:"ADD_POST",messageText:e})}})},Y=s.p+"static/media/ava.689a452b.jpg",Z=function(e){var t=Object(n.useState)(!1),s=Object(C.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(e.status?e.status:""),i=Object(C.a)(r,2),o=i[0],l=i[1];return Object(T.jsxs)("div",{children:[!c&&Object(T.jsx)("p",{onDoubleClick:function(){a(!0)},children:e.status?e.status:"empty status"}),c&&Object(T.jsx)("input",{onChange:function(e){return function(e){l(e.currentTarget.value)}(e)},onBlur:function(){a(!1),e.updateSt(o),l("")},className:"form-control",type:"text",value:o||"empty status"})]})},K=function(e){console.log("is owner "+e.isOwner);var t=Object(u.a)({},e.profile),s=Object(l.b)();return Object(T.jsxs)("div",{className:F.a.total,children:[Object(T.jsx)("img",{className:F.a.wallpict,src:"https://www.bergfreunde.eu/out/pictures/promo/picture_brandshop_1440x490_4.jpg",alt:""}),Object(T.jsxs)("div",{className:F.a.about,children:[Object(T.jsx)("img",{className:F.a.ava,src:t.photos.large?t.photos.large:Y,alt:null!=t.fullName?t.fullName:"Photo"}),Object(T.jsxs)("div",{className:F.a.info,children:[Object(T.jsx)("p",{children:t.fullName}),Object(T.jsx)("p",{children:t.aboutMe}),Object(T.jsx)(Z,{updateSt:e.updateSt,status:e.status}),Object(T.jsx)("p",{children:Object(T.jsx)("a",{href:null!=t.contacts.facebook?"https://"+t.contacts.facebook:"",target:"_self",children:t.contacts.facebook?"Facebook":null})})]})]}),e.isOwner?Object(T.jsxs)("div",{className:"mb-3",children:[Object(T.jsx)("label",{htmlFor:"formFile",className:"form-label",children:"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(T.jsx)("input",{onChange:function(e){var t;s((t=e.target.files[0],function(e){g(t).then((function(t){e(function(e){return{type:"SAVE_PHOTO",photo:e}}(t.data.data.photos))}))}))},className:"form-control",type:"file",id:"formFile"})]}):null]})},$=s(50),ee=s.n($),te=function(){return Object(T.jsx)("div",{className:ee.a.loader,children:Object(T.jsx)("img",{src:"https://homehardware.sirv.com/resources/images/loading-image.gif",alt:""})})},se=s(8),ne=Object(se.f)((function(e){var t=e.match,s=Object(l.b)(),c=Object(l.c)((function(e){return e.AuthReducer.userId})),a=Object(n.useState)(!1),r=Object(C.a)(a,2),i=r[0],o=r[1];Object(n.useEffect)((function(){var e,n=t.params.userId;n||(n=c,o(!0)),s((e=n,function(t){m(e).then((function(e){setTimeout((function(){t({type:"SET_PROFILE",profile:e})}),500)}))})),s(function(e){return function(t){p(e).then((function(e){t(M(e))}))}}(n))}),[]);var u=Object(l.c)((function(e){return e.profileReducer.profile})),j=Object(l.c)((function(e){return e.AuthReducer.isAuth})),d=Object(l.c)((function(e){return e.profileReducer.status}));return j?Object(T.jsxs)("div",{className:F.a.content,children:[u?Object(T.jsx)(K,{isOwner:i,status:d,updateSt:function(e){s(function(e){return function(t){x(e).then((function(s){0==s.data.resultCode&&t(M(e))}))}}(e))},profile:u}):Object(T.jsx)(te,{}),Object(T.jsx)(X,{})]}):Object(T.jsx)(se.a,{to:"/login"})})),ce={dialogs:[{id:1,name:"Arken"},{id:2,name:"Adil"},{id:3,name:"Miron"},{id:4,name:"John"},{id:5,name:"Ledy Gaga"},{id:6,name:"Johny"}],messages:[{id:1,message:"Hello"},{id:2,message:"How was your day?"},{id:3,message:"Can I help you"},{id:4,message:"See you at school"},{id:5,message:"React Is best Framework"},{id:6,message:"You must learn Js"}]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;if("SEND_MESSAGE"===t.type){var s={id:8958,message:t.messageText};return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(I.a)(e.messages),[s])})}return e},re=s(51),ie=s.n(re),oe=s(34),le=s.n(oe),ue=function(e){var t=e.dialogs.map((function(e){return Object(T.jsx)("div",{className:le.a.item,children:Object(T.jsx)(o.b,{to:"/messages/".concat(e.id),children:e.name})},e.id)}));return Object(T.jsx)("div",{className:le.a.dialogsItems,children:t})},je=s(35),de=s.n(je),be=function(e){var t=e.messageData.map((function(e){return Object(T.jsx)("div",{className:de.a.message,children:e.message},e.id)}));return Object(T.jsxs)("div",{className:"col-9 ".concat(de.a.messages),children:[t,Object(T.jsx)("div",{children:Object(T.jsx)(z,{title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",message:"message",callBack:function(t){e.sendMessage(t)}})})]})},Oe=function(e){return Object(l.c)((function(e){return e.AuthReducer.isAuth}))?Object(T.jsxs)("div",{className:"row ".concat(ie.a.dialogs),children:[Object(T.jsx)("div",{className:"col-3",children:Object(T.jsx)(ue,{dialogs:e.dilogsData.dialogs})}),Object(T.jsx)(be,{messageData:e.dilogsData.messages,sendMessage:e.sendMessage})]}):Object(T.jsx)(se.a,{to:"/login"})},fe=function(){var e=Object(l.c)((function(e){return e.dialogReducer})),t=Object(l.b)();return Object(T.jsx)(Oe,{dilogsData:e,sendMessage:function(e){t({type:"SEND_MESSAGE",messageText:e})}})},he=s(23),me=s.n(he),pe=function(e){return Object(T.jsx)("div",{className:me.a.cart,children:e.users.map((function(t){return Object(T.jsxs)("div",{className:me.a.s,children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(o.b,{to:"/profile/".concat(t.id),children:Object(T.jsx)("img",{src:null===t.photos.small?Y:t.photos.small,alt:""})}),Object(T.jsx)("h3",{children:t.name}),Object(T.jsx)("h4",{children:t.status})]}),Object(T.jsx)("button",{onClick:!0===t.followed?function(){return e.unfallowFn(t.id)}:function(){return e.fallowFn(t.id)},children:!0===t.followed?"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})}))})},xe={users:[],currentPage:1,total:0,pageSize:15,isFetching:!0},ge=function(e){return{type:"SET_USERS",users:e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FALLOW":var s=Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});return s;case"UNFALLOW":var n=Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});return n;case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:Object(I.a)(t.users)});case"SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFething});case"SET_TOTAL":return Object(u.a)(Object(u.a)({},e),{},{total:t.total});default:return e}},_e=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.userReducer.users})),s=Object(l.c)((function(e){return e.userReducer.currentPage})),c=Object(l.c)((function(e){return e.userReducer.isFetching})),a=Object(l.c)((function(e){return e.userReducer.total})),r=Object(l.c)((function(e){return e.userReducer.pageSize})),i=Math.ceil(a/r),o=Object(l.c)((function(e){return e.AuthReducer.isAuth}));Object(n.useEffect)((function(){e(function(e,t){return function(s){b(e,t).then((function(e){s(ge(e.items)),s({type:"SET_TOTAL",total:200}),s({type:"SET_FETCHING",isFething:!1})}))}}(s,i))}),[]);for(var u=[],j=1;j<=i;j++)u.push(j);var d=u.map((function(t){return Object(T.jsx)("li",{children:Object(T.jsx)("a",{onClick:function(){return function(t){e(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(t)),h(t,i).then((function(t){e(ge(t.items))}))}(t)},className:"page-link",href:"#",children:t})})}));return o?Object(T.jsx)("div",{children:!0===c?Object(T.jsx)("div",{className:me.a.loader,children:Object(T.jsx)(te,{})}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("ul",{className:"pagination justify-content-center",children:d}),Object(T.jsx)(pe,{users:t,fallowFn:function(t){O(t).then((function(s){0===s.resultCode&&e(function(e){return{type:"FALLOW",id:e}}(t))}))},unfallowFn:function(t){f(t).then((function(s){0===s.resultCode&&e(function(e){return{type:"UNFALLOW",id:e}}(t))}))}})]})}):Object(T.jsx)(se.a,{to:"/login"})},Ne=s(28),we=s.n(Ne);function Se(){var e,t,s=Object(l.b)(),n=Object(l.c)((function(e){return e.AuthReducer.isAuth})),c=Object(l.c)((function(e){return e.AuthReducer.errorMessage})),a=Object(V.a)(),r=a.register,i=a.formState.errors,o=a.handleSubmit;return n?Object(T.jsx)(se.a,{to:"profile"}):Object(T.jsxs)("form",{className:we.a.login,onSubmit:o((function(e){console.log(e),s(A(e.login,e.password,e.remember))})),children:[Object(T.jsx)("div",{children:Object(T.jsx)("input",Object(u.a)({placeholder:"Login"},r("login",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e",minLength:{value:5,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},maxLength:{value:35,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}})))}),Object(T.jsx)("div",{children:(null===i||void 0===i?void 0:i.login)&&Object(T.jsx)("p",{children:null===i||void 0===i||null===(e=i.login)||void 0===e?void 0:e.message})}),Object(T.jsx)("div",{children:Object(T.jsx)("input",Object(u.a)({type:"password",placeholder:"Password"},r("password",{required:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e",minLength:{value:3,message:"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},maxLength:20})))}),Object(T.jsx)("div",{children:(null===i||void 0===i?void 0:i.password)&&Object(T.jsx)("p",{children:null===i||void 0===i||null===(t=i.password)||void 0===t?void 0:t.message})}),Object(T.jsxs)("div",{className:we.a.check,children:[Object(T.jsx)("input",Object(u.a)({type:"checkbox"},r("remember"))),Object(T.jsx)("span",{children:"Remember me"})]}),Object(T.jsx)("div",{className:we.a.error,children:c&&c}),Object(T.jsx)("input",{value:"\u0412\u043e\u0439\u0442\u0438",type:"submit"})]})}var Ae=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(E,{}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-3 fixed-left",children:Object(T.jsx)(y,{})}),Object(T.jsxs)("div",{className:"col-6",children:[Object(T.jsx)(se.b,{path:"/profile/:userId?",render:function(){return Object(T.jsx)(ne,{})}}),Object(T.jsx)(se.b,{path:"/messages",render:function(){return Object(T.jsx)(fe,{})}}),Object(T.jsx)(se.b,{path:"/users",render:function(){return Object(T.jsx)(_e,{})}}),Object(T.jsx)(se.b,{path:"/login",render:function(){return Object(T.jsx)(Se,{})}})]}),Object(T.jsx)("div",{className:"col-3"})]})]})},Te=s(29),Ee=s(52),ke=Object(Te.b)({profileReducer:D,dialogReducer:ae,userReducer:ve,AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(u.a)(Object(u.a)({},e),t.data);case"GET_ERROR":return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.message});default:return e}}}),Re=Object(Te.c)(ke,Object(Te.a)(Ee.a)),ye=function(){a.a.render(Object(T.jsx)(o.a,{basename:"/neo-social",children:Object(T.jsx)(l.a,{store:Re,children:Object(T.jsx)(Ae,{})})}),document.getElementById("root"))};ye(),Re.subscribe((function(){ye()}))},9:function(e,t,s){e.exports={nav:"SideBar_nav__28ewa",ul:"SideBar_ul__2eOnI",li:"SideBar_li__2-BPu",active:"SideBar_active__Q4w7w"}}},[[85,1,2]]]);
//# sourceMappingURL=main.78051d57.chunk.js.map