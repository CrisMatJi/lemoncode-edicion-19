<script setup lang="ts">
import type { House } from '~/types/house'

defineProps<{
  house: House
}>()

const config = useRuntimeConfig()
</script>

<template>
  <NuxtLink :to="`/houses/${house.id}`" class="card">
    <h2 class="title">{{ house.name }}</h2>
    <NuxtImg
      class="image"
      :src="`${config.public.picturesBase}${house.image}`"
      :alt="house.name"
      width="400"
      height="280"
      format="webp"
    />
    <p class="info">
      {{ house.city }}, {{ house.country }} · <strong>{{ house.price }}€ / noche</strong>
    </p>
  </NuxtLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card:hover .title {
  text-decoration: underline;
}

.title {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
}

.image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.info {
  margin: 0;
  color: #4b5563;
}
</style>
