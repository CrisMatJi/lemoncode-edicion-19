# Ejercicio 2 - Temas CSS con SASS

Proyecto del módulo de Layout que demuestra cómo crear y alternar entre dos temas visuales distintos usando variables SCSS.

## Descripción

La página muestra los siguientes elementos estilizados según el tema activo

## Instalación

```bash
npm install
```

## Uso

### Cambiar de tema

Edita [css/styles.scss](css/styles.scss) y cambia la línea de importación:

```scss
/* Tema A (por defecto) */
@import './theme-a.scss';

/* Tema B */
@import './theme-b.scss';
```

### Arrancar el servidor de desarrollo

```bash
npm run dev
```

### Generar build de producción

```bash
npm run build
```