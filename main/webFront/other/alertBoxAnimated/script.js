$(document).ready(function () {
    $('button.btn,.close-btn').click(function () {
        if ($('div.alert').hasClass('hide')) {
            $('div.alert').removeClass('hide');
            $('div.alert').addClass('show')
            $('div.alert').addClass('showAlert');
            setTimeout(function () {
                $('div.alert').removeClass('show');
                $('div.alert').addClass('hide')
            }, 5000)
        } else {
            $('div.alert').removeClass('show');
            $('div.alert').addClass('hide')
        }
    })
});
