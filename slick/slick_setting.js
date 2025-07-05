// 資料のP.70のファイルです。
// このファイルがslick（スライドショー）の各種オプションを設定するファイルです。

$(function(){
    // ↓セレクター$('～')　↓メソッド（slickオリジナル）
    $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        fade: true,
        pauseOnHover: false,
        speed: 3000,
        autoplaySpeed: 6000
      });
});
