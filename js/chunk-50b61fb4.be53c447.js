(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50b61fb4"],{"0bad":function(t,e,n){"use strict";n.r(e);n("b0c0");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout"},[e("Menu"),e("Layout",{style:{marginLeft:"250px",height:"100vh",overflow:"auto"}},[e("Header"),e("Content",{style:{padding:"0 16px 16px"}},[e("Breadcrumb",{style:{margin:"16px 0"}},[e("BreadcrumbItem",[t._v("shop")])],1),e("Button",{staticClass:"mb-10 add",attrs:{type:"primary",to:{name:"addshop"}}},[t._v("add")]),e("Card",[e("div",{staticStyle:{height:"auto"}},[e("Table",{attrs:{stripe:"",border:"",columns:t.columns1,data:t.data1},scopedSlots:t._u([{key:"id",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.id))])]}},{key:"name",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.name))])]}},{key:"logo",fn:function(t){var n=t.row;return[e("img",{attrs:{src:n.logo}})]}},{key:"license",fn:function(t){var n=t.row;return[e("img",{attrs:{src:n.license}})]}},{key:"area_id",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.area_id))])]}},{key:"address",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.address))])]}},{key:"email",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.email))])]}},{key:"shop_type",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.shop_type))])]}},{key:"food_type",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.food_type))])]}},{key:"service_type",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.service_type))])]}},{key:"number",fn:function(n){var a=n.row;return[e("span",[t._v(t._s(a.number))])]}},{key:"action",fn:function(n){var a=n.row,r=n.index;return[e("div",[e("Button",{attrs:{type:"info",size:"small"},on:{click:function(e){return t.handleEdit(a,r)}}},[t._v("edit")])],1),e("div",{staticClass:"add"},[e("Button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleadd(a,r)}}},[t._v("add")])],1)]}}])}),e("Page",{staticClass:"page",attrs:{"page-size":t.pageSize,total:t.total,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.changePage}})],1)])],1)],1)],1)},r=[],i=(n("14d9"),n("2251")),o=n("71c2"),s={name:"userlist",components:{Menu:i["a"],Header:o["a"]},data:function(){return{modal1:!1,modal2:!1,id:"",columns1:[{title:"Id",slot:"id",width:50,align:"center"},{title:"Name",slot:"name",align:"center"},{title:"Logo",slot:"logo",align:"center"},{title:"License",slot:"license",align:"center"},{title:"Area_id",slot:"area_id",width:90,align:"center"},{title:"Address",slot:"address",align:"center"},{title:"Email",slot:"email",align:"center"},{title:"Shop_type",slot:"shop_type",align:"center"},{title:"Food_type",slot:"food_type",align:"center"},{title:"Service_type",slot:"service_type",align:"center"},{title:"Number",slot:"number",align:"center"},{title:"Action",slot:"action",align:"center",width:80}],data1:[],total:0,current:1,pageSize:5,adminData:{}}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.$get("/admin/shop",{page:this.current,limit:this.pageSize}).then((function(e){t.data1=e.data.list,t.total=e.data.totalPage*t.pageSize}))},changePage:function(){this.getdata()},handleEdit:function(t){var e=t.id;this.$router.push({name:"editshop",query:{id:e}})},handleadd:function(t){var e=t.id;this.$router.push({name:"adminAdd",query:{shop_id:e}})}}},c=s,u=(n("a029"),n("2877")),d=Object(u["a"])(c,a,r,!1,null,"b6d2c9d2",null);e["default"]=d.exports},"1b26":function(t,e,n){},2251:function(t,e,n){"use strict";n("b0c0");var a=function(){var t=this,e=t._self._c;return e("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"},attrs:{width:250}},[e("div",{staticClass:"logo-con"},[e("img",{key:"min-logo",staticStyle:{background:"#ffffff90","border-radius":"5px"},attrs:{src:t.minLogo}}),e("span",{staticClass:"name"},[t._v("foorde")])]),e("Menu",{attrs:{"active-name":t.$route.name,theme:"dark",width:"auto",accordion:""},on:{"on-select":t.turnToPage}},[e("MenuItem",{attrs:{name:"adminList"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("admin")])],1),e("MenuItem",{attrs:{name:"userlist"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("user")])],1),e("MenuItem",{attrs:{name:"areaList"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("area")])],1),e("MenuItem",{attrs:{name:"shop"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("shop")])],1)],1)],1)},r=[],i=(n("14d9"),n("ad00")),o=n.n(i),s={data:function(){return{minLogo:o.a}},methods:{turnToPage:function(t){var e={},n=e.name,a=e.params,r=e.query,i=e.path;"string"===typeof t?n=t:(n=t.name,a=t.params,r=t.query,i=t.path),n.indexOf("isTurnByHref_")>-1?window.open(n.split("_")[1]):this.$router.push({name:n,params:a,query:r,path:i})}}},c=s,u=(n("cbc7"),n("2877")),d=Object(u["a"])(c,a,r,!1,null,"495901f6",null);e["a"]=d.exports},"35a9":function(t,e,n){"use strict";n("9513")},"71c2":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[e("router-link",{attrs:{to:{name:"home"}}},[e("Icon",{attrs:{type:"md-home"}}),e("span",{staticClass:"home"},[t._v("Home")])],1)],1)},r=[],i={},o=i,s=(n("35a9"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"b642f48c",null);e["a"]=c.exports},9513:function(t,e,n){},a029:function(t,e,n){"use strict";n("df78")},ad00:function(t,e,n){t.exports=n.p+"img/dog_logo.57062b8d.jpg"},cbc7:function(t,e,n){"use strict";n("1b26")},df78:function(t,e,n){}}]);