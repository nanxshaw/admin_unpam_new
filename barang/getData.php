<?php
include '../koneksi.php';
$no = 1;
$query = mysqli_query($koneksi,"SELECT * FROM tb_barang a INNER JOIN tb_satuan b ON a.satuan=b.id_satuan") or die(mysqli_error($koneksi));
while ($result = mysqli_fetch_array($query)){
?>
<tr>
<td><input type="checkbox" id="select_id" value="<?php echo $result['id_brg']; ?>"></td>
    <td><?php echo $no++; ?></td>
    <td><?php echo $result['id_brg']; ?></td>
    <td><?php echo $result['nama_brg']; ?></td>
    <td><?php echo $result['jenis']; ?></td>
    <td><?php echo $result['satuan']; ?></td>
    <td><?php echo $result['stok_awal']; ?></td>
    <td><?php echo $result['harga']; ?></td>
    <!-- <td>
        <button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['users_id']; ?>')" value="<?php echo $result['users_id']; ?>">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['users_id']; ?>')">Delete</button>
    </td> -->
</tr>
<?php 
}
?>


<?php
// $query = "SELECT MAX(id_brg) AS kode FROM tb_barang";
// $sql = mysqli_query($koneksi, $query);
// $data = mysqli_fetch_array($sql);
// $kode_brg = $data['kode'];
// $urutan = (int) substr($kode_brg, 1, 4);
// $urutan++;
// $huruf = "B";
// $idBarang = $huruf . sprintf("%04s", $urutan);
?>
