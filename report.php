<?php

include "partial/header.php";
include "./koneksi.php";
?>

<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Report Barang</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Report Barang</li>
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
              <h3 class="card-title">Data Report Barang</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="row">
                <div class="col-6 text-left">
                </div>
                <div class="col-6 text-right">
                  <label>Dari</label>
                  <input type="date" id="start" style="width: 150px;height: 30px;padding-bottom: 7px;">
                  <label>Sampai</label>
                  <input type="date" id="end" style="width: 150px;height: 30px;padding-bottom: 7px;">
                  <button class="btn btn-primary btn-sm" id="btn_filter">Filter Data</button>
                </div>
              </div>
              <table id="tabel" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>ID Barang</th>
                    <th>Nama Barang</th>
                    <th>Jenis</th>
                    <th>Satuan</th>
                    <th>Stok Awal</th>
                    <th>Total Masuk</th>
                    <th>Total Keluar</th>
                    <th>Actual Stok</th>
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

<?php include 'partial/footer.php'; ?>
<script src="report/report.js"></script>