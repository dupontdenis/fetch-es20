import { quizz } from "./quizz.mjs";

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, (tag) => {
    const charsToReplace = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return charsToReplace[tag] || tag;
  });
}

function render(quizz) {
  if (!quizz) {
    throw "The questions list is not available";
  }

  const list = quizz.results
    .map((question) => {
      return `<li data-answer="${escapeHTML(
        question.correct_answer
      )}">${escapeHTML(question.question)}</li>`;
    })
    .join("");

  return `<ol>${list}</ol>`;
}

const container = document.querySelector(".container");
try {
  container.innerHTML = render(quizz);
} catch (error) {
  container.innerHTML = error;
  console.error(error);
}
