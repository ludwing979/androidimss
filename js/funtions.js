
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
	document.getElementById('espacios').innerHTML += "<button onclick = 'registrarUsuario()'>Registrar</button>";
}

function registroDoctor(){
	document.getElementById("barra").innerHTML = "<p>Doctores</p>";
	document.getElementById('espacios').innerHTML = "<input id='nombreDoctor' type='text' placeholder='Nombre(s)'>";
	document.getElementById('espacios').innerHTML += "<input id='apellidosDoctor' type='text' placeholder='Apellidos'><br>";
	document.getElementById('espacios').innerHTML += "<input id='cpDoctor' type='number' placeholder='Codigo Postal' min='76000' max='76998'>";
	document.getElementById('espacios').innerHTML += "<input id='calleDoctor' type='text' placeholder='Calle'>";
	document.getElementById('espacios').innerHTML += "<input id='numeroDoctor' type='number' placeholder='Número'>";
	document.getElementById('espacios').innerHTML += "<input id='coloniaDoctor' type='text' placeholder='Colonia'><br>";
	document.getElementById('espacios').innerHTML += "<input id='ciudadDoctor' type='text' placeholder='Ciudad'>";
	document.getElementById('espacios').innerHTML += "<input id='estadoDoctor' type='text' placeholder='Estado'><br>";
	document.getElementById('espacios').innerHTML += "<input id='telefonoDoctor' type='number' placeholder='Telefono'><br>";
	document.getElementById('espacios').innerHTML += "<input id='CorreoDoctor' type='email' placeholder='Correo'><br>";
	document.getElementById('espacios').innerHTML += "<input id='cedula' type='number' placeholder='Cédula Profesional'><br>";
	document.getElementById('espacios').innerHTML += "<input id='idClinica' type='number' placeholder='Id de su Clínica'><br>";
	document.getElementById('espacios').innerHTML += "<button onclick = 'registrarDoctor()'>Registrar</button>";
}

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

function buscarDerechoHabiente(){
	document.getElementById("barra").innerHTML = "<p>DerechoHabiente</p>";
	document.getElementById("barra").innerHTML += "<input type=image id='lupa' onclick='buscarDerechoHabiente()' src='img/lupa.png' width='30' height='20'>";
	document.getElementById("barra").innerHTML += "<input type='text' id='buscar' placeholder='Buscar'>";
	document.getElementById('espacios').innerHTML = "";
}

function buscarDoctor(){
	document.getElementById("barra").innerHTML = "<p>Doctores</p>";
	document.getElementById("barra").innerHTML += "<input type=image id='lupa' onclick='buscarDoctor()' src='img/lupa.png' width='30' height='20'>";
	document.getElementById("barra").innerHTML += "<input type='text' id='buscar' placeholder='Buscar'>";
	document.getElementById('espacios').innerHTML = "";
}

