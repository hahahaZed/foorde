(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f993eb4a"],{"1b26":function(t,e,o){},2251:function(t,e,o){"use strict";o("b0c0");var a=function(){var t=this,e=t._self._c;return e("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"},attrs:{width:250}},[e("div",{staticClass:"logo-con"},[e("img",{key:"min-logo",staticStyle:{background:"#ffffff90","border-radius":"5px"},attrs:{src:t.minLogo}}),e("span",{staticClass:"name"},[t._v("foorde")])]),e("Menu",{attrs:{"active-name":t.$route.name,theme:"dark",width:"auto",accordion:""},on:{"on-select":t.turnToPage}},[e("MenuItem",{attrs:{name:"adminList"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("admin")])],1),e("MenuItem",{attrs:{name:"userlist"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("user")])],1),e("MenuItem",{attrs:{name:"areaList"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("area")])],1),e("MenuItem",{attrs:{name:"shop"}},[e("Icon",{attrs:{type:"ios-navigate"}}),e("span",[t._v("shop")])],1)],1)],1)},n=[],s=(o("14d9"),o("ad00")),r=o.n(s),i={data:function(){return{minLogo:r.a}},methods:{turnToPage:function(t){var e={},o=e.name,a=e.params,n=e.query,s=e.path;"string"===typeof t?o=t:(o=t.name,a=t.params,n=t.query,s=t.path),o.indexOf("isTurnByHref_")>-1?window.open(o.split("_")[1]):this.$router.push({name:o,params:a,query:n,path:s})}}},m=i,u=(o("cbc7"),o("2877")),l=Object(u["a"])(m,a,n,!1,null,"495901f6",null);e["a"]=l.exports},"35a9":function(t,e,o){"use strict";o("9513")},"71c2":function(t,e,o){"use strict";var a=function(){var t=this,e=t._self._c;return e("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)"}},[e("router-link",{attrs:{to:{name:"home"}}},[e("Icon",{attrs:{type:"md-home"}}),e("span",{staticClass:"home"},[t._v("Home")])],1)],1)},n=[],s={},r=s,i=(o("35a9"),o("2877")),m=Object(i["a"])(r,a,n,!1,null,"b642f48c",null);e["a"]=m.exports},7597:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout"},[e("Menu"),e("Layout",{style:{marginLeft:"250px",height:"100vh",overflow:"auto"}},[e("Header"),e("Content",{style:{padding:"0 16px 16px"}},[e("Breadcrumb",{style:{margin:"16px 0"}},[e("BreadcrumbItem",[t._v("add-admin")])],1),e("Card",[e("div",{staticStyle:{height:"auto"}},[e("Form",{attrs:{model:t.form,"label-position":"left","label-width":100,inline:""}},[e("FormItem",{attrs:{label:"Name"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1),e("FormItem",{attrs:{label:"Nick Name"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.nick_name,callback:function(e){t.$set(t.form,"nick_name",e)},expression:"form.nick_name"}})],1),e("FormItem",{attrs:{label:"Shop Id"}},[e("Input",{staticStyle:{width:"388px"},attrs:{disabled:""},model:{value:t.form.shop_id,callback:function(e){t.$set(t.form,"shop_id",e)},expression:"form.shop_id"}})],1),e("FormItem",{attrs:{label:"Email"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("FormItem",{attrs:{label:"Position"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.position,callback:function(e){t.$set(t.form,"position",e)},expression:"form.position"}})],1),e("FormItem",{attrs:{label:"Job Number"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.job_number,callback:function(e){t.$set(t.form,"job_number",e)},expression:"form.job_number"}})],1),e("FormItem",{attrs:{label:"Phone Number"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.phone_number,callback:function(e){t.$set(t.form,"phone_number",e)},expression:"form.phone_number"}})],1),e("FormItem",{attrs:{label:"Password"}},[e("Input",{staticStyle:{width:"388px"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("FormItem",{attrs:{label:"is Root"}},[e("RadioGroup",{model:{value:t.form.is_root,callback:function(e){t.$set(t.form,"is_root",e)},expression:"form.is_root"}},[e("Radio",{attrs:{label:"1"}},[t._v("yes")]),e("Radio",{attrs:{label:"0"}},[t._v("no")])],1)],1)],1),e("Button",{attrs:{type:"primary",size:"large"},on:{click:t.add}},[t._v("ok")])],1)])],1)],1)],1)},n=[],s=(o("14d9"),o("2251")),r=o("71c2"),i={name:"adminAdd",components:{Menu:s["a"],Header:r["a"]},data:function(){return{form:{id:"",user_name:"",nick_name:"",shop_id:"",email:"",is_root:"0",position:"",job_number:"",phone_number:"",password:""}}},created:function(){var t=this;this.form.shop_id=this.$route.query.shop_id,this.$route.query.id&&this.$get("admin/buser/"+this.$route.query.id).then((function(e){console.log(e),t.form=e.data}))},methods:{add:function(){var t=this;this.$route.query.id?this.$post("/api/admin.buser/edit",this.form).then((function(t){console.log(t)})):this.$post("/admin/buser",this.form).then((function(e){1==e.status&&t.$router.push({name:"adminList"})}))}}},m=i,u=(o("ae46"),o("2877")),l=Object(u["a"])(m,a,n,!1,null,"1a3d90d7",null);e["default"]=l.exports},9513:function(t,e,o){},ad00:function(t,e,o){t.exports=o.p+"img/dog_logo.57062b8d.jpg"},ae46:function(t,e,o){"use strict";o("d337")},cbc7:function(t,e,o){"use strict";o("1b26")},d337:function(t,e,o){}}]);