/**
 * Created by jack on 14-9-22.
 */

/**
 * Created by jack on 14-2-18.
 */

Ext.define('EqimPrj.view.eqimmain.StaticQueryWin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.staticquerywin',
    requires: [
    ],
    initComponent: function() {

        Ext.apply(this, {
            title: '统计查询',
            height: 310,
            width: 720,
            closeAction : 'hide',
            modal:true,
            resizable:false,
            layout: 'fit',
            tbar:[

                {
                    xtype:'datefield',
                    width:120,
                    itemId:'bgday',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY,(0-localStorage.staticdays)),

                    name: 'bgday'
                },{
                    xtype:'datefield',
                    itemId:'edday',
                    width:120,
                    value:new Date(),

                    name: 'edday'
                },{
                    xtype:'button',
                    text:'搜索',
                    action:'querystatic'

                    //action:'search'
                }

            ],
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        this.up('window').hide();
                    }
                }

            ],
            items: {
                xtype: 'earthquickstaticpiechart',
                bodyPadding: 10,
                border: false

            }

        });
        this.callParent(arguments);
    }

});