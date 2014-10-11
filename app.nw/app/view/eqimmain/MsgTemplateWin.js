/**
 * Created by jack on 14-9-22.
 */

Ext.define('EqimPrj.view.eqimmain.MsgTemplateWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.msgtemplatewin',
    requires: [
    ],
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        Ext.apply(this, {
            title: '模板配置',
            height: 300,
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
                        name: 'content',
                        itemId:'content',
                        required:true,
                        allowBlank:false,
                        afterLabelTextTpl: required,
                        fieldLabel: '模板内容'
                    },
                    {

                        xtype: 'combobox',
                        required:true,
                        allowBlank:false,
                        itemId:'groupscomb',
                        multiSelect: false,
                        afterLabelTextTpl: required,
                        listeners:{
                            'select': function (rec){
                               if(!localStorage[rec.getValue()])localStorage[rec.getValue()]=localStorage.defaulttemplatevalue;
                               rec.up('window').down('#content').setValue(localStorage[rec.getValue()]);
                            }
                        },
                        store:Ext.create('Ext.data.Store', {
                            fields: ['value', 'name'],
                            data : (function (){
                                var arr=eval(localStorage.groupsvalue);
                                var result=[];
                                for(var i=0;i<arr.length;i++){
                                    result.push({name:arr[i],value:arr[i]});
                                }
                                result.push({name:"默认模板",value:"defaulttemplatevalue"});
                                return result;
                            })()
                        }),
                        valueField: 'value',
                        displayField: 'name',
                        fieldLabel: '模板类型',
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



