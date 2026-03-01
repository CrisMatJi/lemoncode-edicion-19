import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        reportCompressedSize: true,
    },
    server: {
        port: 5173,
        open: true,
    },
     plugins: [
        viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 0,
        deleteOriginFile: true
        }),
        viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 0,
        deleteOriginFile: true
        }),
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true
        })
    ]
});