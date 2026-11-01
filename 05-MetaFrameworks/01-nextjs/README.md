# Casas Rurales - Next.js

Laboratorio de MetaFrameworks: portal de alquiler vacacional de casas rurales hecho con **Next.js** (App Router).

Los datos vienen del [mock api-server](https://github.com/Lemoncode/master-frontend-metaframeworks-lab), copiado en la carpeta `api-server`.

## Pantallas

- **Listado** (`/`): todas las casas con nombre, imagen, ubicación y precio.
- **Detalle** (`/houses/:id`): descripción, dirección, habitaciones, camas, baños, servicios y reviews.

## Rendering

| Página | Tipo | Motivo |
|---|---|---|
| Listado | ISR (`revalidate: 60`) | Las casas cambian poco; se sirve estática y se regenera cada minuto. |
| Detalle | SSG + ISR | `generateStaticParams` genera todas las casas en el build y se revalidan cada minuto (precio y reviews pueden cambiar). |

Si se pide una casa que no existe se muestra la página 404 (`notFound()`).

Los estilos son **CSS Modules**, compatibles con SSR.

## Opcionales

- Búsqueda por nombre o ubicación en el listado. Es un componente cliente que filtra la lista ya cargada en el servidor.
- Botón **Reservar** en el detalle. El mock no tiene endpoint para reservas, así que solo cambia el estado en el cliente.
- Optimización de imágenes con `next/image`.

## Arrancar

```bash
npm install
npm start
```

`npm start` levanta a la vez Next (http://localhost:3000) y el api-server (http://localhost:3001).

Para probar el build de producción, con el api-server arrancado:

```bash
npm run build
npm run start:prod
```
