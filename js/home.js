var recommend = document.getElementById('recommend');
var news = document.getElementById('new');
var url = 'http://192.168.1.45:3000/home';
//推荐
$.get(url, {
    type: 'recommend'
},
    function (data) {
        console.log(data)
        var music = data.musicList
        console.log(music)
        for (var i = 0; i < music.length; i++) {
            console.log(music[i].imgurl)
            var a = `
    <li>
        <img src="${music[i].imgurl}" alt="">
        <p>${music[i].info}</p>
        <p>${music[i].title}</p>
    </li>
  `
            $('.home').append(a);
            console.log(a)
        }
    })
//bannner图
$.get(
    url, {
    type: 'banner'
},
    function (obj) {
        console.log(obj)
        var imgs = obj.imglist
        console.log(imgs);
        for (var j = 0; j < imgs.length; j++) {
            console.log(imgs[j])
            var image = `
                <div class="swiper-slide">
                <img src="${imgs[j]}" class="banner">
                </div>
      `
            $('.swiper-wrapper').append(image);
        }
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            //自动切换
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                // disableOnInteraction: true,
                disableOnInteraction: false
            }
        })
    }
)
//推荐点击事件
touch.on(recommend, 'tap', function () {
    $(recommend).toggleClass('toggle')
    var url = 'http://192.168.1.45:3000/home';
    $.get(url, {
        type: 'recommend'
    },
        function (data) {
            console.log(data)
            var music = data.musicList
            console.log(music)
            for (var i = 0; i < music.length; i++) {
                console.log(music[i].imgurl)
                var a = `
        <li>
            <img src="${music[i].imgurl}" alt="">
            <p>${music[i].info}</p>
            <p>${music[i].title}</p>
        </li>
      `
                $('.home').append(a);
                console.log(a)
            }
        })
})
//最新
touch.on(news, 'tap', function () {
    $(news).toggleClass('toggle')
    var url = 'http://192.168.1.45:3000/home';
    $.get(url, {
        type: 'new'
    },
        function (data) {
            console.log(data)
            var music = data.musicList
            console.log(music)
            for (var i = 0; i < music.length; i++) {
                console.log(music[i].imgurl)
                var a = `
        <li>
            <img src="${music[i].imgurl}" alt="">
            <p>${music[i].info}</p>
            <p>${music[i].title}</p>
        </li>
      `
                $('.home').append(a);
                console.log(a)
            }
        })
})






