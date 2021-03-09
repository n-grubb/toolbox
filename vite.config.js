const path = require('path')
import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    Vue(), 
    ViteComponents({
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: 'icon'
      }),
    }),
    ViteIcons(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'toolbox'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  compilerOptions: {
    types: ["vite/client"]
  }
}
