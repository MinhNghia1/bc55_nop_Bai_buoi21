function QuanLyNhanVien() {
    this.arr = [];
    this.themNV = function (nhanVien) {
        this.arr.push(nhanVien);
    }
    this.timViTri = function (taiKhoanNV) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];
            if (taiKhoanNV === nhanVien.taiKhoanNV) {
                index = i;
                break;
            }
        }
        return index
    }
    this.deleteNV = function (taiKhoanNV) {
        var viTri = this.timViTri(taiKhoanNV);
        if (viTri !== -1) {
            this.arr.splice(viTri, 1);
        }
    }
    this.layThongTinTheoTKNV = function (taiKhoanNV) {
        var viTri = this.timViTri(taiKhoanNV);
        if (viTri !== -1) {
            return this.arr[viTri];
        }
        return null;
    }
    this.capNhat = function (nhanVien) {
        var viTri = this.timViTri(nhanVien.taiKhoanNV);
        if (viTri !== -1) {
            this.arr[viTri] = nhanVien;
        }

    }
    this.timKiemNV = function (keyWord) {
        var mangTimKiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];
            var keyWordLowercase = keyWord.toLowerCase();
            var xepLoaiLowercase = nhanVien.xepLoai.toLowerCase();
            if (xepLoaiLowercase.indexOf(keyWordLowercase) !== -1) {
                mangTimKiem.push(nhanVien);
            }
        }
        return mangTimKiem;
    };
}