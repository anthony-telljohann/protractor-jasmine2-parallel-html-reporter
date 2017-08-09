import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

//generic
export const isFunction = input => assert => {
  assert.true(is.fn(input))
}
export const hasProperty = property => input => assert => {
  assert.true(input.hasOwnProperty(property))
}
export const isInstanceOf = instance => input => assert => {
  assert.true(is.instance(input, instance))
}
export const throwsErrorMessage = error => message => input => assert => {
  assert.is(
    assert.throws(() => {
      input()
    }, error).message,
    message
  )
}
export const throwsTypeErrorMessage = throwsErrorMessage(TypeError)

//specific to lib
export const hasAddProperty = input => hasProperty('add')(input)
export const hasConsolidateReportsProperty = input => hasProperty('consolidateReports')(input)
export const isInstanceOfProtractorJasmine2ParallelHtmlReporter = input => isInstanceOf(ProtractorJasmine2ParallelHtmlReporter)(input)
export const isInstanceOfProtractorJasmine2HtmlReporter = input => isInstanceOf(ProtractorJasmine2ParallelHtmlReporter)(input)
export const throwsReportsDirectoryShouldBeANonEmptyString = input => throwsTypeErrorMessage('reports directory should be a non-empty string')(input)
export const throwsReportsDirectoryShouldBeAString = input => throwsTypeErrorMessage('reports directory should be a string')(input)
