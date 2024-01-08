import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /* set base to '/' for .github.io or custom website */
  /* set base to '/<repo>/' name otherwise */
  base: '/',
});
