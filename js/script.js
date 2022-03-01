const MyBtn = document.querySelector(".page-1 .quiz-button .startButton");
const page2 = document.querySelector(".page2");
const exittButton = document.querySelector(".exittButton");
const contButton = document.querySelector(".contButton");
const page3 = document.querySelector(".page3");


MyBtn.onclick = () => {
    page2.classList.add("activeInfo");
}

exittButton.onclick = () => {
    page2.classList.remove("activeInfo");
}

contButton.onclick = () => {
    page2.classList.remove("activeInfo");
    page3.classList.add("activeQuiz");
}