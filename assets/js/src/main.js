$(document).ready(function () {



    (function () {
        // Your base, I'm in it!
        var originalAddClassMethod = jQuery.fn.addClass;
        var originalRemoveClassMethod = jQuery.fn.removeClass;

        jQuery.fn.addClass = function () {
            // Execute the original method.
            var result = originalAddClassMethod.apply(this, arguments);

            // trigger a custom event
            jQuery(this).trigger('cssClassChanged');

            // return the original result
            return result;
        }

        jQuery.fn.removeClass = function () {
            // Execute the original method.
            var result = originalRemoveClassMethod.apply(this, arguments);

            // trigger a custom event
            jQuery(this).trigger('cssClassChanged');

            // return the original result
            return result;
        }

    })();




    $(".imgLiquid").imgLiquid();

    $(".product_slide").imgLiquid({
        fill: false
    });

    $(".whiteBox").css("display", "none");

    function wrapProducts(element) {
        element.each(function () {
            var href = $(this).find("a").attr("href");
            console.log(href);
            $(this).wrap("<a class='product' href='" + href + "'></a>");
            var slide = $(this).find(".product_slide, .ecommerceSearchImage img");
            if (slide.parent().is("a")) {
                slide.unwrap();
            }
            $(this).find(".productName a, .ecommerceSearchTitle a").replaceWith(function () {
                return $("<span>" + $(this).html() + "</span>");
            });
            $(this).find(".product_view_btn a, .ecommerceSearchUrl a").remove();


        });
    }

    wrapProducts($(".product_item"));
    $(document).ajaxStop(function () {
        console.log("DONE!");
        wrapProducts($(".ecommerceSearchItem"));
        $(".ecommerceSearchImage").wrap("<div class='product_img'></div>");
        $(".ecommerceSearchImage").imgLiquid({
            fill: false
        });
        $(".product").matchHeight();
        $(".matchHeight").matchHeight();




    });





    $(window).load(function () {


        var slideshows = $('.cycle-slideshow').on('cycle-prev cycle-next', function (e, opts) {
            // advance the other slideshow
            slideshows.not(this).cycle('goto', opts.currSlide);
            // resize function for images - fired upon next / prev change
            $('#cycle-1 .cycle-slide').imgLiquid();
        });

        var slideshows2 = $('.cycle-slideshow').on('cycle-pager-activated', function (e, opts) {
            // advance the other slideshow
            slideshows2.not(this).cycle('goto', opts.currSlide);
            // resize function for images - fired upon pages change
            //$('#cycle-1 .cycle-slide').imgLiquid();
        });

        $('#cycle-2 .cycle-slide').click(function () {
            var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
            slideshows.cycle('goto', index);
        });

        $('#carousel .cycle-slide').imgLiquid();
        $('#cycle-1 .cycle-slide').imgLiquid({
            fill: false,
            horizontalAlign: "center",
            verticalAlign: "50%"
        });
        var query700 = Modernizr.mq('(min-width: 700px)');
        if (query700) {
            $('#cycle-1>div').zoom();
        }
        //$('.resp-tabs-list, .resp-tabs-container').addClass("tabs");
        // $('.product-tabs').easyResponsiveTabs({
        //     tabidentify: 'tabs'
        // });

        //        $('.ecommerceOrders table').stacktable();

    });








    $(window).load(function () {
        $(".product").matchHeight();
        $(".fiftyPercent").matchHeight();
        $(".matchHeight").matchHeight();
        $(".whiteBox").delay(500).fadeIn(500);




    });

    $("#navCategory > ul > li > a").click(function (e) {
        e.preventDefault();

        var $thisUl = $(this).siblings("ul");
        $("#navCategory .open").not($thisUl).removeClass("open")
        $thisUl.toggleClass("open");
        $(".up").not(this).removeClass("up");
        $(this).toggleClass("up");
    });


    $(".menu-toggle").click(function () {
        $(this).toggleClass("active");
        $(".categories").toggleClass("open");
    });

    $(".search").click(function () {
        console.log("clicked");
        $("#searchBox").addClass("active");
    });


    $(".videoLink").magnificPopup({

        type: 'iframe',
    });

    (function () {
        var timeOut;
        $(".search").mouseleave(function () {
            timeOut = setTimeout(function () {
                $("#searchBox").removeClass("active");
            }, 1000);
        });

        $(".search").mouseenter(function () {
            clearTimeout(timeOut);
        })

    })();

    (function () {
        var distanceScrolled;
        var menuItems = $("nav li");
        //        var logo = $(".logo img");
        //
        //        logo.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
        //            $(".matchHeight").matchHeight._update();
        //
        //        });
        $("body").on('cssClassChanged', function (e) {
            console.log("BODY CLASS CHANGED!");

        });




        $(window).scroll($.throttle(200, function () {
            distanceScrolled = $(window).scrollTop();
            console.log(distanceScrolled);
            if (distanceScrolled >= 400) {
                $("body").addClass("scrolled");


            } else {
                $("body").removeClass("scrolled");


            }
        }));
    })();




});
