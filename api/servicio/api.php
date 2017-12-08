<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type:application/json");
require "servicio.php";

if(!empty($_GET['sent']) && $_GET['valores'] != "")
{
	$sent=$_GET['sent'];

	switch ($sent) {
		case 'logIn':
				$price = logIn($_GET['valores']);
			break;

			case 'reg':
					$price = registrarServicio($_GET['valores']);
				break;

		default:
			$price = "Jajaja";
			break;
	}

	echo $price;
}else{
	echo "Hola";
}
