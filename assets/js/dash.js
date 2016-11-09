window.onload = function() {
	var account_number = localStorage.getItem("account_number");
	document.getElementById("accountnum").innerHTML = account_number;

	document.getElementById("chequingBalance").innerHTML = '$'.concat(localStorage.chequing).concat(' CAD');
	document.getElementById("savingsBalance").innerHTML = '$'.concat(localStorage.savings).concat(' CAD');
};