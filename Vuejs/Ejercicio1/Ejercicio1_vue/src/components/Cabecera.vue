<template>
  <header class="cabecera">
    <h1>Lista de Tareas</h1>
    <p>Total: {{ totalTareas }} | Pendientes: {{ pendientes }}</p>
  </header>
</template>

<script setup>
defineProps({
  totalTareas: Number,
  pendientes: Number
});
</script>

<style scoped>
.cabecera {
  text-align: center;
  padding: 10px;
  background-color: #ffc98f;
  border-bottom: 1px solid #ddd;
  color: rgb(182, 37, 37);
  border-radius: 2em 2em 2em 2em;
}
</style>