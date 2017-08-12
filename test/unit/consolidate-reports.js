import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { is } from 'macros'

const reporter = new ProtractorJasmine2ParallelHtmlReporter()

test(`is a function`, is.fn(reporter.consolidateReports))
test(`returns a promise`, is.promise(reporter.consolidateReports()))
test(`resolves undefined`, is.undef(reporter.consolidateReports()))
