import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '../src/protractor-jasmine2-parallel-html-reporter.es6.js'

var reporter

test.beforeEach('construct reporter', () => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
})

test('should add', t => {
  t.is(typeof reporter.add, 'function')
})

test('should consolidate reports', t => {
  t.is(typeof reporter.consolidateReports, 'function')
})
