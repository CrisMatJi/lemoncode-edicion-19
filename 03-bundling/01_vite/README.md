# 01 · Vite

Aplicación bundleada con **Vite 7** y TypeScript.

## Instalación

```bash
npm install
```

## Scripts

### Desarrollo

```bash
npm start
```

Levanta el servidor de desarrollo en `http://localhost:5173` con HMR (Hot Module Replacement). Extremadamente rápido gracias al uso de módulos ES nativos.

### Build de producción

```bash
npm run build
```

Ejecuta el chequeo de tipos (`tsc --noEmit`) y genera la carpeta `dist/` optimizada. El plugin de compresión produce automáticamente versiones `.gz` y `.br` de cada asset para máximo rendimiento en producción.

> **Nota:** los archivos originales se eliminan y solo se conservan las versiones comprimidas gracias a `deleteOriginFile: true`.

### Preview del build

```bash
npm run preview
```

Sirve localmente el contenido de `dist/` para verificar el build de producción antes de desplegar.

### Verificación de tipos

```bash
npm run type-check
```

Valida los tipos TypeScript sin generar ningún archivo.

## Analizar el bundle

El visualizador se activa automáticamente al hacer `npm run build`. Abre en el navegador un mapa interactivo con:

- Tamaño original de cada módulo
- Tamaño comprimido con gzip
- Tamaño comprimido con brotli

También puedes consultar el archivo `stats.html` generado en la raíz del proyecto en cualquier momento abriendo directamente el archivo.

## Variables de entorno

 `.env.development` `npm start` 
 `.env.production` `npm run build`

