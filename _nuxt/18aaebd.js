(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{335:function(t,r,e){"use strict";e.d(r,"a",(function(){return C}));var o=e(51),n=e(3),l=e(2),c=e(23),f=e(113),m=e(37),d=e(145),v=e(4),O=e(1),j=e(15);function h(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(r){_(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}function _(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var y=["start","end","center"],P=Object(d.a)((function(t,r){return(r=Object(j.h)(Object(j.g)(r)))?Object(j.c)(["row-cols",t,r].filter(m.a).join("-")):null})),k=Object(d.a)((function(t){return Object(j.c)(t.replace("cols",""))})),N=[],C={name:n.bb,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(f.b)().reduce((function(t,r){return t[Object(O.g)(r,"cols")]=Object(O.c)(l.n),t}),Object(v.c)(null)),N=Object(v.g)(t),Object(O.d)(Object(v.l)(w(w({},t),{},{alignContent:Object(O.c)(l.s,null,(function(t){return Object(c.a)(Object(c.b)(y,"between","around","stretch"),t)})),alignH:Object(O.c)(l.s,null,(function(t){return Object(c.a)(Object(c.b)(y,"between","around"),t)})),alignV:Object(O.c)(l.s,null,(function(t){return Object(c.a)(Object(c.b)(y,"baseline","stretch"),t)})),noGutters:Object(O.c)(l.g,!1),tag:Object(O.c)(l.s,"div")})),n.bb)),this.props},render:function(t,r){var e,n=r.props,data=r.data,l=r.children,c=n.alignV,f=n.alignH,m=n.alignContent,d=[];return N.forEach((function(t){var r=P(k(t),n[t]);r&&d.push(r)})),d.push((_(e={"no-gutters":n.noGutters},"align-items-".concat(c),c),_(e,"justify-content-".concat(f),f),_(e,"align-content-".concat(m),m),e)),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),l)}}},366:function(t,r,e){"use strict";e.r(r);var o=e(335),col=e(345),n=e(401),l=e(368),c={components:{BRow:o.a,BCol:col.a,BFormGroup:n.a,BFormInput:l.a}},f=e(47),component=Object(f.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[e("h5",{staticClass:"mb-0"},[t._v("Untuk")]),t._v(" "),e("small",{staticClass:"text-muted"},[t._v(" Informasi detail penerima ")])]),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Nama","label-for":"v-nama"}},[e("b-form-input",{attrs:{id:"v-nama",placeholder:"Nama depan dan nama belakang"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Perusahaan","label-for":"v-perusahaan"}},[e("b-form-input",{attrs:{id:"v-perusahaan"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Negara/Wilayah","label-for":"v-negara"}},[e("b-form-input",{attrs:{id:"v-negara"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Alamat","label-for":"v-alamat-1"}},[e("b-form-input",{attrs:{id:"v-alamat-1"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Alamat 2","label-for":"v-alamat-2"}},[e("b-form-input",{attrs:{id:"v-alamat-2"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Alamat 3","label-for":"v-alamat-3"}},[e("b-form-input",{attrs:{id:"v-alamat-3"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Kode Pos","label-for":"v-kodepos"}},[e("b-form-input",{attrs:{id:"v-kodepos"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Kota","label-for":"Kota"}},[e("b-form-input",{attrs:{id:"v-kota"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{label:"Negara","label-for":"Negara"}},[e("b-form-input",{attrs:{id:"v-negara"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Email","label-for":"Email"}},[e("b-form-input",{attrs:{id:"v-email"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"No Telpon","label-for":"telpon"}},[e("b-form-input",{attrs:{id:"v-telpon"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"PPN/Nomor Pajak","label-for":"pajak"}},[e("b-form-input",{attrs:{id:"v-pajak"}})],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);