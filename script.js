$(document).ready(function () {

    $('.nav-item:nth-child(1)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-1').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.nav-item:nth-child(4)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.my-footer').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 400, 'easeInOutExpo');
    });
    var showPosition = 500; // Vị trí cuộn để hiển thị phần tử (500px từ đỉnh)
    $(window).scroll(function () {
        if ($(window).scrollTop() > showPosition) {
            $('.back-to-top').fadeIn(); // Hiển thị phần tử với hiệu ứng mờ dần
        } else {
            $('.back-to-top').fadeOut(); // Ẩn phần tử với hiệu ứng mờ dần
        }
    });
});
