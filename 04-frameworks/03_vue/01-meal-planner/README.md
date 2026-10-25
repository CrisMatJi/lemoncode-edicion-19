# Meal Planner

Laboratorio del módulo de Vue: aplicación para planificar las comidas de la semana.

Hecha con **Vue 3** (plantilla `create-vue`), **TypeScript**, **Pinia**, **Vue Router** y **Tailwind CSS**.

## Funcionalidades

### Básico

- Formulario para añadir un plato con nombre, día de la semana y tipo de comida. Se limpia al agregar.
- Vista **Plan semanal** con los 7 días y sus platos agrupados por tipo.
- Cada plato se puede **editar** (nombre, día y tipo), **eliminar** y **marcar como favorito** (☆ / ★).
- Botón **Limpiar plan** que pide confirmación antes de borrar todo.
- Vista **Platos favoritos**.
- Estado global con Pinia (`src/stores/meals.ts`).

### Opcional

- Persistencia con `pinia-plugin-persistedstate`: el plan y los favoritos se mantienen al recargar.
- Desde favoritos se puede **añadir el plato al plan** eligiendo día y tipo.
- Búsqueda por nombre en el plan semanal y en favoritos.
- Filtro por categoría: Desayuno, Comida o Cena.
- Diseño responsive con Tailwind.

## Estructura

```
src/
├── components/
│   ├── AppHeader.vue     # navegación
│   ├── MealForm.vue      # formulario para añadir platos
│   ├── DayCard.vue       # tarjeta de un día
│   ├── MealList.vue      # platos de un tipo (desayuno, comida o cena)
│   ├── MealItem.vue      # plato con editar, eliminar y favorito
│   └── FavoriteItem.vue  # favorito con botón para añadirlo al plan
├── router/index.ts
├── stores/meals.ts
├── types/index.ts
└── views/
    ├── WeekPlanView.vue
    └── FavoritesView.vue
```

## Arrancar

```bash
npm install
npm run dev
```

La app queda en http://localhost:5173.
