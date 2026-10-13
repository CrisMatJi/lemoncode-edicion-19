# Laboratorio REST API - Ejercicio 1

Listado de personajes de Rick & Morty consumiendo la [API REST real](https://rickandmortyapi.com/documentation/#rest) con **axios**.

- `GET https://rickandmortyapi.com/api/character` → listado (primera página)
- `GET https://rickandmortyapi.com/api/character/:id` → detalle

Al pulsar en una tarjeta se navega al detalle del personaje (segunda llamada a la API).

## Cómo arrancarlo

```bash
npm install
npm start
```

La web queda en http://localhost:8080. En este ejercicio no se usa el server local, pero `npm start` lo levanta igualmente porque viene así en el boilerplate.
