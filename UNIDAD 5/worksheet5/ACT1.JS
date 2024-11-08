// script.js

document.getElementById('validar-btn').addEventListener('click', function() {
    const mayusculaInput = document.getElementById('mayuscula').value;
    const especialesInput = document.getElementById('especiales').value;
    const correoInput = document.getElementById('correo').value;
    const tarjetaInput = document.getElementById('tarjeta').value;
    const longitudInput = document.getElementById('longitud').value;
    const numeroInput = document.getElementById('numero').value;
  
    // Validaciones
    const validaciones = [
      validarMayuscula(mayusculaInput, 'mayuscula-error'),
      validarCaracteresEspeciales(especialesInput, 'especiales-error'),
      validarCorreo(correoInput, 'correo-error'),
      validarTarjetaCredito(tarjetaInput, 'tarjeta-error'),
      validarLongitud(longitudInput, 'longitud-error'),
      validarNumero(numeroInput, 'numero-error'),
    ];
  
    // Si todas son verdaderas, se muestra un mensaje de éxito
    if (validaciones.every(v => v)) {
      alert('¡Todas las validaciones son correctas!');
    }
  });
  
  // Función para validar mayúscula
  function validarMayuscula(value, errorId) {
    const regex = /[A-Z]/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe contener al menos una mayúscula.');
    return isValid;
  }
  
  // Función para validar caracteres especiales
  function validarCaracteresEspeciales(value, errorId) {
    const regex = /[!@#$%^&]/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe contener al menos un carácter especial (!@#$%^&).');
    return isValid;
  }
  
  // Función para validar correo
  function validarCorreo(value, errorId) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe ser un correo válido.');
    return isValid;
  }
  
  // Función para validar tarjeta de crédito
  function validarTarjetaCredito(value, errorId) {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|6011[0-9]{12})$/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe tener el formato correcto de tarjeta de crédito.');
    return isValid;
  }
  
  // Función para validar longitud mínima
  function validarLongitud(value, errorId) {
    const isValid = value.length >= 8;
    toggleError(isValid, errorId, 'Debe tener al menos 8 caracteres.');
    return isValid;
  }
  
  // Función para validar que contenga un número
  function validarNumero(value, errorId) {
    const regex = /\d/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe contener al menos un número.');
    return isValid;
  }
  
  // Función para manejar el estado de los errores
  function toggleError(isValid, errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    if (isValid) {
      errorElement.style.display = 'none';
    } else {
      errorElement.style.display = 'block';
      errorElement.textContent = errorMessage;
    }
  }
  