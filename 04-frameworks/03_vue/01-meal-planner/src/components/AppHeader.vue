<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-emerald-600 text-white">
    <nav class="mx-auto flex max-w-6xl flex-wrap items-center gap-4 p-4">
      <h1 class="mr-auto text-xl font-bold">Meal Planner</h1>
      <RouterLink to="/" class="hover:underline" active-class="font-semibold underline">
        Plan semanal
      </RouterLink>
      <RouterLink to="/favoritos" class="hover:underline" active-class="font-semibold underline">
        Favoritos
      </RouterLink>
    </nav>
  </header>
</template>
