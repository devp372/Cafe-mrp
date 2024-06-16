<?php
error_reporting(E_ALL);
$tableNo  = $_POST['tableNo'];
$total =  $_POST['total'];

//    if ($no == 0) {
//        echo ("It was zero");
//
//    }
//    else {
//        echo ("it was not $no");
//    }

$f = fopen('checkout.txt', 'a');

fwrite($f, $name);

$servername = "cafedb.ciecljyjxudo.us-east-2.rds.amazonaws.com";
$username = "cafeMRP";
$password = "cafeMRP123";
$dbname = "cafedb";
//echo "123";
fwrite($f, "\npoint 1\n");

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username, $password);
    //echo "YAYYYY";
    fwrite($f, "\npoint 2\n");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("insert into orders_final select s_no, item_name, qty, table_no, price_per_item, amount from cafe_orders where table_no LIKE '$tableNo' and qty <> 0;
                                      insert into display_orders select s_no, item_name, qty, table_no, price_per_item, amount from cafe_orders where table_no LIKE '$tableNo' and qty <> 0;
                                      insert into prev_totals_1 (table_no, total) VALUES ('$tableNo', $total)");
    $stmt->execute();
    fwrite($f, "\npoint 3\n");
    fwrite($f, "\npoint 4\n");
//    $value = $stmt->fetchAll(PDO::FETCH_ASSOC);
//    fwrite($f, "\npoint 5\n");
//    //$retVal = $value->qty;
//    echo (json_encode($value));
//    //print_r($value);
//    fwrite($f, $value[0]['item_name']);
}
catch(PDOException$e) {
    fwrite($f, $e ->getMessage());
    echo "Error: ".$e ->getMessage();
}
fwrite($f, "\npoint 7\n");

?>
