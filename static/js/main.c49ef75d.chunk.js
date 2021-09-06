(this["webpackJsonpstolen-bikes-index-app"]=this["webpackJsonpstolen-bikes-index-app"]||[]).push([[0],{42:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(15),s=n.n(i),r=n(10),o=n(13),j=n(3),l=(n(42),n(9)),b=n(30),d=n.n(b).a.create({baseURL:"https://bikeindex.org:443/api/v3"}),u="GET_STOLEN_BIKES",O="SET_ERROR",h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Object(j.g)().search.substr(5)||1,a=Object(c.useState)([]),i=Object(l.a)(a,2),s=i[0],r=i[1],o=Object(j.f)(),b=Math.ceil(e.length/t),d=function(){n<b&&(o.push("?pag=".concat(Number(n)+1)),p())},u=function(){n>1&&(o.push("?pag=".concat(Number(n)-1)),p())},O=function(){o.push("?pag=1"),p()},h=function(){o.push("?pag=".concat(b)),p()};Object(c.useEffect)((function(){r(e.slice(t*(Number(n)-1),t*Number(n)))}),[n]);var p=function(){r(e.slice(t*(Number(n)-1),t*Number(n)))};return{totalItems:e.length,page:s,goFirst:O,goLast:h,prevPage:u,nextPage:d,index:n,getPage:p,perPage:t}},p=(n(65),n.p+"static/media/no-img.89867b41.jpg"),f=n(1);function x(e){var t=e.bike;return Object(f.jsxs)("div",{className:"cardCtn",children:[Object(f.jsx)("img",{src:t.img||p,alt:""}),Object(f.jsxs)("div",{className:"cardInfo",children:[Object(f.jsx)(o.b,{to:"/bike/".concat(t.id),children:Object(f.jsx)("span",{className:"cardTitle",children:t.title})}),Object(f.jsx)("span",{children:t.description}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"cardText",children:t.locationOfTheft}),Object(f.jsx)("span",{className:"cardText",children:t.dateOfTheft.toDateString()})]})]})]})}n(67);function m(e){var t=e.list,n=h(t),a=n.page,i=n.getPage,s=n.index,r=n.prevPage,o=n.nextPage,j=n.goLast,l=n.goFirst,b=n.totalItems;return Object(c.useEffect)((function(){i()}),[t]),t.length?Object(f.jsxs)("div",{className:"displayCtn",children:[Object(f.jsx)("p",{children:"Total: ".concat(b)}),a.map((function(e,t){return Object(f.jsx)(x,{bike:e},t.toString())})),Object(f.jsxs)("div",{className:"buttonsCtn fadeIn",children:[Object(f.jsx)("button",{type:"button",onClick:l,children:"first"}),Object(f.jsx)("button",{type:"button",onClick:r,children:"back"}),Object(f.jsx)("span",{children:s}),Object(f.jsx)("button",{type:"button",onClick:o,children:"next"}),Object(f.jsx)("button",{type:"button",onClick:j,children:"last"})]})]}):Object(f.jsx)("h1",{className:"displayCtn",children:"No results"})}var g=n(16),v=n(11);n(68);function N(e){var t=e.onSearch,n=e.isSearch,a=Object(c.useState)({title:"",from:new Date(0),to:new Date}),i=Object(l.a)(a,2),s=i[0],o=i[1],j=Object(r.c)((function(e){return e.stolenBikes})),b=function(e){o(Object(v.a)(Object(v.a)({},s),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(f.jsx)("div",{className:"searchCtn",children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=j.filter((function(e){var t=e.title,n=e.dateOfTheft;return t.toLowerCase().includes(s.title)&&n>new Date(s.from)&&n<new Date(s.to)}));n(!0),t(c)},children:[Object(f.jsx)("input",{name:"title",type:"text",onChange:b,placeholder:"Search..."}),Object(f.jsx)("label",{children:" from "}),Object(f.jsx)("input",{type:"date",name:"from",onChange:b}),Object(f.jsx)("label",{children:"to "}),Object(f.jsx)("input",{type:"date",name:"to",onChange:b}),Object(f.jsx)("button",{type:"submit",children:"search"})]})})}var k=n.p+"static/media/loading.aac55c0e.gif";n(69);function S(){return Object(f.jsx)("div",{className:"spinner",children:Object(f.jsx)("img",{src:k,alt:""})})}n(70);function y(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.stolenBikes})),n=Object(r.c)((function(e){return e.error})),a=Object(c.useState)([]),i=Object(l.a)(a,2),s=i[0],o=i[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),h=b[0],p=b[1];return Object(c.useEffect)((function(){t.length||e((function(e){return d.get("/search?page=1&per_page=100&location=Berlin&distance=10&stolenness=proximity").then((function(t){e({type:u,payload:t.data.bikes.map((function(e){var t=e.id,n=e.title,c=e.description,a=e.date_stolen,i=e.stolen_location,s=e.large_img;return{id:t,title:n,dateOfTheft:new Date(1e3*a),description:"".concat(null===c||void 0===c?void 0:c.substr(0,100),"..."),locationOfTheft:i,img:s}}))})})).catch((function(){e({type:O,payload:!0})}))}))}),[]),n?Object(f.jsx)("h3",{className:"homeCtn error",children:"Server Error. Please try later"}):Object(f.jsxs)("div",{className:"homeCtn fadeIn",children:[Object(f.jsx)("h1",{children:"Stolen bikes"}),Object(f.jsx)(N,{onSearch:o,isSearch:p}),t.length?Object(f.jsx)(m,{list:h?s:t}):Object(f.jsx)(S,{})]})}n(71);var _=n.p+"static/media/Berliner_Polizei.svg.bde85cca.png";function C(){return Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsx)(o.b,{to:"/",children:Object(f.jsx)("img",{src:_,alt:""})}),Object(f.jsxs)("div",{className:"navTitle",children:[Object(f.jsx)("span",{className:"navTitlePpal",children:"Police Departament of Berlin"}),Object(f.jsx)("span",{className:"navSubtitle",children:"Stolen Bikes "})]})]})}n(72);var E=function(e){return new Date(1e3*e).toDateString()};function T(){var e=Object(j.h)().id,t=Object(c.useState)({}),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!0),r=Object(l.a)(s,2),o=r[0],b=r[1];return Object(c.useEffect)((function(){d.get("/bikes/".concat(e)).then((function(e){return i(e.data)})).then((function(){return b(!1)}))}),[]),o?Object(f.jsx)(S,{}):Object(f.jsxs)("div",{className:"detailCtn fadeIn",children:[Object(f.jsx)("h1",{children:a.bike.title}),Object(f.jsxs)("div",{className:"detailBody",children:[Object(f.jsx)("img",{src:a.bike.large_img||p,alt:""}),Object(f.jsxs)("div",{className:"detailBodyRight",children:[Object(f.jsx)("h3",{children:"Description of the  incident:"}),Object(f.jsx)("p",{children:a.bike.description}),Object(f.jsx)("h4",{children:"Date of the theft:"}),Object(f.jsx)("span",{children:E(a.bike.date_stolen)}),Object(f.jsx)("h4",{children:"Date of reported:"}),Object(f.jsx)("span",{children:E(a.bike.stolen_record.created_at)}),Object(f.jsx)("h4",{children:"Location of the theft:"}),Object(f.jsx)("span",{children:a.bike.stolen_location})]})]})]})}var D=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(C,{}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/bike/:id",component:T}),Object(f.jsx)(j.a,{path:"/",component:y})]})]})})},w=(n(73),n(17)),B=n(32),P={stolenBikes:[],error:!1};var I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.b,L=Object(w.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(v.a)(Object(v.a)({},e),{},{stolenBikes:t.payload});case O:return Object(v.a)(Object(v.a)({},e),{},{error:t.payload});default:return e}}),I(Object(w.a)(B.a)));s.a.render(Object(f.jsx)(r.a,{store:L,children:Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c49ef75d.chunk.js.map