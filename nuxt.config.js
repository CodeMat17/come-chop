import colors from 'vuetify/es5/util/colors'
require("dotenv").config()

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - Chop Kitch',
        title: 'Chop Kitch',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: "https://app.snipcart.com" },
            { rel: 'preconnect', href: "https://cdn.snipcart.com" },
            {
                rel: "stylesheet",
                href: "https://cdn.snipcart.com/themes/v3.0.23/default/snipcart.css"
            },
        ],
        script: [
            { src: "https://cdn.snipcart.com/themes/v3.0.23/default/snipcart.js" }
        ]
    },

    env: {
        strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
        storeUrl: process.env.STORE_URL || "http://localhost:3000",
        snipcartApiKey: process.env.SNIPCART_API_KEY || "ZWZhMmZlNjAtNzE4NS00ODg5LTg3ZDgtOTU3MTNlMGZlZDdiNjM3NDA4MDgyMTk3OTQyNjI0"
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#5eff05',
        height: '8px',
        continuous: true
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~plugins/axios'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/apollo',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv'
    ],

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.GRAPHQL_ENDPOINT || "http://localhost:1337/graphql"
            }
        }
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_AUTH_URL
    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/local',
                        method: 'post',
                        propertyName: 'jwt'
                    },
                    user: {
                        url: 'users/me',
                        method: 'get',
                        propertyName: false
                    },
                    logout: false
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}