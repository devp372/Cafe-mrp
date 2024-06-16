/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';


(function ($) {




    $(window).on("scroll touchmove click", function () {
        $('#header_nav').toggleClass('tiny',(( $(document).scrollTop() > 10) || ($('.main_menu').scrollTop() > 10))) ;
        $('.cart.site-btn').toggleClass('move_up',(( $(document).scrollTop() > 10) || ($('.main_menu').scrollTop() > 10))) ;
    });

    var DEBUG = false;


    $( "a:contains('Go Back')" ).parent().append('<a href="checkout.html" class="cart site-btn"></a>');
    $( "a:contains('Go Back')" ).parent().css("width","100%");
    $( "a:contains('Go Back')" ).css("float","left");
    $('.after').html('C');

    /*------------------
        Preloader
    --------------------*/


    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(100).fadeOut("fast");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2000,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });

    $('.hero__categories ul').slideUp(400);
    $('.dropdown').on('click', function () {



        //$(this).parent().parent().css('background-color', 'red');
        $('.dropdown').parent().find('.after').removeClass('rotated');
        $('.hero__categories ul').slideUp(400);
        $('.dropdown').removeClass('when_droped');
        $('.hero__categories').removeClass('larger')
        if($(this).parent().find('ul').is(":hidden")) {
            $(this).parent().find('.after').toggleClass('rotated');
            $(this).parent().find('ul').slideToggle(400);
            $(this).parent().toggleClass('larger');
            $(this).toggleClass('when_droped');
        }
    });

    $('.main_drop').parent().find('.h_iframe').slideUp(400);

    $('.main_drop').on('click', function () {
        $('.main_drop').parent().find('.h_iframe').slideUp(400);
        if ($(this).parent().find('.h_iframe').is(":hidden")) {
            $(this).parent().find('.h_iframe').slideToggle(400);
            $([document.documentElement, document.body]).animate({
                scrollTop: $(this).offset().top
            }, 200);
        }
    });



    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */

    var proQty = $('.pro-qty');

    $('.temp_menu').hide();

    //proQty.parent().parent().parent().find('.itemName').text();

    // var temp = "Cream of Mushroom"
    // DEBUG && console.log(temp);
    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {name : "Cream of Mushroom"},
    //     success: function(data) {
    //         var t2 = temp + data;
    //         DEBUG && console.log(t2);
    //
    //         if (data != 1) {
    //             $('h6:contains("Cream of Mushroom")').parent().css('background-color', 'red');
    //         }
    //         else {
    //             $('h6:contains("Cream of Mushroom")').parent().css('background-color', 'green');
    //         }
    //
    //     }
    // });

    var proQty = $('.pro-qty');
    var add = $('.add');
    add.hide();
    proQty.hide();
    DEBUG && console.log("bhlal");


    var item = $('.itemName').eq(0).text();
    var tax;

    $.ajax({
        type: 'post',
        url: 'php/get_tax.php',
        data: {name: item},
        success: function (data) {
            DEBUG && console.log("TAX IS\n\n\n\n\n" + data);
            tax = data;

        }
    });
    DEBUG && console.log(tax);

    var doc = document.implementation.createHTMLDocument("soups.html").documentElement;



    $('.itemName').each(function () {
        DEBUG && console.log("bhlal");
        var itemName = $(this).text();
        var $itemName = $(this);
        //$(this).css('background-color', 'yellow');
        DEBUG && console.log(itemName);
        if ($(this).hasClass('can_drop')) {
            $(this).parent().find('li').each(function () {
                DEBUG && console.log("here");
                var selected = $(this).find('p').text();
                DEBUG && console.log("hello  " + selected);
                var price = $(this).find('.price');
                var name = itemName + " " + selected;
                DEBUG && console.log(name);
                DEBUG && console.log("nameis " + name);

                $.ajax({
                    type: 'post',
                    url: 'php/price.php',
                    data: {name: name},
                    success: function (data) {
                        DEBUG && console.log("new price" + " " + data + "nameis " + name);

                        if (price.parent().hasClass('man')) {
                            DEBUG && console.log("new price of man" + " " + data);
                            price.val("₹" + data);
                        }


                        price.html("₹ " + data);

                    }
                });

                var tableNumber = sessionStorage.getItem("tableNumber");

                if (price.parent().hasClass('man') == 0) {

                    $.ajax({
                        type: 'post',
                        url: 'php/check_qty.php',
                        data: {name: name, tableNumber: tableNumber},
                        success: function (data) {
                            DEBUG && console.log(tableNumber);
                            DEBUG && console.log(data);
                            if (data == "") {
                                DEBUG && console.log("not cahnging");

                                price.parent().find('.add_drop').slideDown();
                                price.parent().find('.pro-qty').hide();

                            } else {
                                price.parent().find('input').val(data);
                                //price.html("₹ " + data);
                                price.parent().find('.add_drop').hide();
                                price.parent().find('.pro-qty').fadeIn();

                                price.parent().parent().parent().slideDown(400);
                                price.parent().parent().parent().parent().find('.after').toggleClass('rotated');
                                //$(this).parent().find('ul').slideToggle(400);
                                price.parent().parent().parent().parent().toggleClass('larger');
                                price.parent().parent().parent().parent().find('.dropdown').toggleClass('when_droped');
                                // proQty.fadeIn();
                                DEBUG && console.log("changing " + itemName);
                                //proQty.find('input').css('background-color', 'blue');

                            }


                        }
                    });
                }


            });

            DEBUG && console.log("can drop " + itemName);


        } else {
            var price = $(this).parent().find('.price');



            //$(this).css('background-color', 'yellow');

            //$("h6:contains("+ itemName +")").parent().css('background-color', 'blue');
            $.ajax({
                type: 'post',
                url: 'php/price.php',
                data: {name: itemName},
                success: function (data) {

                    if (price.parent().hasClass('man')) {
                        DEBUG && console.log("new price of man" + " " + data);
                        price.val("₹" + data);
                    }

                    price.html("₹ " + data);

                }
            });

            var tableNumber = sessionStorage.getItem("tableNumber");

            $.ajax({
                type: 'post',
                url: 'php/check_qty.php',
                data: {name: itemName, tableNumber: tableNumber},
                success: function (data) {
                    DEBUG && console.log(tableNumber);
                    DEBUG && console.log(data);
                    if (data == "") {
                        DEBUG && console.log("not cahnging" + itemName);

                        price.parent().find('.add').fadeIn();
                        price.parent().find('.pro-qty').hide();

                    } else {
                        if (price.parent().find('input').hasClass('price') == 0) {


                            price.parent().find('input').val(data);

                            //price.html("₹ " + data);
                            price.parent().find('.add').hide();
                            price.parent().find('.pro-qty').fadeIn();
                            // proQty.fadeIn();
                            DEBUG && console.log("changing " + itemName);
                            //proQty.find('input').css('background-color', 'blue');
                        }

                    }


                }
            });




        }
        DEBUG && console.log("LOGGGGGGING"+$itemName.text());
        $.ajax({
            type: 'post',
            url: 'php/manage.php',
            data: {name: itemName},
            success: function (data) {
                DEBUG && console.log("THIS IS MANAGE" + itemName + " " + data);

                if (data != 1) {
                    if ($itemName.parent().hasClass('man')) {
                        //price.parent().css('background-color', 'blue');
                        $itemName.parent().find('.hide_item').hide();
                    } else {
                        DEBUG && console.log("hining"+$itemName.text());
                        $itemName.parent().hide();
                    }


                } else {
                    if ($itemName.parent().hasClass('man')) {
                        //price.parent().css('background-color', 'green');
                        $itemName .parent().find('.show_item').hide();
                    }

                    //$("h6:contains("+ itemName +")").parent().css('background-color', 'green');
                }

            }
        });





    });

    var hide_item = $('.hide_item');

    hide_item.on('click', function () {

        var itemName = $(this).parent().parent().find('.itemName').text();
        ////window.alert(itemName);

        $.ajax({
            type: 'post',
            url: 'php/hide_show.php',
            data: {name: itemName, mode: 0},
            success: function (data) {

                DEBUG && console.log(data);

            }
        });
        $(this).hide();
        $(this).parent().find('.show_item').fadeIn();


    });

    var test_button = $('.test_button');
    test_button.on('click', function () {

        window.alert("SHIVAM WAS RIGHT");

    });

    var show_item = $('.show_item');

    show_item.on('click', function () {

        var itemName = $(this).parent().parent().find('.itemName').text();
        ////window.alert(itemName);

        $.ajax({
            type: 'post',
            url: 'php/hide_show.php',
            data: {name: itemName, mode: 1},
            success: function (data) {

                DEBUG && console.log(data);

            }
        });
        $(this).hide();
        $(this).parent().find('.hide_item').fadeIn();


    });
    var change = $('.change');

    change.on('click', function () {




        if ($(this).parent().hasClass('item_indrop')) {
            var selected = $(this).parent().find('p').text();
            var itemName = $(this).parent().parent().parent().parent().parent().parent().find('.itemName').text();
            itemName = itemName + " " + selected;
            //DEBUG && console.log(itemName+selected);

        } else {
            var itemName = $(this).parent().find('.itemName').text();
            DEBUG && console.log(itemName);
        }

        var newPrice = $(this).parent().find('.price').val();
        //DEBUG && console.log(newPrice);
        newPrice = newPrice.match(/(\d+)/);
        DEBUG && console.log(newPrice[0]);
        //window.alert(newPrice[0]);


        $.ajax({
            type: 'post',
            url: 'php/price_change.php',
            data: {name: itemName, price: newPrice[0]},
            success: function (data) {

                DEBUG && console.log(data);

            }
        });


        window.alert("Price Changed");
    });
    DEBUG && console.log("hiiiii");

    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {no : no},
    //     success: function(data) {
    //         if(data == 102) {
    //
    //
    //             //window.alert("it is was 101");
    //         } else {
    //             ////window.alert("removing veg hot and sour");
    //             var proQty = $('.pro-qty');
    //             var itemName = proQty.parent().parent().parent().find('.itemName').each(function() {
    //                 $(this).css('background-color', 'yellow');
    //                 var itemName = $(this).text();
    //                 $("h6:contains("+ itemName +")").parent().css('background-color', 'blue');
    //             });
    //             // var itemName = "Hot N Sour Soup (Vegetables)";
    //             // $("h6:contains("+ itemName +")").parent().css('background-color', 'yellow');
    //             ////window.alert(itemName[0].text());
    //
    //             //$("h6:contains("+ itemName +")").parent().css('background-color', 'green');
    //             // $('h6:contains("Hot N Sour Soup (Vegetables)")')
    //             //     .filter(function() { return $(this).children().length === 0;})
    //             //     .parent().css('background-color', 'red');
    //
    //         }
    //     }
    // });


    var table = $('.table');




    var no = 0;

    //DEBUG && console.log(no);


    var tableNo = $('.tableNo');
    //var logNo = $('.logNo');
    DEBUG && console.log("here");


    // logNo.on('click', function () {
    //     no = tableNo.val();
    //
    //     sessionStorage.setItem("tableNumber", no);
    //     ////window.alert(no);
    //
    // });
    var button = $('.button_button1');

    button.on('click', function () {



        var no = $(".tableNo option:selected").val();
        DEBUG && console.log("Tale number is " + no);
        if (no == "Select Table Number") {
            window.alert("Please Select a Table Number First")
        }
         else {
            //var tableNumber = document.querySelector('.tableNo').value;
            sessionStorage.setItem("tableNumber", no);
            //window.alert("hi");


            $.ajax({
                type: 'POST',
                url: "php/check_table.php",
                data: {tableNo: no},
                success: function (result) {
                    //window.alert(result);
                    if (result == "") {


                        //window.alert("no order");
                        window.location.assign("http://3.23.241.214/main_menu.html");


                    } else {

                        if (confirm('             DO YOU WANT TO START A NEW ORDER?\n\n\nAn incomplete order already exists for this table, \n\nPress CANCEL to complete that order or OKAY  to start a new order')) {
                            //alert('Thanks for confirming');

                            $.ajax({
                                type: 'POST',
                                url: "php/delete_old.php",
                                data: {tableNo: no},
                                success: function (result) {
                                    DEBUG && console.log(result);
                                    //window.alert("Thank you for placeing your order for ₹ " + sessionStorage.getItem("total"));
                                    window.location.assign("http://3.23.241.214/main_menu.html");


                                }

                            });


                        } else {
                            //alert('Why did you press cancel? You should have confirmed');
                            window.location.assign("http://3.23.241.214/main_menu.html");
                        }
                        //window.alert("ORDER EXISTS");
                        DEBUG && console.log(result);
                    }


                }


            });
        }
        //window.alert("end");


    });
    var button2 = $('.button_button2');
    // button2.css({
    //     "color": "green",
    //     "border": "2px solid green"
    // });
    button2.on('click', function () {
        var no = tableNo.val();
        //var tableNumber = document.querySelector('.tableNo').value;
        //sessionStorage.setItem("tableNumber", no);
        window.location.assign("http://3.23.241.214/checkout.html");

    });

    var retotal = $('.retotal');
    retotal.hide();
    retotal.on('click', function () {
        window.location.assign("http://3.23.241.214/checkout.html");

    });




    DEBUG && console.log("abc");

    add.on('click', function () {
        var temp = $(this).parent().parent().find(".itemName").text();
        var price = $(this).parent().parent().find(".price").text();
        //window.alert(price);
        price = price.substring(2);
        var category = $('.product').find('h3').text();
        temp = temp + " (" + category + ")";
        DEBUG && console.log(temp);

        //window.alert(price);

        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "php/test.php",
            data: {name: temp, qty: 1, tableNo: tableNumber, price: price, amount: price, tax: tax},
            success: function (result) {
                DEBUG && console.log('the data was successfully 123 into sent to the server');
            }

        })
        $(this).hide();
        $(this).parent().find('.pro-qty').fadeIn();


        ////window.alert(temp);


    });

    var add_drop = $('.add_drop');
    DEBUG && console.log("abc");

    add_drop.on('click', function () {
        var name = $(this).parent().parent().parent().parent().parent().parent().parent().find(".itemName").text();
        var selected = $(this).parent().parent().find('p').text();
        var price = $(this).parent().parent().find(".price").text();
        var category = $('.product').find('h3').text();

        DEBUG && console.log(name);

        price = price.substring(2);
        name = name + " " + selected;
        name = name + " (" + category + ")";
        DEBUG && console.log(price);
        DEBUG && console.log(name);

        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "php/test.php",
            data: {name: name, qty: 1, tableNo: tableNumber, price: price, amount: price, tax: tax},
            success: function (result) {
                DEBUG && console.log('the data was successfully 123 into sent to the server');
            }

        })
        $(this).hide();
        $(this).parent().find('.pro-qty').fadeIn();


        ////window.alert(temp);


    });


