import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/reportsdashboard.github.io/',  // for GitHub Pages
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/Assets/icons/*',
                    dest: 'assets' // copies into dist/assets/
                }
            ]
        })
    ],
  build: {
    rollupOptions: {
      external: [],
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/index.js',
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})


