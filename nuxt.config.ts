// const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
  components: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  nitro: {
    devProxy: {
      '/uploads': {
        target: 'http://127.0.0.1:1337/uploads',
        changeOrigin: true,
        prependPath: true,
      },
    },
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
    // 'nuxt-delay-hydration',
    // ...(isDev ? ['@nuxtjs/html-validator'] : []),
  ],
  fonty: {
    autoImport: true,
  },
  // delayHydration: {
  //   debug: isDev,
  //   mode: 'init',
  // },
})
