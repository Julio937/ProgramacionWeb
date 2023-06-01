document.addEventListener("DOMContentLoaded", function () {
  const nombreInfo = document.getElementById("nombre-info");
  const apellidoInfo = document.getElementById("apellido-info");
  const emailInfo = document.getElementById("email-info");

  const urlParams = new URLSearchParams(window.location.search);
  const nombre = urlParams.get("nombre");
  const apellido = urlParams.get("apellido");
  const email = urlParams.get("email");

  if (nombre && apellido && email) {
    nombreInfo.textContent = nombre;
    apellidoInfo.textContent = apellido;
    emailInfo.textContent = email;
  }
});
