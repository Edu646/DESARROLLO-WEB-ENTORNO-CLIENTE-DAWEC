<script>
export default {
  props: {
    tarea: {
      type: Object,
      required: true,
    },
    indice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleCompletada() {
      // Emite el evento con la tarea y el nuevo estado de completada
      this.$emit('actualizar-completada', this.tarea, !this.tarea.completada);
    },
    cambiarPrioridad() {
      // Emite el evento con la tarea y la nueva prioridad
      this.$emit('actualizar-prioridad', this.tarea, this.tarea.Prioridad);
    },
    eliminarTarea() {
      // Emite el evento con la tarea a eliminar
      this.$emit('borrar-tarea', this.tarea);
    },
  },
};
</script>

<template>
  <div class="tarea">
    <input 
      type="checkbox" 
      :checked="tarea.completada" 
      @change="toggleCompletada" 
    />
    <span :class="{ completada: tarea.completada }">{{ tarea.Titulo }}</span>
    <select v-model="tarea.Prioridad" @change="cambiarPrioridad">
      <option value="Alta">Alta</option>
      <option value="Media">Media</option>
      <option value="Baja">Baja</option>
    </select>
    <button @click="eliminarTarea">Eliminar</button>
  </div>
</template>

<style scoped>
.tarea {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.completada {
  text-decoration: line-through;
  color: #999;
}

select {
  margin-left: 10px;
}

button {
  background: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background: #ff1a1a;
}
</style>
