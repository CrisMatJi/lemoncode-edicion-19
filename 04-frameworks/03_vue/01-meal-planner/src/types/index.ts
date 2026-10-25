export const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const
export const MEAL_TYPES = ['Desayuno', 'Comida', 'Cena'] as const

export type Day = (typeof DAYS)[number]
export type MealType = (typeof MEAL_TYPES)[number]

export interface Meal {
  id: string
  name: string
  day: Day
  type: MealType
}
