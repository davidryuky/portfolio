import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Only expose the specific API_KEY, strictly stringified to prevent code injection
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY),
      // Do NOT expose the entire process.env object here as it causes security issues and build failures
    }
  };
});