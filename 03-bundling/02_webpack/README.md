# 02 · Webpack

Aplicación React + TypeScript bundleada con **Webpack 5**.

## Instalación

```bash
npm install
```

### Desarrollo

```bash
npm start
```

Levanta el servidor de desarrollo en `http://localhost:3000` con hot-reload. Carga las variables de `.env.development`.

### Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` optimizada para producción con las variables de `.env.production`.

```bash
npm run build:prod
```

Equivalente al anterior pero establece `NODE_ENV=production` de forma explícita.

### Analizar el bundle

```bash
npm run analyze
```



