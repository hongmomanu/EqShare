Ext.define('EqimPrj.view.eqimmain.EarthListGrid', {
    extend: 'Ext.grid.Panel',
    alias:'widget.earthlistgrid',
    layout: 'fit',
    requires: [
    ],

    initComponent: function() {
        var me = this;
        //alert(1);
        Ext.apply(me, {
            //title: '数据相关测试',
            border: false,
            hideHeaders:true,
            multiSelect: true,
            viewConfig: {
                trackOver: false,
                loadMask: true,
                scrollToTop: Ext.emptyFn,
                enableTextSelection:true
            },

            columns: [
                {header: '详细信息',dataIndex: 'location',flex: 1,renderer : function(v,m,r) {
                    //console.log(r);
                    //testobj=r;
                    var str='<ul><li>接收时间:'+r.get('stime')+'</li><a>来源:'+ r.get('cname')
                        +"("+r.get('code')+")"
                        +'</a><br><a>发震时刻:'
                        +r.get('time')+'</a>' +
                        '<br><a>经纬度:'+ r.get('lon').toFixed(3)+','+ r.get('lat').toFixed(3)+'&nbsp;&nbsp;深度:'
                        + r.get('depth').toFixed(0)+'km</a>' +
                        '<br><a>震级:M'+ (r.get('M')==null?"无":r.get('M').toFixed(1))+', Ml'
                        +(r.get('Ml')==null?"无":r.get('Ml').toFixed(1))+', Ms '+ (r.get('Ms')==null?"无":r.get('Ms').toFixed(1))+
                        '</a>'+
                        '<br><a>地名:'+ r.get('location')+'</a></ul> ';
                    //console.log(str);
                    return str;
                }}
            ],

            store:'eqimmain.EarthQuickList'


        });
        me.callParent(arguments);
    }
});