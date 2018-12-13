function add() {
		var number1 = document.getElementById("number1").value;
		var number2 = document.getElementById("number2").value;
		console.log(number1);
		var sum = parseInt(number1) + parseInt(number2);
		alert(sum);
	}

	var submit = document.getElementById("add");
	submit.addEventListener("click", add);
