/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENSEA_API_KEY?: string;
  readonly OPENSEA_COLLECTION_SLUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
