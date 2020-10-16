define(['jquery', 'JqCookie', 'list'], function (jquery, JqCookie, list) {
    function nodeClick() {
        first()
        function first() {
            var first = !($.cookie('goods'));
            if (first) {
                str = `<tr><td style="height:80px;line-height:80px">您的购物车里还没有添加东西哦,快去<a style="color:blue" href="list.html">挑选热门商品</a>吧</td></tr>`
                $('#Tbody').html(str);
                $('#tab-foot').css('display','none')
            }
            else {
                list.addCarData();
                $('#tab-foot').css('display','flex')
            }
        }

        $('#Tbody').on('click', '.add', function () {
            var id = $(this).parent().siblings().eq(0).attr('id')
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
            list.addCarData();
        })

        $('#Tbody').on('click', '.red', function () {
            var cookieArr = JSON.parse($.cookie('goods'));
            var id = $(this).parent().siblings().eq(0).attr('id')
            for (var q = 0; q < cookieArr.length; q++) {
                if (cookieArr[q].id == id) {
                    if (cookieArr[q].num == 1) {
                        alert('再减就没有了,请点击删除');
                    } else {
                        cookieArr[q].num--;
                    }
                }
            }
            $.cookie('goods', JSON.stringify(cookieArr));
            list.addCarData();
        })

        $('#Tbody').on('click', '.delF', function () {
            var id = $(this).parent().siblings().eq(0).attr('id');
            console.log(id)
            var cookieArr = JSON.parse($.cookie('goods'));
            for (var o = 0; o < cookieArr.length; o++) {
                if (cookieArr[o].id == id) {
                    cookieArr.splice(o, 1);
                    break;
                }
            }
            if (cookieArr.length) {
                $.cookie('goods', JSON.stringify(cookieArr), { exrires: 7 });
            } else {
                $.cookie('goods', null)
            }
            first();
        })
    }
    return {
        nodeClick,
    }
})