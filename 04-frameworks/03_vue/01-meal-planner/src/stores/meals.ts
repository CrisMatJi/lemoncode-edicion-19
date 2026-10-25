import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Day, Meal, MealType } from '@/types'

export const useMealsStore = defineStore(
  'meals',
  () => {
    const meals = ref<Meal[]>([])
    const favorites = ref<string[]>([])

    const addMeal = (name: string, day: Day, type: MealType) => {
      meals.value.push({ id: crypto.randomUUID(), name, day, type })
    }

    const updateMeal = (id: string, changes: Partial<Meal>) => {
      const meal = meals.value.find((meal) => meal.id === id)
      if (meal) {
        Object.assign(meal, changes)
      }
    }

    const deleteMeal = (id: string) => {
      meals.value = meals.value.filter((meal) => meal.id !== id)
    }

    const clearPlan = () => {
      meals.value = []
    }

    // los favoritos se guardan por nombre para poder reutilizarlos otro día
    const isFavorite = (name: string) => favorites.value.includes(name)

    const toggleFavorite = (name: string) => {
      if (isFavorite(name)) {
        favorites.value = favorites.value.filter((favorite) => favorite !== name)
      } else {
        favorites.value.push(name)
      }
    }

    return {
      meals,
      favorites,
      addMeal,
      updateMeal,
      deleteMeal,
      clearPlan,
      isFavorite,
      toggleFavorite,
    }
  },
  { persist: true },
)
