(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{406:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(64),r(346)),c=r(111),l=r(325),d=r(399),m=r(400),v=r(338),col=r(348),h=r(328),_=r(380),img=r(231),f=r(28),w={layout:"main",components:{BFormCheckbox:o.a,BButton:c.a,BCardText:l.a,BListGroup:d.a,BListGroupItem:m.a,BRow:v.a,BCol:col.a,BCard:h.a,BBadge:_.a,BImg:img.a,BLink:f.a},data:function(){return{price:"",ozipcode:this.$router.currentRoute.query.ozipcode,dcountry:this.$router.currentRoute.query.dcountry,dzipcode:this.$router.currentRoute.query.dzipcode,wight:this.$router.currentRoute.query.wight,panjang:this.$router.currentRoute.query.panjang,lebar:this.$router.currentRoute.query.lebar,tinggi:this.$router.currentRoute.query.tinggi}},created:function(){this.getPrice()},methods:{getPrice:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("/price",{country_code:t.dcountry,postalcode:"21312312",weight:t.wight,p:t.panjang,l:t.lebar,t:t.t});case 3:r=e.sent,t.price=r.data.data.price,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.error=e.t0.response;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},C=r(47),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"pricing-plan"}},[t._m(0),t._v(" "),r("b-row",{staticClass:"pricing-card"},[r("b-col",{staticClass:"mx-auto",attrs:{"offset-sm-2":"",sm:"10",md:"12","offset-lg":"2",lg:"10"}},[r("b-row",[r("b-col",{attrs:{md:"4"}},[r("b-card",{attrs:{align:"center"}},[r("img",{attrs:{src:"/dhl.png",alt:"5Kilos"}}),t._v(" "),r("h3",[t._v("Title")]),t._v(" "),r("b-card-text",[t._v(" Subtitle ")]),t._v(" "),r("div",{staticClass:"annual-plan"},[r("div",{staticClass:"plan-price mt-2"},[r("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v("Rp. "+t._s(t.price.toLocaleString()))])]),t._v(" "),r("small",{staticClass:"annual-pricing text-muted"},[t._v("Cras porta tortor ante")])]),t._v(" "),r("b-link",{attrs:{href:"/order/create"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"outline-success"}},[t._v("\n                Pesan Sekarang\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("h1",{staticClass:"mt-5"},[t._v("Lorem ipsum dolor sit amet")]),t._v(" "),r("p",{staticClass:"mb-2 pb-75"},[t._v("\n      Mauris eget lobortis magna. Praesent rutrum quam et arcu bibendum\n      tempor.\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);