define(['jquery'], function (jquery) {
    function headerCode() {
        $('.focusWechat').mouseenter(function () {
            $('#wechat-code').css('display', 'block');
        }).mouseleave(function () {
            $('#wechat-code').css('display', 'none');
        })

        $('.app').mouseenter(function () {
            $('#app-code').css('display', 'block');
        }).mouseleave(function () {
            $('#app-code').css('display', 'none');
        })
    }

    function rotate() {
        $('#service').mouseenter(function () {
            $('#customer-list').css('display', 'block')
            $('#rotate').css('transform', 'rotate(180deg)')
        }).mouseleave(function () {
            $('#customer-list').css('display', 'none');
            $('#rotate').css('transform', 'rotate(0deg)')
        })
    }

    function addData() {
        $.ajax({
            url: './data/cake.json',
            success: function (arr) {
                var str = ` <h4>蛋糕品牌</h4>`;
                var str2 = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <img src="./imgs/cake (${i + 1}).png" alt="">
                    <p>${arr[i].name}</p>
                </div>`;
                    str2 += `<div class="cake-con fl">
                <img src="./imgs/cake (${i + 1}).png" alt="">
                <p>${arr[i].name}</p>
            </div>`;
                }
                $('#tab2 .type').html(str);
                $('#cakes-top').html(str2);
            },
            error: function (msg) {
                console.log(msg)
            }
        })
        $.ajax({
            url: './data/cakeCity.json',
            success: function (arr) {
                var str = `<h4>蛋糕城市</h4>`;
                var str2 = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <p>${arr[i].city}</p>
                </div>`;
                }
                for (var i = 0; i < arr.length - 1; i++) {
                    str2 += `<span>${arr[i].city}</span>`
                }
                $('#tab2 .cakeCity').html(str);
                $('#city-list').html(str2);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

        $.ajax({
            url: './data/giftType.json',
            success: function (arr) {
                var str = `<h4>礼品类别</h4>`;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="cake-content fl">
                    <img src="./imgs/giftType (${i + 1}).png" alt="">
                    <p>${arr[i].name}</p>
                </div>`;
                }
                $('#tab3 .type2').html(str);
            },
            error: function (msg) {
                console.log(msg)
            }
        })
        $.ajax({
            url: './data/showProducts.json',
            success: function (arr) {
                var str = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<div class="box fl">
                    <a href="details.html?id#${arr[i].id}" style="display:block">
            <div class="img">
                <img src="./imgs/giftShow (${i + 1}).jpg" alt="">
            </div>
            <p>${arr[i].name}</p>
            <div class="price">${arr[i].price}</div>
            <span>${arr[i].sell}</span>
            </a>
        </div>`;
                }
                $('#gift-show').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }

        })
        $.ajax({
            url: './data/info.json',
            success: function (arr) {
                var str = ``;
                for (var i = 0; i < arr.length; i++) {
                    str += `<li>${arr[i].info}</li>`;
                }
                $('#hot-info ul').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

        $.ajax({
            url: './data/festival.json',
            success: function (arr) {
                var str = ``;
                for (let i = 0; i < arr.length; i++) {
                    str += `<div class="festival-box fl">
                    <div class="left fl">
                        <div>${arr[i].tit}</div>
                        <p class="describe">${arr[i].titf}</span>
                        <p class="price">${arr[i].price}</p>
                    </div>
                    <div class="right fr">
                        <img src="./imgs/ad (${i+1}).jpg" alt="">
                    </div>
                </div>`;
                }
                $('.festival-contant').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

        $.ajax({
            url: './data/elder.json',
            success: function (arr) {
                var str = ``;
                for (let i = 0; i < arr.length; i++) {
                    str += `<a href="details.html?id#${arr[i].id}" style="display:block"><div class="box fl">
                    <div class="img">
                        <img src="./imgs/fam (${i+1}).jpg" alt="">
                    </div>
                    <p>${arr[i].text}</p>
                    <div class="price">${arr[i].price}</div>
                    <span>${arr[i].sell}</span>
                </div></a>`;
                }
                $('#elder').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

        $.ajax({
            url: './data/love.json',
            success: function (arr) {
                var str = ``;
                for (let i = 0; i < arr.length; i++) {
                    str += `<a href="details.html?id#${arr[i].id}" style="display:block"><div class="box fl">
                    <div class="img">
                        <img src="./imgs/loveFlower (${i+1}).jpg" alt="">
                    </div>
                    <p>${arr[i].text}</p>
                    <div class="price">${arr[i].price}</div>
                    <span>${arr[i].sell}</span>
                </div></a>`;
                }
                $('#love').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

        $.ajax({
            url: './data/Immortal.json',
            success: function (arr) {
                var str = ``;
                for (let i = 0; i < arr.length; i++) {
                    str += `<a href="details.html?id#${arr[i].id}" style="display:block"><div class="box fl">
                    <div class="img">
                        <img src="./imgs/immortalFlower (${i+1}).jpg" alt="">
                    </div>
                    <p>${arr[i].text}</p>
                    <div class="price">${arr[i].price}</div>
                    <span>${arr[i].sell}</span>
                </div></a>`;
                }
                $('#Immortal').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })
        $.ajax({
            url: './data/cakeSell.json',
            success: function (arr) {
                var str = ``;
                for (let i = 0; i < arr.length; i++) {
                    str += `<div class="box fl">
                    <div class="img">
                        <img src="./imgs/cakeShow (${i+1}).jpg" alt="">
                    </div>
                    <p>${arr[i].text}</p>
                    <div class="price">${arr[i].price}</div>
                    <span>${arr[i].sell}</span>
                </div>`;
                }
                $('.gift-right').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }

    function tab() {
        var aUses = document.querySelectorAll('.tab-use');
        var aTabs = $('.tab');
        aUses.forEach(function (item, index, arr) {
            item.onmouseenter = function () {
                aTabs[index].className = '';
                for (var i = 0; i < aTabs.length; i++) {
                    aTabs[i].className = '';
                }
                aTabs[index].className = 'active';
                item.onmouseleave = function () {
                    aTabs[index].className = '';
                    aTabs[index].onmouseenter = function () {
                        this.className = 'active';
                    }
                }
                aTabs[index].onmouseleave = function () {
                    this.className = '';
                }
            }
        })
    }

    function cityChoose() {
        $('#choose').mouseenter(function () {
            $('#city-none').css('display', 'block')
        }).mouseleave(function () {
            $('#city-none').mouseenter(function () {
                $('#city-none').css('display', 'block');
            })
            $('#city-none').css('display', 'none');
        })
        $('#city-none').mouseleave(function () {
            $('#city-none').css('display', 'none');

        })
    }
    function slide() {
        var aLis = $('.spot div');
        var iNow = 0;
        var timer = null;
        var aSlides = $('.slides');

        aLis.click(function () {
            iNow = $(this).index()
            tabS();
        })
        $('.slide').mouseenter(function () {
            clearInterval(timer);
            $('#left').css('display','block');
            $('#right').css('display','block');
        }).mouseleave(function () {
            $('#left').css('display','none');
            $('#right').css('display','none');
            timer = setInterval(() => {
                iNow++;
                tabS();
            }, 2000);
        })


        $('#left').click(function(){
            iNow--;
            if(iNow < 0){
                iNow = aLis.size()-1;
            }
            console.log(iNow)
            tabS();
        })

        $('#right').click(function(){
            iNow++;
            tabS();
        })

        timer = setInterval(() => {
            iNow++;
            tabS();
        }, 2000);

        function tabS() {
            aLis.removeClass('active').eq(iNow).addClass('active');
            if (iNow == aLis.size()) {
                aLis.eq(0).addClass('active');
            }
            aSlides.animate({
                opacity: 0.6,
            },200).css('display', 'none').eq(iNow).animate({
                opacity: 1,
            },200).css('display', 'block')
            if (iNow == aLis.size()) {
                iNow = 0;
                aSlides.eq(iNow).animate({
                    opacity: 1,
                },200).css('display', 'block')
                aLis.removeClass('active').eq(iNow).addClass('active');
            }
        }
    }

    function antiShake(func, wait){
        let timer=null;
        return function(){
            let context=this;
            let args=arguments;
            console.log(args)
            clearTimeout(timer)
            timer=setTimeout(function(){
                func.call(context,...args)
            },wait)
        }
    }

    function backTop(){
        $(window).scroll(function(){
            var distance = $(window).scrollTop();
            if(distance >= 400){
                $('#back-top').css('display','block');
            }else{
                $('#back-top').css('display','none')
            }

            $('#back-top').click(function(){
                clearInterval(timer);
                var timer = setInterval(() => {
                var distance = $(window).scrollTop();
                    if(distance<=0){
                        clearInterval(timer)
                    }
                    var time = distance-=10;
                    document.documentElement.scrollTop=document.body.scrollTop = time;
                }, 40);
            })

        })
    }


    return {
        headerCode,
        rotate,
        addData,
        tab,
        cityChoose,
        slide,
        backTop,
    }
})