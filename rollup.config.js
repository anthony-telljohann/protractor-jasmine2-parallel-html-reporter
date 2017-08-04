import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import pkg from './package.json'

const entry = 'lib/protractor-jasmine2-parallel-html-reporter.js'

let external = Object.keys(pkg.dependencies)
external.push('path')
external.push('uuid/v4')

export default [
  {
    entry: entry,
    external: external,
    dest: pkg.main,
    format: 'cjs',
    plugins: [babel(babelrc())]
  },
  {
    entry: entry,
    external: external,
    dest: pkg.module,
    format: 'es'
  }
]
