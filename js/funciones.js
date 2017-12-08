//Clave: AIzaSyBxNy4v5wknK4qgnwZOvulBtnAS_WRLP1Y
//Ejemplo: https://maps.googleapis.com/maps/api/distancematrix/json?origins=&destinations=&language=es-ES&units=metric&key=AIzaSyBxNy4v5wknK4qgnwZOvulBtnAS_WRLP1Y

if(window.MobileAccessibility){
  window.MobileAccessibility.usePreferredTextZoom(false);
}

function registro() {
  document.getElementById("titulo").innerHTML = "<p>Registro</p>";
  document.getElementById('form').style.height = '350px';
  document.getElementById('form').style.top = 'calc(50% - 245px)';
  document.getElementById("form").innerHTML = "<input class='port' type='number' id='regNoAf' placeholder='No. de Afiliación'><br><br>";
  document.getElementById("form").innerHTML += "<input class='port' type='number' id='regNoTel' placeholder='Telefono'><br><br>";
  document.getElementById("form").innerHTML += "<input class='port' type='email' id='regEmail' placeholder='Correo electronico'><br><br>";
  document.getElementById("form").innerHTML += "<input class='port' type='password' id='regPass' placeholder='Contraseña'><br><br>";
  document.getElementById("form").innerHTML += "<input class='port' type='password' id='regConPass' placeholder='Confirmar contraseña'><br><br>";
  document.getElementById("form").innerHTML += "<button type='button' onclick='registrarServicio()' id='registro'>Registrarme</button>";
  document.getElementById("form").innerHTML += "<button type='button' onclick='regresar()' id='regresar'>Regresar</button>";

}

function entrar(){
  if (document.getElementById('noAfi').value != "" && document.getElementById('pass').value != "") {
    var ajaxRequest;

    ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function() {

       if(ajaxRequest.readyState == 4) {

          var hola = JSON.parse(ajaxRequest.responseText);
          console.log(hola);
          if (Object.keys(hola).length == 0) {
            alert("No estas Registrado, registrate para poder utilizar el servicio");
          }else{
            if(hola[0].password == document.getElementById('pass').value){
              alert("Bienvenido");
              localStorage.setItem("noAfiliacion",hola[0].noAfiliacion);
              window.location.assign("agendarCita.html");
            }else{
              alert("No. de afiliación y/o contraseña incorrectos");
            }
          }
          //cordova create imss com.proyectoOlmos.imss imss --template https://github.com/JorgeMaya/ProyectoOlmos.git
       }
    }

    var queryString = "?sent=logIn&valores=" + document.getElementById('noAfi').value;
    //Ejemplo servidor externo: ajaxRequest.open("GET", "http://192.168.1.80/proyectoOlmos/api/servicio/api.php" + queryString, true);
    ajaxRequest.open("GET", "api/servicio/api.php" + queryString, true);
    ajaxRequest.send(null);
  }
  else{
    alert("Llene todos los campos xD");
  }
}

function cerrar(){
  localStorage.clear();
  window.location.assign("index.html");
}

function regresar(){
  window.location.assign("index.html");
}

function registrarServicio() {
  if (document.getElementById('regNoAf').value != "" &&
      document.getElementById('regEmail').value != "" &&
      document.getElementById('regNoTel').value != "" &&
      document.getElementById('regPass').value != "" &&
      document.getElementById('regConPass').value != "") {

        var noAfiliacion = document.getElementById('regNoAf').value;
        var email = document.getElementById('regEmail').value;
        var noTel = document.getElementById('regNoTel').value;
        if (document.getElementById('regPass').value == document.getElementById('regConPass').value) {
          var pass = document.getElementById('regPass').value;
          var valores = [pass,noAfiliacion,email,noTel];

          var ajaxRequest;

          ajaxRequest = new XMLHttpRequest();

          ajaxRequest.onreadystatechange = function() {

             if(ajaxRequest.readyState == 4) {
                if(ajaxRequest.responseText == "Exito xD"){
                  window.location.assign("index.html");
                }else{
                  alert(ajaxRequest.responseText);
                }
             }
          }

          var queryString = "?sent=reg&valores=" + valores;
          ajaxRequest.open("GET", "api/servicio/api.php" + queryString, true);
          ajaxRequest.send(null);
        }else{
          alert("Contraseña");
        }
  }else {
    alert("Llene todos los campos xD");
  }
}

function agendarCita(){
  if (document.getElementById('date').value != "" && document.getElementById('horarios').value != "" && document.getElementById('tipo')) {
    var fecha = document.getElementById('date').value;
    var hora = document.getElementById('horarios').value;
    var tipo = document.getElementById('tipo').value;
    var idClinica = localStorage.getItem("idClinica");
    var noAfiliacion = localStorage.getItem("noAfiliacion");
    var valores = [fecha,hora,tipo,idClinica,noAfiliacion];

    var ajaxRequest;

    ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function() {

       if(ajaxRequest.readyState == 4) {
          //var hola = JSON.parse(ajaxRequest.responseText);
          alert(ajaxRequest.responseText);
          window.location.assign("agendarCita.html")
       }
    }

    var queryString = "?sent=agendar&valores=" + valores;
    //Ejemplo servidor externo: ajaxRequest.open("GET", "http://192.168.1.80/proyectoOlmos/api/servicio/api.php" + queryString, true);
    //alert(queryString);
    ajaxRequest.open("GET", "api/citas/api.php" + queryString, true);
    ajaxRequest.send(null);
  }
  else{
    alert("Llene todos los campos xD");
  }
}

function getClinica(){
  //Obtener clinica del usuario
  var ajaxRequest;

  ajaxRequest = new XMLHttpRequest();

  ajaxRequest.onreadystatechange = function() {
     if(ajaxRequest.readyState == 4) {
        localStorage.setItem("idClinica",ajaxRequest.responseText);
        getNoCons();
      }
  }

  var queryString = "?sent=clinica&valores=" + localStorage.getItem("noAfiliacion");
  //Ejemplo servidor externo: ajaxRequest.open("GET", "http://192.168.1.80/proyectoOlmos/api/servicio/api.php" + queryString, true);
  ajaxRequest.open("GET", "api/usuarios/api.php" + queryString, true);
  ajaxRequest.send(null);
}

function getNoCons(){
  //Obtener numero de consultorios
  var ajaxRequest;

  ajaxRequest = new XMLHttpRequest();

  ajaxRequest.onreadystatechange = function() {

     if(ajaxRequest.readyState == 4) {
        localStorage.setItem("noCons",ajaxRequest.responseText);
     }
  }

  var queryString = "?sent=noCons&valores=" + localStorage.getItem("idClinica");
  //Ejemplo servidor externo: ajaxRequest.open("GET", "http://192.168.1.80/proyectoOlmos/api/servicio/api.php" + queryString, true);
  ajaxRequest.open("GET", "api/clinicas/api.php" + queryString, true);
  ajaxRequest.send(null);
}
