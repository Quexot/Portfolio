(window.webpackJsonppl=window.webpackJsonppl||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(26),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),h=a(1),p=a.n(h),d={name:"\u0420\u0435\u043c\u0438\u0437\u043e\u0432 \u0414\u0430\u043d\u0438\u0438\u043b",headerTagline:["Frontend-developer"],contactEmail:"ren67871@gmail.com",abouttext:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",aboutImage:"http://pm1.narvii.com/6728/95b9eb047a251dec2dda10aa92b81e6f0a70a27fv2_00.jpg",ShowAboutImage:!0,projects:[{id:1,title:"Project One",service:"UI/UX Design",imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:""}],social:[{name:"Github",url:"https://github.com/Quexot"}]},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"Web-Dev"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0},d.name))),r.a.createElement(p.a,{bottom:!0},r.a.createElement("p",{className:"header-title"},d.headerTagline[0],r.a.createElement("br",null),d.headerTagline[1],r.a.createElement("br",null),d.headerTagline[2],r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement("a",{href:"mailto:".concat(d.contactEmail),rel:"noopener noreferrer"},"Contact")))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0},"\u041e\u0431\u043e \u043c\u043d\u0435")),r.a.createElement(p.a,{bottom:!0},r.a.createElement("p",null,d.abouttext))),d.ShowAboutImage?r.a.createElement("img",{src:d.aboutImage,alt:"about iamge"}):null)}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{bottom:!0},r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:this.props.url},r.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),r.a.createElement("h1",null,this.props.title),r.a.createElement("span",null,this.props.service)))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},r.a.createElement(p.a,{bottom:!0,cascade:!0},"Projects")),r.a.createElement("div",{className:"Projects-content"},d.projects.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})}))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0}," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b ")),r.a.createElement(p.a,{left:!0},r.a.createElement("div",{className:"contact-content"},r.a.createElement("a",{href:"mailto:".concat(d.contactEmail),className:"email"},d.contactEmail),r.a.createElement("ul",null,d.social.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))}))))),r.a.createElement("span",{className:"footer"},"Made by ",r.a.createElement("a",{href:""},"Remizov Daniil")))}}]),t}(n.Component),y=a(8),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.scrollToTop=function(){y.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"Projects",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),t}(n.Component);a(39);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement("div",{className:"App-header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"About"},r.a.createElement(E,null)),r.a.createElement("div",{className:"Projects"},r.a.createElement(v,null)),r.a.createElement("div",{className:"contact"},r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.bf001411.chunk.js.map