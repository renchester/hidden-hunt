/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FBASE_API_KEY: string;
  readonly VITE_FBASE_AUTH_DOMAIN: string;
  readonly VITE_FBASE_PROJECT_ID: string;
  readonly VITE_FBASE_STORAGE_BUCKET: string;
  readonly VITE_FBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
