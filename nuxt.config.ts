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
      link: [
        { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/Favicon-32.ico' },
        { rel: 'icon', type: 'image/x-icon', sizes: '64x64', href: '/Favicon-64.ico' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '128x128',
          href: '/Favicon-128.ico',
        },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/Favicon-180.ico' },
      ],
    },
  },
  css: ['@/assets/styles/global.sass'],
  modules: [
    'nuxt-font-loader',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
    'nuxt-swiper',
    // 'nuxt-delay-hydration',
    // ...(isDev ? ['@nuxtjs/html-validator'] : []),
  ],
  // @ts-ignore
  fontLoader: {
    local: [
      {
        src: '/fonts/gotham-black.woff2',
        family: 'Gotham',
        fallback: ['sans-serif'],
        weight: '800',
      },
      {
        src: '/fonts/gotham-bold.woff2',
        family: 'Gotham',
        fallback: ['sans-serif'],
        weight: '700',
      },
      {
        src: '/fonts/gotham-book.woff2',
        family: 'Gotham',
        fallback: ['sans-serif'],
        weight: '400',
      },
    ],
  },
  imports: {
    autoImport: true,
  },
  // delayHydration: {
  //   debug: isDev,
  //   mode: 'init',
  // },
})
