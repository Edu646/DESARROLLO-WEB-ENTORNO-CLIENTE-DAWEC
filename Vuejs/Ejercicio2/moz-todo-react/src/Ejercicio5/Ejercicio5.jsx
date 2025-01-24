import React from 'react';

function App() {
  // Lista de animales
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div>
      <h1>Lista de animales</h1>
      <ul>
        {/* Usamos map para recorrer la lista y renderizar cada animal */}
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>  // Renderiza cada elemento como un <li>
        ))}
      </ul>
    </div>
  );
}

export default App;
