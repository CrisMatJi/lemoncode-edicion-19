<script setup lang="ts">
import type { House } from '~/types/house'

useSeoMeta({
  title: 'Casas Rurales',
  description: 'Portal de alquiler vacacional de casas rurales',
})

const config = useRuntimeConfig()
const { data: houses } = await useFetch<House[]>(`${config.public.apiBase}/houses`)

const search = ref('')

const filteredHouses = computed(() =>
  (houses.value ?? []).filter((house) =>
    `${house.name} ${house.city} ${house.country}`
      .toLowerCase()
      .includes(search.value.trim().toLowerCase()),
  ),
)
</script>

<template>
  <div>
    <input
      v-model="search"
      type="search"
      class="search"
      placeholder="Buscar por nombre o ubicación..."
    />

    <p v-if="!filteredHouses.length">No hay casas que coincidan.</p>

    <ul class="list">
      <li v-for="house in filteredHouses" :key="house.id">
        <HouseCard :house="house" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
