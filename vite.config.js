import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api/cloudinary':{
        target:'https://api.cloudinary.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cloudinary/, ''),
      },
    },
  },
});
