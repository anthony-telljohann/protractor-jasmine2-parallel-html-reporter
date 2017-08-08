import is from 'is'
import ProtractorJasmine2HtmlReporter from 'protractor-jasmine2-html-reporter'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

//generic
export const isFunction = input => assert => { assert.true(is.fn(input)) }
export const hasProperty = property => input => assert => { assert.true(input.hasOwnProperty(property)) }
export const isInstanceOf = instance => input => assert => { assert.true(is.instance(input, instance)) }
export const throwsErrorMessage = error => message => input => assert => { assert.is(assert.throws(() => { input() }, error).message, message) }
export const throwsTypeErrorMessage = throwsErrorMessage(TypeError)

//specific to lib
export const hasAddProperty => hasProperty('add')
export const hasConsolidateReportsProperty => hasProperty('consolidateReports')
export const isInstanceOfProtractorJasmine2ParallelHtmlReporter => isInstanceOf(ProtractorJasmine2ParallelHtmlReporter)
export const isInstanceOfProtractorJasmine2HtmlReporter => isInstanceOf(ProtractorJasmine2ParallelHtmlReporter)
export const throwsReportsDirectoryShouldBeANonEmptyString => throwsTypeErrorMessage('reports directory should be a non-empty string')
export const throwsReportsDirectoryShouldBeAString => throwsTypeErrorMessage('reports directory should be a string')
