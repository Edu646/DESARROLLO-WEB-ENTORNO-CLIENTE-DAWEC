<script setup>
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { ref } from 'vue'

const auth = useFirebaseAuth()
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()
const user = useCurrentUser()
const error = ref(null)
const email = ref('')
const password = ref('')
const isRegistering = ref(false)

function iniciarSesionConGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then(() => {
      console.log('Usuario logueado con Google')
    })
    .catch((reason) => {
      console.error('Fallo al iniciar sesión con Google:', reason)
      error.value = reason.message
    })
}

function iniciarSesionConGithub() {
  signInWithPopup(auth, githubAuthProvider)
    .then(() => {
      console.log('Usuario logueado con GitHub')
    })
    .catch((reason) => {
      console.error('Fallo al iniciar sesión con GitHub:', reason)
      error.value = reason.message
    })
}

function iniciarSesionConCorreo() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Usuario logueado con correo')
    })
    .catch((reason) => {
      console.error('Fallo al iniciar sesión con correo:', reason)
      error.value = reason.message
    })
}

function registrarConCorreo() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Usuario registrado con correo')
    })
    .catch((reason) => {
      console.error('Fallo al registrar con correo:', reason)
      error.value = reason.message
    })
}

function cerrarSesion() {
  signOut(auth)
    .then(() => {
      console.log('Usuario deslogueado')
    })
    .catch((reason) => {
      console.error('Fallo al cerrar sesión:', reason)
      error.value = reason.message
    })
}

const login = async () => {
  try {
    await auth.signInWithEmailAndPassword(email.value, password.value);
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};
</script>

<template>
  <div>
    <div v-if="user">
      <p>Bienvenido, {{ user.displayName }}</p>
      <button @click="cerrarSesion">Cerrar sesión</button>
    </div>
    <div v-else>
      <div v-if="!isRegistering">
        <!-- Botón para iniciar sesión con Google -->
        <button @click="iniciarSesionConGoogle" class="auth-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" class="auth-icon" />
        </button>

        <!-- Botón para iniciar sesión con GitHub -->
        <button @click="iniciarSesionConGithub" class="auth-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="auth-icon" />
        </button>

        <!-- Iniciar sesión con correo -->
        <div>
          <input v-model="email" type="email" placeholder="Correo electrónico" />
          <input v-model="password" type="password" placeholder="Contraseña" />
          <button @click="iniciarSesionConCorreo" class="auth-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Correo" class="auth-icon" />
          </button>
        </div>

        <!-- Registrarse -->
        <button @click="isRegistering = true">Registrarse</button>
      </div>
      <div v-else>
        <!-- Registro con correo -->
        <div>
          <input v-model="email" type="email" placeholder="Correo electrónico" />
          <input v-model="password" type="password" placeholder="Contraseña" />
          <button @click="registrarConCorreo">Registrarse con correo</button>
        </div>
        <button @click="isRegistering = false">Volver a iniciar sesión</button>
      </div>
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>

body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.auth-container {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.auth-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.auth-btn:hover {
  background-color: #0056b3;
}

.auth-btn img.auth-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="email"]:focus, input[type="password"]:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  cursor: pointer;
}

p {
  margin: 10px 0;
}

p.error {
  color: red;
  font-size: 14px;
}

</style>