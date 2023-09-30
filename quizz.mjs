const url = "https://opentdb.com/api.php?amount=100";
const response = await fetch(url);
let quizz = await response.json();

export { quizz };
