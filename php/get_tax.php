<?php
error_reporting(E_ALL);
$name  = $_POST['name'];

//    if ($no == 0) {
//        echo ("It was zero");
//
//    }
//    else {
//        echo ("it was not $no");
//    }

$f = fopen('manage.txt', 'a');

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
    $stmt = $conn->prepare("SELECT tax FROM cafe_management where item_name LIKE '$name'");
    $stmt->execute();
    fwrite($f, "\npoint 3\n");
    fwrite($f, "\npoint 4\n");
    $value = $stmt->fetchAll(PDO::FETCH_ASSOC);
    fwrite($f, "\npoint 5\n");
    //$retVal = $value->qty;
    print_r($value[0]['tax']);
    fwrite($f, $value['tax']);
}
catch(PDOException$e) {
    fwrite($f, $e ->getMessage());
    echo "Error: ".$e ->getMessage();
}
fwrite($f, "\npoint 7\n");

?>