/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOVIE_API_KEY: string;
  // add others as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_MOVIE_API_KEY: string;
  }
}