//    var value = proQty.parent().find('input').val();


//    if (value > 0) {
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    //proQty.append('<span class="inc qtybtn">+</span>');
//    } else {
//
//    }
    proQty.on('click', '.qtybtn', no, function () {
        ////window.alert(no);
        var $button = $(this);

        var oldValue = $button.parent().find('input').val();
        // $button.parent().parent().parent().css({
        //     "color": "green",
        //     "border": "2px solid green"
        // });
        oldValue = $button.parent().find('input').val();

        if ($button.parent().hasClass('pro_drop')) {
            var itemName = $button.parent().parent().parent().parent().parent().parent().parent().parent().find('.itemName').text();
            var selected = $button.parent().parent().parent().find('p').text();
            var category = $('.product').find('h3').text();

            itemName = itemName + " " + selected;
            itemName = itemName + " (" + category + ")";

            DEBUG && console.log(itemName);
            var price = $button.parent().parent().parent().find('h6').text();

            DEBUG && console.log(price);
        } else {
            var itemName = $button.parent().parent().parent().find('.itemName').text();
            var price = $button.parent().parent().parent().find('.price').text();
            var category = $('.product').find('h3').text();
            itemName = itemName + " (" + category + ")";
            DEBUG && console.log(itemName);


        }
        price = price.substring(2);
        DEBUG && console.log("price is "+ price);


        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        var tableNumber = sessionStorage.getItem("tableNumber");
        DEBUG && console.log(itemName);
        DEBUG && console.log(newVal);
        DEBUG && console.log(tableNumber);
        DEBUG && console.log(price);
        DEBUG && console.log(price * newVal);


        $.ajax({
            type: 'POST',
            url: "php/qty.php",
            data: {name: itemName, qty: newVal, tableNo: tableNumber, price: price, amount: price * newVal},
            success: function (result) {
                DEBUG && console.log("new qty is " + newVal);
                DEBUG && console.log("new qty is " + price);
                DEBUG && console.log("new qty is " + newVal);

                DEBUG && console.log(result);
            }

        });
        if (newVal == 0) {

            $.ajax({
                type: 'POST',
                url: "php/qty_zero.php",
                data: {name: itemName, qty: newVal, tableNo: tableNumber, price: price, amount: price * newVal},
                success: function (result) {
                    DEBUG && console.log("new qty is " + newVal);
                    DEBUG && console.log("new qty is " + price);
                    DEBUG && console.log("new qty is " + newVal);

                    console.log(result);
                }

            });

            $button.parent().parent().parent().find('.pro-qty').hide();
            $button.parent().parent().parent().find('.add').fadeIn();
            $button.parent().parent().parent().find('.add_drop').fadeIn();
            newVal = 1;
        }
        console.log(newVal)
        $button.parent().find('input').val(newVal);
    });


    var menu_btn = $('.menu_btn');
    menu_btn.html("<span class=\"menu_ico\">a</span><span class=\"menu_text\">Menu</span>");
    menu_btn.on('click', function () {

        $('.temp_menu').fadeToggle(100);
        $('.menu_btn').toggleClass('close_menu')
        if ($('.menu_btn').hasClass('close_menu')) {
            $('.close_menu').html("Close");
        }
        else {
            $('.menu_btn').html("<span class=\"menu_ico\">a</span><span class=\"menu_text\">Menu</span>");
        }
        $('.main_menu').toggleClass('blurred');
        $('.header').toggleClass('blurred');
        $('.noscroll').toggleClass('no_scroll')
        $(this).css("box-shadow", "0 0 8px #000")


    });

    $('.main_menu').on('click', function () {

        if($('.main_menu').hasClass('blurred')) {
            $('.temp_menu').fadeToggle(100);
            $('.menu_btn').toggleClass('close_menu')
            if ($('.menu_btn').hasClass('close_menu')) {
                $('.close_menu').html("Close");
            }
            else {
                $('.menu_btn').html("<span class=\"menu_ico\">a</span><span class=\"menu_text\">Menu</span>");
            }
            $('.close_menu').html("Close");
            $('.main_menu').toggleClass('blurred');
            $('.header').toggleClass('blurred');
            $('.noscroll').toggleClass('no_scroll')
        }
    })





















