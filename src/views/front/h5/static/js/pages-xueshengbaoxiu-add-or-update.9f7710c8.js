(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xueshengbaoxiu-add-or-update"],{"152b":function(r,e,i){"use strict";var t,a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("报修编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.baoxiubianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("报修名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.baoxiumingcheng,placeholder:"报修名称"},model:{value:r.ruleForm.baoxiumingcheng,callback:function(e){r.$set(r.ruleForm,"baoxiumingcheng",e)},expression:"ruleForm.baoxiumingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.guzhangtupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("故障图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.guzhangtupian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.guzhangtupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("报修日期")]),i("v-uni-picker",{attrs:{mode:"date",value:r.ruleForm.baoxiuriqi},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.baoxiuriqiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(0,0,0,.6)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.baoxiuriqi?r.ruleForm.baoxiuriqi:"请选择报修日期"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("学号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xuehao,placeholder:"学号"},model:{value:r.ruleForm.xuehao,callback:function(e){r.$set(r.ruleForm,"xuehao",e)},expression:"ruleForm.xuehao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.xingming,placeholder:"姓名"},model:{value:r.ruleForm.xingming,callback:function(e){r.$set(r.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("手机")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("宿舍号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.sushehao,placeholder:"宿舍号"},model:{value:r.ruleForm.sushehao,callback:function(e){r.$set(r.ruleForm,"sushehao",e)},expression:"ruleForm.sushehao"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("宿管账号")]),i("v-uni-picker",{attrs:{value:r.suguanzhanghaoIndex,range:r.suguanzhanghaoOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.suguanzhanghaoChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(0,0,0,.6)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.suguanzhanghaoOptions[r.suguanzhanghaoIndex]))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("宿管姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.suguanxingming,placeholder:"宿管姓名"},model:{value:r.ruleForm.suguanxingming,callback:function(e){r.$set(r.ruleForm,"suguanxingming",e)},expression:"ruleForm.suguanxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("问题简述")]),i("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(0,0,0,.6)",borderRadius:"20rpx 20rpx 0 0",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"问题简述"},model:{value:r.ruleForm.wentijianshu,callback:function(e){r.$set(r.ruleForm,"wentijianshu",e)},expression:"ruleForm.wentijianshu"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(37, 147, 230, 1)",borderColor:"rgba(37, 147, 230, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return t}))},"4f56":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-42491952]{padding:%?20?%}.content[data-v-42491952]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220213/4e09d53e8f3e4a9e88cf87ecedcf7ca0.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-42491952]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-42491952]{width:%?180?%}.avator[data-v-42491952]{width:%?150?%;height:%?60?%}.right-input[data-v-42491952]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-42491952]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-42491952]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-42491952]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-42491952]{border:0}.cu-form-group uni-input[data-v-42491952]{padding:0 %?30?%}.uni-input[data-v-42491952]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-42491952]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-42491952]::after{line-height:%?80?%}.select .uni-input[data-v-42491952]{line-height:%?80?%}.input .right-input[data-v-42491952]{line-height:%?88?%}',""]),r.exports=e},5971:function(r,e,i){"use strict";i.r(e);var t=i("689e"),a=i.n(t);for(var o in t)"default"!==o&&function(r){i.d(e,r,(function(){return t[r]}))}(o);e["default"]=a.a},"665d":function(r,e,i){"use strict";i.r(e);var t=i("152b"),a=i("5971");for(var o in a)"default"!==o&&function(r){i.d(e,r,(function(){return a[r]}))}(o);i("a0d5");var n,u=i("f0c5"),s=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"42491952",null,!1,t["a"],n);e["default"]=s.exports},"689e":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("96cf");var a=t(i("3b8d")),o=t(i("e2b1")),n={data:function(){return{cross:"",ruleForm:{baoxiubianhao:this.getUUID(),baoxiumingcheng:"",guzhangtupian:"",wentijianshu:"",baoxiuriqi:"",xuehao:"",xingming:"",shouji:"",sushehao:"",suguanzhanghao:"",suguanxingming:"",sfsh:"",shhf:"",userid:""},suguanzhanghaoOptions:[],suguanzhanghaoIndex:0,user:{},ro:{baoxiubianhao:!1,baoxiumingcheng:!1,guzhangtupian:!1,wentijianshu:!1,baoxiuriqi:!1,xuehao:!1,xingming:!1,shouji:!1,sushehao:!1,suguanzhanghao:!1,suguanxingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.baoxiuriqi=this.$utils.getCurDate(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:return t=r.sent,this.user=t.data,this.ruleForm.xuehao=this.user.xuehao,this.ro.xuehao=!0,this.ruleForm.xingming=this.user.xingming,this.ro.xingming=!0,this.ruleForm.shouji=this.user.shouji,this.ro.shouji=!0,this.ruleForm.sushehao=this.user.sushehao,this.ro.sushehao=!0,this.ruleForm.suguanzhanghao=this.user.suguanzhanghao,this.ro.suguanzhanghao=!0,this.ruleForm.suguanxingming=this.user.suguanxingming,this.ro.suguanxingming=!0,r.next=20,this.$api.option("suguan","suguanzhanghao",{});case 20:if(t=r.sent,this.suguanzhanghaoOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=30;break}return this.ruleForm.id=e.id,r.next=28,this.$api.info("xueshengbaoxiu",this.ruleForm.id);case 28:t=r.sent,this.ruleForm=t.data;case 30:if(this.cross=e.cross,!e.cross){r.next=86;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 34:if((r.t1=r.t0()).done){r.next=86;break}if(o=r.t1.value,"baoxiubianhao"!=o){r.next=40;break}return this.ruleForm.baoxiubianhao=a[o],this.ro.baoxiubianhao=!0,r.abrupt("continue",34);case 40:if("baoxiumingcheng"!=o){r.next=44;break}return this.ruleForm.baoxiumingcheng=a[o],this.ro.baoxiumingcheng=!0,r.abrupt("continue",34);case 44:if("guzhangtupian"!=o){r.next=48;break}return this.ruleForm.guzhangtupian=a[o],this.ro.guzhangtupian=!0,r.abrupt("continue",34);case 48:if("wentijianshu"!=o){r.next=52;break}return this.ruleForm.wentijianshu=a[o],this.ro.wentijianshu=!0,r.abrupt("continue",34);case 52:if("baoxiuriqi"!=o){r.next=56;break}return this.ruleForm.baoxiuriqi=a[o],this.ro.baoxiuriqi=!0,r.abrupt("continue",34);case 56:if("xuehao"!=o){r.next=60;break}return this.ruleForm.xuehao=a[o],this.ro.xuehao=!0,r.abrupt("continue",34);case 60:if("xingming"!=o){r.next=64;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,r.abrupt("continue",34);case 64:if("shouji"!=o){r.next=68;break}return this.ruleForm.shouji=a[o],this.ro.shouji=!0,r.abrupt("continue",34);case 68:if("sushehao"!=o){r.next=72;break}return this.ruleForm.sushehao=a[o],this.ro.sushehao=!0,r.abrupt("continue",34);case 72:if("suguanzhanghao"!=o){r.next=76;break}return this.ruleForm.suguanzhanghao=a[o],this.ro.suguanzhanghao=!0,r.abrupt("continue",34);case 76:if("suguanxingming"!=o){r.next=80;break}return this.ruleForm.suguanxingming=a[o],this.ro.suguanxingming=!0,r.abrupt("continue",34);case 80:if("userid"!=o){r.next=84;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,r.abrupt("continue",34);case 84:r.next=34;break;case 86:this.styleChange();case 87:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},suguanzhanghaoChange:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.suguanzhanghaoIndex=e.target.value,this.ruleForm.suguanzhanghao=this.suguanzhanghaoOptions[this.suguanzhanghaoIndex],r.next=4,this.$api.follow("suguan","suguanzhanghao",{columnValue:this.ruleForm.suguanzhanghao});case 4:i=r.sent,i.data.suguanxingming&&(this.ruleForm.suguanxingming=i.data.suguanxingming);case 6:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),baoxiuriqiChange:function(r){this.ruleForm.baoxiuriqi=r.target.value,this.$forceUpdate()},guzhangtupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.guzhangtupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,t,a,o,n,u,s,d,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.baoxiumingcheng){r.next=3;break}return this.$utils.msg("报修名称不能为空"),r.abrupt("return");case 3:if(!this.cross){r.next=19;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){r.next=19;break}if(n=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=15;break}for(u in n)u==a&&(n[u]=o);return s=uni.getStorageSync("crossTable"),r.next=13,this.$api.update("".concat(s),n);case 13:r.next=19;break;case 15:e=Number(uni.getStorageSync("userid")),i=n["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!e){r.next=41;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=25,this.$api.list("xueshengbaoxiu",d);case 25:if(g=r.sent,!(g.data.total>=t)){r.next=31;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 31:if(!this.ruleForm.id){r.next=36;break}return r.next=34,this.$api.update("xueshengbaoxiu",this.ruleForm);case 34:r.next=38;break;case 36:return r.next=38,this.$api.add("xueshengbaoxiu",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:r.next=49;break;case 41:if(!this.ruleForm.id){r.next=46;break}return r.next=44,this.$api.update("xueshengbaoxiu",this.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,this.$api.add("xueshengbaoxiu",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},a0d5:function(r,e,i){"use strict";var t=i("dc32"),a=i.n(t);a.a},dc32:function(r,e,i){var t=i("4f56");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("feecefc2",t,!0,{sourceMap:!1,shadowMode:!1})}}]);