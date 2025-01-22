<template>
  <footer class="pie">
    <input 
      type="text" 
      v-model="nuevaTarea" 
      placeholder="Escribe una nueva tarea..."
    />
    <button @click="agregarTarea">Agregar</button>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['nueva-tarea']);
const nuevaTarea = ref("");

const agregarTarea = () => {
  if (nuevaTarea.value.trim() !== "") {
    emit('nueva-tarea', nuevaTarea.value);
    nuevaTarea.value = "";
  }
};
</script>

<style scoped>
.pie {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 20px;
  border-top: 1px solid #ddd;
}

input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1;
  max-width: 300px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>