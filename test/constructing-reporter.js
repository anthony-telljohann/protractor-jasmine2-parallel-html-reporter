import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '../src/protractor-jasmine2-parallel-html-reporter.es6.js'

test('reports directory should be a string', t => {
  const error = t.throws(() => {
    new ProtractorJasmine2ParallelHtmlReporter(123)
  }, TypeError)
  t.is(error.message, 'reports directory should be a string')
})

test('reports directory should be a non-empty string', t => {
  const error = t.throws(() => {
    new ProtractorJasmine2ParallelHtmlReporter('      ')
  }, TypeError)
  t.is(error.message, 'reports directory should be a non-empty string')
})
