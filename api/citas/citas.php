<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require("../conexion.php");

function getCitas($valor)
{
  $conexion = conectar();

  $sql = "SELECT * FROM citas WHERE noAfiliacion||idClinica = '".$valor."';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  $citas = array();

  while($row = mysqli_fetch_array($result))  {

    $horaInicioCita = $row['horaInicioCita'];
    $fechaCita = $row['fechaCita'];
    $tipoCita = $row['tipoCita'];

    $citas[] = array('horaInicioCita' => $horaInicioCita,
                  'fechaCita' => $fechaCita,
                  'tipoCita' => $tipoCita);
  }

  $close = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

  $json_citas = json_encode($citas);
  return $json_citas;
  break;

}

function getHorarios($valores)
{
  $val = explode(',',$valores);

  $horarios = array('08:00:00','08:25:00','08:50:00','09:15:00','09:40:00','10:05:00','10:30:00','10:55:00','11:20:00','11:45:00','12:10:00','12:35:00',
  '13:00:00','14:00:00','14:25:00','14:50:00','15:15:00','15:40:00','16:05:00','16:30:00','16:55:00','17:20:00','17:45:00','18:10:00','18:35:00','19:00:00');

  $horaD = array();

  for ($i=0; $i <$val[2] ; $i++) {
    $horaD = array_merge($horaD, $horarios);
  }

  $conexion = conectar();

  $sql = "SELECT horaInicioCita FROM citas WHERE idClinica = ".$val[0]." && fechaCita = '".$val[1]."';";

  if(!$result = mysqli_query($conexion, $sql)) die();

  while($row = mysqli_fetch_array($result)) {
    $horaInicioCita = $row['horaInicioCita'];

    unset($horaD[array_search($horaInicioCita, $horarios)]);

  }

  $horaD = array_unique($horaD);

  $json_horarios = json_encode($horaD);
  return $json_horarios;
  break;
}


function agendarCita($valores)
{
  $conexion = conectar();

  $val = explode(',',$valores);
  $return = "";

  $sql ="INSERT INTO citas (fechaCita, horaInicioCita, tipoCita, idClinica, noAfiliacion) VALUES ('{$val[0]}', '{$val[1]}', '{$val[2]}', {$val[3]}, {$val[4]});";

  if ($conexion->query($sql)) {
    $return = "Exito xD";
  }else{
    $return = "Fracaso :C";
  }
  return $return;
}

?>
