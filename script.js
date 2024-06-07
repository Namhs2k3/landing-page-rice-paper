$(document).ready(function () {

    const url = 'https://script.google.com/macros/s/AKfycbwFuI6wJN4XjjRJAB6dMX-K2CkXFwzXQWvw1bQyTsDeRpAZYlymTJsNcsYsq_PDPEu7/exec';

    function getData() {
        $.getJSON(url, function (data) {
            $('.myImg').attr('src', `${data.GoogleSheetData[1][0]}`);
            $('.nav-link').eq(0).text(`${data.GoogleSheetData[1][1]}`);
            $('.nav-link').eq(1).text(`${data.GoogleSheetData[2][1]}`);
            $('.nav-link').eq(2).text(`${data.GoogleSheetData[3][1]}`);
            $('.nav-link').eq(3).text(`${data.GoogleSheetData[4][1]}`);
            $('.btn-tuvan').eq(0).text(`${data.GoogleSheetData[1][2]}`);
            $('.btn-tuvan').eq(1).text(`${data.GoogleSheetData[5][4]}`);
            $('.longden').eq(0).attr('src', `${data.GoogleSheetData[1][3]}`);
            $('.myImg2').eq(0).attr('src', `${data.GoogleSheetData[3][3]}`);
            $('.home div h2').eq(0).text(`${data.GoogleSheetData[1][4]}`);
            $('.home div p').eq(0).text(`${data.GoogleSheetData[2][4]}`);
            $('.home div p').eq(1).text(`${data.GoogleSheetData[3][4]}`);
            $('.home div p').eq(2).text(`${data.GoogleSheetData[4][4]}`);
            $('.tieu-de-1').eq(0).text(`${data.GoogleSheetData[2][6]}`);
            $('.long-den-2').eq(0).text(`${data.GoogleSheetData[1][4]}`);
            $('.long-den-2').eq(1).text(`${data.GoogleSheetData[1][4]}`);
            $('.long-den-2').eq(2).text(`${data.GoogleSheetData[1][7]}`);
            $('.my-banner-1').eq(0).attr('src', `${data.GoogleSheetData[4][6]}`);
            $('.my-banner-2').eq(0).attr('src', `${data.GoogleSheetData[6][6]}`);
            $('.my-banner-3').eq(0).attr('src', `${data.GoogleSheetData[8][6]}`);
            $('.carousel-caption h5').eq(0).text(`${data.GoogleSheetData[10][6]}`);
            $('.carousel-caption h5').eq(1).text(`${data.GoogleSheetData[12][6]}`);
            $('.carousel-caption h5').eq(2).text(`${data.GoogleSheetData[14][6]}`);
            $('.carousel-caption p').eq(0).text(`${data.GoogleSheetData[16][6]}`);
            $('.carousel-caption p').eq(1).text(`${data.GoogleSheetData[18][6]}`);
            $('.carousel-caption p').eq(2).text(`${data.GoogleSheetData[20][6]}`);
            $('.tieu-de-2').eq(0).text(`${data.GoogleSheetData[2][8]}`);
            $('.tieu-de-2').eq(1).text(`${data.GoogleSheetData[2][10]}`);
            $('.tieu-de-2').eq(2).text(`${data.GoogleSheetData[2][12]}`);
            $('.btn-mua').eq(0).text(`${data.GoogleSheetData[51][8]}`);
            $('.btn-mua').eq(1).text(`${data.GoogleSheetData[51][8]}`);
            $('.btn-mua').eq(2).text(`${data.GoogleSheetData[51][8]}`);
            $('.btn-mua').eq(3).text(`${data.GoogleSheetData[51][8]}`);
            $('.loai-2').eq(0).css('background-image', `url(${data.GoogleSheetData[45][8]})`);
            $('.loai-3').eq(0).css('background-image', `url(${data.GoogleSheetData[4][9]})`);
            $('.loai-4').eq(0).css('background-image', `url(${data.GoogleSheetData[4][10]})`);
            $('.loai-5').eq(0).css('background-image', `url(${data.GoogleSheetData[4][11]})`);
            $('.loai-6').eq(0).css('background-image', `url(${data.GoogleSheetData[4][12]})`);
            $('.card-img-top').eq(0).attr('src', `${data.GoogleSheetData[7][3]}`);
            $('.card-img-top').eq(1).attr('src', `${data.GoogleSheetData[11][3]}`);
            $('.card-img-top').eq(2).attr('src', `${data.GoogleSheetData[15][3]}`);
            $('.card-img-top').eq(3).attr('src', `${data.GoogleSheetData[23][3]}`);
            $('.img-sp1').eq(0).attr('src', `${data.GoogleSheetData[7][3]}`);
            $('.img-sp1').eq(1).attr('src', `${data.GoogleSheetData[11][3]}`);
            $('.img-sp1').eq(2).attr('src', `${data.GoogleSheetData[15][3]}`);
            $('.img-sp1').eq(3).attr('src', `${data.GoogleSheetData[23][3]}`);
            $('.card-title').eq(0).text(`${data.GoogleSheetData[6][8]}`);
            $('.card-title').eq(1).text(`${data.GoogleSheetData[16][8]}`);
            $('.card-title').eq(2).text(`${data.GoogleSheetData[26][8]}`);
            $('.card-title').eq(3).text(`${data.GoogleSheetData[36][8]}`);
            $('.card-text').eq(0).text(`${data.GoogleSheetData[8][8]}`);
            $('.card-text').eq(1).text(`${data.GoogleSheetData[18][8]}`);
            $('.card-text').eq(2).text(`${data.GoogleSheetData[28][8]}`);
            $('.card-text').eq(3).text(`${data.GoogleSheetData[38][8]}`);
            $('.old-price').eq(0).text(`${data.GoogleSheetData[10][8]}`);
            $('.old-price').eq(1).text(`${data.GoogleSheetData[20][8]}`);
            $('.old-price').eq(2).text(`${data.GoogleSheetData[30][8]}`);
            $('.old-price').eq(3).text(`${data.GoogleSheetData[40][8]}`);
            $('.pre').eq(0).text(`${data.GoogleSheetData[10][8]}`);
            $('.pre').eq(1).text(`${data.GoogleSheetData[20][8]}`);
            $('.pre').eq(2).text(`${data.GoogleSheetData[30][8]}`);
            $('.pre').eq(3).text(`${data.GoogleSheetData[40][8]}`);
            $('.star-rating .new-price').eq(0).text(`${data.GoogleSheetData[12][8]}`);
            $('.star-rating .new-price').eq(1).text(`${data.GoogleSheetData[22][8]}`);
            $('.star-rating .new-price').eq(2).text(`${data.GoogleSheetData[32][8]}`);
            $('.star-rating .new-price').eq(3).text(`${data.GoogleSheetData[42][8]}`);
            $('.new-price').eq(4).text(`${data.GoogleSheetData[12][8]}`);
            $('.new-price').eq(5).text(`${data.GoogleSheetData[22][8]}`);
            $('.new-price').eq(6).text(`${data.GoogleSheetData[32][8]}`);
            $('.new-price').eq(7).text(`${data.GoogleSheetData[42][8]}`);
            $('.loai-3 .tieu-de-3').eq(0).text(`${data.GoogleSheetData[2][9]}`);
            $('.loai-4 .tieu-de-2').eq(0).text(`${data.GoogleSheetData[2][10]}`);
            $('.loai-5 .tieu-de-3').eq(0).text(`${data.GoogleSheetData[2][11]}`);
            $('.loai-6 .tieu-de-2').eq(0).text(`${data.GoogleSheetData[2][12]}`);
            $('h3.nd-nguyen-lieu').eq(0).text(`${data.GoogleSheetData[8][9]}`);
            $('h3.nd-nguyen-lieu').eq(1).text(`${data.GoogleSheetData[8][10]}`);
            $('h3.nd-nguyen-lieu').eq(2).text(`${data.GoogleSheetData[8][11]}`);
            $('h3.nd-nguyen-lieu').eq(3).text(`${data.GoogleSheetData[8][12]}`);
            var r = 10;
            for (let i = 0; i < 6; i++) {
                $('.loai-3 li.nd-nguyen-lieu').eq(i).text(`${data.GoogleSheetData[r = r + 2][9]}`);
            }
            var r = 10;
            for (let i = 0; i < 6; i++) {
                $('.loai-4 li.nd-nguyen-lieu').eq(i).text(`${data.GoogleSheetData[r = r + 2][10]}`);
            }
            var r = 10;
            for (let i = 0; i < 6; i++) {
                $('.loai-5 li.nd-nguyen-lieu').eq(i).text(`${data.GoogleSheetData[r = r + 2][11]}`);
            }
            var r = 10;
            for (let i = 0; i < 6; i++) {
                $('.loai-6 li.nd-nguyen-lieu').eq(i).text(`${data.GoogleSheetData[r = r + 2][12]}`);
            }
        })
    }
    getData();
    $('.nav-item:nth-child(1)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-1').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.nav-item:nth-child(2)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-2').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.nav-item:nth-child(3)').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.kh').offset().top - 70
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
    $('.btn-mua').eq(0).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-3').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.btn-mua').eq(1).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-4').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.btn-mua').eq(2).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-5').offset().top - 70
        }, 400, 'easeInOutExpo');
    });
    $('.btn-mua').eq(3).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.loai-6').offset().top - 70
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

    function handleHover(cardIndex) {
        var isHidden = false;
        $('.card').eq(cardIndex).hover(function (e) {
            e.preventDefault();
            if (isHidden) {
                $('.card-img-top').eq(cardIndex).stop(true, true).fadeIn();
                $('.card-body').eq(cardIndex).stop(true, true).fadeIn();
                $('.card-footer').eq(cardIndex).stop(true, true).fadeIn();
                $('.btn-mua').eq(cardIndex).css('z-index', '-1');
                isHidden = false;
            } else {
                $('.card-img-top').eq(cardIndex).stop(true, true).fadeOut();
                $('.card-body').eq(cardIndex).stop(true, true).fadeOut();
                $('.card-footer').eq(cardIndex).stop(true, true).fadeOut();
                $('.btn-mua').eq(cardIndex).css('z-index', '10');
                isHidden = true;
            }
        });
    }

    // Áp dụng hàm xử lý hover cho các phần tử card với chỉ số tương ứng
    handleHover(0);
    handleHover(1);
    handleHover(2);
    handleHover(3);

    $('#myModal').on('submit', function (e) {
        e.preventDefault();

        var fName = $('input[name = ho]').val();
        var lName = $('input[name = ten]').val();
        var sdt = $('input[name = sdt]').val();
        if (fName == '' || lName == '' || sdt == '') {
            alert('Vui Lòng Điền Đầy Đủ: Họ , Tên và SĐT!');
        } else {
            alert('Vui lòng chờ 1 chút');
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbztiU29poTdvQcdTudDmM6EayHQmPVVWJL6Q-45qmyBZrUhDnTVuL7Jx2LX76mOr2br/exec', // Thay YOUR_SCRIPT_ID bằng ID của bạn
                method: 'Post',
                data: $(this).serialize(),
                success: function (response) {
                    alert(response); // Hiển thị thông báo từ server
                },
                error: function () {
                    alert('An error occurred.');
                }
            });
        }


    });
});
