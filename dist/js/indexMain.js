require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie:'jquery.cookie',
        index:'index',
        list:'list'
    },
    shim:{
        "JqCookie": ['jquery'],
        "list":['JqCookie'],
    }
})

require(['index','list'],function(index,list){
    index.headerCode();
    index.rotate();
    index.addData();
    index.tab();
    index.cityChoose();
    index.slide();
    index.backTop();
    list.SUM();
})