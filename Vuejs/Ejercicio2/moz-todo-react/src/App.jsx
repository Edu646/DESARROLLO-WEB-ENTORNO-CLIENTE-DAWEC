import { useState } from 'react';
import './App.css';

function App() {
  // Estado para almacenar el resultado
  const [resultado, setResultado] = useState(0);

  // Función para realizar la suma
  function Soma() {
    const n1 = 2;
    const n2 = 3;
    const sum = n1 + n2;

    // Actualizar el estado con el resultado de la suma
    setResultado(sum);
  }

  // Título para la pantalla
  const Titulo = "Soma de dos números";

  return (
    <div>
      <h1>{Titulo}</h1>
      <button onClick={Soma}>Realizar Suma</button>
      <p>El resultado es: {resultado}</p>
    </div>
  );
}

export default App;
