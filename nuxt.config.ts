// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     base: {
  //       href: '/'
  //     }
  //   }
  // },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-icons'
    // '@coremyslo/nuxt-icon-font'
  ],
  // iconFont: {
  //   name: "icons",
  //   sourceDirPath: "assets/icons",
  //   targetDirPath: "icons",
  //   formats: ["svg", "ttf", "woff", "woff2", "eot"],
  // },
})
