(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{257:function(e,t,n){var content=n(395);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("4fa35efd",content,!0,{sourceMap:!1})},393:function(e,t,n){"use strict";var r={name:"NoData"},d=(n(394),n(2)),component=Object(d.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"no-data-container"},[this._v("\n  No data available\n")])}),[],!1,null,"6feeceee",null);t.a=component.exports},394:function(e,t,n){"use strict";n(257)},395:function(e,t,n){(t=n(18)(!1)).push([e.i,".no-data-container[data-v-6feeceee]{width:100%;min-height:64px;display:flex;justify-content:center;align-items:center;background:#fff;color:#09ab5d;overflow-x:auto}",""]),e.exports=t},396:function(e,t,n){e.exports=function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={exports:{},id:s,loaded:!1};return e[s].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n(1));e.exports=i.default},function(e,t,n){n(2);var s=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=s.exports},function(e,t,n){var s=n(3);"string"==typeof s&&(s=[[e.id,s,""]]),n(5)(s,{}),s.locals&&(e.exports=s.locals)},function(e,t,n){(e.exports=n(4)()).push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(s[i]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(e,t,n){function s(e,t){for(var n=0;n<e.length;n++){var s=e[n],a=o[s.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](s.parts[i]);for(;i<s.parts.length;i++)a.parts.push(d(s.parts[i],t))}else{var r=[];for(i=0;i<s.parts.length;i++)r.push(d(s.parts[i],t));o[s.id]={id:s.id,refs:1,parts:r}}}}function a(e){for(var t=[],n={},s=0;s<e.length;s++){var a=e[s],i=a[0],u={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function r(e){var t=document.createElement("style");return t.type="text/css",function(e,t){var n=g(),s=v[v.length-1];if("top"===e.insertAt)s?s.nextSibling?n.insertBefore(t,s.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}(e,t),t}function d(e,t){var n,s,a;if(t.singleton){var i=h++;n=f||(f=r(t)),s=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=r(t),s=l.bind(null,n),a=function(){!function(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else a()}}function u(e,t,n,s){var a=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var i=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function l(e,t){var n=t.css,s=t.media,a=t.sourceMap;if(s&&e.setAttribute("media",s),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var o={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},c=p((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),g=p((function(){return document.head||document.getElementsByTagName("head")[0]})),f=null,h=0,v=[];e.exports=function(e,t){void 0===(t=t||{}).singleton&&(t.singleton=c()),void 0===t.insertAt&&(t.insertAt="bottom");var n=a(e);return s(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var d=n[r];(l=o[d.id]).refs--,i.push(l)}for(e&&s(a(e),t),r=0;r<i.length;r++){var l;if(0===(l=i[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,s){var a,i=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,i=e.default);var d="function"==typeof i?i.options:i;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),n&&(d._scopeId=n),s){var l=d.computed||(d.computed={});Object.keys(s).forEach((function(e){var t=s[e];l[e]=function(){return t}}))}return{esModule:a,exports:i,options:d}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var s={index:n,content:n+1,selected:n===this.selected-1};t[n]=s}else{for(var a=Math.floor(this.pageRange/2),i=function(n){var s={index:n,content:n+1,selected:n===e.selected-1};t[n]=s},r=function(e){t[e]={disabled:!0,breakView:!0}},d=0;d<this.marginPages;d++)i(d);var l=0;this.selected-a>0&&(l=this.selected-1-a);var u=l+this.pageRange-1;u>=this.pageCount&&(l=(u=this.pageCount-1)-this.pageRange+1);for(var o=l;o<=u&&o<=this.pageCount-1;o++)i(o);l>this.marginPages&&r(l-1),u+1<this.pageCount-this.marginPages&&r(u+1);for(var c=this.pageCount-1;c>=this.pageCount-this.marginPages;c--)i(c)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,(function(t){return[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])]})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){e.selectFirstPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,(function(t){return n("li",{class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index+1)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index+1):null}}},[e._v(e._s(t.content))])])})),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){e.selectLastPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])},397:function(e,t,n){var map={"./af":258,"./af.js":258,"./ar":259,"./ar-dz":260,"./ar-dz.js":260,"./ar-kw":261,"./ar-kw.js":261,"./ar-ly":262,"./ar-ly.js":262,"./ar-ma":263,"./ar-ma.js":263,"./ar-sa":264,"./ar-sa.js":264,"./ar-tn":265,"./ar-tn.js":265,"./ar.js":259,"./az":266,"./az.js":266,"./be":267,"./be.js":267,"./bg":268,"./bg.js":268,"./bm":269,"./bm.js":269,"./bn":270,"./bn-bd":271,"./bn-bd.js":271,"./bn.js":270,"./bo":272,"./bo.js":272,"./br":273,"./br.js":273,"./bs":274,"./bs.js":274,"./ca":275,"./ca.js":275,"./cs":276,"./cs.js":276,"./cv":277,"./cv.js":277,"./cy":278,"./cy.js":278,"./da":279,"./da.js":279,"./de":280,"./de-at":281,"./de-at.js":281,"./de-ch":282,"./de-ch.js":282,"./de.js":280,"./dv":283,"./dv.js":283,"./el":284,"./el.js":284,"./en-au":285,"./en-au.js":285,"./en-ca":286,"./en-ca.js":286,"./en-gb":287,"./en-gb.js":287,"./en-ie":288,"./en-ie.js":288,"./en-il":289,"./en-il.js":289,"./en-in":290,"./en-in.js":290,"./en-nz":291,"./en-nz.js":291,"./en-sg":292,"./en-sg.js":292,"./eo":293,"./eo.js":293,"./es":294,"./es-do":295,"./es-do.js":295,"./es-mx":296,"./es-mx.js":296,"./es-us":297,"./es-us.js":297,"./es.js":294,"./et":298,"./et.js":298,"./eu":299,"./eu.js":299,"./fa":300,"./fa.js":300,"./fi":301,"./fi.js":301,"./fil":302,"./fil.js":302,"./fo":303,"./fo.js":303,"./fr":304,"./fr-ca":305,"./fr-ca.js":305,"./fr-ch":306,"./fr-ch.js":306,"./fr.js":304,"./fy":307,"./fy.js":307,"./ga":308,"./ga.js":308,"./gd":309,"./gd.js":309,"./gl":310,"./gl.js":310,"./gom-deva":311,"./gom-deva.js":311,"./gom-latn":312,"./gom-latn.js":312,"./gu":313,"./gu.js":313,"./he":314,"./he.js":314,"./hi":315,"./hi.js":315,"./hr":316,"./hr.js":316,"./hu":317,"./hu.js":317,"./hy-am":318,"./hy-am.js":318,"./id":319,"./id.js":319,"./is":320,"./is.js":320,"./it":321,"./it-ch":322,"./it-ch.js":322,"./it.js":321,"./ja":323,"./ja.js":323,"./jv":324,"./jv.js":324,"./ka":325,"./ka.js":325,"./kk":326,"./kk.js":326,"./km":327,"./km.js":327,"./kn":328,"./kn.js":328,"./ko":329,"./ko.js":329,"./ku":330,"./ku.js":330,"./ky":331,"./ky.js":331,"./lb":332,"./lb.js":332,"./lo":333,"./lo.js":333,"./lt":334,"./lt.js":334,"./lv":335,"./lv.js":335,"./me":336,"./me.js":336,"./mi":337,"./mi.js":337,"./mk":338,"./mk.js":338,"./ml":339,"./ml.js":339,"./mn":340,"./mn.js":340,"./mr":341,"./mr.js":341,"./ms":342,"./ms-my":343,"./ms-my.js":343,"./ms.js":342,"./mt":344,"./mt.js":344,"./my":345,"./my.js":345,"./nb":346,"./nb.js":346,"./ne":347,"./ne.js":347,"./nl":348,"./nl-be":349,"./nl-be.js":349,"./nl.js":348,"./nn":350,"./nn.js":350,"./oc-lnc":351,"./oc-lnc.js":351,"./pa-in":352,"./pa-in.js":352,"./pl":353,"./pl.js":353,"./pt":354,"./pt-br":355,"./pt-br.js":355,"./pt.js":354,"./ro":356,"./ro.js":356,"./ru":357,"./ru.js":357,"./sd":358,"./sd.js":358,"./se":359,"./se.js":359,"./si":360,"./si.js":360,"./sk":361,"./sk.js":361,"./sl":362,"./sl.js":362,"./sq":363,"./sq.js":363,"./sr":364,"./sr-cyrl":365,"./sr-cyrl.js":365,"./sr.js":364,"./ss":366,"./ss.js":366,"./sv":367,"./sv.js":367,"./sw":368,"./sw.js":368,"./ta":369,"./ta.js":369,"./te":370,"./te.js":370,"./tet":371,"./tet.js":371,"./tg":372,"./tg.js":372,"./th":373,"./th.js":373,"./tk":374,"./tk.js":374,"./tl-ph":375,"./tl-ph.js":375,"./tlh":376,"./tlh.js":376,"./tr":377,"./tr.js":377,"./tzl":378,"./tzl.js":378,"./tzm":379,"./tzm-latn":380,"./tzm-latn.js":380,"./tzm.js":379,"./ug-cn":381,"./ug-cn.js":381,"./uk":382,"./uk.js":382,"./ur":383,"./ur.js":383,"./uz":384,"./uz-latn":385,"./uz-latn.js":385,"./uz.js":384,"./vi":386,"./vi.js":386,"./x-pseudo":387,"./x-pseudo.js":387,"./yo":388,"./yo.js":388,"./zh-cn":389,"./zh-cn.js":389,"./zh-hk":390,"./zh-hk.js":390,"./zh-mo":391,"./zh-mo.js":391,"./zh-tw":392,"./zh-tw.js":392};function r(e){var t=d(e);return n(t)}function d(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=d,e.exports=r,r.id=397},398:function(e,t,n){"use strict";n.r(t);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"arrowcircle",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{opacity:"0.4",d:"M8.9999 0.666494C13.5957 0.666494 17.3332 4.40483 17.3332 8.99983C17.3332 13.5948 13.5957 17.3332 8.9999 17.3332C4.4049 17.3332 0.666565 13.5948 0.666565 8.99983C0.666565 4.40483 4.4049 0.666494 8.9999 0.666494Z",fill:"#75759E"}}),this._v(" "),t("path",{attrs:{d:"M7.79788 5.48256C7.95705 5.48256 8.11705 5.5434 8.23871 5.66506L11.1445 8.55673C11.262 8.67423 11.3279 8.8334 11.3279 9.00006C11.3279 9.1659 11.262 9.32506 11.1445 9.44256L8.23871 12.3359C7.99455 12.5792 7.59955 12.5792 7.35538 12.3342C7.11205 12.0892 7.11288 11.6934 7.35705 11.4501L9.81788 9.00006L7.35705 6.55006C7.11288 6.30673 7.11205 5.91173 7.35538 5.66673C7.47705 5.5434 7.63788 5.48256 7.79788 5.48256Z",fill:"#75759E"}})])}),[],!1,null,null,null);t.default=component.exports},445:function(e,t,n){var content=n(538);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("75f74e5c",content,!0,{sourceMap:!1})},446:function(e,t,n){var content=n(540);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("b022dbac",content,!0,{sourceMap:!1})},477:function(e,t,n){"use strict";n.r(t);n(53),n(10),n(52),n(38),n(99);var r=n(396),d=n.n(r),l=n(256),o=n.n(l),c={name:"WinnersTable",components:{NoData:n(393).a,paginate:d.a},props:{data:{type:Array,default:function(){return[]}}},data:function(){return{paginatedData:this.initialPaginate(),amountOfPages:Math.ceil(this.data.length/10)}},methods:{Paginate:function(e){var t=0,n=10,r=1;if(e>1)for(;r<e;)t+=10,n+=10,r+=1;this.paginatedData=this.data.sort((function(a,b){var e=new Date(a.giveaway_id.createdAt);return new Date(b.giveaway_id.createdAt)-e})).slice(t,n)},initialPaginate:function(){return this.data.sort((function(a,b){var e=new Date(a.giveaway_id.createdAt);return new Date(b.giveaway_id.createdAt)-e})).slice(0,10)},amountDelimeter:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},format_date:function(e){return(new Date).getTime()===new Date(String(e)).getTime()?"Today, ".concat(o()(new Date(String(e))).format("hh:mm")):o()(new Date(String(e))).format("DD MMM YYYY, hh:mm")}}},f=(n(537),n(2)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"giveaway-table animate__fadeInUp"},[n("div",{staticClass:"table-head"},[n("table",[e._m(0),e._v(" "),n("tbody",{directives:[{name:"show",rawName:"v-show",value:e.data.length>0,expression:"data.length > 0"}]},e._l(e.paginatedData,(function(t,r){return n("tr",{key:r},[n("td",{staticClass:"Name",attrs:{"data-title":"Name"}},[n("div",{staticClass:"Name-div"},[n("p",[e._v(e._s(t.user?t.user.username:"Admin"))])])]),e._v(" "),n("td",{attrs:{"data-title":"Type"}},[e._v("\n            "+e._s(t.giveaway_id.type)+"\n          ")]),e._v(" "),n("td",{staticClass:"Tasks",attrs:{"data-title":"Tasks"}},[e._v("\n            Open\n          ")]),e._v(" "),n("td",{attrs:{"data-title":"Amount Won"}},[e._v("\n            ₦"+e._s(e.amountDelimeter(t.giveaway_id.amountPerWinner))+"\n          ")]),e._v(" "),n("td",{attrs:{"data-title":"Giveaway Amount"}},[e._v("\n            ₦"+e._s(e.amountDelimeter(t.giveaway_id.amount))+"\n          ")]),e._v(" "),n("td",{attrs:{"data-title":"Date Posted"}},[e._v("\n            "+e._s(e.format_date(t.giveaway_id.createdAt))+"\n          ")]),e._v(" "),n("td",{staticClass:"View"},[n("ArrowCircle",{nativeOn:{click:function(n){return e.$router.push("/giveaways/winners/"+t.giveaway_id._id)}}})],1)])})),0)]),e._v(" "),n("NoData",{directives:[{name:"show",rawName:"v-show",value:0==e.data.length,expression:"data.length == 0"}]})],1),e._v(" "),n("paginate",{attrs:{"page-count":e.amountOfPages,"margin-pages":2,"container-class":"pagination","break-view-text":". . .","click-handler":e.Paginate}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",{staticClass:"header"},[n("th",{staticClass:"Name"},[e._v("\n            Name\n          ")]),e._v(" "),n("th",{staticClass:"Type"},[e._v("\n            Type\n          ")]),e._v(" "),n("th",{staticClass:"Tasks"},[e._v("\n            Tasks\n          ")]),e._v(" "),n("th",[e._v("Amount Won")]),e._v(" "),n("th",[e._v("Giveaway Amount")]),e._v(" "),n("th",[e._v("Date Posted")]),e._v(" "),n("th",{staticClass:"View"})])])}],!1,null,"a4e7d7e8",null);t.default=component.exports;installComponents(component,{ArrowCircle:n(398).default})},537:function(e,t,n){"use strict";n(445)},538:function(e,t,n){(t=n(18)(!1)).push([e.i,".giveaway-table[data-v-a4e7d7e8]{display:flex;flex-direction:column;width:100%;height:auto;margin-bottom:10px}.table-head[data-v-a4e7d7e8]{width:100%;border-radius:20px;overflow-y:auto}table[data-v-a4e7d7e8]{table-layout:auto;width:100%;border-radius:20px 20px 0 0;border-spacing:0}thead tr[data-v-a4e7d7e8]{background:#f0f2f4}th[data-v-a4e7d7e8]{font-weight:400;font-size:14px;line-height:24px;color:#75759e}td[data-v-a4e7d7e8],th[data-v-a4e7d7e8]{height:64px;text-align:left;padding-left:6px}th[data-v-a4e7d7e8]:first-child{border-top-left-radius:20px}th[data-v-a4e7d7e8]:last-child{padding-left:0;border-top-right-radius:20px}th:nth-last-child(2) div[data-v-a4e7d7e8]{display:flex;flex-direction:column}th[data-v-a4e7d7e8]:nth-last-child(2){display:flex;align-items:center;min-width:11%}th:nth-last-child(2) div[data-v-a4e7d7e8]{margin-left:15px;cursor:pointer}.ongoing[data-v-a4e7d7e8]{color:#e1931e;width:11%}.completed[data-v-a4e7d7e8]{color:#09ab5d;width:11%}td[data-v-a4e7d7e8]{overflow-x:auto}td[data-v-a4e7d7e8]:last-child{padding-left:0;text-align:center}tbody tr:last-child td[data-v-a4e7d7e8]{height:74px}tbody tr:last-child td[data-v-a4e7d7e8]:first-child{border-bottom-left-radius:20px}tbody tr:last-child td[data-v-a4e7d7e8]:last-child{border-bottom-right-radius:20px}tbody tr[data-v-a4e7d7e8]:nth-child(2n){background:#f9fafb}tbody tr[data-v-a4e7d7e8]:nth-child(odd){background:#fff}.Name[data-v-a4e7d7e8]{padding-left:31px;width:23%}.Name-div[data-v-a4e7d7e8]{display:flex;align-items:center}p[data-v-a4e7d7e8]{margin-right:10px}.Type[data-v-a4e7d7e8]{width:12%}.Tasks[data-v-a4e7d7e8],.View[data-v-a4e7d7e8]{width:10%}.arrowcircle[data-v-a4e7d7e8]{cursor:pointer}@media (max-width:1100px){.table-head[data-v-a4e7d7e8]{max-height:450px}thead[data-v-a4e7d7e8]{display:none}td[data-v-a4e7d7e8]:nth-last-child(2){width:100%}tr[data-v-a4e7d7e8]{display:flex;flex-direction:column}tr[data-v-a4e7d7e8]:first-child{border-radius:20px 20px 0 0}td[data-v-a4e7d7e8]{display:flex;align-items:center;justify-content:space-between;padding:0}td[data-v-a4e7d7e8]:last-child{justify-content:center}td[data-v-a4e7d7e8]:before{content:attr(data-title)}tbody tr:first-child td[data-v-a4e7d7e8]:first-child{border-radius:20px 20px 0 0}tbody tr:last-child td[data-v-a4e7d7e8]{height:64px}tbody tr:last-child td[data-v-a4e7d7e8]:last-child{border-radius:0 0 20px 20px}tbody tr:last-child td[data-v-a4e7d7e8]:first-child{border-radius:0}.Name[data-v-a4e7d7e8],.Tasks[data-v-a4e7d7e8],.Type[data-v-a4e7d7e8],.View[data-v-a4e7d7e8]{width:100%;padding:0}}@media (max-width:767px){th[data-v-a4e7d7e8]{font-size:12px}td[data-v-a4e7d7e8]{font-size:11px}}",""]),e.exports=t},539:function(e,t,n){"use strict";n(446)},540:function(e,t,n){(t=n(18)(!1)).push([e.i,".winners-container[data-v-57c9bb74]{background:#f7f7f8;flex:1;display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%;padding:6.4% 6% 0 4.45%;overflow-y:auto}",""]),e.exports=t},614:function(e,t,n){"use strict";n.r(t);n(50),n(51),n(26);var r=n(6),d=n(37),l=n.n(d),o={name:"Winners",layout:"dashboardLayout",components:{Winnerstable:n(477).default},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.$toast,n.setHeader("x-auth-token",l.a.get("token")),t.prev=2,t.next=5,n.$get("/Admins/get_giveaway_winners");case 5:d=t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),t.t0.message.includes("Network")&&r.global.custom_error("please check your connection and try again"),void 0!==t.t0.response&&400===t.t0.response.status&&r.global.custom_error(t.t0.response.data||t.t0.response.data.message);case 12:return t.abrupt("return",{data:d?d.data:[]});case 13:case"end":return t.stop()}}),t,null,[[2,8]])})))()},created:function(){this.$store.commit("setLayout","GIVEAWAY (Winners)")}},c=(n(539),n(2)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"winners-container"},[t("Winnerstable",{attrs:{data:this.data}})],1)}),[],!1,null,"57c9bb74",null);t.default=component.exports;installComponents(component,{Winnerstable:n(477).default})}}]);