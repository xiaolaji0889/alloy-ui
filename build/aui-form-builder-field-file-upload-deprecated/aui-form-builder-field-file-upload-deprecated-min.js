YUI.add("aui-form-builder-field-file-upload-deprecated",function(e,t){var n=e.Lang,r=e.Escape,i=e.getClassName,s=i("form-builder-field"),o=i("form-builder-field","node"),u='<input id="{id}" class="'+[o].join(" ")+'" name="{name}" type="file" value="{value}" />',a=e.Component.create({NAME:"form-builder-file-upload-field",ATTRS:{template:{valueFn:function(){return u}}},CSS_PREFIX:s,EXTENDS:e.FormBuilderField,prototype:{getHTML:function(){var e=this;return n.sub(e.get("template"),{id:r.html(e.get("id")),label:r.html(e.get("label")),name:r.html(e.get("name")),value:r.html(e.get("predefinedValue"))})}}});e.FormBuilderFileUploadField=a,e.FormBuilderField.types.fileupload=e.FormBuilderFileUploadField},"3.0.3-deprecated.8",{requires:["aui-form-builder-field-deprecated"]});
