import is from 'is'
import spec from 'ava-spec'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

//todo: recreate in lib/defaults
//todo: import from lib/defaults
const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING = `reports directory should be a non-empty string`
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING = `reports directory should be a string`

//todo: publish as ava macros
const genericShould = {
	return: {
		instanceOf: object => `should return instance of ${typeof object}`
	},
	throw: {
		error: (error, message) => `should throw ${typeof error} with message "${message}"`
	}
}
//todo: publish as ava macros
const genericAssert = {
	returnsInstanceOf: (actual, expected) => assert => assert.true(is.instance(actual, expected)),
	throwsTypeErrorMessage: (actual, expected) => assert => assert.is(assert.throws(actual, TypeError).message, expected)
}
//todo: import from test/macros
const should = {
	returnInstance: genericShould.return.instanceOf(ProtractorJasmine2ParallelHtmlReporter),
	throwTypeErrorNonEmptyString: genericShould.throw.error(TypeError, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING),
	throwTypeErrorString: genericShould.throw.error(TypeError, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
}
//todo: import from test/macros
const assert = {
	returnsInstance: input => () => genericAssert.returnsInstanceOf(input, ProtractorJasmine2ParallelHtmlReporter),
	throwsTypeErrorNonEmptyString: input => genericAssert.throwsTypeErrorMessage(input, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING),
	throwsTypeErrorString: input => genericAssert.throwsTypeErrorMessage(input, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
}

var scenario
var currentSuite = spec.describe(`constructing`)
scenario = currentSuite.describe(`without reports directory`)
scenario(should.returnInstance, assert.returnsInstance(new ProtractorJasmine2ParallelHtmlReporter()))

currentSuite = currentSuite.describe(`with reports directory as`)
scenario = currentSuite.describe(`undefined`)
scenario(should.returnInstance, assert.returnsInstance(new ProtractorJasmine2ParallelHtmlReporter(undefined)))
scenario = currentSuite.describe(`non-empty string`)
scenario(should.returnInstance, assert.returnsInstance(new ProtractorJasmine2ParallelHtmlReporter('reports/')))

scenario = currentSuite.describe(`empty string`)
scenario(should.throwTypeErrorNonEmptyString, assert.throwsTypeErrorNonEmptyString(new ProtractorJasmine2ParallelHtmlReporter(' ')))

scenario = currentSuite.describe(`null`)
scenario(should.throwTypeErrorString, assert.throwsTypeErrorString(new ProtractorJasmine2ParallelHtmlReporter(null)))
scenario = currentSuite.describe(`true`)
scenario(should.throwTypeErrorString, assert.throwsTypeErrorString(new ProtractorJasmine2ParallelHtmlReporter(true)))
scenario = currentSuite.describe(`false`)
scenario(should.throwTypeErrorString, assert.throwsTypeErrorString(new ProtractorJasmine2ParallelHtmlReporter(false)))
scenario = currentSuite.describe(`number`)
scenario(should.throwTypeErrorString, assert.throwsTypeErrorString(new ProtractorJasmine2ParallelHtmlReporter(123)))
scenario = currentSuite.describe(`function`)
scenario(should.throwTypeErrorString, assert.throwsTypeErrorString(new ProtractorJasmine2ParallelHtmlReporter(function() {})))
scenario = currentSuite.describe(`object`)
scenario(should.throwTypeErrorString, assert.throwsTypeErrorString(new ProtractorJasmine2ParallelHtmlReporter({})))
