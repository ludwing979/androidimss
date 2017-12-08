<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type:application/json");
require "doctores.php";
if(!empty($_GET['sent']) && !empty($_GET['valores']))
{
	$sent=$_GET['sent'];

	switch ($sent) {
		case 'reg':
				$price = registrarDoctor($_GET['valores']);
			break;
		case 'busq':
				$price = buscarDoctor($_GET['valores']);
			break;
		default:
			$price = "Jajaja";
			break;
	}

	echo $price;
}else{
	echo "sent: ".$_GET['sent'].", val: ".$_GET['valores'];
}
