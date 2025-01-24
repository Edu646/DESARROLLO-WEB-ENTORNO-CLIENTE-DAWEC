import React, { useState } from 'react';

function App() {
  // Estados para el nombre y el apellido
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Función para manejar el evento de clic en el botón
  const handleClick = () => {
    // Mostrar una alerta con el nombre y apellido
    alert(`¡Hola, ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <h1>Formulario de saludo</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Introduce tu nombre"
            />
          </label>
        </div>
        <div>
          <label>
            Apellido:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Introduce tu apellido"
            />
          </label>
        </div>

        <button type="button" onClick={handleClick}>
          Salúdame
        </button>
      </form>
    </div>
  );
}

export default App;
