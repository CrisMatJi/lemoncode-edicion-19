<script setup lang="ts">
import MealList from './MealList.vue'
import type { Day, Meal, MealType } from '@/types'

const props = defineProps<{
  day: Day
  meals: Meal[]
  types: readonly MealType[]
}>()

const mealsByType = (type: MealType) => props.meals.filter((meal) => meal.type === type)
</script>

<template>
  <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow">
    <h2 class="border-b border-emerald-500 pb-1 text-lg font-semibold">{{ day }}</h2>
    <MealList v-for="type in types" :key="type" :title="type" :meals="mealsByType(type)" />
  </article>
</template>
