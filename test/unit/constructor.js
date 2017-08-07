import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'

const should = {
  return: {
    instance: `should return an instance of ProtractorJasmine2ParallelHtmlReporter`
  },
  throwTypeError: {
    nonEmptyString: `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`
    string: `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`
  }
}

var currentSuite
var scenario

var actual

spec.beforeEach(() => {
  actual = {}
  actual.error = {}
})

const suite = spec.describe('constructing')
currentSuite = suite

scenario = currentSuite.describe('without reports directory')
scenario(should.return.instance,
	assert => {
		assert.true(
			is.instance(
				new ProtractorJasmine2ParallelHtmlReporter(),
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

currentSuite = suite.describe('with reports directory as')

scenario = currentSuite.describe('undefined')
scenario(should.return.instance,
	assert => {
		assert.true(
			is.instance(
				new ProtractorJasmine2ParallelHtmlReporter(),
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

scenario = currentSuite.describe('non-empty string')
scenario(should.return.instance,
	assert => {
		assert.true(
			is.instance(
				new ProtractorJasmine2ParallelHtmlReporter('reports/'),
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

scenario = currentSuite.describe('empty string')
scenario(should.throwTypeError.nonEmptyString,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter(' ') }, TypeError
		)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)
  }
)



scenario = currentSuite.describe('null')
scenario(should.throwTypeError.string,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter(null) }, TypeError)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = currentSuite.describe('true')
scenario(should.throwTypeError.string,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter(true) }, TypeError)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = currentSuite.describe('false')
scenario(should.throwTypeError.string,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter(false) }, TypeError)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = suite.describe('number')
scenario(should.throwTypeError.string,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter(123) }, TypeError)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = suite.describe('function')
scenario(should.throwTypeError.string,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter(function() {}) }, TypeError)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = suite.describe('object')
scenario(should.throwTypeError.string,
	assert => {
		actual.error = assert.throws(() => { new ProtractorJasmine2ParallelHtmlReporter({}) }, TypeError)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)
