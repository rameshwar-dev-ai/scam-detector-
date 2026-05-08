import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // This tells Vite your site is hosted at /scam-detector/
    base: '/scam-detector/', 
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // Updated to resolve correctly relative to the current directory
        '@': path.resolve(new URL('.', import.meta.url).pathname, './'),
      },
    },
    server: {
      // HMR settings for your mobile development environment
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
