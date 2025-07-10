import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/submit-form': {
        target: 'https://automation.luminotest.com/webhook/bc47d271-07cd-4d62-a0f8-394035b57b77',
        changeOrigin: true,
        rewrite: (path) => ''
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
