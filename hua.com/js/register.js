define(['jquery'], function (jquery) {
    function tab(){
        $('.log-id').click(function(){
            $('.log-id p').addClass('active');
            $('.log-scan p').removeClass('active');
            $('#log-type1-r').css('display','block');
            $('#log-type2-r').css('display','none');
        })
        $('.log-scan').click(function(){
            $('.log-id p').removeClass('active');
            $('.log-scan p').addClass('active');
            $('#log-type1-r').css('display','none');
            $('#log-type2-r').css('display','block');
        })
    }
    return{
        tab
    }
})