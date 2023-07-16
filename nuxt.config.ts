import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  // @ts-ignore
  components: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  // routeRules: {
  //   '/uploads/**': { proxy: 'http://170.64.184.49:1337/uploads/**' },
  // },
  nitro: {
    // proxy: {
    //   '/uploads': {
    //     target: 'http://170.64.184.49:1337/uploads',
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
    // devProxy: {
    //   '/uploads': {
    //     target: 'http://170.64.184.49:1337/uploads',
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
  },
  router: {
    middleware: 'router',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: ['text-neutral-700'],
      },
      title: 'Hygiene Systems',
    },
  },
  css: ['@/assets/styles/global.sass'],
  modules: [
    'nuxt-fonty',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
    'nuxt-swiper',
    // 'nuxt-delay-hydration',
    // ...(isDev ? ['@nuxtjs/html-validator'] : []),
  ],
  // @ts-ignore
  fonty: {
    autoImport: true,
  },
  // delayHydration: {
  //   debug: isDev,
  //   mode: 'init',
  // },
})
