<?php
error_reporting(E_ALL);
$tableNo  = $_POST['tableNo'];

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
    $stmt = $conn->prepare("SELECT * FROM cafe_orders where table_no LIKE '$tableNo' and qty <> 0");
    $stmt->execute();
    fwrite($f, "\npoint 3\n");
    fwrite($f, "\npoint 4\n");
    $value = $stmt->fetchAll(PDO::FETCH_ASSOC);
    fwrite($f, "\npoint 5\n");
    //$retVal = $value->qty;
    echo (json_encode($value));
    //print_r($value);
    fwrite($f, $value[0]['item_name']);
}
catch(PDOException$e) {
    fwrite($f, $e ->getMessage());
    echo "Error: ".$e ->getMessage();
}
fwrite($f, "\npoint 7\n");

?>