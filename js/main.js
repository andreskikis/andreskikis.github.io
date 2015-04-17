function validateForm () {
	var x = document.forms ["myForm"] ["name"].value;
		if (x == null || x == "") {
			alert("El nombre debe ser llenado . Gracias");
				return false;
		};
} 