if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-checkbox-deprecated/aui-form-builder-field-checkbox-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-checkbox-deprecated/aui-form-builder-field-checkbox-deprecated.js'] = {"path":"build/aui-form-builder-field-checkbox-deprecated/aui-form-builder-field-checkbox-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":73}}},"2":{"name":"(anonymous_2)","line":78,"loc":{"start":{"line":78,"column":21},"end":{"line":78,"column":32}}},"3":{"name":"(anonymous_3)","line":121,"loc":{"start":{"line":121,"column":18},"end":{"line":121,"column":29}}},"4":{"name":"(anonymous_4)","line":136,"loc":{"start":{"line":136,"column":26},"end":{"line":136,"column":37}}},"5":{"name":"(anonymous_5)","line":142,"loc":{"start":{"line":142,"column":31},"end":{"line":142,"column":65}}},"6":{"name":"(anonymous_6)","line":167,"loc":{"start":{"line":167,"column":17},"end":{"line":167,"column":28}}},"7":{"name":"(anonymous_7)","line":189,"loc":{"start":{"line":189,"column":21},"end":{"line":189,"column":35}}},"8":{"name":"(anonymous_8)","line":209,"loc":{"start":{"line":209,"column":31},"end":{"line":209,"column":45}}},"9":{"name":"(anonymous_9)","line":228,"loc":{"start":{"line":228,"column":25},"end":{"line":228,"column":39}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":246,"column":79}},"2":{"start":{"line":10,"column":0},"end":{"line":26,"column":101}},"3":{"start":{"line":37,"column":0},"end":{"line":239,"column":3}},"4":{"start":{"line":79,"column":16},"end":{"line":79,"column":36}},"5":{"start":{"line":122,"column":12},"end":{"line":123,"column":56}},"6":{"start":{"line":125,"column":12},"end":{"line":125,"column":86}},"7":{"start":{"line":127,"column":12},"end":{"line":127,"column":46}},"8":{"start":{"line":137,"column":12},"end":{"line":138,"column":48}},"9":{"start":{"line":140,"column":12},"end":{"line":140,"column":106}},"10":{"start":{"line":142,"column":12},"end":{"line":156,"column":15}},"11":{"start":{"line":143,"column":16},"end":{"line":155,"column":17}},"12":{"start":{"line":144,"column":20},"end":{"line":154,"column":22}},"13":{"start":{"line":158,"column":12},"end":{"line":158,"column":25}},"14":{"start":{"line":168,"column":12},"end":{"line":169,"column":50}},"15":{"start":{"line":171,"column":12},"end":{"line":179,"column":14}},"16":{"start":{"line":190,"column":12},"end":{"line":193,"column":60}},"17":{"start":{"line":195,"column":12},"end":{"line":195,"column":115}},"18":{"start":{"line":197,"column":12},"end":{"line":197,"column":48}},"19":{"start":{"line":199,"column":12},"end":{"line":199,"column":44}},"20":{"start":{"line":210,"column":12},"end":{"line":211,"column":60}},"21":{"start":{"line":213,"column":12},"end":{"line":218,"column":13}},"22":{"start":{"line":214,"column":16},"end":{"line":214,"column":58}},"23":{"start":{"line":217,"column":16},"end":{"line":217,"column":56}},"24":{"start":{"line":229,"column":12},"end":{"line":231,"column":77}},"25":{"start":{"line":233,"column":12},"end":{"line":235,"column":13}},"26":{"start":{"line":234,"column":16},"end":{"line":234,"column":42}},"27":{"start":{"line":241,"column":0},"end":{"line":241,"column":54}},"28":{"start":{"line":243,"column":0},"end":{"line":243,"column":63}}},"branchMap":{"1":{"line":143,"type":"if","locations":[{"start":{"line":143,"column":16},"end":{"line":143,"column":16}},{"start":{"line":143,"column":16},"end":{"line":143,"column":16}}]},"2":{"line":173,"type":"cond-expr","locations":[{"start":{"line":173,"column":39},"end":{"line":173,"column":58}},{"start":{"line":173,"column":61},"end":{"line":173,"column":63}}]},"3":{"line":213,"type":"if","locations":[{"start":{"line":213,"column":12},"end":{"line":213,"column":12}},{"start":{"line":213,"column":12},"end":{"line":213,"column":12}}]},"4":{"line":233,"type":"if","locations":[{"start":{"line":233,"column":12},"end":{"line":233,"column":12}},{"start":{"line":233,"column":12},"end":{"line":233,"column":12}}]}},"code":["(function () { YUI.add('aui-form-builder-field-checkbox-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-checkbox"," */","","var L = A.Lang,","","    AArray = A.Array,","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_CHECKBOX = getCN('checkbox'),","    CSS_FIELD = getCN('field'),","    CSS_FIELD_CHECKBOX = getCN('field', 'checkbox'),","    CSS_FIELD_CHECKBOX_TEXT = getCN('field', 'checkbox', 'text'),","    CSS_FIELD_CHOICE = getCN('field', 'choice'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_CHECKBOX = '<input id=\"{id}\" class=\"' + [CSS_FORM_BUILDER_FIELD_NODE, CSS_FIELD, CSS_FIELD_CHECKBOX,","        CSS_FIELD_CHOICE].join(' ') + '\" name=\"{name}\" type=\"checkbox\" value=\"{value}\" {checked} />';","","/**"," * A base class for `A.FormBuilderCheckBoxField`."," *"," * @class A.FormBuilderCheckBoxField"," * @extends A.FormBuilderField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderCheckBoxField = A.Component.create({","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderCheckBoxField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Indicates which is the type of data for the input field.","         *","         * @attribute dataType","         * @default 'boolean'","         * @type String","         */","        dataType: {","            value: 'boolean'","        },","","        /**","         * Specifies a predefined value for the checkbox field.","         *","         * @attribute predefinedValue","         * @default false","         * @type Boolean","         */","        predefinedValue: {","            setter: A.DataType.Boolean.parse,","            value: false","        },","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_CHECKBOX;","            }","        }","","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderField,","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-checkbox-field',","","    prototype: {","","        /**","         * Render the `A.FormBuilderCheckBoxField` component instance.","         * Lifecycle.","         *","         * @method renderUI","         * @protected","         */","        renderUI: function() {","            var instance = this,","                contentBox = instance.get('contentBox');","","            A.FormBuilderCheckBoxField.superclass.renderUI.apply(instance, arguments);","","            contentBox.addClass(CSS_CHECKBOX);","        },","","        /**","         * Returns a list of property models including the `A.RadioCellEditor`","         * model.","         *","         * @method getPropertyModel","         */","        getPropertyModel: function() {","            var instance = this,","                strings = instance.getStrings();","","            var model = A.FormBuilderCheckBoxField.superclass.getPropertyModel.apply(instance, arguments);","","            AArray.each(model, function(item, index, collection) {","                if (item.attributeName === 'predefinedValue') {","                    collection[index] = {","                        attributeName: 'predefinedValue',","                        editor: new A.RadioCellEditor({","                            options: {","                                'false': strings.no,","                                'true': strings.yes","                            }","                        }),","                        formatter: A.bind(instance._booleanFormatter, instance),","                        name: strings.predefinedValue","                    };","                }","            });","","            return model;","        },","","        /**","         * Injects data into the template and returns the HTML result.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            var instance = this,","                checked = instance.get('checked');","","            return L.sub(","                instance.get('template'), {","                    checked: checked ? 'checked=\"checked\"' : '',","                    id: AEscape.html(instance.get('id')),","                    label: AEscape.html(instance.get('label')),","                    name: AEscape.html(instance.get('name')),","                    value: AEscape.html(instance.get('predefinedValue'))","                }","            );","        },","","        /**","         * Set the `label` attribute on the UI.","         *","         * @method _uiSetLabel","         * @param val","         * @protected","         */","        _uiSetLabel: function(val) {","            var instance = this,","                labelNode = instance.get('labelNode'),","                showLabel = instance.get('showLabel'),","                templateNode = instance.get('templateNode');","","            labelNode.setContent('<span class=\"' + CSS_FIELD_CHECKBOX_TEXT + '\">' + AEscape.html(val) + '</span>');","","            instance._uiSetShowLabel(showLabel);","","            labelNode.prepend(templateNode);","        },","","        /**","         * Set the `predefinedValue` attribute on the UI.","         *","         * @method _uiSetPredefinedValue","         * @param val","         * @protected","         */","        _uiSetPredefinedValue: function(val) {","            var instance = this,","                templateNode = instance.get('templateNode');","","            if (val) {","                templateNode.setAttribute('checked', val);","            }","            else {","                templateNode.removeAttribute('checked');","            }","        },","","        /**","         * Set the `showLabel` attribute on the UI.","         *","         * @method _uiSetShowLabel","         * @param val","         * @protected","         */","        _uiSetShowLabel: function(val) {","            var instance = this,","                labelNode = instance.get('labelNode'),","                labelTextNode = labelNode.one('.' + CSS_FIELD_CHECKBOX_TEXT);","","            if (labelTextNode) {","                labelTextNode.toggle(val);","            }","        }","    }","","});","","A.FormBuilderCheckBoxField = FormBuilderCheckBoxField;","","A.FormBuilderField.types.checkbox = A.FormBuilderCheckBoxField;","","","}, '3.1.0-deprecated.34', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_47LGY_hFRGURXpFZBPF2KA = __coverage__['build/aui-form-builder-field-checkbox-deprecated/aui-form-builder-field-checkbox-deprecated.js'];
__cov_47LGY_hFRGURXpFZBPF2KA.s['1']++;YUI.add('aui-form-builder-field-checkbox-deprecated',function(A,NAME){__cov_47LGY_hFRGURXpFZBPF2KA.f['1']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['2']++;var L=A.Lang,AArray=A.Array,AEscape=A.Escape,getCN=A.getClassName,CSS_CHECKBOX=getCN('checkbox'),CSS_FIELD=getCN('field'),CSS_FIELD_CHECKBOX=getCN('field','checkbox'),CSS_FIELD_CHECKBOX_TEXT=getCN('field','checkbox','text'),CSS_FIELD_CHOICE=getCN('field','choice'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_CHECKBOX='<input id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE,CSS_FIELD,CSS_FIELD_CHECKBOX,CSS_FIELD_CHOICE].join(' ')+'" name="{name}" type="checkbox" value="{value}" {checked} />';__cov_47LGY_hFRGURXpFZBPF2KA.s['3']++;var FormBuilderCheckBoxField=A.Component.create({ATTRS:{dataType:{value:'boolean'},predefinedValue:{setter:A.DataType.Boolean.parse,value:false},template:{valueFn:function(){__cov_47LGY_hFRGURXpFZBPF2KA.f['2']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['4']++;return TPL_CHECKBOX;}}},CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderField,NAME:'form-builder-checkbox-field',prototype:{renderUI:function(){__cov_47LGY_hFRGURXpFZBPF2KA.f['3']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['5']++;var instance=this,contentBox=instance.get('contentBox');__cov_47LGY_hFRGURXpFZBPF2KA.s['6']++;A.FormBuilderCheckBoxField.superclass.renderUI.apply(instance,arguments);__cov_47LGY_hFRGURXpFZBPF2KA.s['7']++;contentBox.addClass(CSS_CHECKBOX);},getPropertyModel:function(){__cov_47LGY_hFRGURXpFZBPF2KA.f['4']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['8']++;var instance=this,strings=instance.getStrings();__cov_47LGY_hFRGURXpFZBPF2KA.s['9']++;var model=A.FormBuilderCheckBoxField.superclass.getPropertyModel.apply(instance,arguments);__cov_47LGY_hFRGURXpFZBPF2KA.s['10']++;AArray.each(model,function(item,index,collection){__cov_47LGY_hFRGURXpFZBPF2KA.f['5']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['11']++;if(item.attributeName==='predefinedValue'){__cov_47LGY_hFRGURXpFZBPF2KA.b['1'][0]++;__cov_47LGY_hFRGURXpFZBPF2KA.s['12']++;collection[index]={attributeName:'predefinedValue',editor:new A.RadioCellEditor({options:{'false':strings.no,'true':strings.yes}}),formatter:A.bind(instance._booleanFormatter,instance),name:strings.predefinedValue};}else{__cov_47LGY_hFRGURXpFZBPF2KA.b['1'][1]++;}});__cov_47LGY_hFRGURXpFZBPF2KA.s['13']++;return model;},getHTML:function(){__cov_47LGY_hFRGURXpFZBPF2KA.f['6']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['14']++;var instance=this,checked=instance.get('checked');__cov_47LGY_hFRGURXpFZBPF2KA.s['15']++;return L.sub(instance.get('template'),{checked:checked?(__cov_47LGY_hFRGURXpFZBPF2KA.b['2'][0]++,'checked="checked"'):(__cov_47LGY_hFRGURXpFZBPF2KA.b['2'][1]++,''),id:AEscape.html(instance.get('id')),label:AEscape.html(instance.get('label')),name:AEscape.html(instance.get('name')),value:AEscape.html(instance.get('predefinedValue'))});},_uiSetLabel:function(val){__cov_47LGY_hFRGURXpFZBPF2KA.f['7']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['16']++;var instance=this,labelNode=instance.get('labelNode'),showLabel=instance.get('showLabel'),templateNode=instance.get('templateNode');__cov_47LGY_hFRGURXpFZBPF2KA.s['17']++;labelNode.setContent('<span class="'+CSS_FIELD_CHECKBOX_TEXT+'">'+AEscape.html(val)+'</span>');__cov_47LGY_hFRGURXpFZBPF2KA.s['18']++;instance._uiSetShowLabel(showLabel);__cov_47LGY_hFRGURXpFZBPF2KA.s['19']++;labelNode.prepend(templateNode);},_uiSetPredefinedValue:function(val){__cov_47LGY_hFRGURXpFZBPF2KA.f['8']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['20']++;var instance=this,templateNode=instance.get('templateNode');__cov_47LGY_hFRGURXpFZBPF2KA.s['21']++;if(val){__cov_47LGY_hFRGURXpFZBPF2KA.b['3'][0]++;__cov_47LGY_hFRGURXpFZBPF2KA.s['22']++;templateNode.setAttribute('checked',val);}else{__cov_47LGY_hFRGURXpFZBPF2KA.b['3'][1]++;__cov_47LGY_hFRGURXpFZBPF2KA.s['23']++;templateNode.removeAttribute('checked');}},_uiSetShowLabel:function(val){__cov_47LGY_hFRGURXpFZBPF2KA.f['9']++;__cov_47LGY_hFRGURXpFZBPF2KA.s['24']++;var instance=this,labelNode=instance.get('labelNode'),labelTextNode=labelNode.one('.'+CSS_FIELD_CHECKBOX_TEXT);__cov_47LGY_hFRGURXpFZBPF2KA.s['25']++;if(labelTextNode){__cov_47LGY_hFRGURXpFZBPF2KA.b['4'][0]++;__cov_47LGY_hFRGURXpFZBPF2KA.s['26']++;labelTextNode.toggle(val);}else{__cov_47LGY_hFRGURXpFZBPF2KA.b['4'][1]++;}}}});__cov_47LGY_hFRGURXpFZBPF2KA.s['27']++;A.FormBuilderCheckBoxField=FormBuilderCheckBoxField;__cov_47LGY_hFRGURXpFZBPF2KA.s['28']++;A.FormBuilderField.types.checkbox=A.FormBuilderCheckBoxField;},'3.1.0-deprecated.34',{'requires':['aui-form-builder-field-deprecated']});
