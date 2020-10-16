require.config({
    paths: {
        jquery: 'jquery-1.10.1.min',
        JqCookie: 'jquery.cookie',
        index: 'index',
        list: 'list',
        cart:'cart'
    },
    shim: {
        "JqCookie": ['jquery'],
        "list": ['JqCookie'],
        parabola: {
            exports: "_"
        }
    }
})

require(['list','cart'],function(list,cart){
    list.addCarData();
    cart.nodeClick();
})