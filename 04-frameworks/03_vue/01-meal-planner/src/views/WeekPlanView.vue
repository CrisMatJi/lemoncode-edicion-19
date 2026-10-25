<script setup lang="ts">
import { computed, ref } from 'vue'
import MealForm from '@/components/MealForm.vue'
import DayCard from '@/components/DayCard.vue'
import { useMealsStore } from '@/stores/meals'
import { DAYS, MEAL_TYPES, type MealType } from '@/types'

const mealsStore = useMealsStore()

const search = ref('')
const typeFilter = ref<MealType | ''>('')

const visibleTypes = computed(() => (typeFilter.value ? [typeFilter.value] : MEAL_TYPES))

const filteredMeals = computed(() =>
  mealsStore.meals.filter((meal) =>
    meal.name.toLowerCase().includes(search.value.trim().toLowerCase()),
  ),
)

const mealsOfDay = (day: string) => filteredMeals.value.filter((meal) => meal.day === day)

const handleClear = () => {
  if (confirm('¿Seguro que quieres borrar todo el plan semanal?')) {
    mealsStore.clearPlan()
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <MealForm />

    <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
      <input
        v-model="search"
        type="search"
        placeholder="Buscar plato..."
        class="flex-1 rounded border border-slate-300 px-2 py-1"
      />
      <select v-model="typeFilter" class="rounded border border-slate-300 px-2 py-1">
        <option value="">Todas las comidas</option>
        <option v-for="type in MEAL_TYPES" :key="type" :value="type">{{ type }}</option>
      </select>
      <button
        type="button"
        class="rounded bg-red-600 px-4 py-1 text-white hover:bg-red-700 disabled:opacity-50"
        :disabled="!mealsStore.meals.length"
        @click="handleClear"
      >
        Limpiar plan
      </button>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <DayCard
        v-for="day in DAYS"
        :key="day"
        :day="day"
        :meals="mealsOfDay(day)"
        :types="visibleTypes"
      />
    </div>
  </div>
</template>
