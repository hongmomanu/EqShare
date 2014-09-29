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