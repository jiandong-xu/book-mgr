(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BookClassify"],{7504:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["o"])("   "),a=Object(r["o"])("添加"),u=Object(r["o"])(" 修改 "),i=Object(r["o"])("删除");function o(e,t,n,o,s,l){var p=Object(r["P"])("a-input"),b=Object(r["P"])("a-button"),d=Object(r["P"])("a-divider"),f=Object(r["P"])("a-table"),O=Object(r["P"])("a-card");return Object(r["G"])(),Object(r["l"])("div",null,[Object(r["p"])(O,{title:"书籍分类管理"},{default:Object(r["Y"])((function(){return[Object(r["m"])("div",null,[Object(r["p"])(p,{value:e.title,"onUpdate:value":t[0]||(t[0]=function(t){return e.title=t}),placeholder:"输入书籍分类",style:{width:"200px"}},null,8,["value"]),c,Object(r["p"])(b,{onClick:e.add,type:"primary"},{default:Object(r["Y"])((function(){return[a]})),_:1},8,["onClick"])]),Object(r["p"])(d),Object(r["m"])("div",null,[Object(r["p"])(f,{bordered:"","data-source":e.list,columns:e.columns,pagination:!1},{actions:Object(r["Y"])((function(t){var n=t.record;return[Object(r["p"])(b,{size:"small",onClick:function(t){return e.updateTitle(n)}},{default:Object(r["Y"])((function(){return[u]})),_:2},1032,["onClick"]),Object(r["p"])(b,{size:"small",onClick:function(t){return e.remove(n)},type:"danger"},{default:Object(r["Y"])((function(){return[i]})),_:2},1032,["onClick"])]})),_:1},8,["data-source","columns"])])]})),_:1})])}var s=n("1da1"),l=(n("96cf"),n("8e44")),p=n("e428"),b=n("f64c"),d=n("ed3b"),f=n("b558"),O=[{title:"分类",dataIndex:"title"},{title:"操作",slots:{customRender:"actions"}}],j=Object(r["q"])({setup:function(){var e=Object(r["L"])(""),t=Object(r["L"])([]),n=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["c"].list();case 2:n=e.sent,Object(p["c"])(n).success((function(e){var n=e.data;t.value=n}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["c"].add(e.value);case 2:r=t.sent,Object(p["c"])(r).success((function(){n(),e.value=""}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r["D"])((function(){n()}));var a=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t._id,e.next=3,l["c"].remove(r);case 3:c=e.sent,Object(p["c"])(c).success((function(e){var t=e.msg;b["a"].success(t),n()}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c=t._id,d["a"].confirm({title:"请输入新的分类名称",content:Object(r["p"])("div",null,[Object(r["p"])(f["a"],{class:"__book_classify_new_title"},null)]),onOk:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=document.querySelector(".__book_classify_new_title").value,e.next=3,l["c"].updateTitle(c,t);case 3:r=e.sent,Object(p["c"])(r).success((function(e){var t=e.msg;b["a"].success(t),n()}));case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{add:c,list:t,title:e,columns:O,remove:a,getList:n,updateTitle:u}}}),v=n("6b0d"),m=n.n(v);const w=m()(j,[["render",o]]);t["default"]=w}}]);
//# sourceMappingURL=BookClassify.528ea8bc.js.map