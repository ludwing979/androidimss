<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

  function registrarDoctor($valores){
    $conexion = conectar();
    $val = explode(',',$valores);
    $return = "";

    $sql ="INSERT INTO doctores (nombre, apellidos, email, telefono, estado, municipio, codPost, calle, numero, colonia, cedulaProfesional, idClinica) VALUES ('{$val[0]}', '{$val[1]}', '{$val[2]}', {$val[3]}, '{$val[4]}', '{$val[5]}', {$val[6]}, '{$val[7]}', {$val[8]}, '{$val[9]}', {$val[10]}, {$val[11]});";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }

  function buscarDoctor($valores)
  {
    $conexion = conectar();
    $sql ="SELECT cedulaProfesional, nombre, apellidos, calle, numero, colonia, municipio, telefono, email FROM doctores WHERE cedulaProfesional LIKE '%{$valores}%' ||nombre like '%{$valores}%' ||apellidos like '%{$valores}%' ||email like '%{$valores}%' ||telefono like '%{$valores}%';";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $cedulaProfesional = $row['cedulaProfesional'];
      $nombre = $row['nombre'];
      $apellidos = $row['apellidos'];
      $calle = $row['calle'];
      $numero = $row['numero'];
      $colonia = $row['colonia'];
      $municipio = $row['municipio'];
      $telefono = $row['telefono'];
      $email = $row['email'];

      $doctores[] = array('cedulaProfesional' => $cedulaProfesional,
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

    $json_doctores = json_encode($doctores);
    return $json_doctores;
    break;
  }

  function getDoctor($valores){
    $conexion = conectar();
    $sql ="SELECT * FROM doctores WHERE cedulaProfesional = {$valores};";

    if(!$result = mysqli_query($conexion, $sql)) die();
    while($row = mysqli_fetch_array($result))  {
      $cedulaProfesional = $row['cedulaProfesional'];
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

      $doctor[] = array('cedulaProfesional' => $cedulaProfesional,
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

    $json_doctor = json_encode($doctor);
    return $json_doctor;
    break;
  }

  function modificarDoctor($valores){
    $conexion = conectar();
    $val = explode(',',$valores);
    $return = "";

    $sql ="UPDATE doctores SET nombre = '{$val[0]}', apellidos = '{$val[1]}', cedulaProfesional = {$val[2]}, email = '{$val[3]}', telefono = {$val[4]}, estado = '{$val[5]}', municipio = '{$val[6]}', codPost = {$val[7]}, calle = '{$val[8]}', numero = {$val[9]}, colonia = '{$val[10]}', idClinica = {$val[11]} WHERE cedulaProfesional = {$val[2]};";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }

  function eliminarDoctor($valores){
    $conexion = conectar();
    $return ="";
    $sql ="DELETE FROM doctores WHERE cedulaProfesional = {$valores};";

    if ($conexion->query($sql)) {
        $return = "Exito xD";
    }else{
      $return = "Fracaso :C";
    }
    return $return;
  }
?>
