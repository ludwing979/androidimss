<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

function logIn($valor)
{

  $conexion = conectar();

  $sql = "SELECT * FROM servicio WHERE noAfiliacion LIKE ".$valor.";";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $usuarios = array();

  while($row = mysqli_fetch_array($result))  {

    $password = $row['password'];
    $noAfiliacion = $row['noAfiliacion'];
    $email = $row['email'];
    $celular = $row['celular'];

    $usuarios[] = array(  'password' => $password,
                        'noAfiliacion' => $noAfiliacion,
                        'email' => $email,
                        'celular' => $celular);

  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_usuarios = json_encode($usuarios);
  return $json_usuarios;
  break;

}

function registrarServicio($valores)
{
  $conexion = conectar();
  $val = explode(',',$valores);
  $return = "";

  $sql = "SELECT * FROM servicio WHERE noAfiliacion LIKE ".$val[1].";";

  if(!$result = mysqli_query($conexion, $sql)) die();

  if(mysqli_num_rows($result) > 0){
    $return = "Ya existe";
  }else{

    $sql1 = "SELECT * FROM usuarios WHERE noAfiliacion LIKE ".$val[1].";";

    if(!$result = mysqli_query($conexion, $sql1)) die();

    if(mysqli_num_rows($result) == 0){
      $return = "No es derechohabiente";
    }else{

      $sql ="INSERT INTO servicio (password, noAfiliacion , email, celular) VALUES ('".$val[0]."',".$val[1].",'".$val[2]."',".$val[3].");";

      if ($conexion->query($sql)) {
        $return= "Exito xD";
      }else{
        $return ="Fracaso :C\n".$valores."\n".$sql;
      }
    }
  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  return $return;
  break;

}

?>
