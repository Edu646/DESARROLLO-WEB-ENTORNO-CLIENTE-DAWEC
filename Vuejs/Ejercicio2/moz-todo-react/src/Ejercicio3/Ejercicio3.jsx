import React from 'react';

function App() {
  // Definición de los manejadores de los clics de los botones
  const handleClick1 = () => {
    alert('Boton1');
  };

  const handleClick2 = () => {
    alert('Boton2');
  };

  const handleClick3 = () => {
    alert('Boton3');
  };

  return (
    <div>
      <button onClick={handleClick1}>Haz clic aquí</button>
      <button onClick={handleClick2}>Haz clic aquí</button>
      <button onClick={handleClick3}>Haz clic aquí</button>
    </div>
  );
}

export default App;
