/**
 * Created by jack on 14-9-22.
 */

Ext.define('EqimPrj.view.eqimmain.ManualSendMsgAutoWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.manualsendmsgautowin',
    requires: [
    ],
    initComponent: function() {
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填字段">*</span>';
        Ext.apply(this, {
            title: '新增',
            height: 370,
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
                        xtype: 'textfield',
                        name: 'title',
                        itemId:'title',
                        required:true,
                        allowBlank:false,
                        disabled:true,
                        afterLabelTextTpl: required,
                        fieldLabel: '发送内容'
                    },{
                        xtype: 'textarea',
                        name: 'content',
                        itemId:'content',
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
                            }, {
                                xtype:'checkbox',
                                checked: false,
                                listeners: {
                                    change:function(obj,v){
                                        var win=obj.up('window');
                                        var title=win.down('#title');
                                        var data=win.data;
                                        var titlecontent=Ext.Date.format(new Date(data.time),'m月d日H时i分')+data.location+"发生"+data.M.toFixed(1)+"级左右地震。";

                                        title.setValue(titlecontent);
                                        //win.titlecontent=titlecontent;
                                        if(v){

                                           title.enable();
                                        }else{
                                            title.disable();
                                        }

                                    }
                                },
                                boxLabel: '网站',
                                name: 'sendway',
                                inputValue: '2'
                            }
                        ]
                    },{
                        xtype: 'combobox',
                        required:true,
                        allowBlank:false,
                        itemId:'groupscomb',
                        queryMode: 'local',
                        /*multiSelect: false,
                        autoSelect:true,*/
                        forceSelection:true,
                        afterLabelTextTpl: required,
                        listeners:{
                            'change': function (rec){
                                this.fireEvent('onselectfunc', rec,this)

                            }
                        },
                        store:Ext.create('Ext.data.Store', {
                            fields: ['value', 'name'],
                            autoLoad: true,
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



