import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const entry = 'lib/protractor-jasmine2-parallel-html-reporter.js'

let external = Object.keys(pkg.dependencies)
external.push('babel-runtime/core-js/promise')
external.push('babel-runtime/core-js/weak-map')
external.push('babel-runtime/helpers/asyncToGenerator')
external.push('babel-runtime/helpers/classCallCheck')
external.push('babel-runtime/helpers/createClass')
external.push('babel-runtime/regenerator')
external.push('path')
external.push('uuid/v4')

export default [
  {
    entry: entry,
    external: external,
    dest: pkg.main,
    format: 'cjs',
    plugins: [babel({ runtimeHelpers: true })]
  },
  {
    entry: entry,
    external: external,
    dest: pkg.module,
    format: 'es'
  }
]
