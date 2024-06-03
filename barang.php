<?php include "partial/header.php"; ?>

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Data Barang</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Data Barang</li>
          </ol>
        </div>
      </div>
    </div><!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Data Master Barang</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="form-group">
                <button type="button" class="btn btn-sm btn-info btn-sm" id="btn_add">Add Data</button>
                <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modal-default">Edit Data</button>
                <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modal-default">Delete Data</button>
              </div>
              <table id="tabel" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>ID Barang</th>
                    <th>Nama Barang</th>
                    <th>Satuan</th>
                    <th>Stok Awal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" id="select_id"></td>
                        <td>Tes</td>
                        <td>Tes</td>
                        <td>Tes</td>
                        <td>Tes</td>
                        <td>Tes</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</div>

<div id="konten"></div>
<div class="modal fade" id="modal_add">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Input Data Barang</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">Nama Barang</label>
        <input type="text" class="form-control" id="nama_brg" name="nama_brg" />
        <label for="">Jenis Barang</label>
        <select class="form-control" id="jenis" name="jenis">
          <option>ATK</option>
          <option>Minuman</option>
          <option>Makanan</option>
        </select>
        <label for="">Satuan</label>
        <select class="form-control" id="satuan" name="satuan">
          <option>PCS</option>
          <option>Kg</option>
          <option>Box</option>
          <option>Lt</option>
          <option>Ons</option>
          <option>Pack</option>
        </select>
        <label for="">Stok Awal</label>
        <input type="number" class="form-control" id="stok" name="stok" />
        <label for="">Harga</label>
        <input type="number" class="form-control" id="harga" name="harga" />
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" name="btn_simpan" id="btn_simpan" class="btn btn-primary">Simpan</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>

<?php include 'partial/footer.php'; ?>
<script src="formBarang/user.js"></script>
<script>
    $(function(){
        $('#tabel').DataTable();

        $('#btn_add').click(function(){
            $('#modal_add').modal('show');
            reset();
        });

        function reset() {
            $('#nama_brg').val('');
            $('#satuan').val('');
            $('#jenis').val('');
            $('#stok').val('');
            $('#harga').val('');
        }
    });
</script>