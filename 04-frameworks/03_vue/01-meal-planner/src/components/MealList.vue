<script setup lang="ts">
import MealItem from './MealItem.vue'
import type { Meal } from '@/types'

defineProps<{
  title: string
  meals: Meal[]
}>()
</script>

<template>
  <section>
    <h3 class="mb-1 text-xs font-semibold uppercase text-slate-500">{{ title }}</h3>
    <ul v-if="meals.length" class="flex flex-col gap-1">
      <MealItem v-for="meal in meals" :key="meal.id" :meal="meal" />
    </ul>
    <p v-else class="text-sm italic text-slate-400">Sin platos</p>
  </section>
</template>
