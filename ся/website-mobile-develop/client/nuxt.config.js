let CompressionPlugin = require('compression-webpack-plugin')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  compressor: { threshold: 0 },
  head() {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'noindex' },
        { property: 'og:url', content: 'https://mobile.regulaforensics.com' },
        { property: 'og:image', content: 'https://mobile.regulaforensics.com/wp-content/uploads/2020/01/cropped-logo.png' },
        { property: 'og:type', content: 'website' },
        { name: 'msapplication-TileImage', content: 'https://mobile.regulaforensics.com/wp-content/uploads/2020/01/favicon.ico' },
        { name: 'generator', content: 'WordPress 5.3.2' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-concise-slider', ssr: false },
    { src: '~plugins/gtm.js', mode: 'client' },
    { src: '~plugins/intercom.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          file: 'en-US.json'
        },
        {
          code: 'ru',
          file: 'ru-RU.json'
        },
        {
          code: 'de',
          file: 'de-DE.json'
        },
        {
          code: 'es',
          file: 'es-ES.json'
        },
        {
          code: 'zh',
          file: 'zh-ZH.json'
        }
      ],
      defaultLocale: 'en',
      lazy: true,
      langDir: 'i18n/'
    }]
  ],
  styleResources: {
    scss: [
      'assets/styles/variables.scss',
      'assets/styles/mixins.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  optimization: {
    minimize: true,
    minimizer: [
      CompressionPlugin
    ],
  },
  build: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        minRatio: 1,
        test: /\.(js|css|html|svg|ttf)$/
      }),
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg|ttf)$/,
        minRatio: 1,
        compressionOptions: { level: 9 }
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}