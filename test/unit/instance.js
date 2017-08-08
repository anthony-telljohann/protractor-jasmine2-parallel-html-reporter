import test from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const should = {
  haveProperty: (property) => `should have property "${property}"`,
  beFunction: `should be a function`
}
const assert = {
  hasProperty: (input, property) => (assert) => { assert.true(input.hasOwnProperty(property)) },
  isFunction: (input) => (assert) => { assert.true(is.fn(input)) }                                                        
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
instance(should.haveProperty(ADD), assert.hasProperty(reporter, ADD))
instance(should.haveProperty(CONSOLIDATE_REPORTS), assert.hasProperty(reporter, CONSOLIDATE_REPORTS))

const addProperty = instance.describe(ADD)
addProperty(should.beFunction, assert.isFunction(reporter.add))

const consolidateReportsProperty = instance.describe(CONSOLIDATE_REPORTS)
consolidateReportsProperty(should.beFunction, assert.isFunction(reporter.add))
