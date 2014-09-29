Ext.define('EqimPrj.view.eqimmain.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias:'widget.mainpanel',
    layout: 'fit',

    requires: [
    ],

    initComponent: function() {
        var me = this;
        //alert(1);
        Ext.apply(me, {
            //title: '数据相关测试',
            bodyPadding: 15,
            layout: 'border',
            defaults: {
                labelAlign: 'top'
            },
            tbar: [

                {
                    xtype: 'splitbutton',
                    text: '菜单',
                    menu: [
                        {
                            text: '服务设置',
                            action: 'configwin'
                        },
                        {
                            text:'刷新',
                            action:'refresh'
                        },
                        {
                            text:'开关声音',
                            hidden:true,
                            action:'closevoice'
                        },
                        {
                            text:'发送配置',
                            action:'openconfigwin'

                        },
                        {
                            text:'短信人员配置',
                            action:'openuserswin'

                        },

                        {
                            text:'关闭',
                            action:'close'
                        }
                    ]
                },

                {
                    xtype: 'image' ,
                    src:localStorage.serverurl+'images/sound.png',
                    height:20,
                    overCls:'overhand',
                    listeners: {

                        render: function(cmp) {
                           /* Ext.create('Ext.tip.ToolTip', {
                                target: cmp.el,
                                html: "<b>刷新</b><br> "
                            });*/

                            cmp.getEl().on('click', function(){ this.fireEvent('voiceclick', cmp); }, cmp);
                        }
                    }

                },

                '-',
                {
                    xtype: 'text',
                    width:250,
                    itemId:'connectinfo',
                    text: '无连接'

                },
                '->',
                {
                    text:'手工发送',
                    action:'manualsend'
                },
                '-',
                {
                    xtype: 'image' ,
                    src:localStorage.serverurl+'images/play.png',
                    height:20,
                    overCls:'overhand',
                    listeners: {

                        render: function(cmp) {
                            /* Ext.create('Ext.tip.ToolTip', {
                             target: cmp.el,
                             html: "<b>刷新</b><br> "
                             });*/

                            cmp.getEl().on('click', function(){ this.fireEvent('playsendmessageclick', cmp); }, cmp);
                        }
                    }

                }

            ],
                    // The fields

            items:[
                {
                    region: 'west',
                    split: true,
                    title:'发震信息',
                    minWidth: 200,
                    width:250,
                    maxWidth: 300,
                    collapsible: true,
                    animCollapse: true,
                    xtype:'earthlistgrid'
                },
                {
                    region: 'center',

                    //collapsible: true,
                    //collapsed: true,
                    layout: 'fit',
                    //animCollapse: true,
                    items:{
                      xtype:'container',
                      layout:'border',
                      items:[
                          {
                             region:'center',
                             layout:'fit',
                             xtype:'panel',
                             itemId:'map',
                             listeners:{
                               'afterlayout':function(){this.fireEvent('mapupdate',this);}
                             },
                             alias:'widget.mappanel',
                             html:'<div id="map" style="width: 100%; height: 100%"></div>'
                          },
                          {
                              region:'south',
                              split:true,
                              collapsible: true,
                              //collapsed: true,
                              animCollapse: true,
                              height:410,
                              //layout:'fit',
                              layout: {
                                  type: 'hbox',
                                  align: 'stretch'
                              },
                              items:[
                                  {
                                      flex:0.7,
                                      xtype:'panel',
                                      layout:'fit',
                                      html:'<div style="width: 100%;height: 100%"  class="demo-container"><div id="earthquickcolumnchart" style="height: 220;overflow: hidden;"></div>'
                                          +'<div id="earthquickcolumnchartoverview" style="height: 150;overflow:hidden"></div></div>'

                                      //xtype:'earthquickcolumnchart'
                                  },
                                  {
                                      flex:0.3,
                                      xtype:'panel',
                                      layout:{
                                          type: 'vbox',
                                          align: 'stretch'
                                      },
                                      items:[
                                          {
                                              xtype:'earthquickautopiechart',
                                              flex:1
                                        }, {
                                              xtype:'earthquickautopiechart',
                                              flex:1
                                          }
                                      ]

                                  }

                              ]
                          }
                      ]
                    }



                },
                {
                    region: 'east',
                    split: true,
                    title:'发送日志',
                    //minWidth: 200,
                    width:300,
                    maxWidth: 300,
                    collapsible: true,
                    collapsed: true,
                    animCollapse: true,
                    xtype:'loglistgrid'
                }



            ]
        });
        me.callParent(arguments);
    }
});