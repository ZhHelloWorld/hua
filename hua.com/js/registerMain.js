require.config({
    paths:{
        jquery:'jquery-1.10.1.min',
        index:'index',
        register:'register'
    }
})

require(['index','register'],function(index,register){
    index.headerCode();
    index.rotate();
    register.tab();
})