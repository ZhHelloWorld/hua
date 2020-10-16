require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        index:'index',
        login:'login'
    }
})

require(['index','login'],function(index,login){
    index.headerCode();
    index.rotate();
    login.tab();
})