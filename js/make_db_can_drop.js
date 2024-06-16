


'use strict';

(function ($) {

    var DEBUG = true;
    $('.itemName').each(function () {


        var itemName = $(this).text();
        var $itemName = $(this);
        // var price = $(this).parent().find('.price').text();
        // price = price.match(/(\d+)/);

        $.ajax({
            type: 'post',
            url: 'php/manage.php',
            data: {name: itemName},
            success: function (data) {
                DEBUG && console.log("THIS IS MAKE DB" + itemName + " " + data);

                if (data != 1) {


                    //console.log("logging " + itemName + " " + price[0]);


                    $.ajax({
                        type: 'post',
                        url: 'php/make_db.php',
                        data: {name: itemName, price: 0},
                        success: function (data) {
                            console.log(data);


                                //$(this).css('background-color', 'yellow');
                                DEBUG && console.log(itemName);
                                if ($itemName.hasClass('can_drop')) {
                                    var i = 0;
                                    $itemName.parent().find('li').each(function () {
                                        console.log(i);
                                        i++;
                                        DEBUG && console.log("here");
                                        var selected = $(this).find('p').text();
                                        DEBUG && console.log("hello  " + selected);
                                        var price = $(this).find('.price').text();
                                        price = price.match(/(\d+)/);
                                        var name = itemName + " " + selected;
                                        DEBUG && console.log(name);
                                        DEBUG && console.log("nameis " + name+ " price is " + price[0]);



                                        $.ajax({
                                            type: 'post',
                                            url: 'php/make_db.php',
                                            data: {name: name, price: price[0]},
                                            success: function (data) {
                                                DEBUG && console.log("new price" + " " + data);


                                            }
                                        });
                                    })
                                }






                        }
                    });



                } else {
                    if ($itemName.parent().hasClass('man')) {
                        //price.parent().css('background-color', 'green');
                        $itemName.parent().find('.show_item').hide();
                    }

                    //$("h6:contains("+ itemName +")").parent().css('background-color', 'green');
                }

            }
        });


    });


})(jQuery);