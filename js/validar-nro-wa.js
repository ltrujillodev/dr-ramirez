let errorNroIngresado = 0;
function validarNroWA() {
  let nroPaciente = document.getElementById("footer-paciente-wa").value;
  var mensaje = "Hola, soy el Dr. Ramirez";
  var encodedText = encodeURIComponent(mensaje);
  var whatsappURL =
    "whatsapp://send?phone=" + nroPaciente + "&text=" + encodedText;
  if (nroPaciente.length == 12) {
    window.location.href = whatsappURL;
    document.getElementById("footer-paciente-wa").value = "";
  } else if (nroPaciente == "") {
    alert("Debe ingresar un número.");
  } else if (
    (nroPaciente.length < 12 || nroPaciente.length > 12) &&
    errorNroIngresado < 2
  ) {
    errorNroIngresado++;
    alert("Número incorrecto.\nIntento " + errorNroIngresado + " de 3");
  } else {
    alert("Intentos agotados.");
    document.getElementById("footer-paciente-wa").value = "";
    window.location.href = "index.html";
  }
}
