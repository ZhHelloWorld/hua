define(['jquery','JqCookie','list','parabola'], function (jquery,JqCookie,list,parabola){
    function magnifier(){
        $('.details').on('mouseenter','.showSmall',function(){
            $('.mask,.showBig').show();
            $(window).mousemove(function(e){
                var X = e.pageX - $('.showSmall').offset().left-50;
                var Y = e.pageY - $('.showSmall').offset().top-50;
                if(X >= 358){
                    X = 358
                }
                if(X <= 0){
                    X = 0
                }
                if(Y >= 398){
                    Y = 398
                }
                if(Y <= 0){
                    Y = 0
                }
                $('.mask').css({
                    left:X,
                    top:Y
                })

                $("#big").css({
                    left: -2 * X,
                    top: -2 * Y
                })
            })
        }).on('mouseleave','.showSmall',function(){
             $('.mask,.showBig').hide()
        })          
    }

    function differentPro(){
        var sId = window.location.hash
        var id = sId.substr(1);
        id = parseInt(id);
        $.ajax({
            url: './data/list.json',
            success: function (arr) {
                var str = ``;
                for (let i = 0; i < arr.length; i++) {
                    if(arr[i].id == id){
                        $('title').html('花礼网-'+ arr[i].name)
                        str = `<div class="det-left fl" >
                        <div class="showSmall">
                            <img src="${arr[i].img}" id="small" alt="">
                            <div class="mask"></div>
                        </div>
                        
                        <div class="showBig">
                            <img src="${arr[i].img}" id="big" alt="">
                        </div>
                    </div>
                    <div class="det-right fr">
                        <h4>${arr[i].name}</h4>
                        <p>经典爆款，年销售冠军！</p>
                        <div class="det-price">
                            <div class="box clr">
                                 <p class="txt fl">售价<span> ${arr[i].price}</span></p>
                                <div class="sell fr">已售<span>${arr[i].sell}</span>件</div>
                            </div>
                            <div class="vip">APP/微信专享价 : <span>${arr[i].discount}</span></div>
                        </div>
                        <div class="toCity">
                            <p>材<span class="a"></span>料<span>高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎</span></p>
                            <p>配送说明<span>限送100多个主要城市的市区及近郊</span></p>
                            <p>花<span class="a"></span>语<span>你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</span></p>
                            <p>包<span class="a"></span>装 <span>牛皮纸和深咖啡色条纹纸，银色缎带花结，魔力铁山灰包装盒</span></p>
                        </div>
                        <div class="buyIt">
                            <div class="buyAfter">加入购物车</div>
                            <div class="buyNow">立即购买</div>
                        </div>
                    </div>`
                    }
                }
                $('.details').html(str);
            },
            error: function (msg) {
                console.log(msg);
            }
        })

    }

    function addCart(){
        var sId = window.location.hash
        var id = sId.substr(1);
        id = parseInt(id);
        $('.details').on('click','.buyAfter',function(){
            var first = !($.cookie('goods'));
            if (first) {
                $.cookie('goods', JSON.stringify([{
                    id: id,
                    num: 1
                }]), { exrires: 7 })
            } else {
                var cookieArr = JSON.parse($.cookie('goods'));
                var same = false;
                for (var j = 0; j < cookieArr.length; j++) {
                    if (cookieArr[j].id == id) {
                        same = true;
                        break;
                    }
                }
                if (same) {
                    cookieArr[j].num++
                } else {
                    cookieArr.push({
                        id: id,
                        num: 1
                    })
                }
                $.cookie('goods', JSON.stringify(cookieArr), { exrires: 7 });
            }
        list.SUM();
        list.ballMove($(this))
        })
    }
    return{
        magnifier,
        differentPro,
        addCart
    }
})