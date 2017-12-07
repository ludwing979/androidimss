<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type:application/json");
require "clinicas.php";

if(!empty($_GET['sent']) && !empty($_GET['valores']))
{
	$sent = $_GET['sent'];
	switch ($sent) {
		case 'noCons':
			$price = getNoCons($_GET['valores']);
			break;
		case 'reg':
			$price = registroClinica($_GET['valores']);
			break;
		case 'obt':
			$price = obtenerClinicaUsuario($_GET['valores']);
			break;
		default:
			# code...
			break;
	}
	echo $price;
}else{
	echo "Hola";
}
