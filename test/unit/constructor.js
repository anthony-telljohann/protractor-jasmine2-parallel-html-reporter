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
var expected
var reporter
var reportsDirectory

spec.beforeEach(() => {
  actual = {}
  actual.error = {}
  expected = {}
  expected.error
  expected.error = {}
  reporter = undefined
  reportsDirectory = undefined
})

const suite = spec.describe('constructing')
currentSuite = suite

scenario = currentSuite.describe('without reports directory')
scenario.beforeEach(() => {
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
})
scenario(
	`should return an instance of ProtractorJasmine2ParallelHtmlReporter`,
	assert => {
		assert.true(
			is.instance(
				reporter,
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

currentSuite = suite.describe('with reports directory as')
scenario = currentSuite.describe('non-empty string')
scenario.beforeEach(() => {
  reportsDiretory = 'reports/'
  reporter = new ProtractorJasmine2ParallelHtmlReporter(reportsDiretory)
})
scenario(
	`should be an instance of ProtractorJasmine2ParallelHtmlReporter`,
	assert => {
		assert.true(
			is.instance(
				reporter,
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

scenario = currentSuite.describe('empty string')
scenario.beforeEach(assert => {
	expected.error.type = TypeError
	expected.error.message = REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING
  reportsDirectory = ' '
})
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`,
	assert => {
		actual.error = assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
  }
)

currentSuite = currentSuite.describe('non-string')
currentSuite.beforeEach(() => {
	expected.error.type = TypeError
	expected.error.message = REPORTS_DIRECTORY_SHOULD_BE_A_STRING
})

scenario = currentSuite.describe('undefined')
scenario.beforeEach(() => {
  reportsDirectory = undefined
})
scenario(
	`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error =
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = currentSuite.describe('null')
scenario.beforeEach(() => {
  reportsDirectory = null
})
scenario(
		`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = (
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = currentSuite.describe('true')
scenario.beforeEach(() => {
  reportsDirectory = true
})
scenario(
		`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = 
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = currentSuite.describe('false')
scenario.beforeEach(() => {
  reportsDirectory = false
})
scenario(
		`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = 
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)	
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('number')
scenario.beforeEach(() => {
  reportsDirectory = 123
})
scenario(
		`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = 
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('function')
scenario.beforeEach(() => {
  reportsDirectory = function() {}
})
scenario(
		`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error = 
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
	}
)

scenario = suite.describe('object')
scenario.beforeEach(() => {
  reportsDirectory = {}
})
scenario(
		`should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`,
	assert => {
		actual.error =
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(reportsDirectory),
				expected.error.type
			)
		assert.is(actual.error.message, expected.error.message)
	}
)
