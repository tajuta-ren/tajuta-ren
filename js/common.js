$(function () {
    // ハンバーガーメニュー
    $('.hmbicon').on('click', function () {
        $('.hide-menu-common').toggleClass('open');

        if ($('.hide-menu-common').hasClass('open')) {
            $('.hmbicon img').attr('src', 'image/common/ham-close.png');
            $('.hide-menu-common ul').prepend('<li class="add-ele"><a href="index.html">TOP</a></li>');
        } else {
            $('.hmbicon img').attr('src', 'image/common/ham-open.png');
            $('.add-ele').remove();
        }
    });

});

  