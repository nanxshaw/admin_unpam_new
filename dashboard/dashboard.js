
$(function () {
    loadData();
});

function loadData() {
    $.ajax({
        url: "dashboard/getData.php",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data)
            $('#total_pengguna').text(data.total_user);
            $('#jumlah_barang').text(data.total_barang);
            $('#total_masuk').text(data.total_masuk);
            $('#jumlah_keluar').text(data.total_keluar);

            var labels = Object.keys(data.data_masuk); // Mengambil nama barang sebagai label
            var dataBarangMasuk = Object.values(data.data_masuk); // Mengambil jumlah barang masuk
            var dataBarangKeluar = Object.values(data.data_keluar); // Mengambil jumlah barang keluar

            var barChartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Barang Masuk',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        data: dataBarangMasuk
                    },
                    {
                        label: 'Barang Keluar',
                        backgroundColor: 'rgb(220,53,69)',
                        borderColor: 'rgb(220,53,69)',
                        data: dataBarangKeluar
                    }
                ]
            };

            var barChartCanvas = $('#barChart').get(0).getContext('2d');

            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };

            new Chart(barChartCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}

