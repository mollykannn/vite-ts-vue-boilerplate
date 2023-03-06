import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import postcssNested from 'postcss-nested'
import postcssPresetEnv from 'postcss-preset-env'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.js'],
    }),
    Unocss({
      presets: [presetWind()],
      shortcuts: {
        'flex-center': 'flex items-center justify-center',
      },
    }),
    StylelintPlugin({
      fix: true,
    }),
    Components({
      dirs: ['src/components'],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: { enabled: true },
      dirs: ['src/store', 'src/assets/js/**'],
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNested, postcssPresetEnv],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://......com',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
