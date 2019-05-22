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

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
