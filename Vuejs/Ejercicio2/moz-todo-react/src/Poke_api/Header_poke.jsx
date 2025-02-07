// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonList, PokemonDetail } from './Poke_app';
import Register from './Login';
import { auth } from '../../Firebase'; // Asegúrate de importar Firebase
import { signOut } from 'firebase/auth'; // Importa la función signOut de Firebase
import PokemonGame from './PokeGame';
import './header.css';  // Asegúrate de que tu CSS esté correctamente enlazado

const Home = () => <h2>Welcome to the Home Page</h2>;

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Para almacenar el usuario autenticado

  useEffect(() => {
    // Escucha los cambios de estado de autenticación
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); // Limpieza cuando el componente se desmonte
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cerrar sesión
      setUser(null); // Limpiar el estado de usuario
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <button className="navbar-toggler" onClick={toggleMenu}>
            &#9776; {/* Ícono de hamburguesa */}
          </button>
          
          <ul className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/BuscarPokemones">Buscar Pokemones</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/Juego">Jugar</a></li>
            {user && (
              <>
                <li><span>Bienvenido, {user.displayName || user.email}</span></li>
                <li><button onClick={handleLogout}>Cerrar sesión</button></li>
              </>
            )}
          </ul>
        </nav>

        <h1>POKE_API</h1>
        {/* Agregar un GIF aquí */}
        <div>
          <img src="/Entrenador.gif" alt="Pokemon GIF" />
        </div>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BuscarPokemones" element={<PokemonList />} />
          <Route path="/detalle/:id" element={<PokemonDetail />} />
          <Route path="/login" element={<Register />} />
          <Route path="/Juego" element={<PokemonGame />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
