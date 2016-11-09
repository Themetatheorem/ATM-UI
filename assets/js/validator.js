account_input_mode = true;

function save(key, value){
	localStorage.setItem(key, value);
}

function numpadClick(clickedID){
	var field_name = ((account_input_mode) ? "account_number_field" : "pin_field");
	var field = document.getElementById(field_name);
	var field_size = ((account_input_mode) ? 16 : 4);
	console.log(field);
	if(field.value.length < field_size){
		switch(clickedID){
			case "numpad_0":
				field.value = field.value + '0';
				break;
			case "numpad_1":
				field.value = field.value + '1';
				break;
			case "numpad_2":
				field.value = field.value + '2';
				break;
			case "numpad_3":
				field.value = field.value + '3';
				break;
			case "numpad_4":
				field.value = field.value + '4';
				break;
			case "numpad_5":
				field.value = field.value + '5';
				break;
			case "numpad_6":
				field.value = field.value + '6';
				break;
			case "numpad_7":
				field.value = field.value + '7';
				break;
			case "numpad_8":
				field.value = field.value + '8';
				break;
			case "numpad_9":
				field.value = field.value + '9';
				break;
		}
	}
	if(field.value.length == 16){
		document.getElementById("account_number_help").style.visibility = "hidden";
		save("account_number", field.value);
	}

	if(clickedID == "numpad_enter"){
		if(account_input_mode){
			document.getElementById("account-number-form").style.visibility = "hidden";
			account_input_mode = false;
			document.getElementById("account-pin-form").style.visibility = "visible";
		}else{
			window.location.href = "../views/options.html";
		}
	}
}

window.onload = function() {
	if(!localStorage.chequing){
		localStorage.chequing = 2000;
	}
	if(!localStorage.savings){
		localStorage.savings = 1000;
	}
};
