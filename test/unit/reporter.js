import test from 'ava'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var reporter

test.beforeEach(() => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
})

test(hasFunction('add'), reporter)
test(hasFunction('consolidateReports'), reporter)

function hasFunction(functionName) {
  return macro
  function macro(t, input) {
    
  }
  macro.title = (providedTitle, input) => `${providedTitle} has function ${functionName}`.trim();
}
