import test from 'ava'
import is from 'is'
import { hasAddProperty, hasConsolidateReportsProperty, isFunction } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var reporter

test.beforeEach(() => {
  console.log('before each')
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
  reporter.foo = 'this is a property'
  console.log('reporter', reporter)
})

test(`should have property foo`, assert => {
  assert.true(is.fn(reporter.hasOwnProperty('foo')))
})
test(`should have property add`, assert => {
  assert.true(is.fn(reporter.hasOwnProperty('add')))
})
test(`should have property consolidateReports`, assert => {
  assert.true(is.fn(reporter.hasOwnProperty('consolidateReports')))
})
test(`add should be a function`, assert => {
  assert.true(is.fn(reporter.add))
})
test(`consolidateReports should be a function`, assert => {
  assert.true(is.fn(reporter.consolidateReports))
})
