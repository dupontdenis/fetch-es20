import { quizz } from "./quizz.mjs";

function render(quizz) {
  if (!quizz) {
    throw "The questions list is not available";
  }

  const list = quizz.results
    .map((question) => {
      return `<li data-answer="${question.correct_answer}">${question.question} </li>`;
    })
    .join("");

  return `<ol>${list}</ol>`;
}

let container = document.querySelector(".container");
try {
  container.innerHTML = render(quizz);
} catch (error) {
  container.innerHTML = error;
}
