(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e){e.exports={terms:["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"]}},206:function(e,t,a){e.exports=a(351)},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),c=a(18),s=a(19),l=a(21),u=a(20),h=a(22),p=a(10),d=a(56),m=a.n(d),f=a(38),b=a(37),g=a(9),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={top:!1,left:!1,bottom:!1,right:!1},a.toggleDrawer=function(e,t){return function(){a.setState(Object(b.a)({},e,t))}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(g.o,{className:e.navBar},r.a.createElement(g.p,{variant:"h6",color:"inherit",className:e.grow},"MyReads"),r.a.createElement(f.b,{to:"/",replace:!0,className:e.menuButton},r.a.createElement(g.b,{color:"inherit"},"Library")),r.a.createElement(f.b,{to:"/search",replace:!0,className:e.menuButton},r.a.createElement(g.b,{color:"inherit"},"Search"))))))}}]),t}(n.Component),j=Object(p.withStyles)({grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20,textDecoration:"none",color:"white"}})(y),v=a(28),O=a(31),E="https://reactnd-books-api.udacity.com",S=localStorage.token;S||(S=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:S},w=function(){return fetch("".concat(E,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},C=function(e,t){return fetch("".concat(E,"/books/").concat(e.id),{method:"PUT",headers:Object(v.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},x=function(e){return fetch("".concat(E,"/search"),{method:"POST",headers:Object(v.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},L=a(136),N=a.n(L),A=a(6),B=a.n(A),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleShelf=function(e,t){a.props.updateShelf(t.props.id,t.props.value)},a.renderShelf=function(e,t){return e||(e=""),r.a.createElement(g.m,{value:e,onChange:a.handleShelf,displayEmpty:!0,name:"shelf"},r.a.createElement(g.l,{value:"",id:t},"None"),r.a.createElement(g.l,{value:"currentlyReading",id:t},"Currently reading"),r.a.createElement(g.l,{value:"wantToRead",id:t},"Want to read"),r.a.createElement(g.l,{value:"read",id:t},"Read"))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.classes,n=e.title,o=e.authors,i=e.categories,c=e.description,s=e.imageLinks,l=e.subtitle,u=e.shelf;o||(o=["Unknown"]),i||(i=[]),u||(u=this.props.searchLibrary(t));var h=r.a.createElement("div",null);return s&&(h=r.a.createElement(g.g,{className:a.media,image:s.thumbnail.replace(/^http:\/\//i,"https://"),title:"Book thumbnail"})),r.a.createElement(g.c,{className:a.card},r.a.createElement(g.f,{title:n,subheader:l}),h,r.a.createElement(g.e,null,i.map(function(e){return r.a.createElement(g.h,{label:e,key:e})}),r.a.createElement(g.p,{component:"p"},"Authors:"),r.a.createElement(g.p,{component:"p"},o.join(", "))),r.a.createElement(g.d,{className:a.actions,disableActionSpacing:!0},this.renderShelf(u,t),r.a.createElement(g.k,{className:B()(a.expand,Object(b.a)({},a.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(N.a,null))),r.a.createElement(g.i,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(g.e,null,r.a.createElement(g.p,{paragraph:!0},c))))}}]),t}(n.Component),T=Object(p.withStyles)(function(e){return{card:{maxWidth:250},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})(R),F=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(g.j,{container:!0,spacing:16,className:t.rootContainer,justify:"center"},this.props.books.map(function(t){return r.a.createElement(g.j,{item:!0,key:t.id},r.a.createElement(T,Object.assign({},t,{updateShelf:e.props.updateShelf,searchLibrary:e.props.searchLibrary})))}))}}]),t}(n.Component),D=Object(p.withStyles)({rootContainer:{margin:"16px"},searchField:{}})(F),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).shelves=["currentlyReading","wantToRead","read"],a.translation={currentlyReading:"Currently reading",wantToRead:"Want to read",read:"Read"},a.renderShelf=function(e,t){return r.a.createElement(g.j,{container:!0,justify:"center",key:e},r.a.createElement(g.p,{variant:"h5",gutterBottom:!0},a.translation[e]),r.a.createElement(D,{books:t,updateShelf:a.props.updateShelf}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(g.j,{container:!0,className:t.rootContainer},this.shelves.map(function(t){return e.renderShelf(t,e.props.books.filter(function(e){return e.shelf===t}))}))}}]),t}(n.Component),P=Object(p.withStyles)({rootContainer:{padding:"5px"}})(M),W=a(137),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:"",books:[]},a.handleSearch=function(e){var t=e.target.value;a.setState(function(e){return Object(v.a)({},e,{searchString:t})}),t.length&&a.validateSearchString(t)?a.searchBooks(t):a.setState(function(e){return Object(v.a)({},e,{books:[]})})},a.searchBooks=function(e){x(e).then(function(e){var t=[];e&&e.length&&(t=e),a.state.searchString&&a.setState(function(e){return Object(v.a)({},e,{books:t})})})},a.validateSearchString=function(e){return W.terms.map(function(e){return e.toLowerCase()}).includes(e.toLowerCase())},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(g.j,{container:!0,className:e.rootContainer},r.a.createElement(g.j,{item:!0,xs:12},r.a.createElement(g.n,{label:"Search",value:this.state.searchString,className:e.searchField,autoFocus:!0,fullWidth:!0,onChange:this.handleSearch})),r.a.createElement(D,{books:this.state.books,updateShelf:this.props.updateShelf,searchLibrary:this.props.searchLibrary}))}}]),t}(n.Component),G=Object(p.withStyles)({rootContainer:{padding:"5px"},searchField:{}})(J),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.updateShelf=function(e,t){""===t&&(t="none"),C({id:e},t).then(function(){a.getAll()})},a.searchLibrary=function(e){var t=a.state.books.filter(function(t){return!(!t.shelf||t.id!==e)&&t.shelf});if(t.length)return t[0].shelf},a.getAll=function(){w().then(function(e){a.setState(function(t){return Object(v.a)({},t,{books:e})})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(P,Object.assign({},t,{books:e.state.books,updateShelf:e.updateShelf,searchLibrary:e.searchLibrary}))}}),r.a.createElement(O.a,{path:"/search",render:function(t){return r.a.createElement(G,Object.assign({},t,{updateShelf:e.updateShelf,searchLibrary:e.searchLibrary}))}}))}}]),t}(n.Component),I=Object(p.withStyles)({})(H),U=Object(p.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.MuiThemeProvider,{theme:U},r.a.createElement(m.a,null),r.a.createElement(f.a,null,r.a.createElement(j,null),r.a.createElement(I,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[206,1,2]]]);
//# sourceMappingURL=main.c8e6eee0.chunk.js.map