export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sinso-office",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~styles/public.css",
    "~styles/main.css",
    "~styles/hover-min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/element-ui.js", ssr: false },
    { src: "~/plugins/i18n.js", ssr: false },
    { src: "~plugins/wow.js", ssr: false },
    { src: "~/plugins/swiper.js", ssr: false },
    {
      src: "~/plugins/vue-count-to.js",
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],
  i18n: {
    parsePages: false,
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        dir: "ltr",
        name: "English",
      },
      {
        code: "zh",
        iso: "zh-CN",
        file: "zh-CN.js",
        dir: "rtl",
        name: "zhognwen",
      },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
    },
    detectBrowserLanguage: {
      useCookie: true,
      onlyOnRoot: false,
    },
    lazy: false,
    langDir: "i18n/",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
