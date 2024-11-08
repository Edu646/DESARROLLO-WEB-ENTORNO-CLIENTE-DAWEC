// script.js

document.getElementById('validar-btn').addEventListener('click', function() {
    const mayusculaInput = document.getElementById('mayuscula').value;
    const correoInput = document.getElementById('correo').value;
    const numero_usinput = document.getElementById('numero_us').value;
    const numeroInput = document.getElementById('numero').value;
  
    // Validaciones
    const validaciones = [
      validarMayuscula(mayusculaInput, 'mayuscula-error'),
      validarCorreo(correoInput, 'correo-error'),
      validarus(numero_usinput, 'numero_us'),
      validarNumero(numeroInput, 'numero-error'),
    ];
  
    // Si todas son verdaderas, se muestra un mensaje de éxito
    if (validaciones.every(v => v)) {
      alert('¡Todas las validaciones son correctas!');
    }
  });
  
  // Función para validar mayúscula
  function validarMayuscula(value, errorId) {
    const regex = /[A-Z]\d/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe contener al menos una mayúscula.');
    return isValid;
  }
  

  
  // Función para validar correo
  function validarCorreo(value, errorId) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(value);
    toggleError(isValid, errorId, 'Debe ser un correo válido.');
    return isValid;
  }

  // Función para validar longitud mínima
  function validarus(value, errorId) {
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
  