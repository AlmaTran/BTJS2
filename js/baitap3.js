document.getElementById("btnTinhTienThue").addEventListener("click", function() {
    var hoVaTen = document.getElementById("hoVaTen").value;
    var tongThuNhapNam = parseInt(document.getElementById("inpTongThuNhapNam").value);
    var soNguoiPhuThuoc = parseInt(document.getElementById("inpSoNguoiPhuThuoc").value);
    var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
    var tienThue = 0;

    // Kiểm tra nếu thu nhập chịu thuế âm (dưới 0) thì gán bằng 0
    if (thuNhapChiuThue < 0) {
        thuNhapChiuThue = 0;
    }

    // Tính tiền thuế theo quy định
    if (thuNhapChiuThue > 80000000) {
        tienThue = thuNhapChiuThue * 0.35;
    } else if (thuNhapChiuThue > 52000000) {
        tienThue = thuNhapChiuThue * 0.3;
    } else if (thuNhapChiuThue > 32000000) {
        tienThue = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 18000000) {
        tienThue = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 10000000) {
        tienThue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 5000000) {
        tienThue = thuNhapChiuThue * 0.1;
    } else {
        tienThue = thuNhapChiuThue * 0.05;
    }

    // Hiển thị kết quả
    document.getElementById("txtTienThue").innerText = "Họ và tên: " + hoVaTen + ". Tiền thuế phải trả: " + tienThue + "đ.";
});