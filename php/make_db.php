<?php
error_reporting(E_ALL);
$name  = $_POST['name'];
$price = $_POST['price'];
$f = fopen('file.txt', 'a');

fwrite($f, $name);


$servername = "cafedb.ciecljyjxudo.us-east-2.rds.amazonaws.com";
$username = "cafeMRP";
$password = "cafeMRP123";
$dbname = "cafedb";
echo "123";
fwrite($f, "\npoint 1\n");

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username, $password);
    echo "YAYYYY";
    fwrite($f, "\npoint 2\n");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("INSERT INTO cafe_management (item_name, to_show, price) VALUES ('$name', 1, $price)");
    $stmt->execute();
}
catch(PDOException$e) {
    fwrite($f, $e ->getMessage());
    echo "Error: ".$e ->getMessage();
}

fclose($f);


//     // Create connection:w
//     $conn = new mysqli($servername, $username, $password, $dbname);
//     // Check connection
//     if ($conn->connect_error) {
//       die("Connection failed: " . $conn->connect_error);
//     }
//
//     $sql = "INSERT INTO orders (Item name)
//     VALUES ('JOHn')";
//
//     if ($conn->query($sql) === TRUE) {
//       echo "New record created successfully";
//     } else {
//       echo "Error: " . $sql . "<br>" . $conn->error;
//     }
?><?php
