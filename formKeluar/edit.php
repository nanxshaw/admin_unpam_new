<?php

session_start();
include "../koneksi.php";

$id_keluar     = $_POST['id_keluar'];
$tgl_keluar   = $_POST['tgl_keluar'];
$barang_id     = $_POST['barang_id'];
$jml_keluar      = $_POST['jml'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($date['error'])) {
  $query = "UPDATE tb_keluar SET tgl_keluar='$tgl_keluar',barang_id='$barang_id',jml_keluar='$jml_keluar', input_date='$input_date',updater='$user' WHERE id_keluar='$id_keluar'";

  mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($conn));
  $data = 1;
} else {
  $data = "gagal";
}

echo json_encode($data);
