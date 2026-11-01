# Casas Rurales - Nuxt

Laboratorio de MetaFrameworks: portal de alquiler vacacional de casas rurales hecho con **Nuxt 4**.

Los datos vienen del [mock api-server](https://github.com/Lemoncode/master-frontend-metaframeworks-lab), copiado en la carpeta `api-server`.

## Pantallas

- **Listado** (`/`): todas las casas con nombre, imagen, ubicación y precio.
- **Detalle** (`/houses/:id`): descripción, dirección, habitaciones, camas, baños, servicios y reviews.

## Rendering

Los datos se cargan con `useFetch`, así que la primera carga se renderiza en el servidor (SSR). Además, en `nuxt.config.ts` hay `routeRules`:

| Ruta | Regla | Motivo |
|---|---|---|
| `/` | `swr: 60` | El listado cambia poco; se cachea en el servidor y se regenera en segundo plano cada minuto. |
| `/houses/**` | `swr: 60` | Igual para el detalle: precio y reviews pueden cambiar, pero no hace falta pedirlos en cada visita. |

Si se pide una casa que no existe se lanza un error 404 con `createError`.

Los estilos son `<style scoped>` en cada componente, compatibles con SSR.

## Opcionales

- Búsqueda por nombre o ubicación en el listado.
- Botón **Reservar** en el detalle. El mock no tiene endpoint para reservas, así que solo cambia el estado en el cliente.
- Optimización de imágenes con **Nuxt Image** (`<NuxtImg>`), que las sirve redimensionadas y en WebP.

## Arrancar

```bash
npm install
npm start
```

`npm start` levanta a la vez Nuxt (http://localhost:3000) y el api-server (http://localhost:3001).

Para probar el build de producción, con el api-server arrancado:

```bash
npm run build
npm run preview
```
