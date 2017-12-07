<?php

function conectar(){
  $server = "localhost";
  $user = "root";
  $pass = "";
  $bd = "imss";

  $conexion = mysqli_connect($server, $user, $pass,$bd)
  or die("Ha sucedido un error inexperado en la conexion de la base de datos");
  return $conexion;
}

 ?>
