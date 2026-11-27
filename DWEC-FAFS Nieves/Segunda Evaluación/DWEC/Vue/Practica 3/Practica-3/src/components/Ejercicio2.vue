<script setup>
import { ref, reactive, computed } from 'vue'

const texto =ref("")



</script>

<template>
  <main>
    <h1>Ejercicio 2</h1>
    <input type="text" name="texto" v-model="texto" placeholder="Escribe algo...">
    <p>Has escrito: {{ texto }}</p>
    
  </main>
</template>