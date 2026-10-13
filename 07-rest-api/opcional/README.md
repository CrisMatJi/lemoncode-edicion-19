# Laboratorio REST API - Opcional

Parte opcional montada sobre el ejercicio 1, contra la API real (con los 5 personajes del server local no tiene sentido paginar).

- **Paginación**: componente `Pagination` de MUI usando `info.pages` de la respuesta.
- **Búsqueda**: filtro por nombre (`?name=`) con debounce para no lanzar una petición por cada tecla.
- **Lugares**: desde el detalle del personaje se puede ir al origen o a la ubicación (`/locations/:id`).
- **Episodios**: el detalle muestra los episodios en los que sale y cada uno lleva a su página (`/episodes/:id`).

Desde lugares y episodios también se puede volver a cualquier personaje.

## Arrancar

```bash
npm install
npm start
```

La web queda en http://localhost:8080.
