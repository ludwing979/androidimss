<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

function selectUsuarios($valor)
{

  $conexion = conectar();

  $sql = "SELECT * FROM usuarios WHERE nombreUsuario||noAfiliacion||email||celular LIKE '%".$valor."%';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $usuarios = array();

  while($row = mysqli_fetch_array($result))  {
    $nombreUsuario = $row['nombreUsuario'];
    $password = $row['password'];
    $noAfiliacion = $row['noAfiliacion'];
    $email = $row['email'];
    $celular = $row['celular'];
    $idClinica = $row['idClinica'];

    $usuarios = array('nombreUsuario' => $nombreUsuario,
                        'password' => $password,
                        'noAfiliacion' => $noAfiliacion,
                        'email' => $email,
                        'celular' => $celular,
                        'idClinica' => $idClinica);

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_usuarios = json_encode($usuarios);
  return $json_usuarios;
  break;

}

function getClinica($valores)
{
  $conexion = conectar();
  $sql ="SELECT idClinica FROM usuarios WHERE noAfiliacion = {$valores};";

  if(!$result = mysqli_query($conexion, $sql)) die();
  while($row = mysqli_fetch_array($result))  {
    $idClinica = $row['idClinica'];
  }
  return $idClinica;
}

function registrarUsuario($valores){
  $conexion = conectar();
  $val = explode(',',$valores);
  $return = "";

  $sql ="INSERT INTO usuarios (nombre, apellidos, noAfiliacion, email, telefono, estado, municipio, codPost, calle, numero, colonia, idClinica) VALUES ('{$val[0]}', '{$val[1]}', {$val[2]}, '{$val[3]}', {$val[4]}, '{$val[5]}', '{$val[6]}', {$val[7]}, '{$val[8]}', {$val[9]}, '{$val[10]}', {$val[11]});";

  if ($conexion->query($sql)) {
      $return = "Exito xD";
  }else{
    $return = "Fracaso :C";
  }
  return $sql;
}

?>
