export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Awoof Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css'
      // },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@assets/styles/global.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/axios' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // loading indicator
  loadingIndicator: {
    name: 'circle',
    color: '#09AB5D',
    background: 'white'
  },

  // loading bar
  loading: {
    height: '4px',
    color: '#09AB5D'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],

  axios: {
    retry: { retries: 3 }
  },

  toast: {
    position: 'top-right',
    register: [
      {
        name: 'custom_success',
        message: message => message,
        options: {
          type: 'success',
          theme: 'bubble',
          duration: 1003000,
          className: 'toast-container',
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        }
      },
      {
        name: 'custom_error',
        message: message => message,
        options: {
          type: 'error',
          theme: 'bubble',
          duration: 3000,
          className: 'toast-container',
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        }
      }
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  }
}
