Ext.define('EqimPrj.view.eqimmain.EarthQuickManuelPieChart', {
    extend: 'Ext.chart.Chart',
    alias:'widget.earthquickmanuelpiechart',
    layout: 'fit',
    requires: [
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            xtype: 'chart',
            animate: true,
            store: 'eqimmain.EarthQuickManuelPieCharts',
            shadow: true,
            legend: {
                position: 'right'
            },
            //insetPadding: 60,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'data',
                showInLegend: true,
                listeners:{
                    itemmousedown : function(obj) {
                        me.fireEvent('onpieclickfunc', obj.storeItem.data,this)
                    }
                },
                //donut: false,
                tips: {
                    trackMouse: true,
                    width: 100,
                    height: 28,
                    renderer: function(storeItem, item) {
                        //calculate percentage.
                        var total = 0;
                        var store=me.getStore();
                        store.each(function(rec) {
                            total += rec.get('data');
                        });
                        this.setTitle(storeItem.get('name') + ': '+storeItem.get('data') );   //
                        //this.setTitle(storeItem.get('name') + ': '+storeItem.get('data') + "("+Math.round(storeItem.get('data') / total * 100) + '%)');
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
                    font: '10px Arial'
                }
            }]
        });
        me.callParent(arguments);
    }
});