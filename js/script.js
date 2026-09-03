
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Obtener la referencia del botón mediante su ID ('btnSaludar')
  const botonSaludar = document.getElementById('btnSaludar');

  // 2. Escuchar el evento 'click' en el botón
  botonSaludar.addEventListener('click', function() {
    
    // 3. Imprimir el mensaje en la consola de desarrollador del navegador
    console.log("Hola Mundo desde JavaScript");

    // 4. Muestra también una alerta en pantalla para confirmar visualmente la función
    alert("¡Hola Mundo desde JavaScript!");
    
  });

});