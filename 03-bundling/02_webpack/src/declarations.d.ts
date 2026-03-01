declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    API_URL: string;
    APP_TITLE: string;
  }
}
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
