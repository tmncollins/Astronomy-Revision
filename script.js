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
                return allText;
            }
        }
    }
    rawFile.send(null);
}

function makeQuiz(file)  {
  var text = readTextFile(file);
  var lines = text.split("\n")

  var d = document.createElement("div");
  var f = document.createElement("form");
  
  lines.forEach(function (item, index) {
    
  });
  
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

var i = document.createElement("input"); //input element, text
i.setAttribute('type',"number");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

f.appendChild(i);
f.appendChild(s);
  
//and some more input elements here
//and dont forget to add a submit button
d.appendChild(f)
document.getElementsByTagName('body')[0].appendChild(d);  
}
