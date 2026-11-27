<script setup>
import { ref, reactive, computed } from 'vue'


const objeto = reactive({
    nombre:"Jose Claveria",
    edad: 18,
    email:"joseclaveria@gmail.com"
})

const incrementarEdad=()=>{
    objeto.edad++
}





</script>

<template>
  <main>
    <h1>Ejercicio 3</h1>
    <p>Nombre: {{ objeto.nombre }}</p>
    <p>Edad: {{ objeto.edad }}</p>
    <p>Email: {{ objeto.email }}</p>
    <button @onclick="incrementarEdad">Incrementar Edad</button>
    
  </main>
</template>