// Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../Firebase'; // Importa la configuración de Firebase
import { useNavigate } from 'react-router-dom';
import '../Poke_api/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Para alternar entre login y registro
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Función para manejar la autenticación
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Iniciar sesión con email y contraseña
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // Redirige a la página principal tras el login
      } else {
        // Registrar usuario
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // Redirige a la página principal tras el registro
      }
    } catch (err) {
      setError(isLogin ? 'Credenciales incorrectas' : 'Error al registrar usuario');
    }
  };

  // Función para manejar el inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); // Redirige a la página principal tras el login con Google
    } catch (err) {
      setError('Error al iniciar sesión con Google');
    }
  };

  // Función para alternar entre login y registro
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null); // Limpiar el error cuando cambiamos entre login y registro
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Registro'}</h2>
      <form onSubmit={handleAuth}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</button>
      </form>
      <p>
        {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
        <button onClick={toggleAuthMode}>
          {isLogin ? 'Regístrate' : 'Inicia sesión'}
        </button>
      </p>
      <button onClick={handleGoogleSignIn} className="google-signin-button">
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
