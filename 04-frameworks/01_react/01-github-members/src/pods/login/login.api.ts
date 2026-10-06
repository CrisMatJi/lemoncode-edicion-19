// Simula una llamada al servidor para validar usuario y contraseña
export const doLogin = (username: string, password: string): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(username === "admin" && password === "test");
    }, 500);
  });
