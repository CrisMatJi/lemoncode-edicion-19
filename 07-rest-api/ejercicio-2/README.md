# Laboratorio REST API - Ejercicio 2

Partimos del ejercicio 1 y cambiamos los endpoints para usar el servidor mock de la carpeta `server` (solo tiene los 5 primeros personajes).

| Método | Endpoint             | Uso                                  |
| ------ | -------------------- | ------------------------------------ |
| GET    | `/api/character`     | listado                              |
| GET    | `/api/character/:id` | detalle                              |
| PUT    | `/api/character/:id` | guardar la mejor frase (`bestSentence`) |

En la página de detalle se puede escribir la mejor frase del personaje y guardarla.

## Arrancar

```bash
npm install
npm start
```

Se levantan la web en http://localhost:8080 y el server en http://localhost:3000. Las llamadas a `/api` pasan por el proxy de Vite (`vite.config.ts`).

Los datos del server están en memoria, así que al reiniciarlo se pierden las frases guardadas.
