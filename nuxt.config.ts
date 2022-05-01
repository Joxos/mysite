import { defineNuxtConfig } from 'nuxt'
import { UnoIcon } from './.nuxt/components'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        // presets
        wind: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        webFonts: {
            provider: 'google',
            fonts: {
                // these will extend the default theme
                sans: 'Roboto',
                mono: ['Fira Code', 'Fira Mono:400,700'],
                // custom ones
                lobster: 'Lobster',
                cons: 'Consolas',
                chineseKai:'FangNoKai',
                lato: [
                    {
                        name: 'Lato',
                        weights: ['400', '700'],
                        italic: true,
                    },
                    {
                        name: 'sans-serif',
                        provider: 'none',
                    },
                ],
            },
        },

        // core options
        shortcuts: [],
        rules: [],
    },
    css: [
        "@/styles/main.css"
    ]
})
