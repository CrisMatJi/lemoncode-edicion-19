# Módulo 01 - Layout

Ejercicios del módulo de Layout del [Master Frontend Lemoncode](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/01-layout).

## Estructura

```
01-layout/
├── basic/
│   ├── 01_exercise/   # Paleta de colores dinámica con SCSS
│   ├── 02_exercise/   # Dos temas CSS distintos — ver README propio
│   ├── 03_exercise/   # Barra de navegación con Flexbox
│   └── 04_exercise/   # Card con Grid CSS
├── advanced/          # Playground avanzado — Warner Live
└── extra/             # Playground extra — Lemoncode
```

---

## Basic

Cada ejercicio es un proyecto independiente con Vite + SCSS.

| Ejercicio | Descripción |
|---|---|
| `01_exercise` | Paleta de colores dinámica con variables SCSS |
| `02_exercise` | Dos temas CSS distintos — **ver [README propio](basic/02_exercise/README.md)** |
| `03_exercise` | Barra de navegación con Flexbox |
| `04_exercise` | Card con Grid CSS |

### Uso (ejercicios 01, 03 y 04)

```bash
cd basic/0X_exercise
npm install
npm run dev
```

Abre el navegador en `http://localhost:5173`.

---

## Advanced y Extra

Los playgrounds de `advanced` y `extra` son los proporcionados en el repositorio oficial del máster, adaptados con la solución de los ejercicios propuestos.

### Uso

```bash
cd advanced   # o cd extra
npm install
npm run dev
```

Abre el navegador en `http://localhost:5173`.

Para generar un build de producción:

```bash
npm run build
```

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
