<?php 

$server = "localhost";
$user = "root";
$pass = "";
$dbname = "admin";

$koneksi = mysqli_connect($server,$user,$pass,$dbname);
if(mysqli_connect_error()){
    echo "Koneksi database gagal".mysqli_connect_error();
}

?>