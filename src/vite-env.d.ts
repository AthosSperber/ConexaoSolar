/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WHATSAPP_NUMBER?: string;
	readonly VITE_CONSULTANT_ID?: string;
	readonly VITE_GOVERNANCA_SNAPSHOT_URL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
