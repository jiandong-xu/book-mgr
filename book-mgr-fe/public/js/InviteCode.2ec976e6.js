(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["InviteCode"],{db4a:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["o"])("   "),a=Object(c["o"])("添加"),u=Object(c["o"])("删除");function o(e,t,n,o,i,s){var l=Object(c["P"])("a-input-number"),b=Object(c["P"])("a-button"),d=Object(c["P"])("a-divider"),j=Object(c["P"])("a-table"),O=Object(c["P"])("a-pagination"),p=Object(c["P"])("flex-end"),f=Object(c["P"])("a-card");return Object(c["G"])(),Object(c["l"])("div",null,[Object(c["p"])(f,{title:"邀请码管理"},{default:Object(c["Y"])((function(){return[Object(c["m"])("div",null,[Object(c["p"])(l,{value:e.count,"onUpdate:value":t[0]||(t[0]=function(t){return e.count=t}),min:1,max:1e4},null,8,["value"]),r,Object(c["p"])(b,{type:"primary",onClick:e.add},{default:Object(c["Y"])((function(){return[a]})),_:1},8,["onClick"])]),Object(c["p"])(d),Object(c["m"])("div",null,[Object(c["p"])(j,{pagination:!1,bordered:"",columns:e.columns,"data-source":e.list},{status:Object(c["Y"])((function(e){var t=e.record;return[Object(c["o"])(Object(c["R"])(t.user?"已使用":"未使用"),1)]})),actions:Object(c["Y"])((function(t){var n=t.record;return[Object(c["p"])(b,{onClick:function(t){return e.remove(n)},size:"small",type:"danger"},{default:Object(c["Y"])((function(){return[u]})),_:2},1032,["onClick"])]})),_:1},8,["columns","data-source"])]),Object(c["p"])(p,{style:{"margin-top":"24px"}},{default:Object(c["Y"])((function(){return[Object(c["p"])(O,{current:e.curPage,"onUpdate:current":t[1]||(t[1]=function(t){return e.curPage=t}),pageSize:20,total:e.total,onChange:e.setPage},null,8,["current","total","onChange"])]})),_:1})]})),_:1})])}var i=n("1da1"),s=(n("96cf"),n("8e44")),l=n("e428"),b=n("f64c"),d=[{title:"邀请码",dataIndex:"code"},{title:"使用状态",slots:{customRender:"status"}},{title:"操作",slots:{customRender:"actions"}}],j=Object(c["q"])({setup:function(){var e=Object(c["L"])(1),t=Object(c["L"])(1),n=Object(c["L"])([]),r=Object(c["L"])(0),a=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["g"].list(t.value,20);case 2:c=e.sent,Object(l["c"])(c).success((function(e){var t=e.data,c=t.list,a=t.total;n.value=c,r.value=a}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c["D"])((function(){a()}));var u=function(e){t.value=e,a()},o=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["g"].add(e.value);case 2:n=t.sent,Object(l["c"])(n).success((function(){b["a"].success("成功添加".concat(e.value,"条数据")),a()}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t._id,e.next=3,s["g"].remove(n);case 3:c=e.sent,Object(l["c"])(c).success((function(e){var t=e.msg;b["a"].success(t),a()}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{count:e,list:n,total:r,columns:d,curPage:t,add:o,setPage:u,remove:j}}}),O=n("6b0d"),p=n.n(O);const f=p()(j,[["render",o]]);t["default"]=f}}]);
//# sourceMappingURL=InviteCode.2ec976e6.js.map