document.getElementById("enviar").addEventListener('click', function mostrarMensaje(e) {
    e.preventDefault()
     let nombre = document.getElementById("name").value;
     let mensaje = "Hola " + nombre + ", gracias por comunicarte con nosotros.";
     document.getElementById("mensaje-respuesta").innerHTML = mensaje;
 }
 )