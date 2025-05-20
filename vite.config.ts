
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Provide a browser-friendly `process.env`
    'process.env': {
      SERVICE_ACCOUNT_KEY: JSON.stringify(process.env.SERVICE_ACCOUNT_KEY || '{}'),
      ADMIN_PASSWORD: JSON.stringify(process.env.ADMIN_PASSWORD || 'Hyredragon@123')
    },
    // Add these to prevent errors with node-specific features
    'process.stdout': JSON.stringify({
      isTTY: false,
      columns: 80,
      write: () => {}
    }),
    'process.stderr': JSON.stringify({
      isTTY: false,
      write: () => {}
    }),
    // Add Node.js process polyfill
    'process': {
      env: {},
      stdout: { isTTY: false, columns: 80, write: () => {} },
      stderr: { isTTY: false, write: () => {} },
      nextTick: (cb: Function) => setTimeout(cb, 0)
    }
  },
}));
