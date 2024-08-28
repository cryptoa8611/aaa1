
(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    // Back to top button
    $(document).ready(function () {
        // Thêm hiệu ứng khi cuộn trang
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
    
        // Thêm hiệu ứng cho nút "back-to-top"
        $('.back-to-top').click(function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            $('html, body').animate({ scrollTop: 0 }, {
                duration: 1500,
                easing: 'easeInOutExpo',
                step: function (now, fx) {
                    // Tinh chỉnh các hiệu ứng nếu cần
                }
            });
        });
    });
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                // Desktop: Hover menu
                $('.navbar .dropdown').off('click').on('mouseenter', function () {
                    var $dropdownMenu = $(this).find('.dropdown-menu');
                    $dropdownMenu.stop(true, true).slideDown(200);
                }).on('mouseleave', function () {
                    var $dropdownMenu = $(this).find('.dropdown-menu');
                    $dropdownMenu.stop(true, true).slideUp(200);
                });
            } else {
                // Mobile: Click menu
                $('.navbar .dropdown').off('mouseenter mouseleave').on('click', function (e) {
                    e.stopPropagation();
                    var $dropdownMenu = $(this).find('.dropdown-menu');
                    $('.navbar .dropdown-menu').not($dropdownMenu).slideUp(200); // Close other menus
                    $dropdownMenu.stop(true, true).slideToggle(200);
                    return false; // Prevent default click action
                });
            }
        }
    
        // Initialize and handle resize
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    
        // Close dropdown menu if click outside
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.navbar .dropdown').length) {
                $('.navbar .dropdown-menu').slideUp(200);
            }
        });
    });
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 8,
        time: 2000
    });
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        });
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        });
    });
    
    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i className="fa fa-angle-left" aria-hidden="true"></i>',
            '<i className="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
