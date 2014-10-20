/**
 * Created by jack on 14-9-22.
 */

/**
 * Created by jack on 14-2-18.
 */

Ext.define('EqimPrj.view.eqimmain.StaticConfigWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.staticconfigwin',
    requires: [
    ],
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        Ext.apply(this, {
            title: '统计配置',
            height: 350,
            width: 720,
            closeAction : 'hide',
            modal:true,
            resizable:false,
            layout: 'fit',
            items: {
                xtype: 'form',

                bodyPadding: 10,
                //xtype: 'fieldset',

                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 120,
                    labelStyle: 'font-weight:bold'
                },
                items: [

                    {
                        xtype:'fieldset',
                        flex:1,

                        title: '网站接口',

                        layout: 'anchor',
                        defaults: {
                            anchor: '100%'
                        },
                        items:[

                            {
                                xtype: 'textfield',
                                fieldLabel: 'JOPENSWeb地址',
                                required:true,
                                allowBlank:false,
                                afterLabelTextTpl: required,
                                name: 'jopenwebsiteurl'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '统计天数',
                                required:true,
                                allowBlank:false,
                                afterLabelTextTpl: required,
                                name: 'staticdays'
                            },
                            {
                                xtype:'datefield',
                                width:120,
                                fieldLabel: '自动统计开始日期',
                                format:'Y-m-d',
                                //itemId:'bgday',
                                //value: Ext.Date.add(new Date(), Ext.Date.DAY, -30),

                                name: 'staticautobeginday'
                            },
                            {
                                xtype:'timefield',
                                width:120,
                                fieldLabel: '自动统计开始时间',
                                format:'H:i',
                                increment:60,
                                //value: 12,

                                name: 'staticautobeginhour'
                            },
                            {
                                xtype:'timefield',
                                width:120,
                                fieldLabel: '自动统计结束时间',
                                format:'H:i',
                                increment:60,
                                //value: 12,

                                name: 'staticautoendhour'
                            },
                            {
                                xtype:'timefield',
                                width:120,
                                fieldLabel: '自动统计检查时间',
                                format:'H:i',
                                increment:60,
                                //value: 12,

                                name: 'staticautocheckhour'
                            },
                            {
                                xtype:'checkbox',
                                checked: false,
                                listeners: {
                                    change:function(obj,v){

                                        if(v){

                                        }else{

                                        }

                                    }
                                },
                                boxLabel: '是否启用自动速报',
                                name: 'isautostatic',
                                inputValue: '2'
                            }
                        ]
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