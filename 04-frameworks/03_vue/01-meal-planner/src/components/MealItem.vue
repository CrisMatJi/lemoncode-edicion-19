<script setup lang="ts">
import { ref } from 'vue'
import { useMealsStore } from '@/stores/meals'
import { DAYS, MEAL_TYPES, type Meal } from '@/types'

const props = defineProps<{
  meal: Meal
}>()

const mealsStore = useMealsStore()

const isEditing = ref(false)
const editName = ref(props.meal.name)
const editDay = ref(props.meal.day)
const editType = ref(props.meal.type)

const startEditing = () => {
  editName.value = props.meal.name
  editDay.value = props.meal.day
  editType.value = props.meal.type
  isEditing.value = true
}

const saveChanges = () => {
  if (!editName.value.trim()) return

  mealsStore.updateMeal(props.meal.id, {
    name: editName.value.trim(),
    day: editDay.value,
    type: editType.value,
  })
  isEditing.value = false
}
</script>

<template>
  <li class="rounded border border-slate-200 p-2 text-sm">
    <div v-if="!isEditing" class="flex items-center gap-2">
      <span class="flex-1">{{ meal.name }}</span>
      <button
        type="button"
        :title="mealsStore.isFavorite(meal.name) ? 'Quitar de favoritos' : 'Marcar como favorito'"
        class="text-amber-500"
        @click="mealsStore.toggleFavorite(meal.name)"
      >
        {{ mealsStore.isFavorite(meal.name) ? '★' : '☆' }}
      </button>
      <button type="button" class="text-sky-600 hover:underline" @click="startEditing">
        Editar
      </button>
      <button
        type="button"
        class="text-red-600 hover:underline"
        @click="mealsStore.deleteMeal(meal.id)"
      >
        Eliminar
      </button>
    </div>

    <form v-else class="flex flex-col gap-2" @submit.prevent="saveChanges">
      <input v-model="editName" type="text" class="rounded border border-slate-300 px-2 py-1" />
      <div class="flex gap-2">
        <select v-model="editDay" class="flex-1 rounded border border-slate-300 px-1 py-1">
          <option v-for="option in DAYS" :key="option" :value="option">{{ option }}</option>
        </select>
        <select v-model="editType" class="flex-1 rounded border border-slate-300 px-1 py-1">
          <option v-for="option in MEAL_TYPES" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <div class="flex gap-2">
        <button type="submit" class="rounded bg-emerald-600 px-2 py-1 text-white">Guardar</button>
        <button type="button" class="rounded bg-slate-200 px-2 py-1" @click="isEditing = false">
          Cancelar
        </button>
      </div>
    </form>
  </li>
</template>
