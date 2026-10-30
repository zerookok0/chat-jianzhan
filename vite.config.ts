import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * BUILD FOR A WORDPRESS SUBDIRECTORY
 * ------------------------------------------------------------------
 * The built site is uploaded into a folder inside WordPress, e.g.
 *   https://example.com/site/
 *
 * `base: './'` makes every emitted asset URL relative (./assets/...),
 * so the bundle works at any depth and on any host without rebuilding.
 *
 * IMPORTANT: relative base only stays correct while the document URL
 * does not gain extra path segments. That is why routing defaults to
 * hash mode (see ROUTER_MODE in src/lib/hooks.tsx).
 *
 * If you really want clean URLs (/site/collection), build with:
 *   VITE_BASE=/site/ VITE_ROUTER=history npm run build
 * and add a server rewrite to index.html for that folder.
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE?.trim() || './'
  const wpSiteUrl =
    env.VITE_WP_SITE_URL?.trim() ||
    process.env.VITE_WP_SITE_URL?.trim() ||
    'https://jianzhan.studio'

  return {
    base,
    plugins: [
      react(),
      {
        name: 'wp-site-preconnect-fallback',
        transformIndexHtml: {
          order: 'pre',
          handler(html) {
            return html.replace(/%VITE_WP_SITE_URL%/g, wpSiteUrl)
          },
        },
      },
    ],
    build: {
      target: 'es2019',
      outDir: 'dist',
      assetsDir: 'assets',
      cssCodeSplit: true,
      emptyOutDir: true,
      sourcemap: false,
      // Hashed filenames are safe to cache for a long time on any host.
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
  }
})
