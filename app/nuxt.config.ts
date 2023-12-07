export default defineNuxtConfig({
  vite: {
    build: {
      target: ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15']
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2022',
      },
    },
  },
  modules: [
    'nuxt-highcharts',
    'nuxt-scheduler'
  ]
})
