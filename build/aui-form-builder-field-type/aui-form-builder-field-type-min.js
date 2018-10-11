YUI.add("aui-form-builder-field-type",function(e,t){e.FormBuilderFieldType=e.Base.create("form-builder-field-type",e.Base,[],{TPL_FIELD_TYPE:'<div class="field-type" tabindex="0"></div>',TPL_FIELD_TYPE_CONTENT:'<div class="field-type-icon {icon}"></div><div class="field-type-label">{label}</div></div>',initializer:function(){this.get("node").setHTML(e.Lang.sub(this.TPL_FIELD_TYPE_CONTENT,{icon:this.get("icon"),label:this.get("label")})),this.get("node").setData("fieldType",this),this._uiSetDisabled(this.get("disabled")),this.after({disabledChange:this._afterDisabledChange,iconChange:this._afterIconChange,labelChange:this._afterLabelChange}),this.get("node").on("mouseleave",e.bind(this._onMouseLeave,this)),this.get("node").on("mouseover",e.bind(this._onMouseOver,this))},destructor:function(){this.get("node").remove(!0)},_afterDisabledChange:function(){this._uiSetDisabled(this.get("disabled"))},_afterIconChange:function(e){var t=this.get("node").one(".field-type-icon");t&&t.replaceClass(e.prevVal,e.newVal)},_afterLabelChange:function(){var e=this.get("node").one(".field-type-label");e&&e.setHTML(this.get("label"))},_onMouseLeave:function(){var e=this.get("node");e.one(".field-type-label").removeClass("field-type-label-mouse-over"),e.one(".field-type-icon").removeClass("field-type-icon-mouse-over")},_onMouseOver:function(){var e=this.get("node");e.one(".field-type-label").addClass("field-type-label-mouse-over"),e.one(".field-type-icon").addClass("field-type-icon-mouse-over")},_uiSetDisabled:function(e){this.get("node").toggleClass("field-type-disabled",e)}},{ATTRS:{defaultConfig:{validator:e.Lang.isObject,value:{}},disabled:{validator:e.Lang.isBoolean,value:!1},fieldClass:{validator:e.Lang.isFunction},icon:{validator:e.Lang.isString,value:""},label:{validator:e.Lang.isString,value:""},node:{validator:function(t){return e.instanceOf(t,e.Node)},valueFn:function(){return e.Node.create(this.TPL_FIELD_TYPE)}},unique:{validator:e.Lang.isBoolean,value:!1}}})},"3.0.3-deprecated.81",{requires:["base","node-base"],skinnable:!0});
