<?php

include "../koneksi.php";

$id_jenis = $_POST['id_jenis'];

$query = "DELETE FROM tb_jenis WHERE id_jenis='$id_jenis'";
mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));

if ($query == true) {
    echo '1';
} else {
    echo "gagal hapus!";
}
