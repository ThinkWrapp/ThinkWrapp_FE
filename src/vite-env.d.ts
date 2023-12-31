/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SEVER_BASE_URL: string;
    readonly VITE_PEER_PORT: number;
    readonly VITE_PEER_PATH: string;
    readonly VITE_PEER_HOST: string;
    readonly VITE_SOCKTE_URL: string;
}
