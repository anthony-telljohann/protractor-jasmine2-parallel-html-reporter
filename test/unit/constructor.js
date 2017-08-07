import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'

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
scenario(
	`should return an instance of ProtractorJasmine2ParallelHtmlReporter`,
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

scenario = currentSuite.describe('non-empty string')
scenario(
	`should be an instance of ProtractorJasmine2ParallelHtmlReporter`,
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
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(' '),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)
  }
)

currentSuite = currentSuite.describe('non-string')

scenario = currentSuite.describe('undefined')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(undefined),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = currentSuite.describe('null')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(null),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = currentSuite.describe('true')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(true),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = currentSuite.describe('false')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(false),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = suite.describe('number')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(123),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = suite.describe('function')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(function(){}),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

scenario = suite.describe('object')
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter({}),
				TypeError
			)
		assert.is(actual.error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)
