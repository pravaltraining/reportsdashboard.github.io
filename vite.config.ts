//import { fileURLToPath, URL } from 'node:url';

//import { defineConfig } from 'vite';
//import plugin from '@vitejs/plugin-react';
//import fs from 'fs';
//import path from 'path';
//import child_process from 'child_process';
//import { env } from 'process';

//const baseFolder =
//    env.APPDATA !== undefined && env.APPDATA !== ''
//        ? `${env.APPDATA}/ASP.NET/https`
//        : `${env.HOME}/.aspnet/https`;

//const certificateName = "poc.client";
//const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
//const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

//if (!fs.existsSync(baseFolder)) {
//    fs.mkdirSync(baseFolder, { recursive: true });
//}

//if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
//    if (0 !== child_process.spawnSync('dotnet', [
//        'dev-certs',
//        'https',
//        '--export-path',
//        certFilePath,
//        '--format',
//        'Pem',
//        '--no-password',
//    ], { stdio: 'inherit', }).status) {
//        throw new Error("Could not create certificate.");
//    }
//}

//const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
//    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7258';

//// https://vitejs.dev/config/
//export default defineConfig({
//    base: '/reportsdashboard.github.io/',
//    plugins: [plugin()],
//    resolve: {
//        alias: {
//            '@': fileURLToPath(new URL('./src', import.meta.url))
//        }
//    },
//    server: {
//        proxy: {
//            '^/weatherforecast': {
//                target,
//                secure: false
//            }
//        },
//        port: 52091,
//        https: {
//            key: fs.readFileSync(keyFilePath),
//            cert: fs.readFileSync(certFilePath),
//        }
//    }, esbuild: {
//        logOverride: { 'this-is-undefined-in-esm': 'silent' }
//        // This prevents noisy esbuild errors
//    }
//})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     base: '/reportsdashboard.github.io/',  // 👈 This tells Vite the correct path
//     plugins: [react()],
//     resolve: {
//         alias: {
//             '@': new URL('./src', import.meta.url).pathname,
//         },
//     },
// });\
// vite.config.ts
// import { defineConfig } from 'vite'

// export default defineConfig({
//   base: '/reportsdashboard.github.io/',    // set correct base
//   build: {
//     rollupOptions: {
//       output: {
//         entryFileNames: 'assets/index.js',
//         chunkFileNames: 'assets/index.js',
//         assetFileNames: 'assets/[name][extname]',
//          globals: {
//           react: 'React',
//         '  react-dom': 'ReactDOM'
//         }
//       }
//     }
//   },
//   commonjsOptions: {
//     transformMixedEsModules: true
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/reportsdashboard.github.io/',  // for GitHub Pages
  plugins: [react()],
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


