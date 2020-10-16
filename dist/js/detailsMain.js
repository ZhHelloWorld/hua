require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie:'jquery.cookie',
        index:'index',
        list:'list',
        details:'details',
        parabola:'parabola'
    },
    shim:{
        "JqCookie": ['jquery'],
        "list": ['JqCookie'],
        "details":['list'],
        parabola: {
            exports: "_"
        }
    }
})

require(['index','details','list'],function(index,details,list,){
    index.headerCode();
    index.rotate();
    index.cityChoose();
    index.addData();
    details.magnifier();
    details.differentPro();
    details.addCart();
    list.SUM();
})