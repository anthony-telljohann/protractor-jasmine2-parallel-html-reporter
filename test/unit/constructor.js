import is from 'is'
import spec from 'ava-spec'
// import { isInstance, throwsTypeErrorMessage } from './macros/_constructor.js'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING = `reports directory should be a non-empty string`
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING = `reports directory should be a string`
const shouldReturnInstance = value => assert => assert.true(is.instance(value, ProtractorJasmine2ParallelHtmlReporter))

var should = new Map();
var tests = new Map();

var should = {}
should.return = {}
should.throw = {}
returnsInstance = `should return instance of ProtractorJasmine2ParallelHtmlReporter`
foo = `should throw TypeError ${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}`
bar = `should throw TypeError ${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}`
should.throw.typeError.reports

assertions.set(`should return instance of ProtractorJasmine2ParallelHtmlReporter`, {})
assertions.set(, {})
assertions.set('should return instance of ProtractorJasmine2ParallelHtmlReporter', {})


var scenario
var currentSuite = spec.describe(`constructing`)
scenario = currentSuite.describe(`without reports directory`)
scenario(isInstance, new ProtractorJasmine2ParallelHtmlReporter())
// scenario(isInstance, 'new ProtractorJasmine2ParallelHtmlReporter()', ProtractorJasmine2ParallelHtmlReporter)
scenario('should return instance of ProtractorJasmine2ParallelHtmlReporter', shouldReturnInstance(new ProtractorJasmine2ParallelHtmlReporter()))

// currentSuite = currentSuite.describe(`with reports directory as`)
// scenario = currentSuite.describe(`undefined`)
// scenario(isInstance, new ProtractorJasmine2ParallelHtmlReporter(undefined), ProtractorJasmine2ParallelHtmlReporter)
// scenario = currentSuite.describe(`non-empty string`)
// scenario(isInstance, new ProtractorJasmine2ParallelHtmlReporter('reports/'), ProtractorJasmine2ParallelHtmlReporter)

// scenario = currentSuite.describe(`empty string`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(' ')`, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)

// scenario = currentSuite.describe(`null`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(null)`, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
// scenario = currentSuite.describe(`true`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(true)`, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
// scenario = currentSuite.describe(`false`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(false)`, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
// scenario = currentSuite.describe(`number`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(number)`, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
// scenario = currentSuite.describe(`function`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(function)`, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
// scenario = currentSuite.describe(`object`)
// scenario(throwsTypeErrorMessage, `new ProtractorJasmine2ParallelHtmlReporter(object)`, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)

function isInstance(assert, input, expected) {
	console.log(assert, input, expected)
	assert.true(is.instance(input, ProtractorJasmine2ParallelHtmlReporter))
}
isInstance.title = 'should return instance of ProtractorJasmine2ParallelHtmlReporter'
