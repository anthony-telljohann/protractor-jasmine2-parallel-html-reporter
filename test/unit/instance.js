import spec from 'ava-spec'
import { hasAddProperty, hasConsolidateReportsProperty, isFunction } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var reporter
var subject

test.beforeEach(`construct reporter`, () => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
})

const suite = spec.describe('instance')
subject = suite
subject('should have property add', hasAddProperty(reporter))
subject('should consolidate reports', hasConsolidateReportsProperty(reporter))
subject('and add should be a function', isFunction(reporter.add))
subject('and consolidateReports should be a function', isFunction(reporter.consolidateReports))
