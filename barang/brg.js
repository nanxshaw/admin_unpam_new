
$(function () {
    $("#tabel").DataTable();
    loadData();

    $("#btn_add").click(function () {
        // $('#modal_add').modal('show');
        $.ajax({
            url: "barang/modal_add.php",
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
    })

    function reset() {
        $('#nama_brg').val('');
        $('#satuan').val('');
        $('#jenis').val('');
        $('#stok').val('');
        $('#harga').val('');
    }

    // $('#btn_simpan').on('click', function (e) {

    $(document).on('click', '#btn_simpan', function (e) {
        alert("Data berhasil disimpan");
        var id_brg = $('#id_brg').val();
        var nama_brg = $('#nama_brg').val();
        var satuan = $('#satuan').val();
        var jenis = $('#jenis').val();
        var stok = $('#stok').val();
        var harga = $('#harga').val();

        if (id_brg == '')
            alert('Barang ID wajib diisi!')
        else if (nama_brg == '')
            alert('Nama Barang wajib diisi!')
        else if (jenis == '')
            alert('Jenis Barang wajib diisi!')
        else if (satuan == '')
            alert('Satuan wajib diisi!')
        else if (stok == '')
            alert('>Stok Awal wajib diisi!')
        else if (harga == '')
            alert('Satuan wajib diisi!')
        else {
            var str_data = "id_brg=" + id_brg + 
            "&nama_brg=" + nama_brg + 
            "&satuan=" + satuan + 
            "&jenis=" + jenis + 
            '&stok=' + stok + 
            '&harga=' + harga;
            $.ajax({
                url: "barang/add.php",
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

    $('#btn_ubah').on('click', function (e) {
        var brg_id = $('#brg_id_e').val();
        var username = $('#username_e').val();
        var password = $('#password_e').val();
        var status = $('#status_e').val();

        if (brg_id == '')
            alert('User ID wajib diisi!')
        else if (username == '')
            alert('Username wajib diisi!')
        else if (password == '')
            alert('Password wajib diisi!')
        else if (status == '')
            alert('Status wajib diisi!')
        else {
            var str_data = "brg_id=" + brg_id + "&username=" + username + "&password=" + password + "&status=" + status;
            console.log(str_data);
            $.ajax({
                url: "barang/edit.php",
                type: 'POST',
                dataType: "text",
                data: str_data,
                success: function (data) {
                    if (data == '1') {
                        loadData();
                        $('#modal_edit').modal('hide');
                        toastr.success('data berhasil diubah');
                    } else {
                        toastr.success(data);
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            })
        }

    });
});

function loadData() {
    $.ajax({
        url: "barang/getData.php",
        type: 'GET',
        success: function (data) {
            // $('#tabel').DataTable().fnClearTable();
            // $('#tabel').DataTable().fnDraw();
            // $('#tabel').DataTable().fnDestroy();
            if ($.fn.DataTable.isDataTable('#tabel')) {
                $('#tabel').DataTable().clear().destroy();
            }
            $('#tabel tbody').html(data);
            $('#tabel').DataTable({
                lengthMenu: [
                    [10, 20, 25, 50, 100, 15, 5, -1],
                    ['10', '20', '25', '50', '100', '15', '5', 'Show all'],
                ],
                paging: true,
                searching: true,
                ordering: true
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}

function edit_data(a) {
    $.ajax({
        url: "barang/modal_edit.php",
        type: 'GET',
        data: {
            brg_id: a
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
        url: "barang/delete.php",
        type: 'POST',
        data: {
            brg_id: a
        },
        success: function (data) {
            if (data == '1') {
                toastr.success('data berhasil dihapus');
                loadData();
            } else {
                toastr.success(data);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}
