import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'

function isInstance(assert, input) {
	assert.true(is.instance(eval(input), ProtractorJasmine2ParallelHtmlReporter))
}
isInstance.title = (providedTitle, input, expected) => `${input} should return instance of ProtractorJasmine2ParallelHtmlReporter`;

function throwsNonEmptyStringTypeError(assert, input, expected) {
	assert.is(assert.throws(() => eval(input)).message, TypeError)).message, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)
}
throwsNonEmptyStringTypeError.title = (providedTitle, input, expected) => `${input} should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`;

function throwsStringTypeError(assert, input, expected) {
	assert.is(assert.throws(() => eval(input)).message, TypeError)).message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
}
throwsStringTypeError.title = (providedTitle, input, expected) => `${input} should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`;

const suite = spec.describe('constructing')

var scenario
var currentSuite = suite

scenario = currentSuite.describe('without reports directory')
scenario(isInstance, `new ProtractorJasmine2ParallelHtmlReporter()`)
currentSuite = suite.describe('with reports directory as')
scenario = currentSuite.describe('undefined')
scenario(isInstance, `new ProtractorJasmine2ParallelHtmlReporter(undefined)`)
scenario = currentSuite.describe('non-empty string')
scenario(isInstance, `new ProtractorJasmine2ParallelHtmlReporter('reports/')`)

scenario = currentSuite.describe('empty string')
scenario(throwsNonEmptyStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(' ')`)

scenario = currentSuite.describe('null')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(null)`)

scenario = currentSuite.describe('true')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(true)`)
scenario = currentSuite.describe('false')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(false)`)
scenario = currentSuite.describe('number')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(number)`)
scenario = currentSuite.describe('function')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(function)`)
scenario = suite.describe('object')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(object)`)
