function kiemTraRong(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    if (value === "") {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    } else {
        theDom.innerHTML = "";
        return true;
    }
}
function kiemTraChu(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var regexCharacter = /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/;
    var lowerCase = value.toLowerCase();
    var isvalid = regexCharacter.test(lowerCase);
    if (isvalid) {
        theDom.innerHTML = "";
        return true;
    } else {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    }
}
function kiemTraDoDai(value, max, min, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    if (value.length > max || value.length < min) {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    } else {
        theDom.innerHTML = "";
        return true;
    }
}

function kiemTraEmail(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isvalid = regexEmail.test(value);
    if (isvalid) {
        theDom.innerHTML = "";
        return true;
    } else {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    }
}

function kiemTraMatKhau(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var regexMatKhau =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

    var isvalid = regexMatKhau.test(value);
    if (isvalid) {
        theDom.innerHTML = "";
        return true;
    } else {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    }
}

function kiemDate(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var regexDate = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    var isvalid = regexDate.test(value);
    if (isvalid) {
        theDom.innerHTML = "";
        return true;
    } else {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    }
}
function kiemTraLuong(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    if (value >= 1000000 && value <= 20000000) {
        theDom.innerHTML = "";
        return true;
    } else {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    }
}
function kiemTraSelect(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    var theSelect = document.getElementById(value).selectedIndex;
    if (theSelect === 0) {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    } else {
        theDom.innerHTML = "";
        return true;
    }
}
function kiemTraGioLam(value, idCanhBao, mess) {
    var theDom = document.getElementById(idCanhBao);
    if (value >= 80 && value <= 200) {
        theDom.innerHTML = "";
        return true;
    } else {
        theDom.innerHTML = mess;
        theDom.style.display = "block";
        return false;
    }
}
