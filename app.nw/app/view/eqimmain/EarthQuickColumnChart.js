Ext.define('EqimPrj.view.eqimmain.EarthQuickColumnChart', {
    extend: 'Ext.chart.Chart',
    alias:'widget.earthquickcolumnchart',
    layout: 'fit',
    requires: [
    ],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            style: 'background:#fff',
            animate: true,
            shadow: true,
            forceFit: true,
            store: Ext.create('Ext.data.Store', {
                //alias: 'store.ModeStore',
                autoLoad: false,
                fields: [
                    {name:'M',
                        type: 'float'},
                    {name:'M1',
                        type: 'float'},

                    {name:'stime',  dateFormat: 'Y-m-d H:i:s',type: 'date'}


                ],
                data: [


                ]
                , sorters: { property: 'stime', direction : 'ASC' }
            }),
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['M1',"M"],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: '震级',
                grid: true,
                minimum: 0
            }, {
                type: 'Time',
                position: 'bottom',
                dateFormat:'H:i',
                step: [Ext.Date.MINUTE, 1],
                fields: ['stime'],
                title: '时间'
            }],
            series: [
                {
                type: 'column',
                axis: 'left',

                highlight: true,
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('stime') + ': ' + storeItem.get('M1') + ' ');
                    }
                },
                label: {
                    display: 'insideEnd',
                    'text-anchor': 'middle',
                    field: 'M1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    color: '#333'
                },
                xField: 'stime',
                yField: 'M1'
            },
                {
                    type: 'column',
                    axis: 'left',

                    highlight: true,
                    tips: {
                        trackMouse: true,
                        width: 140,
                        height: 28,
                        renderer: function(storeItem, item) {
                            this.setTitle(storeItem.get('stime') + ': ' + storeItem.get('M1') + ' ');
                        }
                    },
                    label: {
                        display: 'insideEnd',
                        'text-anchor': 'middle',
                        field: 'M',
                        renderer: Ext.util.Format.numberRenderer('0'),
                        orientation: 'vertical',
                        color: '#333'
                    },
                    xField: 'stime',
                    yField: 'M'
                }

            ]

        });
        me.callParent(arguments);
    }
});