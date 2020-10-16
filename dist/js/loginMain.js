require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        JqCookie: 'jquery.cookie',
        index:'index',
        login:'login'
    },
    shim:{
        "JqCookie": ['jquery'],
    }
})

require(['index','login'],function(index,login){
    index.headerCode();
    index.rotate();
    login.tab();
    login.send();
})