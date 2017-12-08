/*****************************Usuarios**********************************************/

function registroDerechoHabiente(){
	document.getElementById("barra").innerHTML = "<p>DerechoHabiente</p>";
	document.getElementById('espacios').innerHTML = "<input id='nombreUsuario' type='text' placeholder='Nombre(s)'>";
	document.getElementById('espacios').innerHTML += "<input id='apellidosUsuario' type='text' placeholder='Apellidos'><br>";
	document.getElementById('espacios').innerHTML += "<input id='noAfiliacionUsuario' type='number' placeholder='Numero de Afiliacion'><br>";
	document.getElementById('espacios').innerHTML += "<input id='correoUsuario' type='email' placeholder='Correo'><br>";
	document.getElementById('espacios').innerHTML += "<input id='telefonoUsuario' type='number' placeholder='Telefono'><br>";
	document.getElementById('espacios').innerHTML += "<input id='estadoUsuario' type='text' placeholder='Querétaro' disabled value='Querétaro'><br>";
	document.getElementById('espacios').innerHTML += "<select class='' name='' id='municipioUsuario' onchange='validarCPUsuario()'><option value=''>Selecciona tu municipio</option><option value='Queretaro'>Querétaro</option><option value='El Márquez'>El Márquez</option><option value='Colón'>Colón</option><option value='Pinal de Amoles'>Pinal de Amoles</option><option value='Jalpan de Serra'>Jalpan de Serra</option><option value='Landa de Matamoros'>Landa de Matamoros</option><option value='Arroyo Seco'>Arroyo Seco</option><option value='Peñamiller'>Peñamiller</option><option value='Cadereyta de Montes'>Cadereyta de Montes</option><option value='San Joaquín'>San Joaquín</option><option value='Tolimán'>Tolimán</option><option value='Ezequiel Montes'>Ezequiel Montes</option><option value='Pedro Escobedo'>Pedro Escobedo</option><option value='Tequisquiapan'>Tequisquiapan</option><option value='San Juan del Río'>San Juan del Río</option><option value='Amealco de Bonfil'>Amealco de Bonfil</option><option value='Corregidora'>Corregidora</option><option value='Huimilpan'>Huimilpan</option><select><br>";
	document.getElementById('espacios').innerHTML += "<input id='cpUsuario' type='number' placeholder='Codigo Postal' min='76000' max='76998'>";
	document.getElementById('espacios').innerHTML += "<input id='calleUsuario' type='text' placeholder='Calle'>";
	document.getElementById('espacios').innerHTML += "<input id='numeroUsuario' type='number' placeholder='Número'>";
	document.getElementById('espacios').innerHTML += "<input id='coloniaUsuario' type='text' placeholder='Colonia'><br>";
	document.getElementById('espacios').innerHTML += "<button onclick = 'obtenerClinicaUsuario()'>Asignar Clinica</button>";
	document.getElementById('espacios').innerHTML += "<button id='reg' onclick = 'registrarUsuario()' disabled>Registrar</button>";
}

function registrarUsuario() {
	var nombreUsuario = document.getElementById('nombreUsuario').value;
	var apellidosUsuario = document.getElementById('apellidosUsuario').value;
	var noAfiliacionUsuario = document.getElementById('noAfiliacionUsuario').value;
	var correoUsuario = document.getElementById('correoUsuario').value;
	var telefonoUsuario = document.getElementById('telefonoUsuario').value;
	var estadoUsuario = "Querétaro";
	var municipioUsuario = document.getElementById('municipioUsuario').value;
	var cpUsuario = document.getElementById('cpUsuario').value;
	var calleUsuario = document.getElementById('calleUsuario').value;
	var numeroUsuario = document.getElementById('numeroUsuario').value;
	var coloniaUsuario = document.getElementById('coloniaUsuario').value;
	var idClinicaUsuario = localStorage.getItem("idClinicaUsuario");

	if (nombreUsuario !="" && apellidosUsuario !="" && noAfiliacionUsuario !="" && correoUsuario !="" && telefonoUsuario !=""  && municipioUsuario !="" && cpUsuario !="" && cpUsuario>=document.getElementById('cpUsuario').min && cpUsuario <= document.getElementById('cpUsuario').max && calleUsuario !="" && numeroUsuario !="" && coloniaUsuario !="" && idClinicaUsuario) {

	// 	console.log(idClinicaUsuario);

		var valores = [nombreUsuario, apellidosUsuario, noAfiliacionUsuario, correoUsuario,telefonoUsuario, estadoUsuario, municipioUsuario, cpUsuario, calleUsuario, numeroUsuario, coloniaUsuario, idClinicaUsuario];

		var ajaxRequest;

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					if(ajaxRequest.responseText == "Exito xD"){
						alert("Registro Exitoso");
						localStorage.clear();
						window.location.assign("indexAdmin.html");
					}else{
						alert(ajaxRequest.responseText);
					}
			 }
		}

		var queryString = "?sent=reg&valores=" + valores;
    alert("usuario: "+queryString);
		ajaxRequest.open("GET", "api/usuarios/api.php" + queryString, true);
		ajaxRequest.send(null);

	}else{
		alert("Llena todos los campos con valores validos");
	}
}

