import React from 'react';
import logo from './lemonCode.webp';

const App: React.FC = () => {
  const env = process.env.NODE_ENV;
  const apiUrl = process.env.API_URL;

  return (
    <div className="app">
      <img src={logo} width="200" alt="LemonCode logo" />
      <h1>Hola Mundo</h1>
      <p className="env-info">
        Entorno: <strong>{env}</strong>
      </p>
      <p className="api-info">
        API URL: <strong>{apiUrl}</strong>
      </p>
    </div>
  );
};

export default App;
