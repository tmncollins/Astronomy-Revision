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
	for (i = 0; i < lines.length; i++) {
		var line = lines[i].split("+");
		var answer = line[line.length -1];
		var type = line[1];
		if (type == " ww ") {
			if (answer.trim() == text[counter]) correct += 1;
			counter += 1;
		} else if (type == " wn ") {
			if (answer.trim() == text[counter]) correct += 1;
			counter += 1
		} else if (type == " rb ") {
			// TODO
			counter += line[2].split(";").length;
		} else if (type == " cb ") {
			counter += line[2].split(";").length;
		}
	}
	alert(correct);
	
}
