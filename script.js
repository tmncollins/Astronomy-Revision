function newPage(name, num) {
  window.location.href = "quiz.html";
  sessionStorage.setItem('quiz_num', num)
  sessionStorage.setItem('quiz_name', name)
}

function getQuizName() {
  return sessionStorage.getItem('quiz_name');
}

function returnString() {
  return "Hi!"; 
}
