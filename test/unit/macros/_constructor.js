import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../../lib/protractor-jasmine2-parallel-html-reporter.js'

export { isInstance, throwsTypeErrorMessage }

function isInstance(assert, input, expected) {
	console.log('input', input)
	console.log('expected', expected)
	assert.true(is.instance(eval(input), expected))
}
isInstance.title = (providedTitle, input, expected) => `${input} should return instance of ${expected}`

function throwsTypeErrorMessage(assert, input, expected) {
	assert.is(assert.throws(() => input, TypeError).message, expected)
}
throwsTypeErrorMessage.title = (providedTitle, input, expected) => `${input} should throw TypeError "${expected}"`
