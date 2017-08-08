import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const assert = {
  hasProperty: (input, property) => (assert) => { assert.true(input.hasOwnProperty(property)) },
  isFunction: (input) => (assert) => { assert.true(is.fn(input)) }                                                        
}

var currentSuite
var subject
  
var instance
  
spec.beforeEach('construct instance', () => {
  instance = new ProtractorJasmine2ParallelHtmlReporter()
})

currentSuite = spec.describe('instance')
subject = currentSuite
subject('should have add property', assert.hasProperty(instance, 'add'))
subject('should have consolidateReports property', assert.hasProperty(instance, 'consolidateReports'))

subject = currentSuite.describe('add')
subject('should be a function', assert.isFunction(instance.add))

subject = currentSuite.describe('consolidateReports')
subject('should be a function', assert.isFunction(instance.consolidateReports))