function buscarDerechoHabiente(){
	document.getElementById("barra").innerHTML = "<p>DerechoHabiente</p>";
	document.getElementById("barra").innerHTML += "<input type=image id='lupa' onclick='buscarUsuario()' src='img/lupa.png' width='30' height='20'>";
	document.getElementById("barra").innerHTML += "<input type='text' id='buscaUsuario' onkeyup='buscarUsuario()' placeholder='Buscar'>";
	document.getElementById('espacios').innerHTML = "";
}

function buscarUsuario() {
	document.getElementById('espacios').innerHTML = "<div id='resultados'></div>";
	var valores = document.getElementById('buscaUsuario').value;
	if(valores != ""){
		var ajaxRequest;
		var hola = "";

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					hola =  JSON.parse(ajaxRequest.responseText);
					console.log(hola);
					if(hola == null){
						document.getElementById('espacios').innerHTML = "<h1>No se encontraron resultados</h1>"
					}else{
						var resultados = document.getElementById('resultados');
						var tabla = document.createElement("table");
						var tblhead = document.createElement("thead");
						var tblBody = document.createElement("tbody");

						for (var i = 0; i <= Object.keys(hola).length; i++) {
							var hilera = document.createElement("tr");

							if (i == 0) {

								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Nombre Completo");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Numero de Afiliación");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Dirección");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Teléfono");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Correo Electrónico");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Citas");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Modificar");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Eliminar");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);

								tblhead.appendChild(hilera);
							} else {
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].nombre+" "+hola[i-1].apellidos);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].noAfiliacion);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].calle+" "+hola[i-1].numero+" "+hola[i-1].colonia+", "+hola[i-1].municipio+", Querétaro");
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].telefono);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].email);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode("Citas");
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/modificar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","modificarUsuario()");
								celda.appendChild(input);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/eliminar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","eliminarUsuario()");
								celda.appendChild(input);
								hilera.appendChild(celda);

								tblBody.appendChild(hilera);

							}
						}
						tabla.appendChild(tblhead);
						tabla.appendChild(tblBody);
						resultados.appendChild(tabla);
					}
			 }
		}

		var queryString = "?sent=busq&valores=" + valores;
		ajaxRequest.open("GET", "api/usuarios/api.php" + queryString, true);
		ajaxRequest.send(null);
	}
}

function validarCPUsuario(){
	var municipio = document.getElementById('municipioUsuario').value;

	switch (municipio) {
		case 'Queretaro':
				document.getElementById('cpUsuario').min=76000;
				document.getElementById('cpUsuario').max=76238;
			break;
		case 'El Márquez':
				document.getElementById('cpUsuario').min=76240;
				document.getElementById('cpUsuario').max=76269;
			break;
		case 'Colón':
				document.getElementById('cpUsuario').min=76270;
				document.getElementById('cpUsuario').max=76299;
			break;
		case 'Pinal de Amoles':
				document.getElementById('cpUsuario').min=76300;
				document.getElementById('cpUsuario').max=76337;
			break;
		case 'Jalpan de Serra':
				document.getElementById('cpUsuario').min=76340;
				document.getElementById('cpUsuario').max=76359;
			break;
		case 'Landa de Matamoros':
				document.getElementById('cpUsuario').min=76360;
				document.getElementById('cpUsuario').max=76399;
			break;
		case 'Arroyo Seco':
				document.getElementById('cpUsuario').min=76400;
				document.getElementById('cpUsuario').max=76440;
			break;
		case 'Peñamiller':
				document.getElementById('cpUsuario').min=76450;
				document.getElementById('cpUsuario').max=76499;
			break;
		case 'Cadereyta de Montes':
				document.getElementById('cpUsuario').min=76500;
				document.getElementById('cpUsuario').max=76548;
			break;
		case 'San Joaquín':
				document.getElementById('cpUsuario').min=76550;
				document.getElementById('cpUsuario').max=76575;
			break;
		case 'Tolimán':
				document.getElementById('cpUsuario').min=76600;
				document.getElementById('cpUsuario').max=76649;
			break;
		case 'Ezequiel Montes':
				document.getElementById('cpUsuario').min=76650;
				document.getElementById('cpUsuario').max=76697;
			break;
		case 'Pedro Escobedo':
				document.getElementById('cpUsuario').min=76700;
				document.getElementById('cpUsuario').max=76746;
			break;
		case 'Tequisquiapan':
				document.getElementById('cpUsuario').min=76750;
				document.getElementById('cpUsuario').max=76799;
			break;
		case 'San Juan del Río':
				document.getElementById('cpUsuario').min=76800;
				document.getElementById('cpUsuario').max=76849;
			break;
		case 'Amealco de Bonfil':
				document.getElementById('cpUsuario').min=76850;
				document.getElementById('cpUsuario').max=76897;
			break;
		case 'Corregidora':
				document.getElementById('cpUsuario').min=76900;
				document.getElementById('cpUsuario').max=76928;
			break;
		case 'Huimilpan':
				document.getElementById('cpUsuario').min=76950;
				document.getElementById('cpUsuario').max=76998;
			break;
		default:
			document.getElementById('cpUsuario').min=76000;
			document.getElementById('cpUsuario').max=76998
	}
}

