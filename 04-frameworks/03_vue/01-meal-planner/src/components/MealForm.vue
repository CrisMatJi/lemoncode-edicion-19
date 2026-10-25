<script setup lang="ts">
import { ref } from 'vue'
import { useMealsStore } from '@/stores/meals'
import { DAYS, MEAL_TYPES, type Day, type MealType } from '@/types'

const mealsStore = useMealsStore()

const name = ref('')
const day = ref<Day>('Lunes')
const type = ref<MealType>('Comida')

const handleSubmit = () => {
  if (!name.value.trim()) return

  mealsStore.addMeal(name.value.trim(), day.value, type.value)
  name.value = ''
}
</script>

<template>
  <form
    class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow sm:flex-row sm:items-end"
    @submit.prevent="handleSubmit"
  >
    <label class="flex flex-1 flex-col gap-1 text-sm">
      Plato
      <input
        v-model="name"
        type="text"
        placeholder="Ej: Lentejas"
        class="rounded border border-slate-300 px-2 py-1"
      />
    </label>

    <label class="flex flex-col gap-1 text-sm">
      Día
      <select v-model="day" class="rounded border border-slate-300 px-2 py-1">
        <option v-for="option in DAYS" :key="option" :value="option">{{ option }}</option>
      </select>
    </label>

    <fieldset class="flex gap-3 text-sm">
      <label v-for="option in MEAL_TYPES" :key="option" class="flex items-center gap-1">
        <input v-model="type" type="radio" :value="option" />
        {{ option }}
      </label>
    </fieldset>

    <button type="submit" class="rounded bg-emerald-600 px-4 py-1.5 text-white hover:bg-emerald-700">
      Agregar
    </button>
  </form>
</template>
