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

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

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
        $(this).parent().find('ul').slideToggle(400);
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
    //proQty.parent().parent().parent().find('.itemName').text();

    // var temp = "Cream of Mushroom"
    // console.log(temp);
    // $.ajax({
    //     type: 'post',
    //     url: 'manage.php',
    //     data: {name : "Cream of Mushroom"},
    //     success: function(data) {
    //         var t2 = temp + data;
    //         console.log(t2);
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
    console.log("bhlal");


    $('.itemName').each(function () {
        console.log("bhlal");
        var itemName = $(this).text();
        //$(this).css('background-color', 'yellow');
        console.log(itemName);
        if ($(this).hasClass('can_drop')) {
            $(this).parent().find('li').each(function () {
                console.log("here");
                var selected = $(this).find('p').text();
                console.log("hello  " + selected);
                var price = $(this).find('.price');
                var name = itemName + " " + selected;
                console.log(name);

                $.ajax({
                    type: 'post',
                    url: 'php/price.php',
                    data: {name: name},
                    success: function (data) {
                        console.log("new price" + " " + data);

                        price.html("₹ " + data);

                    }
                });

                var tableNumber = sessionStorage.getItem("tableNumber");

                $.ajax({
                    type: 'post',
                    url: 'php/check_qty.php',
                    data: {name: name, tableNumber: tableNumber},
                    success: function (data) {
                        console.log(tableNumber);
                        console.log(data);
                        if (data == "") {
                            console.log("not cahnging");

                            price.parent().find('.add_drop').show();
                            price.parent().find('.pro-qty').hide();

                        } else {
                            price.parent().find('input').val(data);
                            //price.html("₹ " + data);
                            price.parent().find('.add_drop').hide();
                            price.parent().find('.pro-qty').show();
                            $('.hero__categories ul').slideUp(400);
                            price.parent().parent().parent().slideDown(400);
                            // proQty.show();
                            console.log("changing "+itemName);
                            //proQty.find('input').css('background-color', 'blue');

                        }


                    }
                });


            });

            console.log("can drop " + itemName);


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
                        console.log("new price of man" + " " + data);
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
                    console.log(tableNumber);
                    console.log(data);
                    if (data == "") {
                        console.log("not cahnging");

                        price.parent().find('.add').show();
                        price.parent().find('.pro-qty').hide();

                    } else {
                        if (price.parent().find('input').hasClass('price') == 0) {


                            price.parent().find('input').val(data);

                            //price.html("₹ " + data);
                            price.parent().find('.add').hide();
                            price.parent().find('.pro-qty').show();
                            // proQty.show();
                            console.log("changing " + itemName);
                            //proQty.find('input').css('background-color', 'blue');
                        }

                    }


                }
            });




        }
        $.ajax({
            type: 'post',
            url: 'php/manage.php',
            data: {name: itemName},
            success: function (data) {
                console.log(itemName + " " + data);

                if (data != 1) {
                    if (price.parent().hasClass('man')) {
                        //price.parent().css('background-color', 'blue');
                        price.parent().find('.hide_item').hide();
                    } else {
                        $("h6:contains(" + itemName + ")").parent().hide();
                    }


                } else {
                    if (price.parent().hasClass('man')) {
                        //price.parent().css('background-color', 'green');
                        price.parent().find('.show_item').hide();
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

                console.log(data);

            }
        });
        $(this).hide();
        $(this).parent().find('.show_item').show();


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

                console.log(data);

            }
        });
        $(this).hide();
        $(this).parent().find('.hide_item').show();


    });
    var change = $('.change');

    change.on('click', function () {

        var itemName = $(this).parent().find('.itemName').text();

        var newPrice = $(this).parent().find('.price').val();
        console.log(newPrice);
        newPrice = newPrice.match(/(\d+)/);
        //window.alert(newPrice[0]);


        $.ajax({
            type: 'post',
            url: 'php/price_change.php',
            data: {name: itemName, price: newPrice[0]},
            success: function (data) {

                console.log(data);

            }
        });



    });
    console.log("hiiiii");

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

    //console.log(no);


    var tableNo = $('.tableNo');
    //var logNo = $('.logNo');
    console.log("here");


    // logNo.on('click', function () {
    //     no = tableNo.val();
    //
    //     sessionStorage.setItem("tableNumber", no);
    //     ////window.alert(no);
    //
    // });
    var button = $('.button_button1');

    button.on('click', function () {
        var no = tableNo.val();
        //var tableNumber = document.querySelector('.tableNo').value;
        sessionStorage.setItem("tableNumber", no);



        $.ajax({
            type: 'POST',
            url: "php/check_table.php",
            data: {tableNo: no},
            success: function (result) {
                if (result == "") {

                    window.alert("no order");
                    window.location.assign("http://3.23.241.214/main_menu.html");


                }
                else {

                    if (confirm('             DO YOU WANT TO START A NEW ORDER?\n\n\nAn incomplete order already exists for this table, \n\nPress CANCEL to complete that order or OKAY  to start a new order')) {
                        //alert('Thanks for confirming');

                        $.ajax({
                            type: 'POST',
                            url: "php/delete_old.php",
                            data: {tableNo: no},
                            success: function (result) {
                                console.log(result);
                                //window.alert("Thank you for placeing your order for ₹ " + sessionStorage.getItem("total"));
                                window.location.assign("http://3.23.241.214/main_menu.html");


                            }

                        });


                    } else {
                        //alert('Why did you press cancel? You should have confirmed');
                        window.location.assign("http://3.23.241.214/main_menu.html");
                    }
                    //window.alert("ORDER EXISTS");
                    console.log(result);
                }


            }


        });


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

    var place_order = $('.place_order');
    // place_order.css({
    //     "color": "green",
    //     "border": "2px solid green"
    // });
    place_order.on('click', function () {
        var tableNumber = sessionStorage.getItem("tableNumber");
        $.ajax({
            type: 'POST',
            url: "php/place_order.php",
            data: {tableNo: tableNumber},
            success: function (result) {
                console.log(result);


            }


        });

        setTimeout(() => {
        $.ajax({
            type: 'POST',
            url: "php/delete_old.php",
            data: {tableNo: tableNumber},
            success: function (result) {
                console.log(result);
                window.alert("Thank you for placeing your order for ₹ " + sessionStorage.getItem("total"));


            }

        });}, 5000);

         //window.location.assign("http://3.23.241.214/done.html");


    });


    console.log("abc");

    add.on('click', function () {
        var temp = $(this).parent().parent().find(".itemName").text();
        var price = $(this).parent().parent().find(".price").text();
        //window.alert(price);
        price = price.substring(2);

        //window.alert(price);

        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "php/test.php",
            data: {name: temp, qty: 1, tableNo: tableNumber, price: price, amount: price},
            success: function (result) {
                console.log('the data was successfully 123 into sent to the server');
            }

        })
        $(this).hide();
        $(this).parent().find('.pro-qty').show();


        ////window.alert(temp);


    });

    var add_drop = $('.add_drop');
    console.log("abc");

    add_drop.on('click', function () {
        var name = $(this).parent().parent().parent().parent().parent().parent().parent().find(".itemName").text();
        var selected = $(this).parent().parent().find('p').text();
        var price = $(this).parent().parent().find(".price").text();

        price = price.substring(2);
        name = name + " " + selected;
        console.log(price);
        console.log(name);

        var tableNumber = sessionStorage.getItem("tableNumber");

        $.ajax({
            type: 'POST',
            url: "php/test.php",
            data: {name: name, qty: 1, tableNo: tableNumber, price: price, amount: price},
            success: function (result) {
                console.log('the data was successfully 123 into sent to the server');
            }

        })
        $(this).hide();
        $(this).parent().find('.pro-qty').show();


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
            itemName = itemName + " " + selected;
            var price = $button.parent().parent().parent().find('h6').text();

            console.log(price);
        } else {
            var itemName = $button.parent().parent().parent().find('.itemName').text();
            var price = $button.parent().parent().parent().find('.price').text();


        }
        price = price.substring(2);
        console.log("price is "+ price);


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
        console.log(itemName);
        console.log(newVal);
        console.log(tableNumber);
        console.log(price);
        console.log(price * newVal);

        $.ajax({
            type: 'POST',
            url: "php/qty.php",
            data: {name: itemName, qty: newVal, tableNo: tableNumber, price: price, amount: price * newVal},
            success: function (result) {
                console.log("new qty is " + newVal);
                console.log("new qty is " + price);
                console.log("new qty is " + newVal);

                console.log(result);
            }

        });
        $button.parent().find('input').val(newVal);
    });

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
//                 console.log('the data was successfully 123 change qt into sent to the server');
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
            console.log(result);
            var values = JSON.parse(result);
            console.log(values[0]['item_name']);
            var len = values.length;
            console.log(len)
            var i = 0;
            var sum = 0;
            for (i = 0; i < len; i++) {
                var checkout_items = $('.checkout_items');
                // checkout_items.parent().find('.checkout__order__subtotal').find('span').html()
                sum = sum + (values[i]['amount']) * 1;

                var list_item = "<li style='border-top: 1px solid #ebebeb;'><div style='width: 150px; display: inline-block;' class='name'>" +values[i]['item_name'] + "ahaha" + "</div> " +
                    "<div style='width: 100px; display: inline; vertical-align: top;' class=\"quantity\">\n" +
                    "                                    <div class=\"pro-qty\" style='width: 200px; align-self: center; '>\n" +
                    "<span style='font-size: 18px; padding: 0px;' class=\"dec qtybtn1\">-</span>" +
                    "                                        <input style='font-size: 12px;  padding: 0px display: inline;' type=\"submit\" disabled=\"disabled\" value=\""+ values[i]['qty'] +"\">\n" +
                    "<span style='font-size: 50px;  padding: 0px;' class=\"inc qtybtn1\">+</span>" +
                    "                                    </div>\n" +
                    "                                </div>" +
                    " <span class='pr'> ₹ " + values[i]['amount'] + "</span></li>";


                checkout_items.append(list_item);
            }
            var js = "<script>\n" +
                "\n" +
                "\n" +
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
                "            console.log(tableNumber);\n" +
                "\n" +
                "            $.ajax({\n" +
                "                type: 'POST',\n" +
                "                url: \"php/qty_checkout.php\",\n" +
                "                data: {name: itemName, qty: newVal, tableNo: tableNumber},\n" +
                "                success: function (result) {\n" +
                "                    console.log(\"new qty is \" + newVal);\n" +
                "                    console.log(\"new qty is \" + newVal);\n" +
                "\n" +
                "                    console.log(result);\n" +
                "                }\n" +
                "\n" +
                "            });\n" +
                "" +
                "$('.place_order').hide();" +
                "$('.retotal').show();" +
                "\n" +
                "            $button.parent().find('input').val(newVal);\n" +
                "        });\n" +
                "\n" +
                "</script>";



            checkout_items.append(js);
            var checkout_items = $('.checkout_items');
            checkout_items.parent().find('.checkout__order__subtotal').find('span').html(" ₹ " + sum);
            checkout_items.parent().find('.checkout__order__total').find('span').html(" ₹ " + sum);
            sessionStorage.setItem("total", sum);

        }



    });



})(jQuery);