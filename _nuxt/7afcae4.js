(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{335:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r(51),c=r(3),o=r(2),l=r(23),f=r(113),O=r(37),j=r(145),d=r(4),v=r(1),m=r(15);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){y(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=["start","end","center"],P=Object(j.a)((function(t,e){return(e=Object(m.h)(Object(m.g)(e)))?Object(m.c)(["row-cols",t,e].filter(O.a).join("-")):null})),k=Object(j.a)((function(t){return Object(m.c)(t.replace("cols",""))})),_=[],x={name:c.bb,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(f.b)().reduce((function(t,e){return t[Object(v.g)(e,"cols")]=Object(v.c)(o.n),t}),Object(d.c)(null)),_=Object(d.g)(t),Object(v.d)(Object(d.l)(h(h({},t),{},{alignContent:Object(v.c)(o.s,null,(function(t){return Object(l.a)(Object(l.b)(B,"between","around","stretch"),t)})),alignH:Object(v.c)(o.s,null,(function(t){return Object(l.a)(Object(l.b)(B,"between","around"),t)})),alignV:Object(v.c)(o.s,null,(function(t){return Object(l.a)(Object(l.b)(B,"baseline","stretch"),t)})),noGutters:Object(v.c)(o.g,!1),tag:Object(v.c)(o.s,"div")})),c.bb)),this.props},render:function(t,e){var r,c=e.props,data=e.data,o=e.children,l=c.alignV,f=c.alignH,O=c.alignContent,j=[];return _.forEach((function(t){var e=P(k(t),c[t]);e&&j.push(e)})),j.push((y(r={"no-gutters":c.noGutters},"align-items-".concat(l),l),y(r,"justify-content-".concat(f),f),y(r,"align-content-".concat(O),O),r)),t(c.tag,Object(n.a)(data,{staticClass:"row",class:j}),o)}}},343:function(t,e,r){"use strict";r.r(e);var n=r(335),col=r(345),c=r(401),o=r(368),l=r(111),f={components:{BRow:n.a,BCol:col.a,BFormGroup:c.a,BFormInput:o.a,BButton:l.a},data:function(){return{box:1}},methods:{addBox:function(){this.box++}}},O=r(47),component=Object(O.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.box,(function(i,e){return r("b-row",{key:e},[r("b-col",{attrs:{md:"4"}},[r("b-form-group",{attrs:{label:"Berat (Kg)","label-for":"v-berat"}},[r("b-form-input",{attrs:{id:"v-berat"}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"4"}},[r("b-form-group",{attrs:{label:"Deskripsi Barang","label-for":"v-deskripsi"}},[r("b-form-input",{attrs:{id:"v-deskripsi"}})],1)],1),t._v(" "),r("b-col",{attrs:{md:"4"}},[r("b-form-group",{attrs:{label:"Nilai Brang (IDR)","label-for":"v-nilai-barang"}},[r("b-form-input",{attrs:{id:"v-nilai-barang"}})],1)],1)],1)})),t._v(" "),r("b-row",[r("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[r("b-button",{attrs:{variant:"primary"},on:{click:t.addBox}},[r("feather-icon",{staticClass:"mr-25",attrs:{icon:"PlusIcon"}}),t._v(" "),r("span",[t._v("Add Item")])],1)],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);