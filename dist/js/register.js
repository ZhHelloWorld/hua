define(['jquery', 'JqCookie'], function (jquery, JqCookie) {
    function tab() {
        $('.log-id').click(function () {
            $('.log-id p').addClass('active');
            $('.log-scan p').removeClass('active');
            $('#log-type1-r').css('display', 'block');
            $('#log-type2-r').css('display', 'none');
        })
        $('.log-scan').click(function () {
            $('.log-id p').removeClass('active');
            $('.log-scan p').addClass('active');
            $('#log-type1-r').css('display', 'none');
            $('#log-type2-r').css('display', 'block');
        })
    }

    function send() {
        $('#reg').click(function () {
            var oTab1 = document.getElementById('log-type1-r')
            var oTab2 = document.getElementById('log-type2-r')
            if (oTab1.style.display == 'block') {
                var number = $('#phoneNum').val();
                var username = $('#username-phone').val();
                var pwd = $('#phonePwd').val();
                var rePwd = $('#phoneRePwd').val();
            } else if (oTab2.style.display == 'block') {
                var number = $('#email').val();
                var username = $('#username-email').val();
                var pwd = $('#emailPwd').val();
                var rePwd = $('#emailRePwd').val();
            }
            $.ajax({
                type: 'post',
                url: 'register.php',
                data: {
                    number: number,
                    username: username,
                    pwd: pwd,
                    rePwd: rePwd

                },
                success: function (result) {
                    var obj = JSON.parse(result)
                    $('#alter').css('display','flex');
                    var timer = setTimeout(function(){
                        $('#alter').css('display','none');
                    },500)
                    if(obj.code !== 0){
                        $('#alter').css('color','red');
                        $('#alter p').html(obj.msg)
                    }else{
                        $('#alter').css('color','green');
                        $('#alter p').html('注册成功,即将为您跳转至登录页面')
                        timer = setTimeout(function(){
                            window.location = 'login.html'
                        },2000)
                    }
                    
                    console.log(obj)
                },
                error: function (msg) {
                    console.log(msg);
                }
            })
        })
    }

    function verification() {
        var number = null;
        var username = null;
        var pwd = null;
        var rePwd = null;
        function getInput() {
            var oTab1 = document.getElementById('log-type1-r')
            var oTab2 = document.getElementById('log-type2-r')
            if (oTab1.style.display == 'block') {
                number = $('#phoneNum').val();
                username = $('#username-phone').val();
                pwd = $('#phonePwd').val();
                rePwd = $('#phoneRePwd').val();
            } else if (oTab2.style.display == 'block') {
                number = $('#email').val();
                username = $('#username-email').val();
                pwd = $('#emailPwd').val();
                rePwd = $('#emailRePwd').val();
            }
        }
        $('#phoneNum').blur(function () {
            getInput();
            var reg = /^1\d{10}$/;
            if (reg.test(number)) {
                $('.tel-num p').html('您的手机号符合要求√').css({ color: 'green' });
            } else {
                if (number == '') {
                    $('.tel-num p').html('');
                } else {
                    $('.tel-num p').html('您的手机号不符合要求').css({ color: 'red' });
                }
            }
        })

        $('#username-phone').blur(function () {
            getInput()
            if (username.length == 0) {
                $('.verification p').html('用户名长度不大于8位,必须以字母开头').css('color', '#000');
            } else if (username.length > 8) {
                $('.verification p').html('用户名长度必须小于8位').css('color', 'red')
            } else {
                let reg = /^[a-zA-Z]\w/
                if(reg.test(username)){
                    $('.verification p').html('您的用户名符合规范√').css('color', 'green')
                }else{
                    $('.verification p').html('您的用户名不符合规范').css('color', 'red')
                }
            }
        })
        
        $('#phonePwd').blur(function(){
            getInput();
            if(pwd.length>16){
                $('.pwd-p').html('密码长度不能大于16位').css('color', 'red')
            } else if(pwd.length<6 && pwd.length>0){
                $('.pwd-p').html('密码长度不能小于6位').css('color', 'red')
            } else if((pwd.length == 0)){
                $('.pwd-p').html('密码长度为6-16位,只能使用字母数字下划线').css('color', '#000')
            }
        })
    }
    return {
        tab,
        send,
        verification,
    }
})