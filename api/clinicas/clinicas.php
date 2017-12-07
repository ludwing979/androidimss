<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

  function getNoCons($valores)
  {
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

  function obtenerClinicaUsuario($valores)
  {
    $val = explode(',',$valores);
    $conexion = conectar();
    $sql ="SELECT idClinica, calle, numero, colonia FROM clinicas WHERE municipio = '{$val[1]}';";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $idClinica = $row['idClinica'];
      $calle = $row['calle'];
      $numero = $row['numero'];
      $colonia = $row['colonia'];

      $clinica[] = array('idClinica' => $idClinica,
                          'calle' => $calle,
                          'numero' => $numero,
                          'colonia' => $colonia);
    }
    $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_clinica = json_encode($clinica);
    return $json_clinica;
    break;
  }

?>