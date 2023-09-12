const timerElement = document.getElementById("timer");
let countdown;

// 페이지 로드가 완료되면 타이머 시작
document.addEventListener("DOMContentLoaded", startTimer);

function startTimer() {
  let timeLeft = 300;

  countdown = setInterval(function () {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    if (timeLeft === 0) {
      clearInterval(countdown);
      alert("타이머가 끝났습니다!");
    }

    timeLeft--;
  }, 1000);
}
