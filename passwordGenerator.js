// 현재 페이지의 url가져오기
var url = window.location.href;
// url에서 쿼리 문자열 가져오기
var queryString = url.split('?')[1];
// digits 값 가져오기
var digits = queryString.split('=')[1];

window.onload = function() {
    setResult(digits)
};

function setResult(length){
    document.getElementById("result").innerHTML = generatorRandomPassword(length);
}

function generatorRandomPassword(length) {
    // var length = 8;
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomDigit = Math.floor(Math.random() * 10);
        password += randomDigit;
    }
    return password;
}

// TEST
// var password = generatorRandomPassword(4)
// console.log(password)
