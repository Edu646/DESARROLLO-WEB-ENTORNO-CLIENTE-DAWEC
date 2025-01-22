<script setup>
import Cabecera from './Cabecera.vue';
import Tarea from './Tarea.vue';
import Pie from './Pie.vue';
import { ref, computed, watch } from "vue";
import { useCollection, useCurrentUser } from 'vuefire';
import { addDoc, collection, query, where, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import { doc, getDocs } from "firebase/firestore";

const db = useFirestore();
const user = useCurrentUser(); // Obtén el usuario actual
const ListaAleatorio = ref([]);

// Observar cambios en el usuario
watch(user, (nuevoUsuario) => {
  if (nuevoUsuario) {
    cargarNotas(nuevoUsuario.uid);
  } else {
    ListaAleatorio.value = []; // Limpiar las notas cuando no hay usuario
  }
});

// Cargar las notas del usuario
function cargarNotas(uid) {
  const q = query(collection(db, 'Recordatorios'), where('uid', '==', uid));
  onSnapshot(q, (snapshot) => {
    ListaAleatorio.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
}

// Agregar una nueva tarea
const nuevaPrioridad = ref("Alta");

async function AltaNuevaNota(texto) {
  if (texto.trim() !== "") {
    const nuevoRecordatorio = {
      Titulo: texto,
      Prioridad: nuevaPrioridad.value,
      completada: false,
      uid: user.value.uid // Asocia la tarea al usuario actual
    };

    try {
      await addDoc(collection(db, 'Recordatorios'), nuevoRecordatorio);
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
    }
  }
}

// Eliminar una tarea por índice
async function BorrarTarea(tarea) {
  try {
    await deleteDoc(doc(db, 'Recordatorios', tarea.id));
    // Actualiza localmente
    ListaAleatorio.value = ListaAleatorio.value.filter(t => t.id !== tarea.id);
  } catch (e) {
    console.error("Error al eliminar el documento:", e);
  }
}

// Actualizar la prioridad de una tarea
async function ActualizarPrioridad(tarea, nuevaPrioridad) {
  try {
    await updateDoc(doc(db, 'Recordatorios', tarea.id), { Prioridad: nuevaPrioridad });
  } catch (e) {
    console.error("Error al actualizar la prioridad: ", e);
  }
}

// Actualizar el estado de completada de una tarea
async function ActualizarCompletada(tarea, completada) {
  try {
    await updateDoc(doc(db, 'Recordatorios', tarea.id), { completada });
    // Actualiza localmente
    const index = ListaAleatorio.value.findIndex(t => t.id === tarea.id);
    if (index !== -1) {
      ListaAleatorio.value[index].completada = completada;
    }
  } catch (e) {
    console.error("Error al actualizar el estado de completada:", e);
  }
}

// Contar tareas pendientes
function numeroTareasPendientes() {
  return ListaAleatorio.value.filter((el) => !el.completada).length;
}

// Función para ordenar las tareas por prioridad
function ordenarPorPrioridad(tareas) {
  return tareas.slice().sort((a, b) => {
    const prioridades = { 'Alta': 1, 'Media': 2, 'Baja': 3 };
    return prioridades[a.Prioridad] - prioridades[b.Prioridad];
  });
}

// Computed property para obtener la lista de tareas ordenadas
const tareasOrdenadas = computed(() => ordenarPorPrioridad(ListaAleatorio.value));

// Función para recargar la página
function recargarPagina() {
  window.location.reload(); // Recarga la página
}
</script>

<template>
  <div class="contenedor">
    <div v-if="user">
      <!-- Cabecera muestra el total y las tareas pendientes -->
      <Cabecera 
        :total-tareas="ListaAleatorio.length" 
        :pendientes="numeroTareasPendientes()" 
      />

      <!-- Lista de tareas -->
      <transition-group name="fade" tag="div" class="lista-tareas">
        <Tarea 
          v-for="(tarea, index) in tareasOrdenadas" 
          :key="tarea.id" 
          :tarea="tarea" 
          :indice="index" 
          @borrar-tarea="BorrarTarea" 
          @actualizar-prioridad="ActualizarPrioridad" 
          @actualizar-completada="ActualizarCompletada"
        />
      </transition-group>

      <!-- Botón para recargar la página -->
      <button @click="recargarPagina" class="btn-recargar">Recargar Tareas</button>

      <!-- Pie permite agregar nuevas tareas -->
      <Pie @nueva-tarea="AltaNuevaNota" />
    </div>
    <div v-else>
      <p>Por favor, inicia sesión para ver tus notas.</p>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.lista-tareas {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  color: rgb(63, 149, 94);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.btn-recargar {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-recargar:hover {
  background-color: #3a9b6d;
}
</style>
