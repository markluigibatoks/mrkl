// eslint-disable-next-line @typescript-eslint/no-var-requires
const Components = require('unplugin-vue-components/vite')

module.exports = Components({
  dirs: ['src/components', 'src/assets/icons'],

  dts: 'src/types/components.d.ts'
})