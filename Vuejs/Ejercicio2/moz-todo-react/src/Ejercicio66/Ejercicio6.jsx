import React from 'react';

// Componente AnimalList que recibe una lista de animales como prop
function AnimalList({ animals }) {
  return (
    <div>
      <h2>Lista de Animales</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {/* Mapear a través de la lista de animales y renderizar cada uno */}
        {animals.map((animal, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f0f0f0',
            }}
          >
            {animal}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  // Lista de animales
  const animals = [' 🐶dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div>
      {/* Usamos el componente AnimalList y le pasamos la lista de animales */}
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;
