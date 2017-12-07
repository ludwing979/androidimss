<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("conexion.php");

$conexion = conectar();

public function selectClinicas($valor)
{
  $sql = "SELECT * FROM clinicas WHERE idClinica||noClinica LIKE '%".$valor."%';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $clinicas = array();

  while($row = mysqli_fetch_array($result))  {
    /*Crear Arreglo*/

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_clinicas = json_encode($clinicas);
  return $json_clinicas;
  break;

}

public function selectDoctores($valor)
{
  $sql = "SELECT * FROM doctores WHERE idDoctor||nombre LIKE '%".$valor."%';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $doctores = array();

  while($row = mysqli_fetch_array($result))  {
    /*Crear Arreglo*/

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_doctores = json_encode($doctores);
  return $json_doctores;
  break;

}

public function selectConsultorios($valor)
{
  $sql = "SELECT * FROM consultorios WHERE idConsultorio||noConsultorio LIKE '%".$valor."%';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $consultorios = array();

  while($row = mysqli_fetch_array($result))  {
    /*Crear Arreglo*/

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_consultorios = json_encode($consultorios);
  return $json_consultorios;
  break;

}

public function selectDerechohabientes($valor)
{
  $sql = "SELECT * FROM derechohabientes WHERE noAfiliacion||nombre LIKE '%".$valor."%';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $derechohabientes = array();

  while($row = mysqli_fetch_array($result))  {
    /*Crear Arreglo*/

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_derechohabientes = json_encode($derechohabientes);
  return $json_derechohabientes;
  break;

}

public function selectCitas($valor)
{
  $sql = "SELECT * FROM citas WHERE idClinica = '%".$valor."%';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $citas = array();

  while($row = mysqli_fetch_array($result))  {
    /*Crear Arreglo*/

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_citas = json_encode($citas);
  return $json_citas;
  break;

}

public function setClinica($valores)
{
  $sql ="INSERT INTO clinicas () VALUES ();";
}

?>
