<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type:application/json");
require "usuarios.php";

if(!empty($_GET['sent']) && !empty($_GET['valores']))
{
	$sent=$_GET['sent'];

	switch ($sent) {
		case 'clinica':
				$price = getClinica($_GET['valores']);
			break;
		case 'reg':
				$price = registrarUsuario($_GET['valores']);
			break;
		case 'busq':
				$price = buscarUsuario($_GET['valores']);
			break;
		case 'get':
				$price = getUsuario($_GET['valores']);
			break;
		case 'mod':
				$price = modificarUsuario($_GET['valores']);
			break;
		case 'del':
				$price = eliminarUsuario($_GET['valores']);
			break;
		default:
			$price = "Jajaja";
			break;
	}

	echo $price;
}else{
	echo "sent: ".$_GET['sent'].", val: ".$_GET['valores'];
}
