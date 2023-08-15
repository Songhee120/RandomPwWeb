// index.html에서 입력받은 데이터(digits)을 넘겨주는 역할을 하는 JS

// form태그 'submit'에 eventListener 등록
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  console.log("eventListener 실행...");

  event.preventDefault();

  const digits = document.getElementById("digits").value;
  console.log("digits: " + digits);

  // URL에 데이터 추가
  const newURL = "loading.html?digits=" + digits;
  // 새로운 URL로 이동
  window.location.href = newURL;
});
