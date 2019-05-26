function markQuiz() {
  var x = document.getElementById("quiz");
  var text = [x.length];
  var i;
  for (i = 0; i < x.length ;i++) {
	  var val = x.elements[i].value;
	  if (val == "on") {
		var ans = x.elements[i].checked;
	  } else {
	  	var ans = val;
	  }
	  text[i] = ans;
  }
alert(text);
  	var counter = 0;
	var correct = 0;
	var i;
	var lines = sessionStorage.getItem('quiz_data');
	lines = lines.split("$");
	alert(lines);
	var lastC = 0;
	for (i = 0; i < lines.length; i++) {
		var line = lines[i].split("+");
		var answer = line[line.length -1];
		var type = line[1];
		
		if (type == " ww ") {
			if (text[counter].toLower().indexOf(answer.trim()) > -1) correct += 1;
			counter += 1;
		} else if (type == " wn ") {
			if (answer.trim() == text[counter]) correct += 1;
			counter += 1
		} else if (type == " rb ") {
			// TODO
			var iter = line[2].split(";").length;
			var j;
			var corr = false;
			for (j = 0; j < iter; j++) {
				var c = j+1;
				if (text[counter] && c == parseInt(answer)) corr = true;
				counter += 1;
			}
			if (corr) correct += 1;
		} else if (type == " cb ") {
			counter += line[2].split(";").length;
		}
		
		if (correct > lastC) {
			var q = document.getElementById(i.toString(10));
			q.setAttribute('class', "correct");
		}
		else {
			var q = document.getElementById(i.toString(10));
			q.setAttribute('class', "wrong");
		}
			
		lastC = correct;
	}
	alert(correct);
	
}
