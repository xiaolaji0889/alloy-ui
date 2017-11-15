if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-scale-data-editor/aui-scale-data-editor.js']) {
   __coverage__['build/aui-scale-data-editor/aui-scale-data-editor.js'] = {"path":"build/aui-scale-data-editor/aui-scale-data-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"(anonymous_2)","line":33,"loc":{"start":{"line":33,"column":17},"end":{"line":33,"column":28}}},"3":{"name":"(anonymous_3)","line":52,"loc":{"start":{"line":52,"column":13},"end":{"line":52,"column":24}}},"4":{"name":"(anonymous_4)","line":62,"loc":{"start":{"line":62,"column":13},"end":{"line":62,"column":24}}},"5":{"name":"(anonymous_5)","line":77,"loc":{"start":{"line":77,"column":29},"end":{"line":77,"column":40}}},"6":{"name":"(anonymous_6)","line":89,"loc":{"start":{"line":89,"column":16},"end":{"line":89,"column":33}}},"7":{"name":"(anonymous_7)","line":102,"loc":{"start":{"line":102,"column":26},"end":{"line":102,"column":37}}},"8":{"name":"(anonymous_8)","line":115,"loc":{"start":{"line":115,"column":25},"end":{"line":115,"column":36}}},"9":{"name":"(anonymous_9)","line":131,"loc":{"start":{"line":131,"column":20},"end":{"line":131,"column":34}}},"10":{"name":"(anonymous_10)","line":149,"loc":{"start":{"line":149,"column":23},"end":{"line":149,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":190,"column":106}},"2":{"start":{"line":9,"column":0},"end":{"line":11,"column":100}},"3":{"start":{"line":22,"column":0},"end":{"line":187,"column":3}},"4":{"start":{"line":34,"column":8},"end":{"line":34,"column":36}},"5":{"start":{"line":36,"column":8},"end":{"line":36,"column":77}},"6":{"start":{"line":37,"column":8},"end":{"line":37,"column":86}},"7":{"start":{"line":39,"column":8},"end":{"line":39,"column":79}},"8":{"start":{"line":40,"column":8},"end":{"line":40,"column":88}},"9":{"start":{"line":42,"column":8},"end":{"line":42,"column":70}},"10":{"start":{"line":43,"column":8},"end":{"line":43,"column":56}},"11":{"start":{"line":53,"column":8},"end":{"line":53,"column":75}},"12":{"start":{"line":63,"column":8},"end":{"line":66,"column":9}},"13":{"start":{"line":64,"column":12},"end":{"line":65,"column":60}},"14":{"start":{"line":68,"column":8},"end":{"line":68,"column":21}},"15":{"start":{"line":78,"column":8},"end":{"line":78,"column":56}},"16":{"start":{"line":90,"column":8},"end":{"line":92,"column":9}},"17":{"start":{"line":91,"column":12},"end":{"line":91,"column":33}},"18":{"start":{"line":93,"column":8},"end":{"line":93,"column":19}},"19":{"start":{"line":103,"column":8},"end":{"line":103,"column":50}},"20":{"start":{"line":105,"column":8},"end":{"line":105,"column":56}},"21":{"start":{"line":106,"column":8},"end":{"line":106,"column":45}},"22":{"start":{"line":116,"column":8},"end":{"line":116,"column":50}},"23":{"start":{"line":118,"column":8},"end":{"line":118,"column":55}},"24":{"start":{"line":119,"column":8},"end":{"line":119,"column":45}},"25":{"start":{"line":132,"column":8},"end":{"line":137,"column":9}},"26":{"start":{"line":133,"column":12},"end":{"line":133,"column":29}},"27":{"start":{"line":135,"column":13},"end":{"line":137,"column":9}},"28":{"start":{"line":136,"column":12},"end":{"line":136,"column":25}},"29":{"start":{"line":139,"column":8},"end":{"line":139,"column":19}},"30":{"start":{"line":150,"column":8},"end":{"line":150,"column":54}},"31":{"start":{"line":151,"column":8},"end":{"line":151,"column":55}}},"branchMap":{"1":{"line":53,"type":"binary-expr","locations":[{"start":{"line":53,"column":17},"end":{"line":53,"column":43}},{"start":{"line":53,"column":47},"end":{"line":53,"column":73}}]},"2":{"line":63,"type":"if","locations":[{"start":{"line":63,"column":8},"end":{"line":63,"column":8}},{"start":{"line":63,"column":8},"end":{"line":63,"column":8}}]},"3":{"line":90,"type":"if","locations":[{"start":{"line":90,"column":8},"end":{"line":90,"column":8}},{"start":{"line":90,"column":8},"end":{"line":90,"column":8}}]},"4":{"line":132,"type":"if","locations":[{"start":{"line":132,"column":8},"end":{"line":132,"column":8}},{"start":{"line":132,"column":8},"end":{"line":132,"column":8}}]},"5":{"line":135,"type":"if","locations":[{"start":{"line":135,"column":13},"end":{"line":135,"column":13}},{"start":{"line":135,"column":13},"end":{"line":135,"column":13}}]}},"code":["(function () { YUI.add('aui-scale-data-editor', function (A, NAME) {","","/**"," * The Scale Data Editor Component"," *"," * @module aui-scale-data-editor"," */","","var CSS_SCALE_DATA_EDITOR = A.getClassName('scale', 'data', 'editor'),","    CSS_SCALE_DATA_EDITOR_HIGHER_VALUE = A.getClassName('scale', 'data', 'editor', 'higher', 'value'),","    CSS_SCALE_DATA_EDITOR_LOWER_VALUE = A.getClassName('scale', 'data', 'editor', 'lower', 'value');","","/**"," * A base class for Scale Data Editor."," *"," * @class A.ScaleDataScale"," * @extends A.DataEditor"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.ScaleDataEditor = A.Base.create('scale-data-editor', A.DataEditor, [], {","    TPL_EDITOR_CONTENT: '<div class=\"' + CSS_SCALE_DATA_EDITOR + ' form-inline row\">' +","        '<input type=\"text\" class=\"' + CSS_SCALE_DATA_EDITOR_LOWER_VALUE + ' form-control\"></input> - ' +","        '<input type=\"text\" class=\"' + CSS_SCALE_DATA_EDITOR_HIGHER_VALUE + ' form-control\"></input></div>',","","    /**","     * Constructor for the `A.ScaleDataEditor`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        var node = this.get('node');","","        this.lowerInput_ = node.one('.' + CSS_SCALE_DATA_EDITOR_LOWER_VALUE);","        this.lowerInput_.after('valuechange', A.bind(this._onLowerValueChange, this));","","        this.higherInput_ = node.one('.' + CSS_SCALE_DATA_EDITOR_HIGHER_VALUE);","        this.higherInput_.after('valuechange', A.bind(this._onHigherValueChange, this));","","        this.after('editedValueChange', this._afterEditedValueChange);","        this._uiSetEditedValue(this.get('editedValue'));","    },","","    /**","     * Returns `true` if this edited value array has no elements on 0 and 1 positions.","     *","     * @method isEmpty","     * @return {Boolean}","     */","    isEmpty: function() {","        return !(this.get('editedValue')[0] && this.get('editedValue')[1]);","    },","","    /**","     * If the Scale Data Editor has Numbers on both inputs this will return true.","     *","     * @method isValid","     * @return {Boolean}","     */","    isValid: function() {","        if (A.ScaleDataEditor.superclass.isValid.call(this)) {","            return this._filterInt(this.get('editedValue')[0]) <","                this._filterInt(this.get('editedValue')[1]);","        }","","        return false;","    },","","    /**","     * Fired after the `editedValue` attribute is set.","     *","     * @method _afterEditedValueChange","     * @protected","     */","    _afterEditedValueChange: function() {","        this._uiSetEditedValue(this.get('editedValue'));","    },","","    /**","     * Stricter way to parse int values.","     *","     * @method _filterInt","     * @param  {String | Number} value","     * @return {Number}","     * @protected","     */","    _filterInt: function (value) {","        if(/^(\\-|\\+)?([0-9]+|Infinity)$/.test(value)){","            return Number(value);","        }","        return NaN;","    },","","    /**","     * Fired when the lower input's value changes.","     *","     * @method _onHigherValueChange","     * @protected","     */","    _onHigherValueChange: function() {","        var editedValue = this.get('editedValue');","","        editedValue[1] = this.higherInput_.get('value');","        this.set('editedValue', editedValue);","    },","","    /**","     * Fired when the lower input's value changes.","     *","     * @method _onLowerValueChange","     * @protected","     */","    _onLowerValueChange: function() {","        var editedValue = this.get('editedValue');","","        editedValue[0] = this.lowerInput_.get('value');","        this.set('editedValue', editedValue);","    },","","    /**","     * Sets one of the range attributes (either `originalValue` or `editedValue`).","     * Makes sure it's an array of at least 2 positions.","     *","     * @method _setRangeValue","     * @param {Array} val","     * @return {Array}","     * @protected","     */","    _setRangeValue: function(val) {","        if (val.length === 0) {","            val.push('', '');","        }","        else if (val.length === 1) {","            val.push('');","        }","","        return val;","    },","","    /**","     * Updates the ui according to the value of the `editedValue` attribute.","     *","     * @method _uiSetEditedValue","     * @param {Array} editedValue","     * @protected","     */","    _uiSetEditedValue: function(editedValue) {","        this.lowerInput_.set('value', editedValue[0]);","        this.higherInput_.set('value', editedValue[1]);","    }","}, {","    /**","     * Static property used to define the default attribute configuration","     * for the `A.ScaleDataEditor`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","        /**","         * The value after edition.","         *","         * @attribute editedValue","         * @type Array","         */","        editedValue: {","            setter: '_setRangeValue',","            validator: A.Lang.isArray,","            value: []","        },","","        /**","         * The value to be edited.","         *","         * @attribute originalValue","         * @type Array","         */","        originalValue: {","            setter: '_setRangeValue',","            validator: A.Lang.isArray,","            value: []","        }","    }","});","","","}, '3.1.0-deprecated.34', {\"requires\": [\"aui-classnamemanager\", \"aui-data-editor\", \"event-valuechange\"]});","","}());"]};
}
var __cov_2JKP7wwEFGQ6nsz$NAwbiQ = __coverage__['build/aui-scale-data-editor/aui-scale-data-editor.js'];
__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['1']++;YUI.add('aui-scale-data-editor',function(A,NAME){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['1']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['2']++;var CSS_SCALE_DATA_EDITOR=A.getClassName('scale','data','editor'),CSS_SCALE_DATA_EDITOR_HIGHER_VALUE=A.getClassName('scale','data','editor','higher','value'),CSS_SCALE_DATA_EDITOR_LOWER_VALUE=A.getClassName('scale','data','editor','lower','value');__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['3']++;A.ScaleDataEditor=A.Base.create('scale-data-editor',A.DataEditor,[],{TPL_EDITOR_CONTENT:'<div class="'+CSS_SCALE_DATA_EDITOR+' form-inline row">'+'<input type="text" class="'+CSS_SCALE_DATA_EDITOR_LOWER_VALUE+' form-control"></input> - '+'<input type="text" class="'+CSS_SCALE_DATA_EDITOR_HIGHER_VALUE+' form-control"></input></div>',initializer:function(){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['2']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['4']++;var node=this.get('node');__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['5']++;this.lowerInput_=node.one('.'+CSS_SCALE_DATA_EDITOR_LOWER_VALUE);__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['6']++;this.lowerInput_.after('valuechange',A.bind(this._onLowerValueChange,this));__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['7']++;this.higherInput_=node.one('.'+CSS_SCALE_DATA_EDITOR_HIGHER_VALUE);__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['8']++;this.higherInput_.after('valuechange',A.bind(this._onHigherValueChange,this));__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['9']++;this.after('editedValueChange',this._afterEditedValueChange);__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['10']++;this._uiSetEditedValue(this.get('editedValue'));},isEmpty:function(){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['3']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['11']++;return!((__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['1'][0]++,this.get('editedValue')[0])&&(__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['1'][1]++,this.get('editedValue')[1]));},isValid:function(){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['4']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['12']++;if(A.ScaleDataEditor.superclass.isValid.call(this)){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['2'][0]++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['13']++;return this._filterInt(this.get('editedValue')[0])<this._filterInt(this.get('editedValue')[1]);}else{__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['2'][1]++;}__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['14']++;return false;},_afterEditedValueChange:function(){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['5']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['15']++;this._uiSetEditedValue(this.get('editedValue'));},_filterInt:function(value){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['6']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['16']++;if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['3'][0]++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['17']++;return Number(value);}else{__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['3'][1]++;}__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['18']++;return NaN;},_onHigherValueChange:function(){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['7']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['19']++;var editedValue=this.get('editedValue');__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['20']++;editedValue[1]=this.higherInput_.get('value');__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['21']++;this.set('editedValue',editedValue);},_onLowerValueChange:function(){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['8']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['22']++;var editedValue=this.get('editedValue');__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['23']++;editedValue[0]=this.lowerInput_.get('value');__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['24']++;this.set('editedValue',editedValue);},_setRangeValue:function(val){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['9']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['25']++;if(val.length===0){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['4'][0]++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['26']++;val.push('','');}else{__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['4'][1]++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['27']++;if(val.length===1){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['5'][0]++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['28']++;val.push('');}else{__cov_2JKP7wwEFGQ6nsz$NAwbiQ.b['5'][1]++;}}__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['29']++;return val;},_uiSetEditedValue:function(editedValue){__cov_2JKP7wwEFGQ6nsz$NAwbiQ.f['10']++;__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['30']++;this.lowerInput_.set('value',editedValue[0]);__cov_2JKP7wwEFGQ6nsz$NAwbiQ.s['31']++;this.higherInput_.set('value',editedValue[1]);}},{ATTRS:{editedValue:{setter:'_setRangeValue',validator:A.Lang.isArray,value:[]},originalValue:{setter:'_setRangeValue',validator:A.Lang.isArray,value:[]}}});},'3.1.0-deprecated.34',{'requires':['aui-classnamemanager','aui-data-editor','event-valuechange']});
