(this["webpackJsonpreact-youtube"]=this["webpackJsonpreact-youtube"]||[]).push([[0],{33:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},46:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),s=n.n(i),r=(n(41),n(42),n(3)),o=n(4),l=n(12),u=n.p+"static/media/sibdev-logo-mini.a657d529.svg",j=(n(46),n(0)),b=function(){var e=Object(r.b)(),t=(Object(r.c)((function(e){return e.registationReducer})),[{name:"\u041f\u043e\u0438\u0441\u043a",link:"Main"},{name:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",link:"Favourite"}].map((function(e){return Object(j.jsx)(l.b,{activeClassName:"navigation__active",to:"/".concat(e.link),className:"navigation__item",children:e.name},e.link)})));return Object(j.jsx)("div",{className:"navigation",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l.b,{to:"/Main",className:"navigation__logo",children:Object(j.jsx)("img",{src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(j.jsx)("nav",{children:Object(j.jsx)("div",{className:"navigation__menu",children:Object(j.jsx)("ul",{className:"navigation__items",children:t})})}),Object(j.jsx)("div",{children:Object(j.jsx)(l.b,{to:"/Registration",onClick:function(){e({type:"EXIT",action:!1})},className:"navigation__item",children:"\u0412\u044b\u0439\u0442\u0438"})})]})})},d=n(6),m=(n(54),n(23)),O="AIzaSyBM3Bugpu8gvnH1ON6QuLtpkr_3qpbuWyc",h="\u0427\u0435\u043c \u043a\u043e\u0440\u043c\u0438\u0442\u044c \u043a\u043e\u0442\u0430",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return m.get(" https://www.googleapis.com/youtube/v3/search?key="+O+"&type=video&part=snippet&maxResults="+t+"&q="+e+"&order=date").then((function(e){return e.data}))},f=(n(73),function(e){var t=e.setShowForm,n=e.formInfo,a=e.changeValue,i=Object(c.useState)(void 0===n?"date":n[0].sortingType),s=Object(d.a)(i,2),o=s[0],l=s[1],u=Object(c.useState)(void 0===n?null:n[0].formName),b=Object(d.a)(u,2),m=b[0],O=b[1],h=Object(c.useState)(4),v=Object(d.a)(h,2),f=v[0],x=v[1],p=Object(c.useState)(void 0===n?"":n[0].id),g=Object(d.a)(p,2),_=g[0],N=g[1],w=Object(r.b)(),S=Object(r.c)((function(e){return e.videoReducer})),C=Object(c.useState)(void 0===n?S.searchFilm:n[0].request),y=Object(d.a)(C,2),D=y[0],E=y[1];console.log(D);return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"main__form",children:[Object(j.jsx)("h2",{className:"main__form-title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"\u0417\u0430\u043f\u0440\u043e\u0441"}),Object(j.jsx)("input",{className:"input-disabled",disabled:!a,value:a?D:S.searchFilm,placeholder:"\u0447\u0435\u043c \u043a\u043e\u0440\u043c\u0438\u0442\u044c \u043a\u043e\u0442\u0430",onChange:function(e){return E(e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"*\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(j.jsx)("span",{className:"form-validation",children:m&&m.length<3?"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 2\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":null}),Object(j.jsx)("input",{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){return O(e.target.value)},className:m&&m.length<3?"error":null,value:m})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e"}),Object(j.jsxs)("select",{value:o,onChange:function(e){return l(e.target.value)},className:"form-sorting",name:"form-sorting",children:[Object(j.jsx)("option",{value:"date",children:"\u0414\u0430\u0442\u0435"}),Object(j.jsx)("option",{value:"raiting",children:"\u0420\u0435\u0439\u0442\u0435\u043d\u0433\u0443"}),Object(j.jsx)("option",{value:"rolevant",children:"\u0420\u043e\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438"}),Object(j.jsx)("option",{value:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"}),Object(j.jsx)("option",{value:"views",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"})]})]}),Object(j.jsxs)("label",{className:"form-range",children:[Object(j.jsx)("input",{onChange:function(e){return x(e.target.value)},value:f,type:"range",min:"4",max:"50"}),Object(j.jsx)("span",{children:f})]})]}),Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{onClick:function(){t(!1)},className:"form-button button-dns",children:"\u041d\u0435 \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"}),Object(j.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var n="f".concat((~~(1e8*Math.random())).toString(16));N(n),w(a?{type:"CHANGE_VALUE",value:{sortingType:o,request:D,formName:m,rangeValue:f,id:_}}:{type:"SET_DATA",value:{sortingType:o,request:S.searchFilm,formName:m,rangeValue:f,id:n}}),t(!1)}(e)},className:"form-button button-save",disabled:!(m&&m.length>=3),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})}),x=function(e){var t=e.formInfo,n=e.setShowFavouriteForm,c=(Object(r.c)((function(e){return e.videoReducer})),Object(r.b)()),a=t&&t.map((function(e){return Object(j.jsxs)("div",{className:"favouriteForm__info",children:[Object(j.jsxs)("span",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: \xab",e.formName,"\xbb"]}),Object(j.jsxs)("span",{children:["\u0417\u0430\u043f\u0440\u043e\u0441: \xab",e.request,"\xbb"]}),Object(j.jsxs)("span",{children:["\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430: \xab",e.sortingType,"\xbb"]}),Object(j.jsxs)("span",{children:["Max \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0438\u0434\u0435\u043e: \xab",e.rangeValue,"\xbb"]})]},e.id)}));return Object(j.jsxs)("div",{className:"favouriteForm",children:[a,Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{onClick:function(){n(!1)},className:"form-button button-dns",children:"\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c"}),Object(j.jsx)(l.b,{to:"/Main",onClick:function(e){return c({type:"SEARCH_VIDEO",value:t[0].request}),void v(t[0].request,t[0].rangeValue).then((function(e){return c({type:"ADD_VIDEO",value:e})}))},className:"form-button button-save",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"})]})]})};function p(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.videoReducer})),n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(d.a)(o,2),u=l[0],b=l[1],m=Object(c.useState)(null),O=Object(d.a)(m,2),h=O[0],v=O[1],p=t.formDate&&t.formDate.map((function(n){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"favourite__block",children:[Object(j.jsx)("li",{id:n.id,className:"favourite__item",onClick:function(e){return function(e){b(!0);var n=t.formDate.filter((function(t){return e===t.id}));v(n)}(e.target.id)},children:n.formName}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"favourite__button favourite__button--change",onClick:function(){return function(e){s(!i);var n=t.formDate.filter((function(t){return e===t.id}));v(n)}(n.id)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(j.jsx)("button",{className:"favourite__button favourite__button--remove",onClick:function(){return t=n.id,void e({type:"REMOVE_VIDEO",value:t});var t},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})})}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),i?Object(j.jsx)(f,{setShowForm:s,changeValue:!0,formInfo:h}):null,p,u?Object(j.jsx)(x,{setShowFavouriteForm:b,formInfo:h}):null]})}var g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(p,{})})]})},_=n.p+"static/media/sibdev-logo.5e953d99.svg",N=n.p+"static/media/eye-off.b647f74c.svg",w=n.p+"static/media/eye.9ea16cf9.svg",S=(n(33),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),o=s[0],u=s[1],b=Object(c.useState)(!1),m=Object(d.a)(b,2),O=m[0],h=m[1],v=Object(r.b)();return Object(j.jsx)("form",{action:"",className:"box",method:"post",children:Object(j.jsxs)("div",{className:"box-container",children:[Object(j.jsx)("img",{src:_,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(j.jsx)("h1",{children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("div",{className:"input__container",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{className:"box__input",type:"email",id:"email",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"input__container",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{className:"box__input",type:O?"text":"password",id:"password",value:o,onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("div",{className:"password__btn",onClick:function(){h(!O)},children:O?Object(j.jsx)("img",{className:"password__btn-img",src:w,alt:w}):Object(j.jsx)("img",{className:"password__btn-img",src:N,alt:w})})]}),Object(j.jsx)(l.b,{to:"/Main",className:"box__button",type:"submit",onClick:function(e){v({type:"CHECK_USERDATE",value:{email:n,password:o}})},children:"\u0412\u0445\u043e\u0434"})]})})}),C=function(){return Object(j.jsx)("div",{className:"registration",children:Object(j.jsx)(S,{})})},y=(n(74),n(75),function(e){var t=e.position,n=(Object(r.b)(),Object(r.c)((function(e){return e.videoReducer}))),c=n.videos.items&&n.videos.items.map((function(e){return Object(j.jsxs)("div",{className:"video__item",children:[Object(j.jsxs)("a",{href:"https://www.youtube.com/watch?v=".concat(e.id.videoId),children:[Object(j.jsx)("img",{src:e.snippet.thumbnails.medium.url,width:"260px",height:"120px",alt:e.snippet.title}),Object(j.jsx)("h5",{className:"video__container-title",children:e.snippet.title})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:e.snippet.channelTitle}),Object(j.jsx)("p",{})]})]},e.id.videoId)}));return Object(j.jsx)("div",{className:"video__container video__container--".concat(t),children:c})}),D=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.videoReducer})),n=Object(c.useState)("row"),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(d.a)(o,2),u=l[0],b=l[1],m=Object(c.useState)(null),O=Object(d.a)(m,2),h=O[0],x=O[1],p=function(){x(""),e({type:"SEARCH_VIDEO",value:h}),v(h).then((function(t){return e({type:"ADD_VIDEO",value:t})}))},g=function(e){s(e)};return Object(j.jsxs)("div",{children:[u?Object(j.jsx)(f,{setShowForm:b}):null,Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"main__title",children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(j.jsxs)("div",{className:"main__search",children:[Object(j.jsx)("input",{value:h,onChange:function(e){return t=e.target.value,void x(t);var t},className:"main__search-input",placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",onKeyDown:function(e){return function(e){13===e.keyCode&&p()}(e)}}),""!==t.searchFilm?Object(j.jsx)("span",{onClick:function(){b(!u)},className:"main__search-input--heart"}):null,Object(j.jsx)("button",{disabled:!h,onClick:function(){return p()},className:"main__search-button",children:"\u041d\u0430\u0439\u0442\u0438"})]}),t.searchFilm?Object(j.jsxs)("div",{className:"main__panel",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"main__panel-title",children:["\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443:"," ",Object(j.jsxs)("span",{children:["\u2039\u2039",t.searchFilm,"\u203a\u203a"]})]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(e){return g(e.target.name)},name:"column",className:"column"===i?"main__panel-button--column main__panel-button--column--active":"main__panel-button--column"}),Object(j.jsx)("button",{onClick:function(e){return g(e.target.name)},name:"row",className:"row"===i?"main__panel-button--row main__panel-button--row--active":"main__panel-button--row"})]})]}):null,Object(j.jsx)(y,{position:i})]})})]})},E=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(D,{})})]})};n(76);function F(){return Object(j.jsxs)("div",{className:"pagesNotFound",children:[Object(j.jsx)("h2",{className:"pagesNotFound__title",children:"Ooops! Page not found."}),Object(j.jsx)("h1",{className:"pagesNotFound__error-title",children:"404"}),Object(j.jsx)("p",{className:"pagesNotFound__info",children:"We can't find the page you're looking for "}),Object(j.jsx)(l.b,{to:"/Main",className:"pagesNotFound__button",children:"Back main pages"})]})}function k(){return Object(j.jsx)("div",{children:Object(j.jsx)(F,{})})}var I=function(){Object(r.b)();var e=Object(r.c)((function(e){return e.registationReducer})),t=Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{path:"/Favourite",exact:!0,component:g}),Object(j.jsx)(o.a,{path:"/Registration",component:C}),Object(j.jsx)(o.a,{path:"/Main",component:E}),Object(j.jsx)(o.a,{component:k})]});return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"App",children:e.exces?Object(j.jsx)("div",{children:t}):Object(j.jsx)(C,{})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},A=n(24),V=n(36),T=n(5),M={videos:[],searchFilm:"",formDate:[]},q={login:"admin",password:"admin",exces:!1},H=Object(A.b)(Object(A.a)({videoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_VIDEO":return Object(T.a)(Object(T.a)({},e),{},{searchFilm:t.value});case"ADD_VIDEO":return Object(T.a)(Object(T.a)({},e),{},{videos:t.value});case"SET_DATA":return Object(T.a)(Object(T.a)({},e),{},{formDate:[].concat(Object(V.a)(e.formDate),[t.value])});case"REMOVE_VIDEO":var n=e.formDate.filter((function(e){return e.id!==t.value}));return console.log(n),Object(T.a)(Object(T.a)({},e),{},{formDate:n});case"CHANGE_VALUE":console.log(t.value);var c=e.formDate.filter((function(e){return e.id===t.value.id})),a=e.formDate.map((function(e){return e.id===c[0].id&&(e=t.value),e}));return console.log(a),Object(T.a)(Object(T.a)({},e),{},{formDate:a});default:return e}},registationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_USERDATE":if(e.login===t.value.email&&e.password===t.value.password)return Object(T.a)(Object(T.a)({},e),{},{exces:!0});alert("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e");case"EXIT":return Object(T.a)(Object(T.a)({},e),{},{exces:t.value});default:return e}}}),localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):{});H.subscribe((function(){localStorage["redux-store"]=JSON.stringify(H.getState())})),console.log(H),s.a.render(Object(j.jsx)(r.a,{store:H,children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})})}),document.getElementById("root")),R()}},[[77,1,2]]]);
//# sourceMappingURL=main.d6f92695.chunk.js.map