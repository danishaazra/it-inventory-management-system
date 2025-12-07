import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 8000,
    open: true,
    host: true, // Allow access from network (for mobile devices)
    // Performance optimizations for dev mode
    hmr: {
      overlay: false // Disable error overlay for better performance
    }
  },
  // Optimize dev mode performance
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/firestore']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1MB
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard/dashboard.html'),
        asset: resolve(__dirname, 'assets/asset.html'),
        assetdetails: resolve(__dirname, 'assets/assetdetails.html'),
        maintenance: resolve(__dirname, 'maintenance/maintenance.html'),
        inspectiontask: resolve(__dirname, 'inspection/inspectiontask.html'),
        inspectionassets: resolve(__dirname, 'inspection/inspectionassets.html'),
        inspectionassetdetails: resolve(__dirname, 'inspection/inspectionassetdetails.html'),
        qrcode: resolve(__dirname, 'qrcode/qrcode.html')
      },
      output: {
        manualChunks: (id) => {
          // Split Firebase into separate chunk
          if (id.includes('firebase')) {
            if (id.includes('firebase/auth')) {
              return 'firebase-auth';
            }
            if (id.includes('firebase/firestore')) {
              return 'firebase-firestore';
            }
            if (id.includes('firebase/app')) {
              return 'firebase-app';
            }
            return 'firebase-vendor';
          }
          
          // Split XLSX into separate chunk (only used in asset.html)
          if (id.includes('xlsx')) {
            return 'xlsx-vendor';
          }
          
          // Split QR code libraries into separate chunk (only used in qrcode.html)
          if (id.includes('qrcode') || id.includes('html5-qrcode')) {
            return 'qrcode-vendor';
          }
          
          // Split node_modules into vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});



