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
    showQuestions(1);
}

function showQuestions(index) {
    const queText = document.querySelector('.quiestion');
    const optionList = document.querySelector('.option');
    let optionTag = `<div class="myOption"> ${questions[index].option}.} </div>`;
    let queTag = `<h3>  ${questions[index].numb}. ${questions[index].question} </h3>`;
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
}