function obtenerClinicaUsuario(){
	var nombreUsuario = document.getElementById('nombreUsuario').value;
	var apellidosUsuario = document.getElementById('apellidosUsuario').value;
	var noAfiliacionUsuario = document.getElementById('noAfiliacionUsuario').value;
	var correoUsuario = document.getElementById('correoUsuario').value;
	var telefonoUsuario = document.getElementById('telefonoUsuario').value;
	var estadoUsuario = "Querétaro";
	var municipioUsuario = document.getElementById('municipioUsuario').value;
	var cpUsuario = document.getElementById('cpUsuario').value;
	var calleUsuario = document.getElementById('calleUsuario').value;
	var numeroUsuario = document.getElementById('numeroUsuario').value;
	var coloniaUsuario = document.getElementById('coloniaUsuario').value;

	if (nombreUsuario !="" && apellidosUsuario !="" && noAfiliacionUsuario !="" && correoUsuario !="" && telefonoUsuario !="" && estadoUsuario !="" && municipioUsuario !="" && cpUsuario !="" && cpUsuario>document.getElementById('cpUsuario').min && cpUsuario < document.getElementById('cpUsuario').max && calleUsuario !="" && numeroUsuario !="" && coloniaUsuario !="") {

		var valores = [cpUsuario, municipioUsuario];
		 var dirUsu = [coloniaUsuario + ", " + municipioUsuario + ", Querétaro"];
		// var dires = ['Taponas, Qro', 'La ceja de Bravo, Qro'];
		var ajaxRequest;

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					 var hola = JSON.parse(ajaxRequest.responseText);
					 //console.log(hola);
					 if (hola==null) {
						 localStorage.setItem("idClinicaUsuario", 1);
						 alert("Clinica asignada al usuario.\n"+
						 				"Clinica numero 1\n"+
					 					"Nombre: Benito Juarez\n"+
										"Dirección: Av. 5 de Febrero 105 Colonia Centro, Queretaro, Queretaro\n"+
										"Telefono: 20101616");
										document.getElementById('reg').disabled=false;
					 }else{
						 if(Object.keys(hola).length > 1){
							 var dires=[];
							 for (var i = 0; i < Object.keys(hola).length; i++) {
								 dires.push(hola[i].colonia + ", "+municipioUsuario+", Querétaro");
							 }
							 	//console.log(dires);


								var origin = dirUsu;
								var destination = dires;

								var service = new google.maps.DistanceMatrixService;
								service.getDistanceMatrix({
									origins: origin,
									destinations: destination,
									travelMode: 'DRIVING',
									unitSystem: google.maps.UnitSystem.METRIC,
									avoidHighways: false,
									avoidTolls: false
								}, function(response, status) {
									if (status !== 'OK') {
										alert('Error was: ' + status);
									} else {
										//console.log(response);
										var dir =[];
										for (var i = 0; i < response.rows[0].elements.length; i++) {
											dir.push(response.rows[0].elements[i].distance.value);
											//console.log("Valor: "+ response.rows[0].elements[i].distance.value);
										}
										dir = dir.sort(function(a,b){return a - b;});
										for (var i = 0; i < response.rows[0].elements.length; i++) {
											if (response.rows[0].elements[i].distance.value == dir[0]) {
												ret = i;
											}
										}
										//console.log(ret);
										//console.log(dir[0]);
									}

									localStorage.setItem("idClinicaUsuario", hola[ret].idClinica);
									alert("Clinica asignada al usuario.\n"+
	 							 				"Clinica numero "+hola[ret].idClinica+"\n"+
	 						 					"Nombre: "+hola[ret].nombreClinica+"\n"+
	 											"Dirección: "+hola[ret].calle+" "+hola[ret].numero+" "+hola[ret].colonia+", "+municipioUsuario+", Querétaro\n"+
	 											"Telefono: "+hola[ret].telefono);
												document.getElementById('reg').disabled=false;
								});

								//console.log(ret + " x2");
								// var num = localStorage.getItem("menor");
								// alert("menor: " + num);
								// alert("id: " + hola[num].idClinica);

						 }else{
							 localStorage.setItem("idClinicaUsuario", hola[0].idClinica);
							 alert("Clinica asignada al usuario.\n"+
							 				"Clinica numero "+hola[0].idClinica+"\n"+
						 					"Nombre: "+hola[0].nombreClinica+"\n"+
											"Dirección: "+hola[0].calle+" "+hola[0].numero+" "+hola[0].colonia+", "+municipioUsuario+", Querétaro\n"+
											"Telefono: "+hola[0].telefono);
							document.getElementById('reg').disabled=false;
						 }
					 }
				 }
			 }

		var queryString = "?sent=obt&valores=" + valores;
		//alert(queryString);
		ajaxRequest.open("GET", "api/clinicas/api.php" + queryString, true);
		ajaxRequest.send(null);
	}else{
		alert("Llena todos los campos con valores validos");
	}
}

