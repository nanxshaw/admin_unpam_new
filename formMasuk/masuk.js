
$(function () {
    $("#tabel").DataTable();
    loadData();

    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })

    $("#btn_add").click(function () {
        // $('#modal_add').modal('show');
        $.ajax({
            url: "formMasuk/modal_add.php",
            type: 'GET',
            success: function (data) {
                $('#konten').html(data);
                $('#modal_add').modal('show');
                reset();
            },
            error: function (e) {
                console.log(e);
            }
        });
        e.stopImmediatePropagation();
        return false;
    })

    $('#btn_edit').on('click', function (e) {
        var cek = $(".cek:checked");
        if (cek.length == 1) {
            var id = [];
            $(cek).each(function () {
                id.push($(this).val());
                // alert(id);
                var str_data = "id_masuk=" + id;
                $.ajax({
                    url: "formMasuk/modal_edit.php",
                    type: "get",
                    data: str_data,
                    success: function (data) {
                        $("#konten").html(data);
                        $("#modal_edit").modal("show");
                        // reset();
                    },
                });
            });
        } else {
            alert("pilih data satu saja!!");
        }
    });

    $("#btn_delete").click(function () {
        var cek = $(".cek:checked");
        if (cek.length > 0) {
            var id = [];
            $(cek).each(function () {
                id.push($(this).val());
                var str_data = "id_masuk=" + id;
                $.ajax({
                    url: "formMasuk/delete.php",
                    type: "POST",
                    data: str_data,
                    success: function (data) {
                        if ((data = "1")) {
                            toastr.success("data berhasil dihapus");
                            loadData();
                        } else {
                            toastr.error(data);
                        }
                    },
                });
            });
        } else {
            alert("pilih data satu saja!!");
        }
    });

    function reset() {
        $('#tgl_masuk').val('');
        $('#barang_id').val('').change();
        $('#jml').val('');
        $('#stok').val('');
        $('#harga').val('');
    }

    $("#barang_id").on("change", function (e) {
        var id = $('#barang_id').val();
        var str_data = "id="+id;
        $.ajax({
            url: "formMasuk/cari.php",
            type: "GET",
            data: str_data,
            dataType: "json",
            success: function (data) {
                $('#nama_brg').val(data[0].nama_brg);
                $('#stok').val(data[0].stok_saat_ini);
            },
        });
    });

    $("#btn_simpan").on("click", function (e) {
        // $(document).on('click', '#btn_simpan', function (e) {
        // alert("Data berhasil disimpan");
        var id_masuk = $('#id_masuk').val();
        var tgl_masuk = $('#tgl_masuk').val();
        var barang_id = $('#barang_id').val();
        var jml = $('#jml').val();
        var stok = $('#stok').val();
        var harga = $('#harga').val();

        if (id_masuk == '')
            alert('ID Masuk wajib diisi!')
        else if (tgl_masuk == '')
            alert('Tgl Masuk wajib diisi!')
        else if (barang_id == '')
            alert('ID Barang wajib diisi!')
        else if (jml == '')
            alert('Jumlah wajib diisi!')
        else {
            var str_data = "id_masuk=" + id_masuk +
                "&tgl_masuk=" + tgl_masuk +
                "&barang_id=" + barang_id +
                "&jml=" + jml;
            $.ajax({
                url: "formMasuk/add.php",
                type: 'POST',
                dataType: "text",
                data: str_data,
                success: function (data) {
                    if (data == '1') {
                        // alert("Data berhasil disimpan");
                        loadData();
                        $('#modal_add').modal('hide');
                        toastr.success('data berhasil disimpan')
                    } else {
                        alert(data);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error:", error);
                }
            })
        }

    });

    $("#btn_ubah").on("click", function (e) {
    // $(document).on('click', '#btn_ubah', function (e) {
        console.log('edit')
        var id_masuk_e = $("#id_masuk_e").val();
        var tgl_masuk_e = $("#tgl_masuk_e").val();
        var jml_e = $("#jml_e").val();
        var barang_id_e = $("#barang_id_e").val();

        if (id_masuk_e == "") {
            alert("id_masuk_e wajib diisi abangku!");
        } else if (tgl_masuk_e == "") {
            alert("tgl_masuk_e wajib diisi abangku!");
        } else if (jml_e == "") {
            alert("jml_e wajib diisi abangku!");
        } else if (barang_id_e == "") {
            alert("barang_id_e wajib diisi abangku!");
        } else {
            var str_data =
                "id_masuk=" + id_masuk_e +
                "&tgl_masuk=" + tgl_masuk_e +
                "&barang_id=" + barang_id_e +
                "&jml=" + jml_e;
                console.log(str_data)
            $.ajax({
                type: "POST",
                url: "formMasuk/edit.php",
                dataType: "text",
                data: str_data,
                success: function (data) {
                    console.log(data)
                    if (data == "1") {
                        loadData();
                        $("#modal_edit").modal("hide");
                        toastr.success("data berhasil diubah");
                    } else {
                        toastr.error(data);
                    }
                },
            });
        }
    });
});


function loadData() {
    $.ajax({
        url: "formMasuk/getData.php",
        type: "get",
        success: function (data) {
            $("#tabel").dataTable().fnClearTable();
            $("#tabel").dataTable().fnDraw();
            $("#tabel").dataTable().fnDestroy();
            $("#tabel tbody").html(data);
            $("#tabel").dataTable({
                lengthMenu: [
                    [10, 20, 25, 50, 100, 15, 5, -1],
                    ["10", "20", "25", "50", "100", "15", "5", "show all"],
                ],
                paging: true,
                searching: true,
                ordering: true,
            });
        },
    });
}

// function loadData() {
//     $.ajax({
//         url: "formMasuk/getData.php",
//         type: 'GET',
//         success: function (data) {
//             // $('#tabel').DataTable().fnClearTable();
//             // $('#tabel').DataTable().fnDraw();
//             // $('#tabel').DataTable().fnDestroy();
//             if ($.fn.DataTable.isDataTable('#tabel')) {
//                 $('#tabel').DataTable().clear().destroy();
//             }
//             $('#tabel tbody').html(data);
//             $('#tabel').DataTable({
//                 lengthMenu: [
//                     [10, 20, 25, 50, 100, 15, 5, -1],
//                     ['10', '20', '25', '50', '100', '15', '5', 'Show all'],
//                 ],
//                 paging: true,
//                 searching: true,
//                 ordering: true
//             });
//         },
//         error: function (xhr, status, error) {
//             console.error("Error:", error);
//         }
//     });
// }

function edit_data(a) {
    $.ajax({
        url: "formMasuk/modal_edit.php",
        type: 'GET',
        data: {
            id_masuk: a
        },
        success: function (data) {
            $('#konten').html(data);
            $('#modal_edit').modal('show');
        },
        error: function (e) {
            console.log(e);
        }
    });
}

function delete_data(a) {
    $.ajax({
        url: "formMasuk/delete.php",
        type: 'POST',
        data: {
            id_masuk: a
        },
        success: function (data) {
            if (data == '1') {
                toastr.success('data berhasil dihapus');
                loadData();
            } else {
                toastr.error(data);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}