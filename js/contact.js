// 送信ボタンの有効無効切り替え
$(function () {
    $('input[type="submit"]').prop('disabled', true);
    $('input[type="submit"]').css('background-color', '#fff');

    $('#personal').change(function () {
        if ($(this).prop('checked')) {
            $('input[type="submit"]').prop('disabled', false);
            $('input[type="submit"]').css('background-color', '');
        } else {
            $('input[type="submit"]').prop('disabled', true);
            $('input[type="submit"]').css('background-color', '#fff');
        }
    });
});


