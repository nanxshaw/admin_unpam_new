<?php
include '../koneksi.php';
$no = 1;
$query = mysqli_query($koneksi,"SELECT * FROM tb_masuk a INNER JOIN tb_barang b ON a.barang_id=b.id_brg ORDER BY a.tgl_masuk DESC") or die(mysqli_error($koneksi));
while ($result = mysqli_fetch_array($query)){
?>
<tr>
<td><input type="checkbox" id="select_id" class="cek" value="<?php echo $result['id_masuk']; ?>"></td>
    <td><?php echo $no++; ?></td>
    <td><?php echo $result['id_masuk']; ?></td>
    <td><?php echo $result['tgl_masuk']; ?></td>
    <td><?php echo $result['barang_id']; ?></td>
    <td><?php echo $result['nama_brg']; ?></td>
    <td><?php echo $result['jml_masuk']; ?></td>
    <td>
        <button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['id_masuk']; ?>')" value="<?php echo $result['id_masuk']; ?>">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['id_masuk']; ?>')">Delete</button>
    </td>
</tr>
<?php 
}
?>


