(function ($) {
    $(function () {
        $('#phone-nav').click(function (e) {
            e.preventDefault()
            $("body").toggleClass("navshown");
            $(".nav-wrap").fadeToggle()
        });

        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 155,
            classes: {

                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup',
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                frozen: "headroom--frozen",


            }
        });
        header.init();


        $(".scroll-to-bottom a").click(function (e) {
            e.preventDefault()
            $('html, body').animate({
                scrollTop: $("#scroll-form-section").offset().top
            }, 400);

        });


        if ($('.case-large-slider-wrapper').length) {
            $('.case-large-slider-wrapper').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
                prevArrow: $('.carousel-prev'),
                nextArrow: $('.carousel-next'),
            });
            $(window).on('resize', function () {
                $('.case-large-slider-wrapper').slick('resize');

            });
        }

        if ($('.case-study-slider-wrapper').length) {
            $('.case-study-slider-wrapper').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                slide: '.case-study-card',
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                            dots: true,
                        }
                    },

                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            swipe: true,
                            dots: false,
                        }
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipe: true,
                            dots: false,
                            slide: '.mobile-case-study',
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.case-study-slider-wrapper').slick('resize');

            });
        }

        $('.dmarc').click(function (e) {
            e.preventDefault()
            $("body").addClass("popup-show");
            $(".dmarc-white").fadeIn()
        });
        $('.remove-icon').click(function (e) {
            e.preventDefault()
            $("body").removeClass("popup-show");
            $(".dmarc-white").fadeOut()
        });

        $('.dmarc').click(function (e) {
            e.preventDefault()
            $("body").addClass("popup-show");
            $(".dmarc-black").fadeIn()
        });
        $('.remove-icon').click(function (e) {
            e.preventDefault()
            $("body").removeClass("popup-show");
            $(".dmarc-black").fadeOut()
        });

        $('.bmi').click(function (e) {
            e.preventDefault()
            $("body").addClass("popup-show");
            $(".bmi-popup").fadeIn()
        });
        $('.remove-icon').click(function (e) {
            e.preventDefault()
            $("body").removeClass("popup-show");
            $(".bmi-popup").fadeOut()
        });

        $(window).on('beforeunload', function () {
            $(window).scrollTop(0);
        });

        $('.toggle-btn ul li').click(function () {
            $('.toggle-btn ul li').removeClass('toggle-active');
            $(this).addClass('toggle-active');
            $('.tab-wrap .sendmarc-offer-btn-content').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });



        var main_wrap_height = $('.main-wrap').outerHeight() / 2;
        console.log(main_wrap_height)


        $(window).on('scroll', function () {
            var scrollY = $(this).scrollTop();


            if (main_wrap_height <= scrollY) {
                $('body').addClass('heroHide')
            } else {
                $('body').removeClass('heroHide')
            }
        })




        if ($('.hero-wrap').length) {
            var hero = document.querySelector(".hero-wrap");

            ScrollTrigger.create({
                trigger: ".hero-spacer",
                start: "0% 0%",
                end: "100% 0%",
                scrub: true,
                animation: gsap.fromTo(hero, {
                    y: "0"
                }, {
                    y: "-50vh",
                    ease: "none"
                }),
            });
        }

        if ($(window).width() > 767) {
            siteFooter();
            $(window).resize(function () {
                siteFooter();
            });

            function siteFooter() {
                var siteContent = $('.main-content-wrap');
                var siteContentHeight = siteContent.height();
                var siteContentWidth = siteContent.width();

                var siteFooter = $('.main-footer-section');
                var siteFooterHeight = siteFooter.height();
                var siteFooterWidth = siteFooter.width();


                siteContent.css({
                    "padding-bottom": siteFooterHeight + 130
                });
            };


        }






        if ($('.logo-cards-row-first').length) {
            $('.logo-cards-row-first').marquee({
                direction: 'left',
                duration: 60000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }


        if ($('.logo-cards-row-alt').length) {
            $('.logo-cards-row-alt').marquee({
                direction: 'right',
                duration: 60000,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }


        if ($('#type-write').length) {
            var text_1 = $('.text_1').text()
            var text_2 = $('.text_2').text()
            var text_3 = $('.text_3').text()
            var text_4 = $('.text_4').text()

            $("#type-write").typed({
                strings: [text_1, text_2, text_3, text_4],
                stringsElement: null,
                typeSpeed: 80,
                startDelay: 500,
                backSpeed: 80,
                backDelay: 500,
                loop: true,
                loopCount: 500,
                showCursor: false,
                cursorChar: "|",
                attr: null,
                contentType: 'html',
            });

        }

        // Start Partners Js

        $('.why-with-us-slider-wrap').each(function () {
            var $slider = $(this);
            if ($slider.length) {
                var currentSlide;
                var slidesCount;
                var sliderCounter = document.createElement('div');
                sliderCounter.classList.add('slide-count-wrap');

                var updateSliderCounter = function (slick, currentIndex) {
                    currentSlide = slick.slickCurrentSlide() + 1;
                    slidesCount = slick.slideCount;
                    $(sliderCounter).html('<span class="current">' + '' + currentSlide + '</span>' + '<em>' + ' |' + '</em>' + '<span class="total">' + ' ' + slidesCount + '</span>')
                };

                $slider.on('init', function (event, slick) {
                    $slider.append(sliderCounter);
                    updateSliderCounter(slick);
                });

                $slider.on('afterChange', function (event, slick, currentSlide) {
                    updateSliderCounter(slick, currentSlide);
                });

                $slider.slick({
                    arrows: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3500,
                    navigation: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    fade: true,
                    adaptiveHeight: false,
                });
            }

        })



        if ($('.partners-contact-wrap').length) {

            var input = document.querySelector("#number");
            window.intlTelInput(input, {
                geoIpLookup: function (callback) {
                    $.get("http://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "";
                        callback(countryCode);
                    });
                },
                initialCountry: "za"

            });

        }

        if ($('.logo-blocks-component-slider-wrap').length) {
            $('.logo-blocks-component-slider-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.logo-blocks-component-slider-wrap').slick('resize');
            });
        }

        // End Partners Js

        // Start Blog Article
        if ($('.blog-cards-light').length) {
            $('.blog-cards-light').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.blog-cards-light').slick('resize');
            });
        }
        // End Blog Article


        // Start About Js
        if ($('.team-card-wrap').length) {
            $('.team-card-wrap').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                navigation: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            swipe: true,
                        }
                    },

                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            infinite: true,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.team-card-wrap').slick('resize');

            });
        }

        if ($('.blog-cards-press').length) {
            $('.blog-cards-press').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                responsive: [

                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            swipe: true,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.blog-cards-press').slick('resize');

            });
        }

        if ($('.investors-full-item-wrap').length) {
            $('.investors-full-item-wrap').slick({
                arrows: false,
                infinite: false,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
                adaptiveHeight: true,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            fade: false,
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.investors-full-item-wrap').slick('resize');
            });
        }

        if ($('.forty-lead-cards-wrap').length) {
            $('.forty-lead-cards-wrap').slick({
                autoplay: false,
                infinite: false,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.forty-lead-cards-wrap').slick('resize');
            });
        }


        $('.read-btn').click(function (e) {
            e.preventDefault();
            $('.moretext').slideToggle();
            if ($('.read-btn').text() == "Read more") {
                $(this).text("Read less")
            } else {
                $(this).text("Read more")
            }
        });
        // End About Js


            $('.tab-trigger a.btn').click(function () {
                $('.tab-trigger').removeClass('tab-active');
                $(this).addClass('tab-active');
                $('.bio-modal-item').removeClass('modalShown');
                $('.bio-modal-wrap').fadeIn();
                $('body').addClass('modalOpen');

                var activeTabTrigger = $(this).attr('href');
                console.log(activeTabTrigger)
                $(activeTabTrigger).addClass('modalShown');
                
                return false;
                
                
                
            });
        
        $('.bio-modal-close').click(function(){
            $('.bio-modal-wrap').fadeOut();
            $('body').removeClass('modalOpen');
        })

        
      if ($('.bubble').length) {
          var bubble = document.querySelector(".bubble"),
              links = document.querySelectorAll(".link"),
              linkGrid = document.querySelector(".grid"),
              linkList = document.querySelector(".list"),
              linkUnknown = document.querySelector(".unknown");

          links.forEach(item => {
              item.addEventListener("click", function (event) {
                  if (event.target.classList.contains("grid")) {
                      bubble.classList.remove("list-active", "unknown-active")
                      bubble.classList.add("grid-active")
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkGrid.classList.add("active")
                  }
                  if (event.target.classList.contains("list")) {
                      bubble.classList.remove("grid-active", "unknown-active")
                      bubble.classList.add("list-active")
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkList.classList.add("active")
                  }
                  if (event.target.classList.contains("unknown")) {
                      bubble.classList.remove("grid-active", "list-active")
                      bubble.classList.add("unknown-active")
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkUnknown.classList.add("active")
                  }
              }, false);
              item.addEventListener("mouseenter", function (event) {
                  var width = event.target.clientWidth + "px";
                  bubble.style.width = width;
                  if (event.target.classList.contains("grid")) {
                      bubble.style.left = "4px"
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkGrid.classList.add("active")
                  }
                  if (event.target.classList.contains("list")) {
                      bubble.style.left = 4 + linkGrid.clientWidth + "px"
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkList.classList.add("active")
                  }
                  if (event.target.classList.contains("unknown")) {
                      bubble.style.left = 4 + linkGrid.clientWidth + linkList.clientWidth + "px"
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkUnknown.classList.add("active")
                  }
              }, false);
              item.addEventListener("mouseleave", function (event) {
                  if (bubble.classList.contains("grid-active")) {
                      bubble.style.width = linkGrid.clientWidth + "px";
                      bubble.style.left = "4px"
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkGrid.classList.add("active")
                  }
                  if (bubble.classList.contains("list-active")) {
                      bubble.style.width = linkList.clientWidth + "px";
                      bubble.style.left = 4 + linkGrid.clientWidth + "px"
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkList.classList.add("active")
                  }
                  if (bubble.classList.contains("unknown-active")) {
                      bubble.style.width = linkUnknown.clientWidth + "px";
                      bubble.style.left = 4 + linkGrid.clientWidth + linkList.clientWidth + "px"
                      links.forEach(item => {
                          item.classList.remove("active")
                      });
                      linkUnknown.classList.add("active")
                  }
              }, false);
          });

          if (bubble.classList.contains("grid-active")) {
              bubble.style.width = linkGrid.clientWidth + "px";
              bubble.style.left = "4px"
          }
          if (bubble.classList.contains("list-active")) {
              bubble.style.width = linkList.clientWidth + "px";
              bubble.style.left = 4 + linkGrid.clientWidth + "px"
          }
          if (bubble.classList.contains("unknown-active")) {
              bubble.style.width = linkUnknown.clientWidth + "px";
              bubble.style.left = 4 + linkGrid.clientWidth + linkList.clientWidth + "px"
          }

      }
        
        if($('.blog-article').length){
            $('body').addClass('blog-article-page')
        }


    }) // End ready function.

})(jQuery)

