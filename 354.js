"use strict";(self.webpackChunkgallery=self.webpackChunkgallery||[]).push([[354],{354:function(n,r,t){t.r(r),t.d(r,{default:function(){return I}});var e=t(7294),i=t(5998),a=t(4184),o=t.n(a),l=function(n){var r=n.painting,t=n.getAuthorName,i=n.getAuthorLocation;return e.createElement("div",{className:"AboutPainting"},e.createElement("div",{className:"PaintingName"},r.name),e.createElement("div",null,e.createElement("span",{className:"TitleAbout"},"Author:"),e.createElement("span",{className:"TextAbout"}," ".concat(t(r.authorId)))),e.createElement("div",null,e.createElement("span",{className:"TitleAbout"},"Created:"),e.createElement("span",{className:"TextAbout"}," ".concat(r.created))),e.createElement("div",null,e.createElement("span",{className:"TitleAbout"},"Location:"),e.createElement("span",{className:"TextAbout"}," ".concat(i(r.locationId)))))},u=t(910),c=t(3873),s=t(7875),d=t.p+"893508ab89eaf1319a12864efde53ccc.png";function g(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}var p=function(n){var r,t,i=n.painting,a=i.imageUrl,o=i.name,l=(r=(0,e.useState)({src:d,loading:!0}),t=2,function(n){if(Array.isArray(n))return n}(r)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,i,a=[],o=!0,l=!1;try{for(t=t.call(n);!(o=(e=t.next()).done)&&(a.push(e.value),!r||a.length!==r);o=!0);}catch(n){l=!0,i=n}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}}(r,t)||function(n,r){if(n){if("string"==typeof n)return g(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],c=l[1];return(0,e.useEffect)((function(){var n=s.Z.imagePath(a),r=new Image;r.src=n,r.onload=function(){return c({src:n,loading:!1})}})),e.createElement("img",{src:u.src,alt:o,style:{opacity:u.loading?.5:1,transition:"opacity .15s linear"}})},m=t(3379),h=t.n(m),f=t(7795),v=t.n(f),b=t(569),x=t.n(b),y=t(3565),w=t.n(y),P=t(9216),A=t.n(P),N=t(4589),E=t.n(N),T=t(341),C={};C.styleTagTransform=E(),C.setAttributes=w(),C.insert=x().bind(null,"head"),C.domAPI=v(),C.insertStyleElement=A(),h()(T.Z,C),T.Z&&T.Z.locals&&T.Z.locals;var I=function(n){var r=n.currentPage,t=n.paintings,a=n.filters,s=n.authors,d=n.locations,g=function(n,r,t){var a=(0,i.I0)(),o=function(n,r){var t=""===r.selectedNamePainting?n:n.filter((function(n){return n.name.toLowerCase().includes(r.selectedNamePainting.toLowerCase())})),e=""===r.minYear?t:t.filter((function(n){var t=n.created;return Number(t)>=r.minYear})),i=""===r.maxYear?e:e.filter((function(n){var t=n.created;return Number(t)<=r.maxYear})),a=""===r.selectedAuthor?i:i.filter((function(n){return n.authorId===r.selectedAuthor.id}));return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,t=1,e=[];return n.reduce((function(i,a,o){return o===n.length-1?(i.push({page:t,paintings:e}),i):(e.length<r?e.push(a):(i.push({page:t,paintings:e}),t+=1,(e=[]).push(a)),i)}),[])}(""===r.selectedLocation?a:a.filter((function(n){return n.locationId===r.selectedLocation.id})))}(n,r);return(0,e.useEffect)((function(){a(u.Nw.setFilterPaintings(o))})),o.find((function(n){return n.page===t}))}(t,a,r),m=(0,i.I0)(),h=(0,i.v9)((function(n){return n.page.touchPaintingId})),f=function(n){var r=s.find((function(r){return r.id===n}));return null==r?void 0:r.name},v=function(n){var r=d.find((function(r){return r.id===n}));return null==r?void 0:r.location};return e.createElement("div",{className:"Gallery"},null==g?void 0:g.paintings.map((function(n){return e.createElement("div",{key:n.id,id:n.id,className:o()(h===n.id?"PaintingContainer Touch":"PaintingContainer"),onTouchStart:function(){return r=n.id,void m(r===h?c.N.setTouchPaintingId(null):c.N.setTouchPaintingId(r));var r}},e.createElement(e.Suspense,null,e.createElement(p,{painting:n})),e.createElement(l,{painting:n,getAuthorName:f,getAuthorLocation:v}))})))}},341:function(n,r,t){var e=t(8081),i=t.n(e),a=t(3645),o=t.n(a)()(i());o.push([n.id,".Gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-column-gap: 20px;\r\n  grid-row-gap: 20px;\r\n}\r\n\r\n.PaintingContainer {\r\n  position: relative;\r\n  width: 360px;\r\n  height: 275px;\r\n  overflow: hidden;\r\n}\r\n\r\n.PaintingContainer > img {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px; \r\n  object-fit: cover;\r\n}\r\n\r\n.PaintingContainer > .AboutPainting {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  box-sizing:border-box;\r\n  width: 100%;\r\n  height: 30px;\r\n  background-color: white;\r\n  color: black;;\r\n  opacity: 75%;\r\n  font-size: 18px;\r\n  line-height: 20px;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  padding: 5px 15px 0;\r\n  border-radius: 0 0 20px 20px;\r\n  cursor: default;\r\n}\r\n\r\n.PaintingName {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.TitleAbout {\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n}\r\n\r\n.TextAbout {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n}\r\n\r\n@media (max-width: 1365px) {\r\n  .Gallery {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n  .PaintingContainer {\r\n    width: 300px;\r\n    height: 230px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  .Gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .PaintingContainer {\r\n    width: 340px;\r\n    height: 249px;\r\n  }\r\n  .Touch > .AboutPainting{\r\n    transition: 1s;\r\n    height: 140px;\r\n  }\r\n  .Touch > .AboutPainting > .PaintingName{\r\n    white-space: normal;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .Gallery {\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n  .PaintingContainer {\r\n    width: 280px;\r\n    height: 205px;\r\n  }\r\n  .Touch > .AboutPainting{\r\n    transition: 1s;\r\n    height: 120px;\r\n  }\r\n  .Touch > .AboutPainting > .PaintingName{\r\n    white-space: normal;\r\n  }\r\n}\r\n\r\n@media (any-hover: hover) {\r\n  .PaintingContainer:hover .AboutPainting {\r\n    transition: 1s;\r\n    height: 145px;\r\n  }\r\n  \r\n  .PaintingContainer:hover .AboutPainting > .PaintingName {\r\n    white-space: normal;\r\n  }\r\n}\r\n",""]),r.Z=o}}]);