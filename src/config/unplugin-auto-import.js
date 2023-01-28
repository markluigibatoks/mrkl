// eslint-disable-next-line @typescript-eslint/no-var-requires
const AutoImport = require("unplugin-auto-import/vite");

module.exports = AutoImport({
  imports: [
    "vue",
    "vue-router",
    "vue/macros",
    "@vueuse/head",
    "@vueuse/core",
    {
      axios: [
        // default imports
        ["default", "axios"], // import { default as axios } from 'axios',
      ],
      "[package-name]": [
        "[import-names]",
        // alias
        ["[from]", "[alias]"],
      ],
    },
  ],

  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  dts: "src/types/auto-imports.d.ts",

  defaultExportByFilename: false,

  dirs: ["src/composables", "src/store"],

  vueTemplate: true,

  eslintrc: {
    enabled: true,
  },
});
