var qlnv = new QuanLyNhanVien();
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNV() {
    var tknv = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var datepicker = getEle("datepicker").value;
    var luongCB = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;

    var isvalid = true;
    isvalid &= kiemTraRong(tknv, "tbTKNV", "yêu cầu không để trống") && kiemTraDoDai(tknv, 6, 4, "tbTKNV", "yêu cầu nhập 4 - 6 ký tự");
    isvalid &= kiemTraRong(name, "tbTen", "yêu cầu không để trống") && kiemTraChu(name, "tbTen", "yêu cầu chỉ nhập chữ và ghi đúng Họ và Tên");
    isvalid &= kiemTraRong(email, "tbEmail", "yêu cầu không để trống") && kiemTraEmail(email, "tbEmail", "yêu cầu nhập đúng Email");
    isvalid &= kiemTraRong(password, "tbMatKhau", "yêu cầu không để trống") && kiemTraMatKhau(password, "tbMatKhau", "yeu cau 6-10 ký tự (chứa ít nhất 1 ký tự số,1 ký tự thường, 1 ký tự in hoa, 1 ký tự đặc biệt)");
    isvalid &= kiemTraRong(datepicker, "tbNgay", "yêu cầu không để trống") && kiemDate(datepicker, "tbNgay", "yêu cầu nhập đúng định dạng mm/dd/yyyy");
    isvalid &= kiemTraRong(luongCB, "tbLuongCB", "yêu cầu không để trống") && kiemTraLuong(luongCB, "tbLuongCB", "yêu cầu nhập 1.000.000-20.000.000");
    isvalid &= kiemTraSelect("chucvu", "tbChucVu", "yêu cầu chọn chức vụ");
    isvalid &= kiemTraRong(gioLam, "tbGiolam", "yêu cầu không để trống") && kiemTraGioLam(gioLam, "tbGiolam", "yêu cầu nhập từ 80 - 200 giờ")
    if (!isvalid) {
        return null;
    }
    var nhanVien = new NhanVien(
        tknv,
        name,
        email,
        password,
        datepicker,
        luongCB,
        chucvu,
        gioLam
    );
    nhanVien.tinhLuongNV();
    nhanVien.tinhXepLoaiNV();
    return nhanVien;
}

function themNhanVien() {
    var nhanVien = layThongTinNV();
    if (nhanVien) {
        qlnv.themNV(nhanVien);
        renderListNV(qlnv.arr);
        setLocalStorage();
    }
}

function renderListNV(array) {
    var content = "";
    for (var i = 0; i < array.length; i++) {
        var nhanVien = array[i];
        content += `
        <tr>
        <td>${nhanVien.taiKhoanNV}</td>
        <td>${nhanVien.tenNV}</td>
        <td>${nhanVien.emailNV}</td>
        <td>${nhanVien.ngayLamNV}</td>
        <td>${nhanVien.chucVuNV}</td>
        <td>${nhanVien.tongLuong}</td>
        <td>${nhanVien.xepLoai}</td>
        <td>
        <button class = "btn btn-danger" onclick = "deLete('${nhanVien.taiKhoanNV}')" >Delete</button>
        </td>
        <td>
        <button class = "btn btn-success" onclick = "rePair('${nhanVien.taiKhoanNV}')" >Repair</button>
        </td>
        </tr>
        `
    }
    getEle("tableDanhSach").innerHTML = content;
}

function deLete(taiKhoanNV) {
    qlnv.deleteNV(taiKhoanNV)
    renderListNV(qlnv.arr);
    console.log(renderListNV(qlnv.arr));
    setLocalStorage();
}

function rePair(taiKhoanNV) {
    var nhanVien = qlnv.layThongTinTheoTKNV(taiKhoanNV);
    if (nhanVien) {
        getEle("tknv").value = nhanVien.taiKhoanNV;
        getEle("tknv").disabled = true;
        name = getEle("name").value = nhanVien.tenNV;
        email = getEle("email").value = nhanVien.emailNV;
        password = getEle("password").value = nhanVien.matKhauNV;
        datepicker = getEle("datepicker").value = nhanVien.ngayLamNV;
        luongCB = getEle("luongCB").value = nhanVien.luongNV;
        chucvu = getEle("chucvu").value = nhanVien.chucVuNV;
        gioLam = getEle("gioLam").value = nhanVien.gioLamNV;
    }
}

function capNhatNV() {
    var nhanVien = layThongTinNV();
    if (nhanVien) {
        qlnv.capNhat(nhanVien);
        renderListNV(qlnv.arr);
        setLocalStorage();
    }
}
// tim kiem nhan vien
getEle("searchName").addEventListener("keyup", function () {
    var keyWord = getEle("searchName").value;
    var mangTimKiem = qlnv.timKiemNV(keyWord);
    renderListNV(mangTimKiem);
}
)

function setLocalStorage() {
    var dataString = JSON.stringify(qlnv.arr);
    localStorage.setItem("qlnv", dataString);
}
function getLocalStorage() {
    if (localStorage.getItem("qlnv")) {
        var getStorageString = localStorage.getItem("qlnv");
        // convert ve JSON
        var getStorageJson = JSON.parse(getStorageString);
        qlnv.arr = getStorageJson;
        renderListNV(qlnv.arr);
    };
}
