define(['jquery'], function (jquery) {
    function tab(){
        $('.log-id').click(function(){
            $('.log-id p').addClass('active');
            $('.log-scan p').removeClass('active');
            $('#log-type1').css('display','block');
            $('#log-type2').css('display','none');
        })
        $('.log-scan').click(function(){
            $('.log-id p').removeClass('active');
            $('.log-scan p').addClass('active');
            $('#log-type1').css('display','none');
            $('#log-type2').css('display','block');
        })
    }
    return{
        tab
    }
})