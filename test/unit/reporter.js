import test from 'ava'
import is from 'is'
import { hasAddProperty, hasConsolidateReportsProperty, isFunction } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

test.beforeEach(t => {
  t.context.reporter = new ProtractorJasmine2ParallelHtmlReporter()
})

test(`functions`, t => {
  t.true(true, `can i see this?`)
  //t.isFunction(t.context.)
  t.true(is.fn(t.context.reporter.add), `add`)
  t.true(is.fn(t.context.reporter.consolidateReports), `consolidateReports`)
})

test(t => {
  t.true(is.fn(t.context.reporter.consolidateReports))
})

test(`add should be a function`, t => {
  t.true(is.fn(reporter.add))
})
test(`consolidateReports should be a function`, t => {
  t.true(is.fn(reporter.consolidateReports))
})

function macro(t, input, expected) {
	t.is(eval(input), expected);
}

function macro(t, input, expected) {
	t.is(eval(input), expected);
}

macro.title = (providedTitle, input, expected) => `${providedTitle} ${input} = ${expected}`.trim();

test(macro, '2 + 2', 4);
test(macro, '2 * 3', 6);
test('providedTitle', macro, '3 * 3', 9);