function getUsuario(noAfiliacion) {
	var ajaxRequest;

  ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {

     if(ajaxRequest.readyState == 4) {
			 console.log(ajaxRequest.responseText);
	     var hola = JSON.parse(ajaxRequest.responseText);

			 document.getElementById("barra").innerHTML = "<p>DerechoHabiente</p>";
		 	 document.getElementById('espacios').innerHTML = "<input id='nombreUsuario' type='text' placeholder='Nombre(s)' value='"+hola[0].nombre+"'>";
		 	 document.getElementById('espacios').innerHTML += "<input id='apellidosUsuario' type='text' placeholder='Apellidos' value='"+hola[0].apellidos+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<input id='noAfiliacionUsuario' type='number' placeholder='Numero de Afiliacion' disabled value='"+hola[0].noAfiliacion+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<input id='correoUsuario' type='email' placeholder='Correo' value='"+hola[0].email+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<input id='telefonoUsuario' type='number' placeholder='Telefono' value='"+hola[0].telefono+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<input id='estadoUsuario' type='text' placeholder='Querétaro' disabled value='Querétaro' value='"+hola[0].estado+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<select class='' name='' id='municipioUsuario' onchange='validarCPUsuario()' ><option value='"+hola[0].municipio+"'>"+hola[0].municipio+"</option><option value='Queretaro'>Querétaro</option><option value='El Márquez'>El Márquez</option><option value='Colón'>Colón</option><option value='Pinal de Amoles'>Pinal de Amoles</option><option value='Jalpan de Serra'>Jalpan de Serra</option><option value='Landa de Matamoros'>Landa de Matamoros</option><option value='Arroyo Seco'>Arroyo Seco</option><option value='Peñamiller'>Peñamiller</option><option value='Cadereyta de Montes'>Cadereyta de Montes</option><option value='San Joaquín'>San Joaquín</option><option value='Tolimán'>Tolimán</option><option value='Ezequiel Montes'>Ezequiel Montes</option><option value='Pedro Escobedo'>Pedro Escobedo</option><option value='Tequisquiapan'>Tequisquiapan</option><option value='San Juan del Río'>San Juan del Río</option><option value='Amealco de Bonfil'>Amealco de Bonfil</option><option value='Corregidora'>Corregidora</option><option value='Huimilpan'>Huimilpan</option><select><br>";
		 	 document.getElementById('espacios').innerHTML += "<input id='cpUsuario' type='number' placeholder='Codigo Postal' min='76000' max='76998' value='"+hola[0].codPost+"'>";
		 	 document.getElementById('espacios').innerHTML += "<input id='calleUsuario' type='text' placeholder='Calle' value='"+hola[0].calle+"'>";
		 	 document.getElementById('espacios').innerHTML += "<input id='numeroUsuario' type='number' placeholder='Número' value='"+hola[0].numero+"'>";
			 document.getElementById('espacios').innerHTML += "<input id='coloniaUsuario' type='text' placeholder='Colonia' value='"+hola[0].colonia+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<input id='idClinicaUsuario' type='text' placeholder='Numero de Clinica' value='"+hola[0].idClinica+"'><br>";
		 	 document.getElementById('espacios').innerHTML += "<button id='reg' onclick = 'modificaUsuario()'>Modificar</button>";

     }
  }

  var queryString = "?sent=get&valores=" + noAfiliacion;
	alert(queryString);
  ajaxRequest.open("GET", "api/usuarios/api.php" + queryString, true);
  ajaxRequest.send(null);

}

function modificarUsuario() {
	var nombreUsuario = document.getElementById('nombreUsuario').value;
	var apellidosUsuario = document.getElementById('apellidosUsuario').value;
	var noAfiliacionUsuario = document.getElementById('noAfiliacionUsuario').value;
	var correoUsuario = document.getElementById('correoUsuario').value;
	var telefonoUsuario = document.getElementById('telefonoUsuario').value;
	var estadoUsuario = document.getElementById('estadoUsuario').value;
	var municipioUsuario = document.getElementById('municipioUsuario').value;
	var cpUsuario = document.getElementById('cpUsuario').value;
	var calleUsuario = document.getElementById('calleUsuario').value;
	var numeroUsuario = document.getElementById('numeroUsuario').value;
	var coloniaUsuario = document.getElementById('coloniaUsuario').value;
	var idClinicaUsuario = document.getElementById('idClinicaUsuario').value;

	if (nombreUsuario !="" && apellidosUsuario !="" && noAfiliacionUsuario !="" && correoUsuario !="" && telefonoUsuario !=""  && municipioUsuario !="" && cpUsuario !="" && cpUsuario>=document.getElementById('cpUsuario').min && cpUsuario <= document.getElementById('cpUsuario').max && calleUsuario !="" && numeroUsuario !="" && coloniaUsuario !="" && idClinicaUsuario !="") {

	// 	console.log(idClinicaUsuario);

		var valores = [nombreUsuario, apellidosUsuario, noAfiliacionUsuario, correoUsuario,telefonoUsuario, estadoUsuario, municipioUsuario, cpUsuario, calleUsuario, numeroUsuario, coloniaUsuario, idClinicaUsuario];

		var ajaxRequest;

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					if(ajaxRequest.responseText == "Exito xD"){
						alert("Datos del Usuario Modificados");
						window.location.assign("indexAdmin.html");
					}else{
						alert(ajaxRequest.responseText);
					}
			 }
		}

		var queryString = "?sent=mod&valores=" + valores;
    alert("usuario: "+queryString);
		ajaxRequest.open("GET", "api/usuarios/api.php" + queryString, true);
		ajaxRequest.send(null);

	}else{
		alert("Llena todos los campos con valores validos");
	}
}

