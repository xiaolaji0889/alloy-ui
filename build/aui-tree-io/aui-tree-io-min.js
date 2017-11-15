YUI.add("aui-tree-io",function(e,t){function u(){var e=this;e.publish("ioRequestSuccess",{defaultFn:e._onIOSuccessDefault})}var n=e.Lang,r=n.isFunction,i=n.isString,s=e.getClassName,o=s("tree","node","io","loading");u.ATTRS={io:{lazyAdd:!1,value:null,setter:function(e){return this._setIO(e)}}},u.prototype={initializer:function(){var e=this;e.publish()},createNodes:function(t){var n=this,r=n.get("paginator");e.Array.each(e.Array(t),function(e){var t=n.getChildrenLength();if(r&&r.total<=t)return;n.appendChild(n.createNode(e))}),n._syncPaginatorUI(t)},initIO:function(){var t=this,n=t.get("io");r(n.cfg.data)&&(n.cfg.data=n.cfg.data.call(t,t)),t._syncPaginatorIOData(n);if(r(n.loader)){var i=e.bind(n.loader,t);i(n.url,n.cfg,t)}else e.io.request(n.url,n.cfg)},ioStartHandler:function(){var e=this,t=e.get("contentBox");e.set("loading",!0),t.addClass(o)},ioCompleteHandler:function(){var e=this,t=e.get("contentBox");e.set("loading",!1),e.set("loaded",!0),t.removeClass(o)},ioSuccessHandler:function(){var t=this,n=t.get("io"),r=Array.prototype.slice.call(arguments),i=r.length,s=r[1];if(i>=3){var o=r[2];try{s=e.JSON.parse(o.responseText)}catch(u){}}var a=n.formatter;a&&(s=a(s)),t.createNodes(s),t.fire("ioRequestSuccess",s)},ioFailureHandler:function(){var e=this;e.fire("ioRequestFailure"),e.set("loading",!1),e.set("loaded",!1)},_onIOSuccessDefault:function(){var e=this,t=e.get("ownerTree");t&&t.ddDelegate&&t.ddDelegate.syncTargets()},_setIO:function(t){var n=this;if(!t)return null;i(t)&&(t={url:t}),t=t||{},t.cfg=t.cfg||{},t.cfg.on=t.cfg.on||{};var s={start:e.bind(n.ioStartHandler,n),complete:e.bind(n.ioCompleteHandler,n),success:e.bind(n.ioSuccessHandler,n),failure:e.bind(n.ioFailureHandler,n)};return e.each(s,function(i,s){var o=t.cfg.on[s];i.defaultFn=!0;if(r(o)){var u=e.bind(function(){i.apply(n,arguments),o.apply(n,arguments)},n);u.wrappedFn=!0,t.cfg.on[s]=u}else t.cfg.on[s]=i}),t}},e.TreeViewIO=u},"3.1.0-deprecated.34",{requires:["aui-component","aui-io"]});
