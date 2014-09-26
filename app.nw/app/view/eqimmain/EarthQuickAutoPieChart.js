Ext.define('EqimPrj.view.eqimmain.EarthQuickAutoPieChart', {
    extend: 'Ext.chart.Chart',
    alias:'widget.earthquickautopiechart',
    layout: 'fit',
    requires: [
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            xtype: 'chart',
            animate: true,
            store: Ext.create('Ext.data.Store', {
                //alias: 'store.ModeStore',
                autoLoad: false,
                fields: [
                    {name:'data',
                        type: 'float'},

                    {name:'name', type: 'string'}


                ],
                data: [
                    {name:"11",data:3},
                    {name:"22",data:3},
                    {name:"33",data:5}

                ]

            }),
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'data',
                showInLegend: true,
                //donut: false,
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function(storeItem, item) {
                        //calculate percentage.
                        var total = 0;
                        var store=this.getStore();
                        store.each(function(rec) {
                            total += rec.get('data');
                        });
                        this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');
                    }
                },
                highlight: {
                    segment: {
                        margin: 20
                    }
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                }
            }]
        });
        me.callParent(arguments);
    }
});