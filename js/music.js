$(function () {
    

    let wh;
    let st;
    const setcss = {
        position: 'fixed',
        bottom: '20px',
        bottom: '20px',
        left: '20px',
        cursor: 'pointer',
        display: 'none',
        width: '50px',
        height: '50px'
    }
    $('body').append('<img class="pagetop-icon" src="image/common/page-top-icon.png">');
    $('.pagetop-icon').css(setcss);
    $(window).scroll(function () {
        wh = $(window).height();
        st = $(window).scrollTop();
        if (st > wh / 2) {
            $('.pagetop-icon').fadeIn(500);
        } else {
            $('.pagetop-icon').fadeOut(500);
        }
    });
    // ページトップへ戻る：アニメーションスクロール
    $('.pagetop-icon').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});