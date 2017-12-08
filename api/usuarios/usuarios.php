<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

function getClinica($valores){
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
  return $return;
}

function buscarUsuario($valores){
  $conexion = conectar();
  $sql ="SELECT noAfiliacion, nombre,apellidos, calle, numero, colonia, municipio, telefono, email FROM usuarios WHERE noAfiliacion LIKE '%{$valores}%' ||nombre like '%{$valores}%' ||apellidos like '%{$valores}%' ||email like '%{$valores}%' ||telefono like '%{$valores}%';";

  if(!$result = mysqli_query($conexion, $sql)) die();
  while($row = mysqli_fetch_array($result))  {
    $noAfiliacion = $row['noAfiliacion'];
    $nombre = $row['nombre'];
    $apellidos = $row['apellidos'];
    $calle = $row['calle'];
    $numero = $row['numero'];
    $colonia = $row['colonia'];
    $municipio = $row['municipio'];
    $telefono = $row['telefono'];
    $email = $row['email'];

    $usuarios[] = array('noAfiliacion' => $noAfiliacion,
                        'nombre' => $nombre,
                        'apellidos' => $apellidos,
                        'calle' => $calle,
                        'numero' => $numero,
                        'colonia' => $colonia,
                        'municipio' => $municipio,
                        'telefono' => $telefono,
                        'email' => $email);
  }
  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_usuarios = json_encode($usuarios);
  return $json_usuarios;
  break;
}

function getUsuario($valores){
  $conexion = conectar();
  $sql ="SELECT * FROM usuarios WHERE noAfiliacion = {$valores};";

  if(!$result = mysqli_query($conexion, $sql)) die();
  while($row = mysqli_fetch_array($result))  {
    $noAfiliacion = $row['noAfiliacion'];
    $nombre = $row['nombre'];
    $apellidos = $row['apellidos'];
    $calle = $row['calle'];
    $numero = $row['numero'];
    $colonia = $row['colonia'];
    $municipio = $row['municipio'];
    $estado = $row['estado'];
    $codPost = $row['codPost'];
    $telefono = $row['telefono'];
    $email = $row['email'];
    $idClinica = $row['idClinica'];

    $usuario[] = array('noAfiliacion' => $noAfiliacion,
                        'nombre' => $nombre,
                        'apellidos' => $apellidos,
                        'calle' => $calle,
                        'numero' => $numero,
                        'colonia' => $colonia,
                        'municipio' => $municipio,
                        'estado' => $estado,
                        'codPost' => $codPost,
                        'telefono' => $telefono,
                        'email' => $email,
                        'idClinica' => $idClinica);
  }
  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_usuario = json_encode($usuario);
  return $json_usuario;
  break;
}

function modificarUsuario($valores){
  $conexion = conectar();
  $val = explode(',',$valores);
  $return = "";

  $sql ="UPDATE usuarios SET nombre = '{$val[0]}', apellidos = '{$val[1]}', noAfiliacion = {$val[2]}, email = '{$val[3]}', telefono = {$val[4]}, estado = '{$val[5]}', municipio = '{$val[6]}', codPost = {$val[7]}, calle = '{$val[8]}', numero = {$val[9]}, colonia = '{$val[10]}', idClinica = {$val[11]} WHERE noAfiliacion = {$val[2]};";

  if ($conexion->query($sql)) {
      $return = "Exito xD";
  }else{
    $return = "Fracaso :C";
  }
  return $return;
}

function eliminarUsuario($valores){
  $conexion = conectar();
  $return ="";
  $sql ="DELETE FROM usuarios WHERE noAfiliacion = {$valores};";

  if ($conexion->query($sql)) {
      $return = "Exito xD";
  }else{
    $return = "Fracaso :C";
  }
  return $return;
}

?>
