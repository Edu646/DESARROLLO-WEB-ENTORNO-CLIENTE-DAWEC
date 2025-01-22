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
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Correo" class="auth-icon" />iniciar sesión
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
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fa;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.auth-container {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.auth-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 20px;
  margin: 12px 0;
  background-color: #4285F4;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-sizing: border-box;
}

.auth-btn:hover {
  background-color: #357ae8;
  transform: translateY(-2px);
}

.auth-btn img.auth-icon {
  width: 22px;
  height: 22px;
  margin-right: 10px;
}

input[type="email"], input[type="password"] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input[type="email"]:focus, input[type="password"]:focus {
  outline: none;
  border-color: #4285F4;
  box-shadow: 0 0 8px rgba(66, 133, 244, 0.3);
}

button {
  cursor: pointer;
}

p {
  margin-top: 20px;
}

.error {
  color: #ff4d4d;
  font-size: 14px;
}

.is-registering p {
  margin-top: 10px;
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
}

.is-registering p:hover {
  text-decoration: underline;
}

</style>