function eliminarUsuario(noAfiliacion) {
	var ajaxRequest;

  ajaxRequest = new XMLHttpRequest();
  ajaxRequest.onreadystatechange = function() {

     if(ajaxRequest.readyState == 4) {
			 if(ajaxRequest.responseText == "Exito xD"){
				 alert("Usuario Eliminado con exito");
				 window.location.assign("indexAdmin.html");
			 }else{
				 alert(ajaxRequest.responseText);
			 }
     }
  }

  var queryString = "?sent=del&valores=" + noAfiliacion;
  ajaxRequest.open("GET", "api/usuarios/api.php" + queryString, true);
  ajaxRequest.send(null);
}

/*****************************Clinicas**********************************************/

function registroClinica(){
	document.getElementById("barra").innerHTML = "<p>Clínicas</p>";
	document.getElementById('espacios').innerHTML = "<input id='nombreClinica' type='text' placeholder='Nombre de la Clinica'><br>";
	document.getElementById('espacios').innerHTML += "<input id='estadoClinica' type='text' placeholder='Querétaro' disabled value='Querétaro'><br>";
	document.getElementById('espacios').innerHTML += "<select class='' name='' id='municipioClinica' onchange='validarCPClinica()'><option value=''>Selecciona tu municipio</option><option value='Queretaro'>Querétaro</option><option value='El Márquez'>El Márquez</option><option value='Colón'>Colón</option><option value='Pinal de Amoles'>Pinal de Amoles</option><option value='Jalpan de Serra'>Jalpan de Serra</option><option value='Landa de Matamoros'>Landa de Matamoros</option><option value='Arroyo Seco'>Arroyo Seco</option><option value='Peñamiller'>Peñamiller</option><option value='Cadereyta de Montes'>Cadereyta de Montes</option><option value='San Joaquín'>San Joaquín</option><option value='Tolimán'>Tolimán</option><option value='Ezequiel Montes'>Ezequiel Montes</option><option value='Pedro Escobedo'>Pedro Escobedo</option><option value='Tequisquiapan'>Tequisquiapan</option><option value='San Juan del Río'>San Juan del Río</option><option value='Amealco de Bonfil'>Amealco de Bonfil</option><option value='Corregidora'>Corregidora</option><option value='Huimilpan'>Huimilpan</option><select><br>";
	document.getElementById('espacios').innerHTML += "<input type='number' id='cpClinica' placeholder='Codigo Postal' min='76000' max='76998'>";
	document.getElementById('espacios').innerHTML += "<input id='calleClinica' type='text' placeholder='Calle'>";
	document.getElementById('espacios').innerHTML += "<input id='numeroClinica' type='number' placeholder='Número'>";
	document.getElementById('espacios').innerHTML += "<input id='coloniaClinica' type='text' placeholder='Colonia'>";
	document.getElementById('espacios').innerHTML += "<input id='telefonoClinica' type='number' placeholder='Telefono'><br>";
	document.getElementById('espacios').innerHTML += "<button onclick = 'registrarClinica()'>Registrar</button>";
}

function buscarClinica(){
	document.getElementById("barra").innerHTML = "<p>Clínicas</p>";
	document.getElementById("barra").innerHTML += "<input type=image id='lupa' onclick='busquedaClinica()' src='img/lupa.png' width='30' height='20'>";
	document.getElementById("barra").innerHTML += "<input type='text' id='buscaClinica' onkeyup='busquedaClinica()' placeholder='Buscar'>";
	document.getElementById('espacios').innerHTML = "";
}

function busquedaClinica(){
	document.getElementById('espacios').innerHTML = "<div id='resultados'></div>";
	var valores = document.getElementById('buscaClinica').value;
	if(valores != ""){
		var ajaxRequest;
		var hola = "";

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					hola =  JSON.parse(ajaxRequest.responseText);
					//console.log(hola);
					if(hola == null){
						document.getElementById('espacios').innerHTML = "<h1>No se encontraron resultados</h1>"
					}else{
						var resultados = document.getElementById('resultados');
						var tabla = document.createElement("table");
						var tblhead = document.createElement("thead");
						var tblBody = document.createElement("tbody");

						for (var i = 0; i <= Object.keys(hola).length; i++) {
							var hilera = document.createElement("tr");

							if (i == 0) {
								
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Nombre Clínica");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Numero de Clínica");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Dirección");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Teléfono");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Agregar Consultorio");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Modificar");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Eliminar");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);

								tblhead.appendChild(hilera);
							} else {
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].nombreClinica);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].idClinica);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].calle+" "+hola[i-1].numero+" "+hola[i-1].colonia+", "+hola[i-1].municipio+", Querétaro");
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].telefono);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/agregar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","agregarConsultorio()");
								celda.appendChild(input);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/modificar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","modificarClinica()");
								celda.appendChild(input);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/eliminar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","eliminarClinica()");
								celda.appendChild(input);
								hilera.appendChild(celda);
								tblBody.appendChild(hilera);
							
							}
						}
						tabla.appendChild(tblhead);
						tabla.appendChild(tblBody);	
						resultados.appendChild(tabla);

					}
			 }
		}

		var queryString = "?sent=busq&valores=" + valores;
		ajaxRequest.open("GET", "api/clinicas/api.php" + queryString, true);
		ajaxRequest.send(null);
	}
}

