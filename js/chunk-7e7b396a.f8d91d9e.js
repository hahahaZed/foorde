(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e7b396a"],{"1b26":function(t,n,e){},2251:function(t,n,e){"use strict";e("b0c0");var a=function(){var t=this,n=t._self._c;return n("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"},attrs:{width:250}},[n("div",{staticClass:"logo-con"},[n("img",{key:"min-logo",staticStyle:{background:"#ffffff90","border-radius":"5px"},attrs:{src:t.minLogo}}),n("span",{staticClass:"name"},[t._v("foorde")])]),n("Menu",{attrs:{"active-name":t.$route.name,theme:"dark",width:"auto",accordion:""},on:{"on-select":t.turnToPage}},[n("MenuItem",{attrs:{name:"adminList"}},[n("Icon",{attrs:{type:"ios-navigate"}}),n("span",[t._v("admin")])],1),n("MenuItem",{attrs:{name:"userlist"}},[n("Icon",{attrs:{type:"ios-navigate"}}),n("span",[t._v("user")])],1),n("MenuItem",{attrs:{name:"areaList"}},[n("Icon",{attrs:{type:"ios-navigate"}}),n("span",[t._v("area")])],1),n("MenuItem",{attrs:{name:"shop"}},[n("Icon",{attrs:{type:"ios-navigate"}}),n("span",[t._v("shop")])],1)],1)],1)},o=[],r=(e("14d9"),e("ad00")),i=e.n(r),s={data:function(){return{minLogo:i.a}},methods:{turnToPage:function(t){var n={},e=n.name,a=n.params,o=n.query,r=n.path;"string"===typeof t?e=t:(e=t.name,a=t.params,o=t.query,r=t.path),e.indexOf("isTurnByHref_")>-1?window.open(e.split("_")[1]):this.$router.push({name:e,params:a,query:o,path:r})}}},u=s,c=(e("cbc7"),e("2877")),l=Object(c["a"])(u,a,o,!1,null,"495901f6",null);n["a"]=l.exports},"35a9":function(t,n,e){"use strict";e("9513")},"3dae":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"layout"},[n("Menu"),n("Layout",{style:{marginLeft:"250px",height:"100vh",overflow:"auto"}},[n("Header"),n("Content",{style:{padding:"0 16px 16px"}},[n("Breadcrumb",{style:{margin:"16px 0"}},[n("BreadcrumbItem",[t._v("adminList")])],1),n("Card",[n("div",{staticStyle:{height:"auto"}},[n("Table",{attrs:{stripe:"",border:"",columns:t.columns1,data:t.data1},scopedSlots:t._u([{key:"id",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.id))])]}},{key:"user_name",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.user_name))])]}},{key:"nick_name",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.nick_name))])]}},{key:"shop_id",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.shop_id))])]}},{key:"email",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.email))])]}},{key:"is_root",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.is_root))])]}},{key:"phone_number",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.phone_number))])]}},{key:"job_number",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.job_number))])]}},{key:"position",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.position))])]}},{key:"action",fn:function(e){var a=e.row,o=e.index;return[n("div",[n("Button",{attrs:{type:"info",size:"small"},on:{click:function(n){return t.handleEdit(a,o)}}},[t._v("edit")])],1)]}}])}),n("Page",{staticClass:"page",attrs:{"page-size":t.pageSize,total:t.total,current:t.current},on:{"update:current":function(n){t.current=n},"on-change":t.changePage}})],1)])],1)],1)],1)},o=[],r=(e("14d9"),e("2251")),i=e("71c2"),s={name:"adminlist",components:{Menu:r["a"],Header:i["a"]},data:function(){return{columns1:[{title:"Id",slot:"id"},{title:"User Name",slot:"user_name"},{title:"Nick Name",slot:"nick_name"},{title:"Shop Id",slot:"shop_id"},{title:"Email",slot:"email"},{title:"Is Root",slot:"is_root"},{title:"Phone Number",slot:"phone_number"},{title:"Job Number",slot:"job_number"},{title:"Position",slot:"position"},{title:"Action",slot:"action",align:"center"}],data1:[],total:0,current:1,pageSize:5,adminData:{}}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.$get("/admin/buser",{page:this.current,limit:this.pageSize}).then((function(n){t.data1=n.data.list,t.total=n.data.totalPage*t.pageSize}))},handleEdit:function(t){var n=t.id;this.$router.push({name:"adminAdd",query:{id:n}})},changePage:function(){this.getdata()}}},u=s,c=(e("cea2"),e("2877")),l=Object(c["a"])(u,a,o,!1,null,"3710f4ee",null);n["default"]=l.exports},"71c2":function(t,n,e){"use strict";var a=function(){var t=this,n=t._self._c;return n("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[n("router-link",{attrs:{to:{name:"home"}}},[n("Icon",{attrs:{type:"md-home"}}),n("span",{staticClass:"home"},[t._v("Home")])],1)],1)},o=[],r={},i=r,s=(e("35a9"),e("2877")),u=Object(s["a"])(i,a,o,!1,null,"b642f48c",null);n["a"]=u.exports},9513:function(t,n,e){},ad00:function(t,n,e){t.exports=e.p+"img/dog_logo.57062b8d.jpg"},cbc7:function(t,n,e){"use strict";e("1b26")},cea2:function(t,n,e){"use strict";e("d45a")},d45a:function(t,n,e){}}]);