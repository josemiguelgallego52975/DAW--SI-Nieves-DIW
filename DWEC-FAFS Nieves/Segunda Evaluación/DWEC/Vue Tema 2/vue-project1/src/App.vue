<script setup>
import { ref, reactive, computed } from 'vue'


// EJERCICIO 1
const contador = ref(0)
const doble = computed(() => contador.value * 2)

const conti = () => {
  contador.value++
}


// EJERCICIO 2
const encendida = ref(false)
const estadoTexto = computed(() => (encendida.value ? 'Encendida' : 'Apagada'))

const cambiarEstado = () => {
  encendida.value = !encendida.value
}


// EJERCICIO 3
const jugador = reactive({
  nombre: 'Pepe',
  puntos: 10,
  nivel: 1
})

const resumen = computed(() => {
  return `${jugador.nombre} — Nivel ${jugador.nivel} (${jugador.puntos} pts)`
})

const sumarPuntos = () => {
  jugador.puntos += 15
}


// EJERCICIO 4
const producto = reactive({
  nombre: 'Teclado',
  precio: 40,
  cantidad: 1
})

const subtotal = computed(() => producto.precio * producto.cantidad)
const envioGratis = computed(() => (subtotal.value >= 100 ? 'Sí' : 'No'))

const anadirUnidad = () => {
  producto.cantidad++
}


// EJERCICIO 5
const descuento = ref(10)
const pedido = reactive({
  totalBruto: 200,
  unidades: 2
})

const totalFinal = computed(() => {
  return pedido.totalBruto - (pedido.totalBruto * descuento.value) / 100
})

const precioPorUnidad = computed(() => {
  return totalFinal.value / pedido.unidades
})

const sumarDescuento = () => {
  descuento.value += 10
}
</script>

<template>
  <main>
    <!-- EJERCICIO 1  -->
    <h1>Contador y doble</h1>
    <p>Contador: {{ contador }}</p>
    <p>Doble: {{ doble }}</p>
    <button @click="conti">Incrementar</button>

    <hr />

    <!-- EJERCICIO 2  -->
    <h1>Estado de una lámpara</h1>
    <p>Estado: {{ estadoTexto }}</p>
    <button @click="cambiarEstado">Cambiar estado</button>

    <hr />

    <!-- EJERCICIO 3  -->
    <h1>Perfil de jugador</h1>
    <p>{{ resumen }}</p>
    <button @click="sumarPuntos">+15 puntos</button>

    <hr />

    <!-- EJERCICIO 4  -->
    <h1>Carrito de un solo producto</h1>
    <p>{{ producto.nombre }} x{{ producto.cantidad }}</p>
    <p>Subtotal: {{ subtotal }} €</p>
    <p>Envío gratis: {{ envioGratis }}</p>
    <button @click="anadirUnidad">Añadir unidad</button>

    <hr />
    
    <!-- EJERCICIO 5  -->
    <h1>Pedido con descuento</h1>
    <p>Descuento: {{ descuento }}%</p>
    <p>Total final: {{ totalFinal }} €</p>
    <p>Precio por unidad: {{ precioPorUnidad }} €</p>
    <button @click="sumarDescuento">+10% descuento</button>
  </main>
</template>