function validarCPClinica(){
	var municipio = document.getElementById('municipioClinica').value;

	switch (municipio) {
		case 'Queretaro':
				document.getElementById('cpClinica').min=76000;
				document.getElementById('cpClinica').max=76238;
			break;
		case 'El Márquez':
				document.getElementById('cpClinica').min=76240;
				document.getElementById('cpClinica').max=76269;
			break;
		case 'Colón':
				document.getElementById('cpClinica').min=76270;
				document.getElementById('cpClinica').max=76299;
			break;
		case 'Pinal de Amoles':
				document.getElementById('cpClinica').min=76300;
				document.getElementById('cpClinica').max=76337;
			break;
		case 'Jalpan de Serra':
				document.getElementById('cpClinica').min=76340;
				document.getElementById('cpClinica').max=76359;
			break;
		case 'Landa de Matamoros':
				document.getElementById('cpClinica').min=76360;
				document.getElementById('cpClinica').max=76399;
			break;
		case 'Arroyo Seco':
				document.getElementById('cpClinica').min=76400;
				document.getElementById('cpClinica').max=76440;
			break;
		case 'Peñamiller':
				document.getElementById('cpClinica').min=76450;
				document.getElementById('cpClinica').max=76499;
			break;
		case 'Cadereyta de Montes':
				document.getElementById('cpClinica').min=76500;
				document.getElementById('cpClinica').max=76548;
			break;
		case 'San Joaquín':
				document.getElementById('cpClinica').min=76550;
				document.getElementById('cpClinica').max=76575;
			break;
		case 'Tolimán':
				document.getElementById('cpClinica').min=76600;
				document.getElementById('cpClinica').max=76649;
			break;
		case 'Ezequiel Montes':
				document.getElementById('cpClinica').min=76650;
				document.getElementById('cpClinica').max=76697;
			break;
		case 'Pedro Escobedo':
				document.getElementById('cpClinica').min=76700;
				document.getElementById('cpClinica').max=76746;
			break;
		case 'Tequisquiapan':
				document.getElementById('cpClinica').min=76750;
				document.getElementById('cpClinica').max=76799;
			break;
		case 'San Juan del Río':
				document.getElementById('cpClinica').min=76800;
				document.getElementById('cpClinica').max=76849;
			break;
		case 'Amealco de Bonfil':
				document.getElementById('cpClinica').min=76850;
				document.getElementById('cpClinica').max=76897;
			break;
		case 'Corregidora':
				document.getElementById('cpClinica').min=76900;
				document.getElementById('cpClinica').max=76928;
			break;
		case 'Huimilpan':
				document.getElementById('cpClinica').min=76950;
				document.getElementById('cpClinica').max=76998;
			break;
		default:
			document.getElementById('cpClinica').min=76000;
			document.getElementById('cpClinica').max=76998;
	}
}

function registrarClinica() {
	var nombreClinica = document.getElementById('nombreClinica').value;
	var estadoClinica = document.getElementById('estadoClinica').value;
	var municipioClinica = document.getElementById('municipioClinica').value;
	var cpClinica = document.getElementById('cpClinica').value;
	var calleClinica = document.getElementById('calleClinica').value;
	var numeroClinica = document.getElementById('numeroClinica').value;
	var coloniaClinica = document.getElementById('coloniaClinica').value;
	var telefonoClinica = document.getElementById('telefonoClinica').value;

	if (cpClinica < document.getElementById('cpClinica').max && cpClinica > document.getElementById('cpClinica').min && nombreClinica != "" && estadoClinica !="" && municipioClinica !="" && cpClinica !="" && calleClinica !="" && numeroClinica !="" && coloniaClinica !="" && telefonoClinica !="") {
		var valores = [nombreClinica,estadoClinica,municipioClinica,cpClinica,calleClinica,numeroClinica,coloniaClinica,telefonoClinica];

		var ajaxRequest;

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					if(ajaxRequest.responseText == "Exito xD"){
						alert("Registro Exitoso")
						window.location.assign("indexAdmin.html");
					}else{
						alert(ajaxRequest.responseText);
					}
			 }
		}

		var queryString = "?sent=reg&valores=" + valores;
		ajaxRequest.open("GET", "api/clinicas/api.php" + queryString, true);
		ajaxRequest.send(null);

	}else{
		alert("Llene todos los campos con valores validos");
	}
}

/*****************************Doctores**********************************************/

