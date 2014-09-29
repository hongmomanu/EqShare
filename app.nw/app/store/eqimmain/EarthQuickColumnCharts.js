Ext.define('EqimPrj.store.eqimmain.EarthQuickColumnCharts', {
    extend: 'Ext.data.Store',
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

});