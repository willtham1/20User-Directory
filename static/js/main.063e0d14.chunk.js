(this["webpackJsonp19-employee-directory"]=this["webpackJsonp19-employee-directory"]||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),s=n.n(r),i=n(24),a=n.n(i),o=(n(38),n(28)),l=n(2),j=(n(39),n(10)),u=n(25),b=n(26),d=n(32),h=n(30),O=n(31);var x=function(t){var e=t.result,n=t.index;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{alt:"headshot",src:e.picture.large})}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{children:new Date(e.dob.date).toLocaleDateString()}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone})]},n)};n(40);var f=function(t){var e,n=t.results,s=(t.setResults,t.nameFilter),i=void 0===s?"":s,a=Object(r.useState)(0),o=Object(O.a)(a,2),l=o[0],j=o[1];return i=new RegExp(i,"i"),n=null===(e=n)||void 0===e?void 0:e.filter((function(t,e){return i.test(t.name.first)})),l&&n.sort((function(t,e){return t.name.first<e.name.first?-l:e.name.first<t.name.first?l:0})),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:"",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{type:"button",children:"Profile Photo"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{type:"button",onClick:function(){j(l?-l:1)},children:"Name"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{type:"button",children:"Date of Birth"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{type:"button",children:"Email"})}),Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("button",{type:"button",children:"Phone"})})]})}),Object(c.jsx)("tbody",{children:n.map((function(t,e){return Object(c.jsx)(x,{result:t,index:e},e)}))})]})},m=n(27),p=n.n(m),v={getEmployees:function(){return p.a.get("https://randomuser.me/api/?results=20&nat=us")}},y=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={results:[],nameFilter:""},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;v.getEmployees().then((function(e){return t.setState({results:e.data.results})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"container-fluid text-center bg-dark border-bottom border-thick",children:[Object(c.jsx)("form",{children:Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"search",value:this.state.nameFilter,onChange:function(e){t.setState(Object(j.a)(Object(j.a)({},t.state),{},{nameFilter:e.target.value}))}})})}),this.state.results.length?Object(c.jsx)(f,{results:this.state.results,setResults:function(e){return t.setState(Object(j.a)(Object(j.a)({},t.state),{},{results:e}))},nameFilter:this.state.nameFilter}):""]})}}]),n}(r.Component);n(59);var g=function(){return Object(c.jsxs)("div",{className:"container-fluid text-center bg-dark border-bottom border-thin",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("br",{})]})};n(60);var F=function(t){return Object(c.jsx)("div",{className:"wrapper",children:t.children})};var k=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(F,{children:[Object(c.jsx)(g,{}),Object(c.jsx)(l.a,{exact:!0,path:"/19-employee-directory",component:y})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),s(t),i(t)}))};n(66);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),S()}},[[67,1,2]]]);
//# sourceMappingURL=main.063e0d14.chunk.js.map