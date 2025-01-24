import React, { useState } from 'react';

function App() {
  // Definir el estado del contador, con un valor inicial de 0
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);  // Incrementa el contador
  };

  return (
    <div>
      <h1>Contador: {count}</h1> {/* Muestra el contador */}
      <button onClick={increment}>Incrementar</button> {/* Botón para incrementar */}
    </div>
  );
}

export default App;
