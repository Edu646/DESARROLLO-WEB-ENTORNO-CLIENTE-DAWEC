import { useState } from 'react';


function App() {
  // Estado para almacenar el resultado
  const handleClick = () => {
    alert('¡Hizo clic!');
  };

  return (
    <div>
    <button onClick={handleClick}>Haz clic aquí</button>
  </div>
  );
}

export default App;
