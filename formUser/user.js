
$(function () {
    $("#tabel").DataTable();
    loadData();

    $("#btn_add").click(function () {
        $('#modal_add').modal('show');
        reset();
    })

    function reset() {
        $('#users_id').val('');
        $('#username').val('');
        $('#password').val('');
        $('#status').val('');
    }

    $('#btn_simpan').on('click', function (e) {
        var users_id = $('#users_id').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var status = $('#status').val();

        if (users_id == '')
            alert('User ID wajib diisi!')
        else if (username == '')
            alert('Username wajib diisi!')
        else if (password == '')
            alert('Password wajib diisi!')
        else if (status == '')
            alert('Status wajib diisi!')
        else {
            var str_data = "users_id=" + users_id + "&username=" + username + "&password=" + password + "&status=" + status;
            $.ajax({
                url: "formUser/add.php",
                type: 'POST',
                dataType:"text",
                data:str_data,
                success: function (data) {
                    if (data == '1') {
                        alert("Data berhasil disimpan");
                        loadData();
                        $('#modal_add').modal('hide');
                    }else{
                        alert(data);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error:", error);
                }
            })
        }

    });
});

function loadData() {
    $.ajax({
        url: "formUser/getData.php",
        type: 'GET',
        success: function (data) {
            // $('#tabel').DataTable().fnClearTable();
            // $('#tabel').DataTable().fnDraw();
            // $('#tabel').DataTable().fnDestroy();
            if ($.fn.DataTable.isDataTable('#tabel')) {
                $('#tabel').DataTable().clear().destroy();
            }
            $('#tabel tbody').html(data);
            $('#tabel').DataTable();
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}
