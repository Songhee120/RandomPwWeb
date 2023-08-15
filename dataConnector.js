// 앞 페이지에서 받은 데이터를 파싱하고 뒤 페이지로 넘겨주는 JS

// 현재 페이지의 url가져오기
var url = window.location.href;
// url에서 쿼리 문자열 가져오기
var queryString = url.split('?')[1];

setTimeout(function() {
    // 17초 후에 결과 창으로 이동
    window.location.href = "result.html?" + queryString;
}, 17000);

