<?php
session_start();
include "../koneksi.php";

$id_keluar = $_POST['id_keluar'];
$tgl_keluar = $_POST['tgl_keluar'];
$barang_id = $_POST['barang_id'];
$jml_keluar = $_POST['jml'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($data['error'])) {
    $query = "INSERT INTO tb_keluar SET id_keluar='$id_keluar',updater='$user', tgl_keluar='$tgl_keluar', barang_id='$barang_id', jml_keluar='$jml_keluar', input_date='$input_date'";
    mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));
    $data = 1;
} else {
    $data = "gagal";
}

echo json_encode($data);
