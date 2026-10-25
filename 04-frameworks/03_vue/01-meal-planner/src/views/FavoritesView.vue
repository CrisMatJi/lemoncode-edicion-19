<script setup lang="ts">
import { computed, ref } from 'vue'
import FavoriteItem from '@/components/FavoriteItem.vue'
import { useMealsStore } from '@/stores/meals'

const mealsStore = useMealsStore()
const search = ref('')

const filteredFavorites = computed(() =>
  mealsStore.favorites.filter((name) =>
    name.toLowerCase().includes(search.value.trim().toLowerCase()),
  ),
)
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-2xl font-semibold">Platos favoritos</h2>

    <input
      v-model="search"
      type="search"
      placeholder="Buscar favorito..."
      class="rounded border border-slate-300 px-2 py-1"
    />

    <ul v-if="filteredFavorites.length" class="flex flex-col gap-2">
      <FavoriteItem v-for="name in filteredFavorites" :key="name" :name="name" />
    </ul>
    <p v-else class="text-slate-500">
      Todavía no hay favoritos. Márcalos con la ☆ desde el plan semanal.
    </p>
  </div>
</template>
