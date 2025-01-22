<script setup>
import {ref } from 'vue'
const numero = ref(0);
function mas(){

if (numero.value >= 10){
  console.log('te has pasado');
  numero.value ++
}else{
  numero.value ++
}
}
</script>

<template>
<button @click="mas" ><p>Resultado: {{ numero }}</p></button>
</template>

<style scoped>

</style>