function registroDoctor(){
	document.getElementById("barra").innerHTML = "<p>Doctores</p>";
	document.getElementById('espacios').innerHTML = "<input id='nombreDoctor' type='text' placeholder='Nombre(s)'>";
	document.getElementById('espacios').innerHTML += "<input id='apellidosDoctor' type='text' placeholder='Apellidos'><br>";
	document.getElementById('espacios').innerHTML += "<input id='estadoDoctor' type='text' placeholder='Querétaro' disabled value='Querétaro'>";
	document.getElementById('espacios').innerHTML += "<select class='' name='' id='municipioDoctor' onchange='validarCPDoctor()'><option value=''>Selecciona tu municipio</option><option value='Queretaro'>Querétaro</option><option value='El Márquez'>El Márquez</option><option value='Colón'>Colón</option><option value='Pinal de Amoles'>Pinal de Amoles</option><option value='Jalpan de Serra'>Jalpan de Serra</option><option value='Landa de Matamoros'>Landa de Matamoros</option><option value='Arroyo Seco'>Arroyo Seco</option><option value='Peñamiller'>Peñamiller</option><option value='Cadereyta de Montes'>Cadereyta de Montes</option><option value='San Joaquín'>San Joaquín</option><option value='Tolimán'>Tolimán</option><option value='Ezequiel Montes'>Ezequiel Montes</option><option value='Pedro Escobedo'>Pedro Escobedo</option><option value='Tequisquiapan'>Tequisquiapan</option><option value='San Juan del Río'>San Juan del Río</option><option value='Amealco de Bonfil'>Amealco de Bonfil</option><option value='Corregidora'>Corregidora</option><option value='Huimilpan'>Huimilpan</option><select><br>";
	document.getElementById('espacios').innerHTML += "<input id='cpDoctor' type='number' placeholder='Codigo Postal' min='76000' max='76998'>";
	document.getElementById('espacios').innerHTML += "<input id='calleDoctor' type='text' placeholder='Calle'>";
	document.getElementById('espacios').innerHTML += "<input id='numeroDoctor' type='number' placeholder='Número'>";
	document.getElementById('espacios').innerHTML += "<input id='coloniaDoctor' type='text' placeholder='Colonia'><br>";
	document.getElementById('espacios').innerHTML += "<input id='telefonoDoctor' type='number' placeholder='Telefono'><br>";
	document.getElementById('espacios').innerHTML += "<input id='CorreoDoctor' type='email' placeholder='Correo'><br>";
	document.getElementById('espacios').innerHTML += "<input id='cedula' type='number' placeholder='Cédula Profesional'><br>";
	document.getElementById('espacios').innerHTML += "<input id='idClinica' type='number' placeholder='Numero de su Clínica'><br>";
	document.getElementById('espacios').innerHTML += "<button onclick = 'registrarDoctor()'>Registrar</button>";
}

function buscarDoctor(){
	document.getElementById("barra").innerHTML = "<p>Doctores</p>";
	document.getElementById("barra").innerHTML += "<input type=image id='lupa' onclick='busquedaDoctor()' src='img/lupa.png' width='30' height='20'>";
	document.getElementById("barra").innerHTML += "<input type='text' onkeyup='busquedaDoctor()' id='buscaDoctor' placeholder='Buscar'>";
	document.getElementById('espacios').innerHTML = "";
}

function busquedaDoctor() {
	document.getElementById('espacios').innerHTML = "<div id='resultados'></div>";
	var valores = document.getElementById('buscaDoctor').value;
	if(valores != ""){
		var ajaxRequest;
		var hola = "";

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					hola =  JSON.parse(ajaxRequest.responseText);
					if(hola == null){
						document.getElementById('espacios').innerHTML = "<h1>No se encontraron resultados</h1>"
					}else{
						var resultados = document.getElementById('resultados');
						var tabla = document.createElement("table");
						var tblhead = document.createElement("thead");
						var tblBody = document.createElement("tbody");

						for (var i = 0; i <= Object.keys(hola).length; i++) {
							var hilera = document.createElement("tr");

							if (i == 0) {
								
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Nombre Completo");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Cédula Profesional");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Dirección");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Teléfono");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Correo Electrónico");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Modificar");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);
								var titulo = document.createElement("th");
								var textoCelda = document.createTextNode("Eliminar");
								titulo.appendChild(textoCelda);
								hilera.appendChild(titulo);

								tblhead.appendChild(hilera);
							} else {
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].nombre+" "+hola[i-1].apellidos);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].cedulaProfesional);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].calle+" "+hola[i-1].numero+" "+hola[i-1].colonia+", "+hola[i-1].municipio+", Querétaro");
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].telefono);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var textoCelda = document.createTextNode(hola[i-1].email);
								celda.appendChild(textoCelda);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/modificar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","modificarDoctor()");
								celda.appendChild(input);
								hilera.appendChild(celda);
								var celda = document.createElement("td");
								var input = document.createElement("input");
								input.setAttribute("type","image");
								input.setAttribute("id","boton");
								input.setAttribute("src","img/eliminar.png");
								input.setAttribute("width","30px");
								input.setAttribute("height","30px");
								input.setAttribute("onclick","eliminarDoctor()");
								celda.appendChild(input);
								hilera.appendChild(celda);

								tblBody.appendChild(hilera);
							
							}
						}
						tabla.appendChild(tblhead);
						tabla.appendChild(tblBody);	
						resultados.appendChild(tabla);
					}
			 }
		}

		var queryString = "?sent=busq&valores=" + valores;
		ajaxRequest.open("GET", "api/doctores/api.php" + queryString, true);
		ajaxRequest.send(null);
	}
}

