require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie: 'jquery.cookie',
        index:'index',
        register:'register'
    },
    shim:{
        "JqCookie": ['jquery'],
    }
})

require(['index','register'],function(index,register){
    index.headerCode();
    index.rotate();
    register.tab();
    register.send();
    register.verification();
})