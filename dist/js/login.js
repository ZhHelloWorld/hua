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

    function send(){
        // var number = $('#phoneNum').val();
        // var pwd = $('#loginPwd').val();
        var number=document.getElementById("phoneNum")
        var pwd =document.getElementById("loginPwd")
        
        $('#log').click(function(){
            $.ajax({
                url:'login.php',
                type:'post',
                data:{
                    number:number.value,
                    pwd:pwd.value
                },
                success:function(result){
                    var obj = JSON.parse(result);
                    $('#alter').css('display','flex');
                    var timer = setTimeout(function(){
                        $('#alter').css('display','none');
                    },500)
                    if(obj.code !== 0){
                        $('#alter').css('color','red');
                        $('#alter p').html(obj.msg)
                    }else{
                        clearTimeout(timer)
                        $('#alter').css('color','green');
                        $('#alter p').html('登录成功,即将为您跳转至主页')
                        timer = setTimeout(function(){
                            $('#alter').css('display','none');
                            window.location = 'index.html'
                        },2000)
                    }
                    
                },
                error:function(msg){
                    console.log(msg)
                }
            })
        })
        
    }
    return{
        tab,
        send,
    }
})