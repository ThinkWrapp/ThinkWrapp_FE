import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), visualizer({ open: true, gzipSize: true, brotliSize: true })],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/zod')) {
                        return 'zodVendor';
                    }
                    if (id.includes('node_modules/peerjs')) {
                        return 'peerjsVendor';
                    }
                    if (
                        id.includes('node_modules/react') ||
                        id.includes('node_modules/redux') ||
                        id.includes('node_modules/@redux')
                    ) {
                        return 'reactVendor';
                    }
                    if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
                        return 'threeVendor';
                    }
                },
            },
        },
    },
});
