require.config({
    paths: {
        jquery: 'jquery-1.10.1.min',
        JqCookie: 'jquery.cookie',
        index: 'index',
        list: 'list',
        parabola:'parabola'
    },
    shim: {
        "JqCookie": ['jquery'],
        "list": ['JqCookie'],
        parabola: {
            exports: "_"
        }
    }
})

require(['index', 'list'], function (index, list) {
    index.headerCode();
    index.rotate();
    list.addCarData();
    list.SUM();
    list.addDatas();
    list.carMove();
    list.nodeClick();
})