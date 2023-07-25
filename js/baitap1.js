document.getElementById("btnKiemTraKetQua").addEventListener("click", function() {
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    var diemMon3 = parseFloat(document.getElementById("diemMon3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = parseInt(document.getElementById("doiTuong").value);
    var diemUuTien = 0;

    if (khuVuc !== "X") {
        // Điểm ưu tiên theo khu vực
        diemUuTien += 1.5;
    }

    if (doiTuong !== 0) {
        // Điểm ưu tiên theo đối tượng
        diemUuTien += 2;
    }

    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

    var ketQua = "";
    if (diemTongKet >= diemChuan && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0) {
        ketQua = "Đậu";
    } else {
        ketQua = "Rớt";
    }

    // Hiển thị kết quả
    document.getElementById("txtKetQua").innerText = "Kết quả: " + ketQua;
    document.getElementById("txtTongDiem").innerText = "Tổng điểm đạt được: " + diemTongKet.toFixed(2);
});