document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y sus elementos
    const form = document.querySelector("form");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const asuntoInput = document.getElementById("asunto");
    const mensajeInput = document.getElementById("mensaje");
  
    // Agregar un evento para capturar el envío del formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores del formulario
      const nombre = nombreInput.value;
      const email = emailInput.value;
      const asunto = asuntoInput.value;
      const mensaje = mensajeInput.value;
  
      // Mostrar mensaje de confirmación con los datos ingresados
      const confirmacion = document.getElementById("confirmacion");
      confirmacion.innerHTML = `
        <h3>Confirmación de envío:</h3>
        <p>Nombre: ${nombre}</p>
        <p>Correo electrónico: ${email}</p>
        <p>Asunto: ${asunto}</p>
        <p>Mensaje: ${mensaje}</p>
        <button id="btn-enviar">Enviar</button>
        <button id="btn-cancelar">Cancelar</button>
      `;
  
      // Agregar eventos a los botones de enviar y cancelar
      const btnEnviar = document.getElementById("btn-enviar");
      const btnCancelar = document.getElementById("btn-cancelar");
  
      // Evento para enviar el formulario
      btnEnviar.addEventListener("click", function() {
        // Aquí puedes agregar el código para enviar el formulario, por ejemplo, usando AJAX o Fetch
  
        // Mostrar mensaje de enviado con éxito
        confirmacion.innerHTML = `<p>Mensaje enviado con éxito</p>`;
  
        // Borrar los datos del formulario
        nombreInput.value = "";
        emailInput.value = "";
        asuntoInput.value = "";
        mensajeInput.value = "";
      });
  
      // Evento para cancelar el envío
      btnCancelar.addEventListener("click", function() {
        confirmacion.innerHTML = ""; // Limpiar el mensaje de confirmación
      });
    });
  });
  