/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template :    MAMA Host
 * Author :      Ideal Brothers
 * Author URI :  
 * Version :     1.0
 *
 * --------------------------------------------------------------------------- 
 *
 */


/* Custom Js (Jquery) */


jQuery(function ($) {'use strict';


    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


    $(document).ready(function () {


        // Our client's carousel setup... (OWL carousel)
        $("#client-carousel").owlCarousel({
            items: 6,
            autoplay: true,
            loop: true,
            margin: 15,
            nav: true,
            navText: ['<span class="fa fa-angle-double-left"></span>', '<span class="fa fa-angle-double-right"></span>'],
            responsive:{
                0:{
                    items:1,
                },
                767:{
                    items:3,
                },
                991:{
                    items:5,
                },
                1200: {
                    items: 6,
                },
            }
        });




        // Count Down Setup...
        $('.count').counterUp({
            delay: 20,
            time: 1500
        });



        // Testimonial Carousel Setup...
        $(".testi-carousel").owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            items : 1,
            loop: true,
            dots: true,
            responsive:{
                0:{
                    items: 1,
                },
                991:{
                    items: 1,
                },
                1200: {
                    items: 2,
                },
            },
            margin: 0,
        });




        // Navigation Bar dropdown on HOVER....
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(200);
            $(this).addClass('on');
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(200);
            $(this).removeClass('on');
        });
        $('.dropdown-in').hover(function(){
            $(this).toggleClass('active');
        });
        $('.navbar .navbar-toggle.hamburger').click(function () {
            $(this).toggleClass('rotate');
        })
        $('.dropdown-in a').click(function(e) {
            e.stopPropagation();
        });





        // Adjust the slider height...
        $('#slider .item').height($('#slider').height());



        // Footer newsletter input focus animation...
        $('#footer .newsletter input').focus(function () {
            $(this).parent().addClass('focus');
        });
        $('#footer .newsletter input').focusout(function () {
            $(this).parent().removeClass('focus');
        });



        // Back to top button setup...
        $('.back-to-top').hide();
        $(".back-to-top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 3000);
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 2100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });




        // Slider Pricing System setup...
        // Adjust These Arrays value with your pricing plans.... Your can add more values or can reduce them...
        var processor = ['1.4GHz', '2.1 GHz', '3.4 GHz', '3.8 GHz', '4.1 GHz', '4.3 GHz'];
        var ram = ['1 GB', '2 GB', '3 GB', '4 GB', '8 GB', '16 GB'];
        var vSwap = ['1 GB', '2 GB', '3 GB', '4 GB', '8 GB', '16 GB'];
        var storage = ['10 GB', '30 GB', '50 GB', '100 GB', '200 GB', '500 GB'];
        var bandWidth = ['20 GB', '50 GB', '100 GB', '500 GB', '1000 GB', '5000 GB'];
        var ip = [1,2,3,4,5,6];
        var price = [19.99,29.99,39.99,49.99,59.99,89.99];

        $('#pricing-slider').slider({
            range: 'min',
            min: 1,
            max: 6,     // Input your maximum pricing options here..
            value: 2,
            animate: true,
            slide: function( event, ui ) {
                $('#pricing-2 .info-item.processor .value').html(processor[ui.value - 1]);
                $('#pricing-2 .info-item.ram .value').html(ram[ui.value - 1]);
                $('#pricing-2 .info-item.vswap .value').html(vSwap[ui.value - 1]);
                $('#pricing-2 .info-item.storage .value').html(storage[ui.value - 1]);
                $('#pricing-2 .info-item.bandw .value').html(bandWidth[ui.value - 1]);
                $('#pricing-2 .info-item.ip .value').html(ip[ui.value - 1]);
                $('#pricing-2 .order-button .price').html('$' + price[ui.value - 1]);
            }
        });



        // Rotated text in footer...
        $('#footer .contact-top .item h5').arctext({
            radius: 65,
        });




        
        // HEADER Slider animation setup...
        (function ($) {
            function doAnimations(elems) {
                var animEndEv = 'webkitAnimationEnd animationend';
                elems.each(function () {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function () {
                        $this.removeClass($animationType);
                    });
                });
            }
            var $myCarousel = $('#header-carousel'),
                $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

            $myCarousel.carousel();
            doAnimations($firstAnimatingElems);
            $myCarousel.carousel('pause');

            $myCarousel.on('slide.bs.carousel', function (e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });
        })(jQuery);




        // Color swithcer...
        $('.cs .c1 button').click(c1);
        $('.cs .c2 button').click(c2);
        $('.cs .c3 button').click(c3);
        $('.cs .c4 button').click(c4);
        $('.cs .c5 button').click(c5);
        $('.cs .c6 button').click(c6);
        $('.cs .c7 button').click(c7);
        $('.cs .c8 button').click(c8);
        $('.cs .c9 button').click(c9);
        $('.cs .c10 button').click(c10);
        $('.cs .c11 button').click(c11);
        $('.cs .c12 button').click(c12);


        function c1() {
            $('body').attr('class', 'color-1');
        }
        function c2() {
            $('body').attr('class', 'color-2');
        }
        function c3() {
            $('body').attr('class', 'color-3');
        }
        function c4() {
            $('body').attr('class', 'color-4');
        }
        function c5() {
            $('body').attr('class', 'color-5');
        }
        function c6() {
            $('body').attr('class', 'color-6');
        }
        function c7() {
            $('body').attr('class', 'color-7');
        }
        function c8() {
            $('body').attr('class', 'color-8');
        }
        function c9() {
            $('body').attr('class', 'color-9');
        }
        function c10() {
            $('body').attr('class', 'color-10');
        }
        function c11() {
            $('body').attr('class', 'color-11');
        }
        function c12() {
            $('body').attr('class', 'color-12');
        }


        var count = $('.cs-main').outerWidth();
        $('.cs').css('left',-count);
        

        $('.cs .icon').click(function(){
            $('.cs').toggleClass('on');
        });



    });

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
