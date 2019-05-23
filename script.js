function newPage(name, num) {
  window.location.href = "quiz.html";
  sessionStorage.setItem('quiz_num', num);
  sessionStorage.setItem('quiz_name', name);
}

function createRadioElement(name, value, checked) {
    alert("a");
    var radioHtml = '<input type="radio" name="' + name + '"' + ' value="' + value + '"';
    if ( checked ) {
        radioHtml += ' checked="checked"';
    }
    radioHtml += '/>';

    alert("b");
    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    alert("c");
    return radioFragment.firstChild;
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
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
    var allText = "";
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
              
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function makeQuiz(file)  {
  
  var text = readTextFile(file);
  var lines = text.split("\n");
  
  lines.pop();
  lines = shuffle(lines);
  
  var d = document.createElement("div");
  var f = document.createElement("form");
  
lines.forEach(function(item, index) {
  var curr = item.split("+");
  var text = (index+1).toString(10) + ". " + curr[0];
  var type = curr[1];
  var ans =  curr[-1];
  
  var form = document.createElement("form");
  form.setAttribute('method',"post");
  form.setAttribute('action',"submit.php");
  
  var q = document.createElement("div");
  q.className = "div";
  var para = document.createElement("P");                       // Create a <p> node
  var t = document.createTextNode(text);      // Create a text node
  para.appendChild(t);
  q.appendChild(para);
  
  if (type == " wn ") {
    var inp = document.createElement("input"); //input element, text
    inp.setAttribute('type',"number");
    q.appendChild(inp);
  }
  else if (type == " ww ") {
    var inp = document.createElement("input"); //input element, text
    inp.setAttribute('type',"text");
    q.appendChild(inp);
  }
  else if (type == " rb ") {
    var opt = curr[2].split(";");
    opt.forEach(function(option, ind) {
      alert(option);
      var inp = createRadioElement(index.toString(), option, 0);
      alert("1");
      q.appendChild(inp);  
      alert("2");
    });
      alert("3");
    
    }
  
  f.appendChild(q);
//  d.appendChild(q);
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
d.appendChild(f);
document.getElementsByTagName('body')[0].appendChild(d);  
document.getElementsByTagName('body')[0].appendChild(f);  
 }
