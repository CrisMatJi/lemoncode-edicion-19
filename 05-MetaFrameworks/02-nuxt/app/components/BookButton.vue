<script setup lang="ts">
const isBooked = ref(false)
</script>

<template>
  <div>
    <button type="button" class="button" @click="isBooked = !isBooked">
      {{ isBooked ? 'Cancelar reserva' : 'Reservar' }}
    </button>
    <p v-if="isBooked" class="message">¡Reserva realizada!</p>
  </div>
</template>

<style scoped>
.button {
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 6px;
  background-color: #15803d;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.button:hover {
  background-color: #166534;
}

.message {
  color: #15803d;
}
</style>
