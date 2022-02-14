(function ($) {

    "use strict";

    $(".openForm").on('click', function () {
        $('.subscribeModal-lg').modal('show');
    });

    function myMap() {

        if ($("#gmap").length > 0) {

            var myLatlng = new google.maps.LatLng(30.6977212, 76.6919388);
            var mapOptions = {
                zoom: 16,
                center: myLatlng
            }
            var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                title: "Our Office"
            });

            marker.setMap(map);
        }
    }

    myMap();

    AOS.init({
        useClassNames: true,
        initClassName: false,
        animatedClassName: 'animated',
        once: true
    });

    if ($(".list-wraper li").length > 0) {

        var filterizd = $('.filtr-container').filterizr({
            layout: 'packed'
        });

        $(".list-wraper li").on("click", function () {

            $(".list-wraper li").removeClass("active");

            $(this).addClass("active");
        });
    }

    $('.counter').counterUp({
        delay: 100,
        time: 5000
    });

    function fixed_menu() {
        var wind = $(window);
        var menuHeight = $(".main-menu").height();
        wind.on("scroll", function () {
            var scrollTop = wind.scrollTop();
            var win_wide = wind.width();
            if (scrollTop > menuHeight && win_wide > 991) {
                $(".main-menu").addClass("fixed-top");
            } else {
                $(".main-menu").removeClass("fixed-top");
            }
        });
    }

    // fixed_menu();

    function scrolltop() {
        var wind = $(window);
        wind.on("scroll", function () {
            var scrollTop = wind.scrollTop();
            if (scrollTop >= 500) {
                $(".scroll-top").fadeIn("slow");
            } else {
                $(".scroll-top").fadeOut("slow");
            }
        });

        $(".scroll-top").on("click", function () {
            var bodyTop = $("html, body");
            bodyTop.animate({
                scrollTop: 0
            }, 800, "easeOutCubic");
        });

    }

    scrolltop();
    $('.play-button').magnificPopup({
        type: 'iframe',

    });
    
})(jQuery);