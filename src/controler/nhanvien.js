function NhanVien(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
) {
    this.taiKhoanNV = tknv;
    this.tenNV = name;
    this.emailNV = email;
    this.matKhauNV = password;
    this.ngayLamNV = datepicker;
    this.luongNV = luongCB;
    this.chucVuNV = chucvu;
    this.gioLamNV = gioLam;
    this.xepLoai = "";
    this.tongLuong = 0;

    this.tinhLuongNV = function () {
        if (this.chucVuNV === "Sếp") {
            var tinhLuong = Number(this.luongNV) * 3;
            this.tongLuong = tinhLuong;
        } else if (this.chucVuNV === "Trưởng phòng") {
            var tinhLuong = Number(this.luongNV) * 2;
            this.tongLuong = tinhLuong;
        } else {
            var tinhLuong = Number(this.luongNV) * 1;
            this.tongLuong = tinhLuong;
        }
    }
    this.tinhXepLoaiNV = function () {
        if (this.gioLamNV >= 192) {
            this.xepLoai = "nhân viên xuất sắc";
        } else if (this.gioLamNV >= 176) {
            this.xepLoai = "nhân viên giỏi";
        } else if (this.gioLamNV >= 160) {
            this.xepLoai = "nhân viên khá";
        } else {
            this.xepLoai = "nhân viên trung bình";
        }
    }
}