function validarCPDoctor(){
	var municipio = document.getElementById('municipioDoctor').value;

	switch (municipio) {
		case 'Queretaro':
				document.getElementById('cpDoctor').min=76000;
				document.getElementById('cpDoctor').max=76238;
			break;
		case 'El Márquez':
				document.getElementById('cpDoctor').min=76240;
				document.getElementById('cpDoctor').max=76269;
			break;
		case 'Colón':
				document.getElementById('cpDoctor').min=76270;
				document.getElementById('cpDoctor').max=76299;
			break;
		case 'Pinal de Amoles':
				document.getElementById('cpDoctor').min=76300;
				document.getElementById('cpDoctor').max=76337;
			break;
		case 'Jalpan de Serra':
				document.getElementById('cpDoctor').min=76340;
				document.getElementById('cpDoctor').max=76359;
			break;
		case 'Landa de Matamoros':
				document.getElementById('cpDoctor').min=76360;
				document.getElementById('cpDoctor').max=76399;
			break;
		case 'Arroyo Seco':
				document.getElementById('cpDoctor').min=76400;
				document.getElementById('cpDoctor').max=76440;
			break;
		case 'Peñamiller':
				document.getElementById('cpDoctor').min=76450;
				document.getElementById('cpDoctor').max=76499;
			break;
		case 'Cadereyta de Montes':
				document.getElementById('cpDoctor').min=76500;
				document.getElementById('cpDoctor').max=76548;
			break;
		case 'San Joaquín':
				document.getElementById('cpDoctor').min=76550;
				document.getElementById('cpDoctor').max=76575;
			break;
		case 'Tolimán':
				document.getElementById('cpDoctor').min=76600;
				document.getElementById('cpDoctor').max=76649;
			break;
		case 'Ezequiel Montes':
				document.getElementById('cpDoctor').min=76650;
				document.getElementById('cpDoctor').max=76697;
			break;
		case 'Pedro Escobedo':
				document.getElementById('cpDoctor').min=76700;
				document.getElementById('cpDoctor').max=76746;
			break;
		case 'Tequisquiapan':
				document.getElementById('cpDoctor').min=76750;
				document.getElementById('cpDoctor').max=76799;
			break;
		case 'San Juan del Río':
				document.getElementById('cpDoctor').min=76800;
				document.getElementById('cpDoctor').max=76849;
			break;
		case 'Amealco de Bonfil':
				document.getElementById('cpDoctor').min=76850;
				document.getElementById('cpDoctor').max=76897;
			break;
		case 'Corregidora':
				document.getElementById('cpDoctor').min=76900;
				document.getElementById('cpDoctor').max=76928;
			break;
		case 'Huimilpan':
				document.getElementById('cpDoctor').min=76950;
				document.getElementById('cpDoctor').max=76998;
			break;
		default:
			document.getElementById('cpDoctor').min=76000;
			document.getElementById('cpDoctor').max=76998
	}
}

function registrarDoctor() {
	var nombreDoctor = document.getElementById('nombreDoctor').value;
	var apellidosDoctor = document.getElementById('apellidosDoctor').value;
	var cpDoctor = document.getElementById('cpDoctor').value;
	var calleDoctor = document.getElementById('calleDoctor').value;
	var numeroDoctor = document.getElementById('numeroDoctor').value;
	var coloniaDoctor = document.getElementById('coloniaDoctor').value;
	var municipioDoctor = document.getElementById('municipioDoctor').value;
	var estadoDoctor = document.getElementById('estadoDoctor').value;
	var telefonoDoctor = document.getElementById('telefonoDoctor').value;
	var CorreoDoctor = document.getElementById('CorreoDoctor').value;
	var cedula = document.getElementById('cedula').value;
	var idClinica = document.getElementById('idClinica').value;

	if (nombreDoctor != "" && apellidosDoctor != "" && cpDoctor != "" && calleDoctor != "" && numeroDoctor != "" && coloniaDoctor != "" && municipioDoctor != "" && estadoDoctor != "" && telefonoDoctor != "" && CorreoDoctor != "" && cedula != "" && idClinica != "") {
		var valores = [nombreDoctor, apellidosDoctor, CorreoDoctor, telefonoDoctor, estadoDoctor, municipioDoctor, cpDoctor, calleDoctor, numeroDoctor, coloniaDoctor, cedula, idClinica];

		var ajaxRequest;

		ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function() {

			 if(ajaxRequest.readyState == 4) {
					if(ajaxRequest.responseText == "Exito xD"){
						alert("Registro Exitoso")
						window.location.assign("indexAdmin.html");
					}else{
						alert(ajaxRequest.responseText);
					}
			 }
		}

		var queryString = "?sent=reg&valores=" + valores;
		alert(queryString);
		ajaxRequest.open("GET", "api/doctores/api.php" + queryString, true);
		ajaxRequest.send(null);
	} else {
		alert("Llene todos los campos");

	}
}
