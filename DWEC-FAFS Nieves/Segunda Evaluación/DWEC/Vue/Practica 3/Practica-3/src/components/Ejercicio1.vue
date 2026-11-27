<script setup>
import { ref, reactive, computed } from 'vue'

const contador= ref(0)

const incrementar=()=>{
    contador.value++
}

const decrementar=()=>{
    contador.value--
}

const restablecer=()=>{
    contador.value=0
}

</script>

<template>
  <main>
    <h1>Ejercicio 1</h1>
    <h3>Contador: {{ contador }}</h3>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
    <button @click="restablecer">Restablecer</button>
  </main>
</template>