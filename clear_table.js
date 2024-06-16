'use strict';

(function ($) {

    var DEBUG = true;
    var tables = "";


    /*------------------
           Display page
       --------------------*/

    $.ajax({
        type: 'POST',
        url: "php/clear_table_select_tables.php",
        data: {tableNo: 1},
        success: function (result) {
            console.log(result);
            if (result == "[]") {

                $('.insert_table').append("<h1>NO ORDERS</h1>")

            }
            DEBUG && console.log(result);
            var values = JSON.parse(result);
            DEBUG && console.log(values[0]['table_no']);
            var len = values.length;
            DEBUG && console.log(len)
            var i = 0;
            var sum = 0;


            for (i = 0; i < len; i++) {


                var table_start = "<div style='align-items: center; align-content: center; padding: 20px; margin: 50px; border-bottom: 3px solid #e1e1e1; text-align: center;'><table class=\"greenTable clear_green\" style=' display: inline; height: 40px; margin-right: 30px; margin-bottom: 15px; align-self: center;'>\n" +
                    "<thead>\n" +
                    "<tr>\n" +
                    "<th>Table Number</th>\n" +
                    "</tr>\n" +
                    "</thead>\n" +
                    "<tbody class='table_contents'>\n";
                var table_contents = "";

                    table_contents = table_contents + "<tr>\n" +
                        "<td class = \"tab_no\">" + values[i]['table_no'] + "</td><" +
                        "/tr>";

                    console.log("next table");
                    console.log("HERE");

                    //console.log(values[i]['amount']);
                    var table_end = "</tbody>\n" +
                        "</table>" +
                        "<div class = \"site-btn complete\" style='display: inline-block;'>" +
                        "Complete" +
                        "</div></div>";
                    var table = table_start + table_contents + table_end;

                    tables = tables + table;
                    console.log(table);


                }

                var js = "<script>" +
                    "" +
                    "DEBUG = true;" +
                    "$('.complete').on('click', function () {\n" +
                    "\n" +
                    "" +
                    "        var tableNo = $(this).parent().find('.tab_no').text();\n" +
                    "\n" +
                    "\n" +
                    "        $.ajax({\n" +
                    "            type: 'POST',\n" +
                    "            url: \"php/remove_table_final.php\",\n" +
                    "            data: {tableNo: tableNo},\n" +
                    "            success: function (result) {\n" +
                    "                DEBUG && console.log(result);\n" +
                    "                window.location.assign(\"http://3.23.241.214/clear_table.html\");" +
                    "\n" +
                    "\n" +
                    "            }\n" +
                    "\n" +
                    "        });\n" +
                    "\n" +
                    "    });" +
                    "</script>"

                setTimeout(() => {
                    $('.clear_table').append(tables + js);
                }, 1000);


            }
        });

    // var oldContents = ""
    // $.ajax({
    //     type: 'POST',
    //     url: "php/refresh.php",
    //     data: {tableNo: 1},
    //     success: function (result) {
    //         console.log("First Time\n" + result);
    //
    //         oldContents = result;
    //         //window.location.assign("http://3.23.241.214/display_orders.html");
    //     }
    //
    // });
    //
    //
    // setInterval(function () {
    //     $.ajax({
    //         type: 'POST',
    //         url: "php/refresh.php",
    //         data: {tableNo: 1},
    //         success: function (result) {
    //             //console.log("10 SECS\n" + result);
    //
    //             if (result != oldContents) {
    //
    //                 //window.alert("refreshing");
    //                 oldContents = result;
    //                 window.alert("NEW ORDER");
    //                 window.location.assign("http://3.23.241.214/display_orders.html");
    //             } else {
    //                 console.log("same");
    //             }
    //
    //
    //         }
    //     });
    // }, 3000);
    //
    // $('.complete').on('click', function () {
    //
    //     //window.alert("working");
    //
    //     var tableNo = $(this).parent().find('.tab_no').text();
    //
    //     window.alert(tableNo);
    //
    //     $.ajax({
    //         type: 'POST',
    //         url: "php/delete_old.php",
    //         data: {tableNo: tableNumber},
    //         success: function (result) {
    //             DEBUG && console.log(result);
    //             window.alert("Thank you for placeing your order for ₹ " + sessionStorage.getItem("total"));
    //
    //
    //         }
    //
    //     });

    // });


})(jQuery);
