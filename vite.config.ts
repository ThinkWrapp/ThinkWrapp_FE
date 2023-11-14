import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (
                        id.includes('node_modules/react') ||
                        id.includes('node_modules/react-dom') ||
                        id.includes('node_modules/react-router-dom')
                    ) {
                        return 'reactVendor';
                    }
                    if (id.includes('node_modules/axios') || id.includes('node_modules/@tanstack')) {
                        return 'axiosAndReactQueryVendor';
                    }
                    if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
                        return 'threeVendor';
                    }
                },
            },
        },
    },
});
