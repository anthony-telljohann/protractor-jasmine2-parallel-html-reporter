import test from 'ava'
import is from 'is'
import { hasAddProperty, hasConsolidateReportsProperty, isFunction } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

test.beforeEach(t => {
  t.context.reporter = new ProtractorJasmine2ParallelHtmlReporter()
})

test(`functions`, t => {
  t.true(is.fn(t.context.reporter.add), `add`)
  t.true(is.fn(t.context.reporter.consolidateReports), `consolidateReports`)
})

test(t => {
  t.true(is.fn(t.context.reporter.consolidateReports))
})

test(`should have property`, t => {
  t.true(is.fn(reporter.hasOwnProperty('foo')))
})
test(`should have property add`, assert => {
  t.true(is.fn(reporter.hasOwnProperty('add')))
})
test(`should have property consolidateReports`, assert => {
  t.true(is.fn(reporter.hasOwnProperty('consolidateReports')))
})
test(`add should be a function`, assert => {
  t.true(is.fn(reporter.add))
})
test(`consolidateReports should be a function`, assert => {
  t.true(is.fn(reporter.consolidateReports))
})
