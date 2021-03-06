/**
 * Created by jack on 14-9-22.
 */

Ext.define('EqimPrj.view.eqimmain.ManualSendMsgWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.manualsendmsgwin',
    requires: [
    ],
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        Ext.apply(this, {
            title: '新增',
            height: 350,
            width: 460,
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
                        required:true,
                        allowBlank:false,
                        afterLabelTextTpl: required,
                        fieldLabel: '发送内容'
                    },
                    {
                        xtype:'fieldset',
                        title: '发送方式',
                        layout: {
                            type: 'hbox'
                        },
                        items:[
                            {
                                xtype:'checkbox',
                                boxLabel: '短信',

                                checked: true,
                                name: 'sendway',
                                inputValue: '0'
                            }, {
                                xtype:'checkbox',
                                boxLabel: '微博',

                                checked: true,
                                name: 'sendway',
                                inputValue: '1'
                            }/*, {
                                xtype:'checkbox',
                                checked: true,
                                boxLabel: '网站',
                                name: 'sendway',
                                inputValue: '2'
                            }*/
                        ]
                    },{
                        xtype: 'combobox',
                        required:true,
                        allowBlank:false,
                        multiSelect: false,
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
                        text: '发送',
                        action: 'send'

                    }
                ],
                border: false

            }

        });
        this.callParent(arguments);
    }

});



