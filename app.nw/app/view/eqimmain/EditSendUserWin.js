/**
 * Created by jack on 14-9-22.
 */

Ext.define('EqimPrj.view.eqimmain.EditSendUserWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.editsenduserwin',
    requires: [
    ],
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        Ext.apply(this, {
            title: '编辑',
            height: 250,
            width: 400,
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
                        xtype: 'textfield',
                        name: 'username',
                        required:true,
                        allowBlank:false,
                        afterLabelTextTpl: required,
                        fieldLabel: '用户名'
                    },
                    {
                        xtype: 'textfield',
                        name:'id',

                        hidden:true,

                        fieldLabel: '来源'
                    },
                    {
                        xtype: 'textfield',
                        required:true,
                        allowBlank:false,
                        afterLabelTextTpl: required,
                        name: 'tel',
                        fieldLabel: '手机号'
                    },
                    {
                        xtype: 'combobox',
                        required:true,
                        allowBlank:false,
                        multiSelect: true,
                        itemId:'groupscomb',
                        afterLabelTextTpl: required,
                        store:Ext.create('Ext.data.Store', {
                            fields: ['value', 'name'],
                            data : (function (){
                                var arr=eval(localStorage.groupsvalue);
                                var result=[];
                                for(var i=0;i<arr.length;i++){
                                    result.push({name:arr[i],value:arr[i]});
                                }
                                return result;
                            })()
                        }),
                        valueField: 'value',
                        displayField: 'name',
                        fieldLabel: '分组',
                        name: 'groups'
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