function buscarClinica(){
	document.getElementById("barra").innerHTML = "<p>Clínicas</p>";
	document.getElementById("barra").innerHTML += "<input type=image id='lupa' onclick='buscarClinica()' src='img/lupa.png' width='30' height='20'>";
	document.getElementById("barra").innerHTML += "<input type='text' id='buscar' placeholder='Buscar'>";
	document.getElementById('espacios').innerHTML = "";
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

	if (nombreUsuario !="" && apellidosUsuario !="" && noAfiliacionUsuario !="" && correoUsuario !="" && telefonoUsuario !="" && estadoUsuario !="" && municipioUsuario !="" && cpUsuario !="" && cpUsuario>document.getElementById('cpUsuario').min && cpUsuario < document.getElementById('cpUsuario').max && calleUsuario !="" && numeroUsuario !="" && coloniaUsuario !="") {
		var dirUsu = coloniaUsuario + ", " + municipioUsuario + ", Querétaro";
		zxcv=obtenerClinicaUsuario(cpUsuario, municipioUsuario, dirUsu);
	// 	console.log(idClinicaUsuario);

		var idClinicaUsuario = localStorage.getItem("idClinicaUsuario");
		var valores = [nombreUsuario, apellidosUsuario, noAfiliacionUsuario, correoUsuario,telefonoUsuario, estadoUsuario, municipioUsuario, cpUsuario, calleUsuario, numeroUsuario, coloniaUsuario, idClinicaUsuario];
		(valores);
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

function registrarDoctor() {
	var nombreDoctor = document.getElementById('nombreDoctor').value;
	var apellidosDoctor = document.getElementById('apellidosDoctor').value;
	var cpDoctor = document.getElementById('cpDoctor').value;
	var calleDoctor = document.getElementById('calleDoctor').value;
	var numeroDoctor = document.getElementById('numeroDoctor').value;
	var coloniaDoctor = document.getElementById('coloniaDoctor').value;
	var ciudadDoctor = document.getElementById('ciudadDoctor').value;
	var estadoDoctor = document.getElementById('estadoDoctor').value;
	var telefonoDoctor = document.getElementById('telefonoDoctor').value;
	var CorreoDoctor = document.getElementById('CorreoDoctor').value;
	var cedula = document.getElementById('cedula').value;
	var idClinica = document.getElementById('idClinica').value;

	if (nombreDoctor != "" && apellidosDoctor != "" && cpDoctor != "" && calleDoctor != "" && numeroDoctor != "" && coloniaDoctor != "" && ciudadDoctor != "" && estadoDoctor != "" && telefonoDoctor != "" && CorreoDoctor != "" && cedula != "" && idClinica != "") {
		var valores = [nombreDoctor, apellidosDoctor, cpDoctor, calleDoctor, numeroDoctor, coloniaDoctor, ciudadDoctor, estadoDoctor, telefonoDoctor, CorreoDoctor, cedula, idClinica];

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
		ajaxRequest.open("GET", "api/doctores/api.php" + queryString, true);
		ajaxRequest.send(null);
	} else {
		alert("Llene todos los campos");

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

function obtenerClinicaUsuario(cpUsuario, municipioUsuario, dirUsu){
	var valores = [cpUsuario, municipioUsuario];
	 var dirUsu = [dirUsu];
	// var dires = ['Taponas, Qro', 'La ceja de Bravo, Qro'];
	var ajaxRequest;

	ajaxRequest = new XMLHttpRequest();

	ajaxRequest.onreadystatechange = function() {

		 if(ajaxRequest.readyState == 4) {
				 var hola = JSON.parse(ajaxRequest.responseText);
				 console.log(hola);
				 if (hola==null) {
					 localStorage.setItem("idClinicaUsuario", 1);
				 }else{
					 if(Object.keys(hola).length > 1){
						 alert("Entro if");
						 var dires=[];
						 for (var i = 0; i < Object.keys(hola).length; i++) {
							 alert("Entro for");
							 dires.push(hola[i].colonia + ", "+municipioUsuario+", Querétaro");
						 }
						 	//console.log(dires);
							alert("Salio for");
							qwerty = initMap(dirUsu, dires);
							var num = localStorage.getItem("menor");
							alert("menor: " + num);
							alert("id: " + hola[num].idClinica);
							localStorage.setItem("idClinicaUsuario", hola[num].idClinica);
					 }else{
						 localStorage.setItem("idClinicaUsuario", hola[0].idClinica);
					 }
				 }
			 }
		 }

	var queryString = "?sent=obt&valores=" + valores;
	//alert(queryString);
	ajaxRequest.open("GET", "api/clinicas/api.php" + queryString, true);
	ajaxRequest.send(null);
}

function initMap(dirUsu, dires) {
	var ret;
	//console.log("entra");
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
			console.log(response);
			var dir =[];
			for (var i = 0; i < response.rows[0].elements.length; i++) {
				dir.push(response.rows[0].elements[i].distance.value);
				console.log("Valor: "+ response.rows[0].elements[i].distance.value);
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
		console.log(ret + "x2");
		localStorage.setItem("menor", ret);
	});

}
