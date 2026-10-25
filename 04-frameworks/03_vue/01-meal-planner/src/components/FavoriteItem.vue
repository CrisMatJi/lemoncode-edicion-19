<script setup lang="ts">
import { ref } from 'vue'
import { useMealsStore } from '@/stores/meals'
import { DAYS, MEAL_TYPES, type Day, type MealType } from '@/types'

const props = defineProps<{
  name: string
}>()

const mealsStore = useMealsStore()

const day = ref<Day>('Lunes')
const type = ref<MealType>('Comida')
const added = ref(false)

const addToPlan = () => {
  mealsStore.addMeal(props.name, day.value, type.value)
  added.value = true
  setTimeout(() => (added.value = false), 1500)
}
</script>

<template>
  <li class="flex flex-col gap-2 rounded-lg bg-white p-3 shadow sm:flex-row sm:items-center">
    <span class="flex-1 font-medium">{{ name }}</span>
    <select v-model="day" class="rounded border border-slate-300 px-2 py-1 text-sm">
      <option v-for="option in DAYS" :key="option" :value="option">{{ option }}</option>
    </select>
    <select v-model="type" class="rounded border border-slate-300 px-2 py-1 text-sm">
      <option v-for="option in MEAL_TYPES" :key="option" :value="option">{{ option }}</option>
    </select>
    <button
      type="button"
      class="rounded bg-emerald-600 px-3 py-1 text-sm text-white hover:bg-emerald-700"
      @click="addToPlan"
    >
      {{ added ? 'Añadido ✓' : 'Añadir al plan' }}
    </button>
    <button
      type="button"
      class="text-sm text-red-600 hover:underline"
      @click="mealsStore.toggleFavorite(name)"
    >
      Quitar
    </button>
  </li>
</template>
