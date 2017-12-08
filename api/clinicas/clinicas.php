<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

  function getNoCons($valores){
    $conexion = conectar();
    $sql ="SELECT noConsutorios FROM clinicas WHERE idClinica = {$valores};";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $noConsutorios = $row['noConsutorios'];
    }
    return $noConsutorios;
  }

  function registroClinica($valores){
    $conexion = conectar();
    $val = explode(',',$valores);
    $return = "";

    $sql ="INSERT INTO clinicas (nombreClinica, estado, municipio, codPost, calle, numero, colonia, telefono) VALUES ('{$val[0]}', '{$val[1]}', '{$val[2]}', {$val[3]}, '{$val[4]}', {$val[5]}, '{$val[6]}', '{$val[7]}');";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }

  function obtenerClinicaUsuario($valores){
    $val = explode(',',$valores);
    $conexion = conectar();
    $sql ="SELECT idClinica, nombreClinica, calle, numero, colonia, municipio, telefono FROM clinicas WHERE municipio = '{$val[1]}';";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $idClinica = $row['idClinica'];
      $nombreClinica = $row['nombreClinica'];
      $calle = $row['calle'];
      $numero = $row['numero'];
      $colonia = $row['colonia'];
      $municipio = $row['municipio'];
      $telefono = $row['telefono'];

      $clinica[] = array('idClinica' => $idClinica,
                          'nombreClinica' => $nombreClinica,
                          'calle' => $calle,
                          'numero' => $numero,
                          'colonia' => $colonia,
                          'municipio' => $municipio,
                          'telefono' => $telefono);
    }
    $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_clinica = json_encode($clinica);
    return $json_clinica;
    break;
  }

  function buscarClinica($valores){
    $conexion = conectar();
    $sql ="SELECT idClinica, nombreClinica, calle, numero, colonia, municipio, telefono FROM clinicas WHERE idClinica LIKE '%{$valores}%' ||nombreClinica like '%{$valores}%'||telefono like '%{$valores}%';";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $idClinica = $row['idClinica'];
      $nombreClinica = $row['nombreClinica'];
      $calle = $row['calle'];
      $numero = $row['numero'];
      $colonia = $row['colonia'];
      $municipio = $row['municipio'];
      $telefono = $row['telefono'];

      $clinica[] = array('idClinica' => $idClinica,
                          'nombreClinica' => $nombreClinica,
                          'calle' => $calle,
                          'numero' => $numero,
                          'colonia' => $colonia,
                          'municipio' => $municipio,
                          'telefono' => $telefono);
    }
    $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_clinica = json_encode($clinica);
    return $json_clinica;
    break;
  }

  function getClinica($valores){
    $conexion = conectar();
    $sql ="SELECT * FROM clinicas WHERE idClinica = {$valores};";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $idClinica = $row['idClinica'];
      $nombreClinica = $row['nombreClinica'];
      $calle = $row['calle'];
      $numero = $row['numero'];
      $colonia = $row['colonia'];
      $municipio = $row['municipio'];
      $telefono = $row['telefono'];
      $noConsutorios = $row['noConsutorios'];
      $codPost = $row['codPost'];

      $clinica[] = array('idClinica' => $idClinica,
                          'nombreClinica' => $nombreClinica,
                          'calle' => $calle,
                          'numero' => $numero,
                          'colonia' => $colonia,
                          'municipio' => $municipio,
                          'telefono' => $telefono,
                          'codPost' => $codPost,
                          'noConsutorios' => $noConsutorios);
    }
    $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_clinica = json_encode($clinica);
    return $json_clinica;
    break;
  }

  function modificarClinica($valores){
    $conexion = conectar();
    $val = explode(',',$valores);
    $return = "";

    $sql ="UPDATE clinicas SET nombreClinica = '{$val[1]}', estado = '{$val[2]}', municipio = '{$val[3]}', codPost = {$val[4]}, calle = '{$val[5]}', numero = {$val[6]}, colonia = '{$val[7]}', telefono = {$val[8]}, noConsutorios = {$val[9]} WHERE idClinica = {$val[0]};";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }

  function eliminarClinica($valores){
    $conexion = conectar();
    $return ="";
    $sql ="DELETE FROM clinicas WHERE idClinica = {$valores};";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }

  function agregarConsultorio($valores){
    $conexion = conectar();
    $val = explode(',',$valores);
    $return = "";
    $num = getNoCons($valores);
    $num += 1;

    $sql ="UPDATE clinicas SET noConsutorios = {$num} WHERE idClinica = {$valores};";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }

?>
