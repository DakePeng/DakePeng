import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    },
  },
  build: {
    // Reduce memory usage
    minify: 'esbuild', // faster and less memory than terser
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Disable chunking to reduce memory usage
        manualChunks: undefined,
        // Reduce asset inline threshold
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    },
    // Reduce sourcemap overhead
    sourcemap: false,
    // Reduce CSS code splitting
    cssCodeSplit: false,
  },
  // Optimize for low memory during dev too
  server: {
    fs: {
      strict: false
    }
  },
  // Reduce esbuild memory usage
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})