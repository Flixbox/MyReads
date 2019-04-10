(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,n){e.exports=n(350)},350:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=n(18),l=n(19),s=n(21),u=n(20),h=n(22),d=n(10),p=n(56),m=n.n(p),f=n(38),b=n(37),j=n(9),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={top:!1,left:!1,bottom:!1,right:!1},n.toggleDrawer=function(e,t){return function(){n.setState(Object(b.a)({},e,t))}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(j.a,{position:"static"},r.a.createElement(j.o,{className:e.navBar},r.a.createElement(j.p,{variant:"h6",color:"inherit",className:e.grow},"MyReads"),r.a.createElement(f.b,{to:"/",className:e.menuButton},r.a.createElement(j.b,{color:"inherit"},"Library")),r.a.createElement(f.b,{to:"/search",className:e.menuButton},r.a.createElement(j.b,{color:"inherit"},"Search"))))))}}]),t}(a.Component),O=Object(d.withStyles)({grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20,textDecoration:"none",color:"white"}})(g),E=n(28),y=n(31),v="https://reactnd-books-api.udacity.com",S=localStorage.token;S||(S=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:S},w=function(){return fetch("".concat(v,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},x=function(e,t){return fetch("".concat(v,"/books/").concat(e.id),{method:"PUT",headers:Object(E.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},C=function(e){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(E.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},N=n(136),A=n.n(N),B=n(6),R=n.n(B),T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={expanded:!1},n.handleExpandClick=function(){n.setState(function(e){return{expanded:!e.expanded}})},n.handleShelf=function(e,t){n.props.updateShelf(t.props.id,t.props.value)},n.renderShelf=function(e,t){return e||(e=""),r.a.createElement(j.m,{value:e,onChange:n.handleShelf,displayEmpty:!0,name:"shelf"},r.a.createElement(j.l,{value:"",id:t},"None"),r.a.createElement(j.l,{value:"currentlyReading",id:t},"Currently reading"),r.a.createElement(j.l,{value:"wantToRead",id:t},"Want to read"),r.a.createElement(j.l,{value:"read",id:t},"Read"))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.classes,a=e.title,o=e.authors,c=e.categories,i=e.description,l=e.imageLinks,s=e.subtitle,u=e.shelf;o||(o=["Unknown"]),c||(c=[]);var h=r.a.createElement("div",null);return l&&(h=r.a.createElement(j.g,{className:n.media,image:l.thumbnail,title:"Book thumbnail"})),r.a.createElement(j.c,{className:n.card},r.a.createElement(j.f,{title:a,subheader:s}),h,r.a.createElement(j.e,null,c.map(function(e){return r.a.createElement(j.h,{label:e,key:e})}),r.a.createElement(j.p,{component:"p"},"Authors:"),r.a.createElement(j.p,{component:"p"},o.join(", "))),r.a.createElement(j.d,{className:n.actions,disableActionSpacing:!0},this.renderShelf(u,t),r.a.createElement(j.k,{className:R()(n.expand,Object(b.a)({},n.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(A.a,null))),r.a.createElement(j.i,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(j.e,null,r.a.createElement(j.p,{paragraph:!0},i))))}}]),t}(a.Component),W=Object(d.withStyles)(function(e){return{card:{maxWidth:250},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})(T),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(j.j,{container:!0,spacing:16,className:t.rootContainer,justify:"center"},this.props.books.map(function(t){return r.a.createElement(j.j,{item:!0,key:t.id},r.a.createElement(W,Object.assign({},t,{updateShelf:e.props.updateShelf})))}))}}]),t}(a.Component),F=Object(d.withStyles)({rootContainer:{margin:"16px"},searchField:{}})(M),J=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).shelves=["currentlyReading","wantToRead","read"],n.translation={currentlyReading:"Currently reading",wantToRead:"Want to read",read:"Read"},n.renderShelf=function(e,t){return r.a.createElement(j.j,{container:!0,justify:"center"},r.a.createElement(j.p,{variant:"h5",gutterBottom:!0},n.translation[e]),r.a.createElement(F,{books:t,updateShelf:n.props.updateShelf}))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(j.j,{container:!0,className:t.rootContainer},this.shelves.map(function(t){return e.renderShelf(t,e.props.books.filter(function(e){return e.shelf===t}))}))}}]),t}(a.Component),L=Object(d.withStyles)({rootContainer:{padding:"5px"}})(J),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:"",books:[]},n.handleSearch=function(e){var t=e.target.value;n.setState(function(e){return Object(E.a)({},e,{searchString:t})}),t.length?n.searchBooks(t):n.setState(function(e){return Object(E.a)({},e,{books:[]})})},n.searchBooks=function(e){C(e).then(function(e){var t=[];e&&e.length&&(t=e),n.state.searchString&&n.setState(function(e){return Object(E.a)({},e,{books:t})})})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(j.j,{container:!0,className:e.rootContainer},r.a.createElement(j.j,{item:!0,xs:12},r.a.createElement(j.n,{label:"Search",value:this.state.searchString,className:e.searchField,autoFocus:!0,fullWidth:!0,onChange:this.handleSearch})),r.a.createElement(F,{books:this.state.books,updateShelf:this.props.updateShelf}))}}]),t}(a.Component),P=Object(d.withStyles)({rootContainer:{padding:"5px"},searchField:{}})(D),U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},n.updateShelf=function(e,t){x({id:e},t).then(function(){n.getAll()})},n.getAll=function(){w().then(function(e){n.setState(function(t){return Object(E.a)({},t,{books:e})})})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(L,Object.assign({},t,{books:e.state.books,updateShelf:e.updateShelf}))}}),r.a.createElement(y.a,{path:"/search",render:function(t){return r.a.createElement(P,Object.assign({},t,{updateShelf:e.updateShelf}))}}))}}]),t}(a.Component),q=Object(d.withStyles)({})(U),z=Object(d.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.MuiThemeProvider,{theme:z},r.a.createElement(m.a,null),r.a.createElement(f.a,null,r.a.createElement(O,null),r.a.createElement(q,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[205,1,2]]]);
//# sourceMappingURL=main.20c2a942.chunk.js.map