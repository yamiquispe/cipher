
// Validación cifrado:

let validaCi=function(){

	/* getElementById(): Selecciona un elemento del 
	   documento por medio del id. 
	   .value: Permite obtener el valor del campo de 
	   formulario para un cuadro de texto y textarea.
	   .focus(): Asigna un foco a un elemento.
	*/
	let offsetCi=document.getElementById("posicion").value;
	console.log("Desplazamiento: " + offsetCi);

	if(parseInt(offsetCi)<1 || parseInt(offsetCi)>500){
		
		// Es un string.
		console.log(typeof (offsetCi));

		alert('El número no es válido.');

		/* .value="": Restablece el campo.
			Restablecemos el campo numérico:
		*/
		document.getElementById("posicion").value="";
		document.getElementById("posicion").focus();
	}

	else{
		// Capturamos el mensaje:
		const stringCi=document.getElementById("msjeCi").value;
		console.log("Mensaje: " + stringCi);

		if(stringCi==""){ // "msje" igual a cadena vacía.
			alert('Ingrese un texto.');
			document.getElementById("msjeCi").focus();
		}

		else{
			alert("El mensaje cifrado es: " + window.cipher.encode(offsetCi, stringCi));
		}

	}

};

// Validación descifrado:

let validaDes=function(){

	let offsetDes=document.getElementById("pos").value;
	console.log("Desplazamiento: " + offsetDes);

	if(parseInt(offsetDes)<1 || parseInt(offsetDes)>500){
		alert('El número no es válido.');

		document.getElementById("pos").value="";
		document.getElementById("pos").focus();
	}

	else{

		const stringDes=document.getElementById("msjeDes").value;
		console.log("Mensaje: " + stringDes);

		if(stringDes==""){ 
			alert('Ingrese un texto.');
			document.getElementById("msjeDes").focus();
		}

		else{
			alert("El mensaje descifrado es: " + window.cipher.decode(offsetDes, stringDes));
		}

	}

};

let resCi=function resCi(){
	document.getElementById("posicion").value="";
	document.getElementById("msjeCi").value="";
}


let resDes=function resDes(){
	document.getElementById("pos").value="";
	document.getElementById("msjeDes").value="";
}

