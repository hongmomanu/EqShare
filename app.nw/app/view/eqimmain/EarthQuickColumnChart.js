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

                    {name:'stime',
                        type: 'string'}
                    ,{name:'time',
                        type: 'string'}

                ],
                data: [
                    {

                     M1:3,
                     stime:'2014-12-20 14:00:22'
                     },{

                        M:3,

                        stime:'2014-12-20 14:10:22'
                    },{

                        M1:4,
                        stime:'2014-12-20 14:20:22'
                    }
                    ,{

                        M1:3,
                        stime:'2014-12-20 14:20:22'
                    },{

                        M1:2,
                        stime:'2014-12-20 14:20:22'
                    },{

                        M1:2.5,
                        stime:'2014-12-20 14:20:22'
                    }
                    ,{

                        M:2,
                        stime:'2014-12-20 14:30:22'

                    }

                ]
                , sorters: { property: 'stime', direction : 'DESC' }
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
                type: 'Category',
                position: 'bottom',
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