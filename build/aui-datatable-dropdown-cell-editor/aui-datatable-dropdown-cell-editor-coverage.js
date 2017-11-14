if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datatable-dropdown-cell-editor/aui-datatable-dropdown-cell-editor.js']) {
   __coverage__['build/aui-datatable-dropdown-cell-editor/aui-datatable-dropdown-cell-editor.js'] = {"path":"build/aui-datatable-dropdown-cell-editor/aui-datatable-dropdown-cell-editor.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":65}}},"2":{"name":"(anonymous_2)","line":79,"loc":{"start":{"line":79,"column":26},"end":{"line":79,"column":37}}},"3":{"name":"(anonymous_3)","line":95,"loc":{"start":{"line":95,"column":28},"end":{"line":95,"column":39}}},"4":{"name":"(anonymous_4)","line":108,"loc":{"start":{"line":108,"column":24},"end":{"line":108,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":125,"column":84}},"2":{"start":{"line":3,"column":0},"end":{"line":5,"column":23}},"3":{"start":{"line":16,"column":0},"end":{"line":120,"column":3}},"4":{"start":{"line":80,"column":12},"end":{"line":80,"column":32}},"5":{"start":{"line":82,"column":12},"end":{"line":84,"column":13}},"6":{"start":{"line":83,"column":16},"end":{"line":83,"column":67}},"7":{"start":{"line":86,"column":12},"end":{"line":86,"column":50}},"8":{"start":{"line":96,"column":12},"end":{"line":96,"column":32}},"9":{"start":{"line":98,"column":12},"end":{"line":98,"column":38}},"10":{"start":{"line":109,"column":12},"end":{"line":109,"column":32}},"11":{"start":{"line":110,"column":12},"end":{"line":110,"column":45}},"12":{"start":{"line":112,"column":12},"end":{"line":117,"column":13}},"13":{"start":{"line":113,"column":16},"end":{"line":113,"column":62}},"14":{"start":{"line":116,"column":16},"end":{"line":116,"column":53}},"15":{"start":{"line":122,"column":0},"end":{"line":122,"column":42}}},"branchMap":{"1":{"line":82,"type":"if","locations":[{"start":{"line":82,"column":12},"end":{"line":82,"column":12}},{"start":{"line":82,"column":12},"end":{"line":82,"column":12}}]},"2":{"line":112,"type":"if","locations":[{"start":{"line":112,"column":12},"end":{"line":112,"column":12}},{"start":{"line":112,"column":12},"end":{"line":112,"column":12}}]}},"code":["(function () { YUI.add('aui-datatable-dropdown-cell-editor', function (A, NAME) {","","var CSS_FORM_CONTROL = A.getClassName('form', 'control'),","    CSS_CELLEDITOR_ELEMENT = A.getClassName('celleditor', 'element'),","    DropDownCellEditor;","","/**"," * DropDownCellEditor class."," *"," * @class A.DropDownCellEditor"," * @extends A.BaseOptionsCellEditor"," * @param {Object} config Object literal specifying widget configuration"," * properties."," * @constructor"," */","DropDownCellEditor = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'dropDownCellEditor',","","    /**","     * Static property used to define the default attribute","     * configuration for the `DropDownCellEditor`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Indicates whether or not multiple options are selectable.","         *","         * @attribute multiple","         * @default false","         * @type Boolean","         */","        multiple: {","            value: false,","            validator: A.Lang.isBoolean","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.BaseOptionsCellEditor,","","    /**","     * Static property used to define the UI attributes.","     *","     * @property UI_ATTRS","     * @type Array","     * @static","     */","    UI_ATTRS: ['multiple'],","","    prototype: {","        ELEMENT_TEMPLATE: '<select class=\"' + [CSS_CELLEDITOR_ELEMENT, CSS_FORM_CONTROL].join(' ') + '\"></select>',","","        OPTION_TEMPLATE: '<option value=\"{value}\">{label}</option>',","","        /**","         * Get the input value.","         *","         * @method getElementsValue","         * @return {String} Input value.","         */","        getElementsValue: function() {","            var instance = this;","","            if (instance.get('multiple')) {","                return instance._getSelectedOptions().get('value');","            }","","            return instance.elements.get('value');","        },","","        /**","         * Syncs the element focus.","         *","         * @method _syncElementsFocus","         * @protected","         */","        _syncElementsFocus: function() {","            var instance = this;","","            instance.elements.focus();","        },","","        /**","         * Set the `multiple` attribute in the UI.","         *","         * @method _uiSetMultiple","         * @param val","         * @protected","         */","        _uiSetMultiple: function(val) {","            var instance = this;","            var elements = instance.elements;","","            if (val) {","                elements.setAttribute('multiple', 'multiple');","            }","            else {","                elements.removeAttribute('multiple');","            }","        }","    }","});","","A.DropDownCellEditor = DropDownCellEditor;","","","}, '3.1.0-deprecated.33', {\"requires\": [\"aui-datatable-base-options-cell-editor\"]});","","}());"]};
}
var __cov_oIO$RAyxOhwj8oVp5eQvvA = __coverage__['build/aui-datatable-dropdown-cell-editor/aui-datatable-dropdown-cell-editor.js'];
__cov_oIO$RAyxOhwj8oVp5eQvvA.s['1']++;YUI.add('aui-datatable-dropdown-cell-editor',function(A,NAME){__cov_oIO$RAyxOhwj8oVp5eQvvA.f['1']++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['2']++;var CSS_FORM_CONTROL=A.getClassName('form','control'),CSS_CELLEDITOR_ELEMENT=A.getClassName('celleditor','element'),DropDownCellEditor;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['3']++;DropDownCellEditor=A.Component.create({NAME:'dropDownCellEditor',ATTRS:{multiple:{value:false,validator:A.Lang.isBoolean}},EXTENDS:A.BaseOptionsCellEditor,UI_ATTRS:['multiple'],prototype:{ELEMENT_TEMPLATE:'<select class="'+[CSS_CELLEDITOR_ELEMENT,CSS_FORM_CONTROL].join(' ')+'"></select>',OPTION_TEMPLATE:'<option value="{value}">{label}</option>',getElementsValue:function(){__cov_oIO$RAyxOhwj8oVp5eQvvA.f['2']++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['4']++;var instance=this;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['5']++;if(instance.get('multiple')){__cov_oIO$RAyxOhwj8oVp5eQvvA.b['1'][0]++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['6']++;return instance._getSelectedOptions().get('value');}else{__cov_oIO$RAyxOhwj8oVp5eQvvA.b['1'][1]++;}__cov_oIO$RAyxOhwj8oVp5eQvvA.s['7']++;return instance.elements.get('value');},_syncElementsFocus:function(){__cov_oIO$RAyxOhwj8oVp5eQvvA.f['3']++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['8']++;var instance=this;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['9']++;instance.elements.focus();},_uiSetMultiple:function(val){__cov_oIO$RAyxOhwj8oVp5eQvvA.f['4']++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['10']++;var instance=this;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['11']++;var elements=instance.elements;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['12']++;if(val){__cov_oIO$RAyxOhwj8oVp5eQvvA.b['2'][0]++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['13']++;elements.setAttribute('multiple','multiple');}else{__cov_oIO$RAyxOhwj8oVp5eQvvA.b['2'][1]++;__cov_oIO$RAyxOhwj8oVp5eQvvA.s['14']++;elements.removeAttribute('multiple');}}}});__cov_oIO$RAyxOhwj8oVp5eQvvA.s['15']++;A.DropDownCellEditor=DropDownCellEditor;},'3.1.0-deprecated.33',{'requires':['aui-datatable-base-options-cell-editor']});
