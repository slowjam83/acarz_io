$(document).ready(function () {
    // loading script
    $.fakeLoader({
        timeToHide: 700,
        bgColor: '#151d2b',
        spinner: "spinner5"
    });

    // animation effect
    new WOW().init();

    var header = $(".header");
    var mobileBtn = $("#mobileBtn");
    var gnbMenu = $(".gnb > li > a");
    var body = $("body");

    headerScrolled();
    mobileVisualHeight();
    bodyOverflow();
    btnTop();

    $(window).on('resize', function () {
        headerScrolled();
        mobileVisualHeight();
        mobileSizeResponsive();
        bodyOverflow();
    });

    $(document).on('scroll', function () {
        headerScrolled();
        bodyOverflow();
        btnTop();
    });

    // header scroll background
    function headerScrolled() {
        if ($(window).scrollTop() > 70) {
            header.addClass("scrolled");
        }
        else {
            header.removeClass("scrolled");
        }
    }

    // mobile header hamburger
    $('#mobileBtn').click(function () {
        header.toggleClass("mobile-header");
        mobileBtn.toggleClass("active");
        body.toggleClass("over-hidden");
    });

    function mobileSizeResponsive() {
        if ($(window).width() > 1199) {
            header.removeClass("mobile-header");
            body.removeClass("over-hidden");
            mobileBtn.removeClass("active");
        }
    }

    function bodyOverflow() {
        if (header.hasClass("mobile-header")) {
            body.addClass("over-hidden");
        } else {
            body.removeClass("over-hidden");
        }
    }

    // dropdown
    $(".dropdown > button").click(function () {
        var dropdownMenu = $(this).next("ul.dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.slideUp(150);
        } else {
            dropdownMenu.slideDown(150);
        }
        return false;
    });

    // go section
    gnbMenu.click(function() {
        var sectionName = $(this).attr("href");
        var sectionTop = $(sectionName).offset().top;
        if ($(window).width() > 1199) {
            $("html, body").animate({scrollTop: sectionTop - 89}, 700, "easeOutQuad");
            return false;
        } else {
            $("html, body").animate({scrollTop: sectionTop - 70}, 300, "easeOutQuad");
            header.removeClass("mobile-header");
            mobileBtn.removeClass("active");
            body.removeClass("over-hidden");
            return false;
        }
    });

    // visual swiper
    var visualSwiper = new Swiper('.visual-wrap .swiper-container', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        loop: false,
        speed : 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    visualSwiper.on('slideChange', function () {
        $('.swiper-counter .current').html(this.activeIndex + 1);
    });

    // mobile visual height
    function mobileVisualHeight() {
        if ($(window).width() < 768) {
            var browserHeight = $(window).outerHeight();
            var visualSlide = $(".visual-wrap .swiper-container .swiper-slide");
            visualSlide.css({"min-height": browserHeight});
        }
    }

    // video script
    $(".video-container").click(function(){
        $(this).addClass("video-played").find("video").attr("controls","true").get(0).play();
    });

    // technology tab swiper
    var techTab = new Swiper('.tech-tab-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
    });
    var techContents = new Swiper('.tech-swiper-content', {
        slidesPerView: 1,
        autoHeight: true,
        thumbs: {
            swiper: techTab
        }
    });

    // business tab swiper
    var businessTab = new Swiper('.business-tab-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
        breakpoints: {
            575: {
                slidesPerView: 3,
            },
            375: {
                slidesPerView: 2,
            },
        }
    });
    var businessContents = new Swiper('.business-swiper-content', {
        slidesPerView: 1,
        autoHeight: true,
        thumbs: {
            swiper: businessTab
        }
    });

    // roadmap swiper
    var roadmapSwiper = new Swiper('.roadmap-swiper .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        autoHeight: true,
        loop: false,
        speed : 500,
        initialSlide : 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });

    // team popup
    $(".team-img").click(function() {
        $(this).next().next(".team-popup-wrap").css({"display" : "block"});
        body.addClass("modal-over-hidden");
    });

    $(".team-link-none").click(function() {
        $(this).parent().next(".team-popup-wrap").css({"display" : "block"});
        body.addClass("modal-over-hidden");
    });

    $(".team-popup-wrap .btn-close").click(function () {
        $(this).closest(".team-popup-wrap").css({"display" : "none"});
        body.removeClass("modal-over-hidden");
    });

    // load more script
    $(function() {
        var item = $(".team-development .team-list-wrap .team-item");
        item.slice(0, 32).css({"display" : "flex"});
        $("#loadMore").on("click", function(e) {
            $(".team-development .team-list-wrap .team-item:hidden").slice(0, 8).fadeIn(1000).css({"display" : "flex"});
            if ($(".team-development .team-list-wrap .team-item:hidden").length == 0) {
                $("#loadMore").fadeOut("500");
            }
        });
    });

    // news swiper
    var swiper = new Swiper('.news-swiper .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        }
    });    
});