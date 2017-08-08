import test from 'ava'
import { hasAddProperty, hasConsolidateReportsProperty, isFunction } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var reporter

test.beforeEach(`construct reporter`, () => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
})

test(`foo`, assert => {
  console.log('reporter', reporter);
})
test(`should have property add`, hasAddProperty(reporter))
test(`should have property consolidateReports`, hasConsolidateReportsProperty(reporter))
test(`add should be a function`, assert => {
  assert.true(is.fn(reporter.add))
})
test(`consolidateReports should be a function`, assert => {
  assert.true(is.fn(reporter.consolidateReports))
})
