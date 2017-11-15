if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-text-deprecated/aui-form-builder-field-text-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-text-deprecated/aui-form-builder-field-text-deprecated.js'] = {"path":"build/aui-form-builder-field-text-deprecated/aui-form-builder-field-text-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":50},"end":{"line":1,"column":69}}},"2":{"name":"(anonymous_2)","line":68,"loc":{"start":{"line":68,"column":21},"end":{"line":68,"column":32}}},"3":{"name":"(anonymous_3)","line":80,"loc":{"start":{"line":80,"column":23},"end":{"line":80,"column":37}}},"4":{"name":"(anonymous_4)","line":115,"loc":{"start":{"line":115,"column":17},"end":{"line":115,"column":28}}},"5":{"name":"(anonymous_5)","line":135,"loc":{"start":{"line":135,"column":26},"end":{"line":135,"column":37}}},"6":{"name":"(anonymous_6)","line":150,"loc":{"start":{"line":150,"column":27},"end":{"line":150,"column":39}}},"7":{"name":"(anonymous_7)","line":166,"loc":{"start":{"line":166,"column":21},"end":{"line":166,"column":35}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":185,"column":79}},"2":{"start":{"line":10,"column":0},"end":{"line":30,"column":6}},"3":{"start":{"line":41,"column":0},"end":{"line":178,"column":3}},"4":{"start":{"line":69,"column":16},"end":{"line":69,"column":33}},"5":{"start":{"line":81,"column":16},"end":{"line":81,"column":53}},"6":{"start":{"line":82,"column":16},"end":{"line":82,"column":47}},"7":{"start":{"line":116,"column":12},"end":{"line":116,"column":32}},"8":{"start":{"line":118,"column":12},"end":{"line":126,"column":14}},"9":{"start":{"line":136,"column":12},"end":{"line":137,"column":48}},"10":{"start":{"line":139,"column":12},"end":{"line":139,"column":102}},"11":{"start":{"line":141,"column":12},"end":{"line":154,"column":15}},"12":{"start":{"line":151,"column":20},"end":{"line":151,"column":49}},"13":{"start":{"line":156,"column":12},"end":{"line":156,"column":25}},"14":{"start":{"line":167,"column":12},"end":{"line":168,"column":60}},"15":{"start":{"line":170,"column":12},"end":{"line":170,"column":75}},"16":{"start":{"line":171,"column":12},"end":{"line":171,"column":57}},"17":{"start":{"line":173,"column":12},"end":{"line":173,"column":37}},"18":{"start":{"line":180,"column":0},"end":{"line":180,"column":46}},"19":{"start":{"line":182,"column":0},"end":{"line":182,"column":55}}},"branchMap":{},"code":["(function () { YUI.add('aui-form-builder-field-text-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-text"," */","","var L = A.Lang,","","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_FORM_CONTROL = getCN('form', 'control'),","    CSS_FIELD_INPUT = getCN('field', 'input'),","    CSS_FIELD_INPUT_TEXT = getCN('field', 'input', 'text'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_INPUT = '<div class=\"form-builder-field-wrapper\"><input id=\"{id}\" class=\"' + [CSS_FORM_BUILDER_FIELD_NODE,","        CSS_FIELD_INPUT, CSS_FIELD_INPUT_TEXT,","        CSS_FORM_CONTROL].join(' ') + '\" name=\"{name}\" type=\"text\" value=\"{value}\" /></div>',","","    WIDTH_VALUES_MAP = {","        small: 'col-xs-4',","        medium: 'col-xs-8',","        large: 'col-xs-12'","    };","","/**"," * A base class for `A.FormBuilderTextField`."," *"," * @class A.FormBuilderTextField"," * @extends A.FormBuilderField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderTextField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-text-field',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderTextField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_INPUT;","            }","        },","","        /**","         * The width of the input field.","         *","         * @attribute width","         * @default 'small'","         */","        width: {","            validator: function(val) {","                val = A.Lang.String.toLowerCase(val);","                return val in WIDTH_VALUES_MAP;","            },","            value: 'small'","        }","","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderField,","","    prototype: {","","        /**","         * Injects data into the template and returns the HTML result.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            var instance = this;","","            return L.sub(","                instance.get('template'), {","                    id: AEscape.html(instance.get('id')),","                    label: AEscape.html(instance.get('label')),","                    name: AEscape.html(instance.get('name')),","                    value: AEscape.html(instance.get('predefinedValue')),","                    width: AEscape.html(instance.get('width'))","                }","            );","        },","","        /**","         * Returns a list of property models including the `A.RadioCellEditor`","         * model.","         *","         * @method getPropertyModel","         */","        getPropertyModel: function() {","            var instance = this,","                strings = instance.getStrings();","","            var model = A.FormBuilderTextField.superclass.getPropertyModel.apply(instance, arguments);","","            model.push({","                attributeName: 'width',","                editor: new A.RadioCellEditor({","                    options: {","                        small: strings.small,","                        medium: strings.medium,","                        large: strings.large","                    }","                }),","                formatter: function(o) {","                    return strings[o.data.value];","                },","                name: strings.width","            });","","            return model;","        },","","        /**","         * Set the `width` attribute in the UI.","         *","         * @method _uiSetWidth","         * @param val","         * @protected","         */","        _uiSetWidth: function(val) {","            var instance = this,","                templateNode = instance.get('templateNode');","","            templateNode.removeClass(WIDTH_VALUES_MAP[instance.prevWidth]);","            templateNode.addClass(WIDTH_VALUES_MAP[val]);","","            instance.prevWidth = val;","        }","","    }","","});","","A.FormBuilderTextField = FormBuilderTextField;","","A.FormBuilderField.types.text = A.FormBuilderTextField;","","","}, '3.1.0-deprecated.34', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_kxBBVjV$mZcO5J_rgXNzyA = __coverage__['build/aui-form-builder-field-text-deprecated/aui-form-builder-field-text-deprecated.js'];
__cov_kxBBVjV$mZcO5J_rgXNzyA.s['1']++;YUI.add('aui-form-builder-field-text-deprecated',function(A,NAME){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['1']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['2']++;var L=A.Lang,AEscape=A.Escape,getCN=A.getClassName,CSS_FORM_CONTROL=getCN('form','control'),CSS_FIELD_INPUT=getCN('field','input'),CSS_FIELD_INPUT_TEXT=getCN('field','input','text'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_INPUT='<div class="form-builder-field-wrapper"><input id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE,CSS_FIELD_INPUT,CSS_FIELD_INPUT_TEXT,CSS_FORM_CONTROL].join(' ')+'" name="{name}" type="text" value="{value}" /></div>',WIDTH_VALUES_MAP={small:'col-xs-4',medium:'col-xs-8',large:'col-xs-12'};__cov_kxBBVjV$mZcO5J_rgXNzyA.s['3']++;var FormBuilderTextField=A.Component.create({NAME:'form-builder-text-field',ATTRS:{template:{valueFn:function(){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['2']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['4']++;return TPL_INPUT;}},width:{validator:function(val){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['3']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['5']++;val=A.Lang.String.toLowerCase(val);__cov_kxBBVjV$mZcO5J_rgXNzyA.s['6']++;return val in WIDTH_VALUES_MAP;},value:'small'}},CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderField,prototype:{getHTML:function(){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['4']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['7']++;var instance=this;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['8']++;return L.sub(instance.get('template'),{id:AEscape.html(instance.get('id')),label:AEscape.html(instance.get('label')),name:AEscape.html(instance.get('name')),value:AEscape.html(instance.get('predefinedValue')),width:AEscape.html(instance.get('width'))});},getPropertyModel:function(){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['5']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['9']++;var instance=this,strings=instance.getStrings();__cov_kxBBVjV$mZcO5J_rgXNzyA.s['10']++;var model=A.FormBuilderTextField.superclass.getPropertyModel.apply(instance,arguments);__cov_kxBBVjV$mZcO5J_rgXNzyA.s['11']++;model.push({attributeName:'width',editor:new A.RadioCellEditor({options:{small:strings.small,medium:strings.medium,large:strings.large}}),formatter:function(o){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['6']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['12']++;return strings[o.data.value];},name:strings.width});__cov_kxBBVjV$mZcO5J_rgXNzyA.s['13']++;return model;},_uiSetWidth:function(val){__cov_kxBBVjV$mZcO5J_rgXNzyA.f['7']++;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['14']++;var instance=this,templateNode=instance.get('templateNode');__cov_kxBBVjV$mZcO5J_rgXNzyA.s['15']++;templateNode.removeClass(WIDTH_VALUES_MAP[instance.prevWidth]);__cov_kxBBVjV$mZcO5J_rgXNzyA.s['16']++;templateNode.addClass(WIDTH_VALUES_MAP[val]);__cov_kxBBVjV$mZcO5J_rgXNzyA.s['17']++;instance.prevWidth=val;}}});__cov_kxBBVjV$mZcO5J_rgXNzyA.s['18']++;A.FormBuilderTextField=FormBuilderTextField;__cov_kxBBVjV$mZcO5J_rgXNzyA.s['19']++;A.FormBuilderField.types.text=A.FormBuilderTextField;},'3.1.0-deprecated.34',{'requires':['aui-form-builder-field-deprecated']});
