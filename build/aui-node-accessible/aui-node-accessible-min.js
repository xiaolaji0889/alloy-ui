YUI.add("aui-node-accessible",function(e,t){var n=e.getClassName("sr-only");e.mix(e.Node.prototype,{hideAccessible:function(){this.addClass(n),this.onceAfter(this.showAccessible,this,"show")},showAccessible:function(){this.removeClass(n)},toggleAccessible:function(e){e=e!==undefined?e:this.hasClass(n),e?this.showAccessible():this.hideAccessible()}})},"3.0.3-deprecated.8",{requires:["aui-node-base","event-custom-base"]});
