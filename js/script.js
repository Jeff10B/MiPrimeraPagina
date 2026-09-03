// Esperar a que todo el contenido del documento esté cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Obtener la referencia del botón mediante su ID
  const botonSaludar = document.getElementById('btnSaludar');

  // 2. Escuchar el evento 'click' en el botón
  botonSaludar.addEventListener('click', function() {
    
    // 3. Imprimir el mensaje requerido en la consola
    console.log("Hola Mundo desde JavaScript");
    
  });

});