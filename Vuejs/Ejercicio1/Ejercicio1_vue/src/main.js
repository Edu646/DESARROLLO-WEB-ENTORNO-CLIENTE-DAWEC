import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

import { createWebHistory, createRouter } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'; // Importar los hooks de Vue Router
import { ref, watch } from 'vue';

import LandingPage from './components/LandingPage.vue'
import Recordatorios from './components/Recordatorios.vue'
import Registrar from './components/Registrar.vue'

// Para recargar la página al navegar

const route = useRoute();

// Añadir un watcher para escuchar los cambios de ruta
watch(route, () => {
  router.replace({ path: '/about' }).then(() => {
    router.replace({ path: route.path }); // Restablecer la ruta para activar la recarga de la página
  });
});


const routes = [
  { path: '/', component: Registrar },
  { path: '/about', component:Recordatorios },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//createApp(App).mount('#app')
const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

app.use(router)

app.mount('#app')