import styles from './app.module.css';

console.log('API URL:', import.meta.env.VITE_API_URL);
console.log('App Name:', import.meta.env.VITE_APP_NAME);

const app = document.getElementById('app')!;

const title = document.createElement('h1');
title.textContent = 'Práctica Vite + TypeScript — LemonCode 🍋';
title.className = styles.title;

app.appendChild(title);