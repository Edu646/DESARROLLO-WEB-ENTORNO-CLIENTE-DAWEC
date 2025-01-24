import React from 'react';
import './Ejercicio8.css';
// Componente Joke que representa un solo chiste
function Joke({ setup, punchline }) {
  return (
    <div >
      <h2>{setup}</h2>
      <p>{punchline}</p>
    </div>
  );
}

function App() {
  // Matriz de objetos JSON que contiene los chistes
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ];

  return (
    <div>
      <h1>Chistes para Programadores</h1>
      {/* Usamos map para recorrer los chistes y renderizar cada uno usando el componente Joke */}
      {jokes.map((joke) => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ))}
    </div>
  );
}

export default App;
