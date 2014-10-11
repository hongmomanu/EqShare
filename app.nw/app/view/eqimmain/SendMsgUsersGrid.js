Ext.define('EqimPrj.view.eqimmain.SendMsgUsersGrid', {
    extend: 'Ext.grid.Panel',
    alias:'widget.sendmsgusersgrid',
    layout: 'fit',
    requires: [
    ],
    initComponent: function() {
        var me = this;

        Ext.apply(me, {

            border: false,
            //hideHeaders:true,
            //multiSelect: true,
            viewConfig: {
                /*trackOver: true,
                loadMask: true,
                scrollToTop: Ext.emptyFn,
                enableTextSelection:true,

                stripeRows: true*/
            },
            //selModel: selModel,
            forceFit: true,
            tbar:[

                {
                 xtype:'textfield',
                 emptyText:'搜索..',
                 listeners: {
                     "specialkey": function (field, e) {
                             if (e.keyCode == 13) {
                                 var keyword = field.getValue().replace(/\s+/g, "");
                                 var panel=this.up('panel');
                                 var store=panel.getStore();
                                 store.proxy.extraParams.keyword = keyword;
                                 store.loadPage(1);
                                 panel.getSelectionModel().deselectAll();

                            }
                        }
                     }
                 }

            ],
            columns: [


                {header: '是否启用',   dataIndex: 'id',hidden:true},
                {header: '姓名',dataIndex: 'username',width:60},
                {header: '手机',dataIndex: 'tel',width:120},
                {header: '分组',dataIndex: 'groups',flex:1,renderer : function(v,m,r) {

                    var str="";
                    var arr=eval(localStorage.groupsvalue);
                    for(var i=0;i<arr.length;i++){
                        if(v.indexOf(arr[i])>=0){
                            str+=" "+arr[i];
                        }
                    }
                    return str;
                }}

            ],

            tbar:[

                {

                    text:'新增',
                    action:'add'
                },
                {
                    text:'编辑',
                    action:'edit'
                },
                {
                    text:'删除',
                    action:'del'
                },
                {
                    text:'分组配置',
                    action:'groupconfig'
                }

            ],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'eqimmain.SendMsgUsers',
                displayInfo: true,
                displayMsg: '显示 {0} - {1}条记录,共 {2}条记录',
                emptyMsg: "无记录"
            }),
            store: 'eqimmain.SendMsgUsers'
        });
        me.callParent(arguments);
    }
});