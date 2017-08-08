import test from 'ava-spec'

import { hasAddProperty, hasConsolidateReportsProperty, isFunction } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

console.log('ProtractorJasmine2ParallelHtmlReporter', ProtractorJasmine2ParallelHtmlReporter)

const should = {
  haveProperty: (property) => `should have property "${property}"`,
  beFunction: `should be a function`
}

const INSTANCE = `instance`
const ADD = `add`
const CONSOLIDATE_REPORTS = `consolidateReports`

var reporter
  
test.beforeEach(`construct reporter`, () => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
  console.log(reporter)
})

const instance = test.describe(INSTANCE)
instance(should.haveProperty(ADD), hasAddProperty(reporter))
instance(should.haveProperty(CONSOLIDATE_REPORTS), hasConsolidateReportsProperty(reporter))

const addProperty = instance.describe(ADD)
addProperty(should.beFunction, isFunction(reporter.add))

const consolidateReportsProperty = instance.describe(CONSOLIDATE_REPORTS)
consolidateReportsProperty(should.beFunction, isFunction(reporter.add))
