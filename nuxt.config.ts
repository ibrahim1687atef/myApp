// https://nuxt.com/docs/api/configuration/nuxt-config
import { Style } from '#build/components'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    'vue3-carousel-nuxt',
    //...
  ],

  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['/assets/css/style.css', '@splidejs/splide/dist/css/splide.min.css',],


  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            }
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
          }
        }
      }
    }
  },


})
