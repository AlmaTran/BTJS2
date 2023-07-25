document.getElementById("btnTinhTienDien").addEventListener("click", function() {
    var hoVaTen = document.getElementById("hoVaTen").value;
    var soKW = parseInt(document.getElementById("inpNhapSoKw").value);
    var tienTra = 0;

    if (soKW <= 50) {
        tienTra = soKW * 500;
    } else if (soKW <= 100) {
        tienTra = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 150) {
        tienTra = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else {
        tienTra = 50 * 500 + 50 * 650 + 50 * 850 + (soKW - 150) * 1100;
    }

    // Hiển thị kết quả
    document.getElementById("txtTienPhat").innerText = "Họ và tên: " + hoVaTen + ". Tiền điện phải trả: " + tienTra + "đ.";
});
