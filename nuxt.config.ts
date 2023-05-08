// const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
  components: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
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
