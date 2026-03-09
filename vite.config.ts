import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Resolves Figma Make's virtual "figma:asset/HASH.ext" imports to real
// public paths so the project builds outside of Figma Make (e.g. GitHub Pages).
// Upload the actual image files to /public/images/ keeping the hash as filename.
const figmaAssetPlugin = {
  name: 'figma-asset-resolver',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) return '\0' + id;
  },
  load(id: string) {
    if (id.startsWith('\0figma:asset/')) {
      const filename = id.replace('\0figma:asset/', '');
      return `export default "/images/${filename}";`;
    }
  },
};

// Inline plugin: restores the path saved by 404.html on GitHub Pages
const spaFallback = {
  name: 'spa-github-pages',
  transformIndexHtml(html: string) {
    const script = `
    <script>
      (function () {
        var redirect = sessionStorage.getItem('__spa_redirect');
        if (redirect) {
          sessionStorage.removeItem('__spa_redirect');
          window.history.replaceState(null, '', redirect);
        }
      })();
    </script>`;
    return html.replace('<head>', '<head>' + script);
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin,
    spaFallback,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})