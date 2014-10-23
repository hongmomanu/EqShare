Ext.define('EqimPrj.store.eqimmain.EarthQuickList', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    fields: [
        {name: 'location',
            type: 'string'},
        {name: 'code',
            type: 'string'},
        {name:'lat',
            type: 'float'},
        {name:'lon',
            type: 'float'},
        {name:'depth',
            type: 'float'},
        {name:'eqtype',
            type: 'string'},
        {name:'M',
            type: 'float'},
        {name:'Ml',
            type: 'float'},
        {name:'Ms',
            type: 'float'},
        {name:'cname',
            type: 'string'},
        {name:'sname',
            type: 'string'},
        {name:'time',
            type: 'string'},
        {name:'stime',
            type: 'string'},
        {name:'type',
            type: 'string'}
    ],
    data: [
        /*{
         location :"杭州",
         lat :30.294,
         lon:120.158,
         depth:"10km",
         Ml:"ML",
         M:'M',
         Ms:'Ms',
         time:'2014-12-20 14:00:22',
         infotype:'CC'
         }*/

    ]
    , sorters: { property: 'stime', direction : 'DESC' }
});

