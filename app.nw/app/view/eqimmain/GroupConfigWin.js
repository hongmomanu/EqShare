/**
 * Created by jack on 14-9-22.
 */

Ext.define('EqimPrj.view.eqimmain.GroupConfigWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.groupconfigwin',
    requires: [
    ],
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        Ext.apply(this, {
            title: '分组配置',
            height: 230,
            width: 360,
            closeAction : 'hide',
            modal:true,
            resizable:false,
            layout: 'fit',
            items: {
                xtype: 'form',

                layout: {
                    type: 'vbox',

                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,
                //xtype: 'fieldset',

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },

                items: [

                    {
                        xtype: 'textarea',
                        name: 'groupsvalue',
                        required:true,
                        allowBlank:false,
                        afterLabelTextTpl: required,
                        fieldLabel: '分组信息'
                    }

                ],
                buttons: [
                    {
                        text: '取消',
                        handler: function () {
                            this.up('window').hide();
                        }
                    } ,
                    {
                        text: '保存',
                        action: 'save'

                    }
                ],
                border: false

            }

        });
        this.callParent(arguments);
    }

});



