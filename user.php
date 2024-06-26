<?php include "partial/header.php"; ?>

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Data User</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Data User</li>
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
              <h3 class="card-title">Data User</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="form-group">
                <button type="button" class="btn btn-sm btn-info" id="btn_add">Add Data</button>
              </div>
              <table id="tabel" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>


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
        <h4 class="modal-title">Form Input Data User</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">User ID</label>
        <input type="text" class="form-control" id="users_id" name="users_id" />
        <label for="">Username</label>
        <input type="text" class="form-control" id="username" name="username" />
        <label for="">Password</label>
        <input type="text" class="form-control" id="password" name="password" />
        <label for="">Status</label>
        <select class="form-control" id="status" name="status">
          <option value="1">Aktif</option>
          <option value="2">Tidak Aktif</option>
        </select>
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
<script src="formUser/user.js"></script>