//     var proQty_drop = $('.po-qty_drop');
//     proQty_drop.hide();
//
//
//     proQty_drop.prepend('<span class="dec qtybtn_drop">-</span>');
//     proQty_drop.append('<span class="inc qtybtn_drop">+</span>');
//     //proQty.append('<span class="inc qtybtn">+</span>');
// //    } else {
// //
// //    }
//     proQty_drop.on('click', '.qtybtn_drop', no, function () {
//         ////window.alert(no);
//         var $button = $(this);
//
//         var oldValue = 1;
//         // $button.parent().parent().parent().css({
//         //     "color": "green",
//         //     "border": "2px solid green"
//         // });
//         oldValue = 1;
//         var itemName = $button.parent().parent().parent().find('.itemName').text();
//         var price = $button.parent().parent().parent().find('.price').text();
//         price = price.substring(2);
//         ////window.alert(price);
//
//
//         if ($button.hasClass('inc')) {
//             var newVal = parseFloat(oldValue) + 1;
//         } else {
//             // Don't allow decrementing below zero
//             if (oldValue > 0) {
//                 var newVal = parseFloat(oldValue) - 1;
//             } else {
//                 newVal = 0;
//             }
//         }
//         var tableNumber = sessionStorage.getItem("tableNumber");
//
//         $.ajax({
//             type: 'POST',
//             url: "qty.php",
//             data: {name: itemName, qty: newVal, tableNo: tableNumber, price: price, amount: price * newVal},
//             success: function (result) {
//                 DEBUG && console.log('the data was successfully 123 change qt into sent to the server');
//             }
//
//         });
//         $button.parent().find('input').val(newVal);
//     });


    var tableNumber = sessionStorage.getItem("tableNumber");

    $.ajax({
        type: 'POST',
        url: "php/checkout.php",
        data: {tableNo: tableNumber},
        success: function (result) {
            DEBUG && console.log(result);
            var values = JSON.parse(result);
            DEBUG && console.log(values[0]['item_name']);
            var len = values.length;
            DEBUG && console.log(len)
            var i = 0;
            var sum = 0;
            var gst = 0;
            var vat = 0;
            for (i = 0; i < len; i++) {
                var checkout_items = $('.checkout_items');
                // checkout_items.parent().find('.checkout__order__subtotal').find('span').html()
                sum = sum + (values[i]['amount']) * 1;

                if (values[i]['tax'] == "food") {
                    gst =  gst + ((values[i]['amount'] * 1.1) * 0.025);
                }
                else {
                    vat = vat + ((values[i]['amount'] * 1.1) * 0.2);
                }

                // var list_item = "<li style='border-top: 1px solid #ebebeb;'><div style='width: 46%; display: inline-block;' class='name'>" +values[i]['item_name'] + "</div> " +
                //     "<div style='width: 100px; display: inline; vertical-align: top;' class=\"quantity\">\n" +
                //     "                                    <div class=\"pro-qty\" style='width: 75px; align-self: center; '>\n" +
                //     "<span style='font-size: 12px; padding: 0px;' class=\"dec qtybtn1\">-</span>" +
                //     "                                        <input style='font-size: 12px;  padding: 0px display: inline;' type=\"submit\" value=\""+ values[i]['qty'] +"\" disabled=\"disabled\">\n" +
                //     "<span style='font-size: 12px;  padding: 0px;' class=\"inc qtybtn1\">+</span>" +
                //     "                                    </div>\n" +
                //     "                                </div>" +
                //     " <span class='pr'> ₹ " + values[i]['amount'] + "</span></li>";

                var list_item = "<li style='border-top: 1px solid #ebebeb;'><div class='name'>" +values[i]['item_name'] + "</div> " +

                    " <span class='pr'> ₹ " + values[i]['amount'] + "</span>" +
                    "<div style='width: 78px;\n" +
                    "display: inline;\n" +
                    "vertical-align: top;\n" +
                    "float: right;\n" +
                    "line-height: 5;' class=\"quantity\">\n" +
                    "                                    <div class=\"pro-qty\" style='width: 75px; align-self: center; line-height: 2; '>\n" +
                    "<span style='font-size: 12px;' class=\"dec qtybtn1\">-</span>" +
                    "                                        <input style='font-size: 12px;\n" +
                    "height: 25px;\n" +
                    "margin: 0px;\n" +
                    "width: 25px;\n" +
                    "position: relative;\n" +
                    "top: 0px;" +
                    "padding: 0px;" +
                    ": #000;' type=\"submit\" value=\""+ values[i]['qty'] +"\" disabled=\"disabled\">\n" +
                    "<span style='font-size: 12px;' class=\"inc qtybtn1\">+</span>" +
                    "                                    </div>\n" +
                    "                                </div>" +
                    "</li>";


                checkout_items.append(list_item);
            }
            var js = "<script>\n" +
                "\n" +
                "\n" +
                "DEBUG = true;" +
                "        var proQty = $('.pro-qty');\n" +

                "        proQty.on('click', '.qtybtn1', 0, function () {\n" +
                "            \n" +
                "            var $button = $(this);\n" +
                "\n" +
                "            var oldValue;\n" +
                "            oldValue = $button.parent().find('input').val();\n" +
                "\n" +
                "            var itemName = $button.parent().parent().parent().find('.name').text();\n" +

                "            \n" +
                "\n" +
                "            if ($button.hasClass('inc')) {\n" +
                "                var newVal = parseFloat(oldValue) + 1;\n" +
                "            } else {\n" +
                "                if (oldValue > 0) {\n" +
                "                    var newVal = parseFloat(oldValue) - 1;\n" +
                "                } else {\n" +
                "                    newVal = 0;\n" +
                "                }\n" +
                "            }\n" +
                "\n" +
                "            var tableNumber = sessionStorage.getItem(\"tableNumber\");\n" +
                "            DEBUG && console.log(tableNumber);\n" +
                "\n" +
                "            $.ajax({\n" +
                "                type: 'POST',\n" +
                "                url: \"php/qty_checkout.php\",\n" +
                "                data: {name: itemName, qty: newVal, tableNo: tableNumber},\n" +
                "                success: function (result) {\n" +
                "                    DEBUG && console.log(\"new qty is \" + newVal);\n" +
                "                    DEBUG && console.log(\"new qty is \" + newVal);\n" +
                "\n" +
                "                    DEBUG && console.log(result);\n" +
                "                }\n" +
                "\n" +
                "            });\n" +
                "" +
                "$('.place_order').hide();" +
                "$('.retotal').fadeIn();" +
                "\n" +
                "            $button.parent().find('input').val(newVal);\n" +
                "        });\n" +
                "\n" +
                "</script>";


            var checkout_items = $('.checkout_items');
            checkout_items.append(js);
            var checkout_items = $('.checkout_items');

            var service_charge = sum * 0.1;

            gst = gst.toFixed(2);
            vat = vat.toFixed(2);
            service_charge = service_charge.toFixed(2);

            sessionStorage.setItem("total", sum);
            sessionStorage.setItem("gst", gst);
            sessionStorage.setItem("vat", vat);
            sessionStorage.setItem("service_charge", service_charge);

            DEBUG && console.log("VAT IS \n\n\n" + vat);
            DEBUG && console.log("gst IS \n\n\n" + gst);
            list_item = "<li style='border-bottom: 1px solid #ebebeb;'><div  class='name'>" + "Service Charge" + "</div> " +

                " <span class='pr'> ₹ " + service_charge + "</span></li>";

            if (gst != 0) {
                list_item = list_item + "<li style='border-bottom: 1px solid #ebebeb;'><div  class='name'>" + "CGST" + "</div> " +

                    " <span class='pr'> ₹ " + gst + "</span></li>" + "<li style='border-bottom: 1px solid #ebebeb;'><div  class='name'>" + "SGST" + "</div> " +

                    " <span class='pr'> ₹ " + gst + "</span></li>" ;
            }
            if (vat != 0) {
                list_item = list_item + "<li style='border-bottom: 1px solid #ebebeb;'><div  class='name'>" + "VAT" + "</div> " +

                    " <span class='pr'> ₹ " + vat + "</span></li>"
            }

            var tax_items = $('.tax_items');
            tax_items.append(list_item);


        }



    });

    $('.tableNo').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            $('.button_button1').click();
            return false;
        }
    });

    var tabno = sessionStorage.getItem("tableNumber");
    //window.alert(tabno);

    $.ajax({
        type: 'POST',
        url: "php/prev_order.php",
        data: {tableNo: tabno},
        success: function (result) {
            DEBUG && console.log(result);

            var sum = 0;
            sessionStorage.setItem("prev", sum);
            var values = JSON.parse(result);
            DEBUG && console.log(values[0]['total']);
            var len = values.length;
            DEBUG && console.log(len)
            var i = 0;

            for (i = 0; i < len; i++) {
                //var checkout_items = $('.checkout_items');
                // checkout_items.parent().find('.checkout__order__subtotal').find('span').html()
                sum = sum + (values[i]['total']) * 1;
                DEBUG && console.log("PREV IS HERE" + sum);

            }

            if (sum != 0) {
                sessionStorage.setItem("prev", sum.toFixed(2));

                var tax_items = $('.tax_items');

                var prev = "<li style='border-bottom: 1px solid #ebebeb;'><div  class='name'>" + "Previous Order" + "</div><span class='pr'> ₹ " + sum.toFixed(2) + "</span></li>";
                tax_items.append(prev);
            } else {
                sessionStorage.setItem("prev", 0);
            }



        }




    });
    var checkout_items = $('.checkout_items');




    setTimeout(() => {
        sessionStorage.setItem("final_total", (sessionStorage.getItem("total")*1+sessionStorage.getItem("gst")*2 + sessionStorage.getItem("service_charge")*1 + sessionStorage.getItem("vat")*1));
        checkout_items.parent().find('.checkout__order__subtotal').find('span').html(" ₹ " + (sessionStorage.getItem("total")*1).toFixed(2));
        checkout_items.parent().find('.checkout__order__total').find('span').html(" ₹ " + (sessionStorage.getItem("final_total")*1 + sessionStorage.getItem("prev")*1).toFixed(2));
    }, 1000);




    var place_order = $('.place_order');
    // place_order.css({
    //     "color": "green",
    //     "border": "2px solid green"
    // });
    place_order.on('click', function () {

        $("#preloder").delay().fadeIn();
        //window.alert("hello");
        var tableNumber = sessionStorage.getItem("tableNumber");
        $.ajax({
            type: 'POST',
            url: "php/place_order.php",
            data: {tableNo: tableNumber, total: sessionStorage.getItem('final_total')},
            success: function (result) {
                DEBUG && console.log(result);
                $.ajax({
                    type: 'POST',
                    url: "php/delete_old.php",
                    data: {tableNo: tableNumber},
                    success: function (result) {
                        DEBUG && console.log(result);
                        var amount = ((sessionStorage.getItem("final_total") * 1) + sessionStorage.getItem("prev")*1).toFixed(2)
                        window.alert("Thankyou for placing your order for ₹ " + amount);
                        window.location.assign("http://3.23.241.214/done.html");


                    }

                });


            }


        });

        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: "php/delete_old.php",
                data: {tableNo: tableNumber},
                success: function (result) {
                    DEBUG && console.log(result);
                    //window.alert("Thank you for placeing your order for ₹ " + sessionStorage.getItem("total"));


                }

            });}, 500);
        //
        //  //window.location.assign("http://3.23.241.214/done.html");


    });






})(jQuery);