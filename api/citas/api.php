<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type:application/json");
require "citas.php";

if(!empty($_GET['sent']) && !empty($_GET['valores']))
{
	$sent=$_GET['sent'];

	switch ($sent) {
		case 'horarios':
				$price = getHorarios($_GET['valores']);
			break;

		case 'agendar':
			$price = agendarCita($_GET['valores']);
			break;

		case 'getCitas':
			$price = getCitas($_GET['valores']);
			break;

		default:
			$price = "default";
			break;
	}
	echo $price;
}else{
	echo "no existe";
}
