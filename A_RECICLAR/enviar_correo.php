<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $asunto = $_POST["asunto"];
  $mensaje = $_POST["mensaje"];

  // Dirección de correo electrónico a la que deseas enviar el mensaje
  $destinatario = "julianvl.2003@example.com";

  // Construye el cuerpo del mensaje
  $cuerpoMensaje = "Nombre: $nombre\n";
  $cuerpoMensaje .= "Correo electrónico: $email\n";
  $cuerpoMensaje .= "Asunto: $asunto\n";
  $cuerpoMensaje .= "Mensaje: $mensaje\n";

  // Envía el correo electrónico
  mail($destinatario, $asunto, $cuerpoMensaje);

  // Redirige al usuario a una página de confirmación o muestra un mensaje de éxito
  echo "¡Gracias por tu mensaje! Te responderemos pronto.";
}
?>
