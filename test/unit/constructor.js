import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'
const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'
const shouldThrowTypeErrorReportsDirectoryShouldBeAString = `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`
const shouldThrowTypeErrorReportsDirectoryShouldBeANonEmptyString = `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`

var suite
var subject
var actual = {}
var expected = {}

suite = spec.describe('constructing')
subject = suite.describe('without reports directory')
subject(
	`should be an instance of ProtractorJasmine2ParallelHtmlReporter`,
	assert => {
		assert.true(
			is.instance(
				new ProtractorJasmine2ParallelHtmlReporter(),
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)

suite = suite.describe('with reports directory as')
subject = suite.describe('non-empty string')
subject(
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

subject = suite.describe('empty string')
subject.beforeEach(() => {
	expected.error = {}
	expected.error.type = TypeError
	expected.error.message = REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING
})
subject(
	`should throw ${typeof expected.error.type} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(' '),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

suite = suite.describe('with reports directory as non-string')
suite.beforeEach(() => {
	expected.error = {}
	expected.error.type = TypeError
	expected.error.message = REPORTS_DIRECTORY_SHOULD_BE_A_STRING
})
subject = suite.describe('undefined')

subject(
	`should throw ${typeof expected.error.type} "${expected.error.message}"`,
	assert => {
		actual.error = setError(
			assert.throws(
				new ProtractorJasmine2ParallelHtmlReporter(undefined),
				expected.error.type
			)
		)
		assert.is(actual.error.message, expected.error.message)
	}
)

constructingWithoutReportsDirectory.beforeEach()
constructingWithoutReportsDirectory(
	shouldReturnInstanceOfProtractorJasmine2ParallelHtmlReporter,
	assert => {}
)

const constructingWithoutReportsDirectory = constructing.describe(
	'without reports directory'
)
const constructingWithReportsDirectoryAs = constructing.describe(
	'with reports directory as'
)
const constructingWithReportsDirectoryAsUndefined = constructingWithReportsDirectoryAs.describe(
	'undefined'
)
const constructingWithReportsDirectoryAsNull = constructingWithReportsDirectoryAs.describe(
	'null'
)
const constructingWithReportsDirectoryAsTrue = constructingWithReportsDirectoryAs.describe(
	'true'
)
const constructingWithReportsDirectoryAsFalse = constructingWithReportsDirectoryAs.describe(
	'false'
)
const constructingWithReportsDirectoryAsNumber = constructingWithReportsDirectoryAs.describe(
	'number'
)
const constructingWithReportsDirectoryAsNonEmptyString = constructingWithReportsDirectoryAs.describe(
	'non-empty string'
)
const constructingWithReportsDirectoryAsEmptyString = constructingWithReportsDirectoryAs.describe(
	'empty string'
)
const constructingWithReportsDirectoryAsSymbol = constructingWithReportsDirectoryAs.describe(
	'symbol'
)
const constructingWithReportsDirectoryAsFunction = constructingWithReportsDirectoryAs.describe(
	'function'
)
const constructingWithReportsDirectoryAsObject = constructingWithReportsDirectoryAs.describe(
	'object'
)

constructingWithReportsDirectoryAsUndefined(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(undefined),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

constructingWithReportsDirectoryAsNull(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(null),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)
constructingWithReportsDirectoryAsNonEmptyString(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		assert.true(
			is.instance(
				constructReporterWithReportsDirectoryAs('reports/'),
				ProtractorJasmine2ParallelHtmlReporter
			)
		)
	}
)
constructingWithReportsDirectoryAsEmptyString(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(' '),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)
	}
)
constructingWithReportsDirectoryAsTrue(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(true),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

constructingWithReportsDirectoryAsFalse(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(false),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

constructingWithReportsDirectoryAsNumber(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(123),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)
constructingWithReportsDirectoryAsFunction(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs(function() {}),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)
constructingWithReportsDirectoryAsObject(
	shouldThrowTypeErrorReportsDirectoryShouldBeAString,
	assert => {
		setError(
			assert.throws(
				constructReporterWithReportsDirectoryAs({}),
				TypeError
			)
		)
		assert.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
	}
)

function constructReporterWithReportsDirectoryAs(value) {
	return new ProtractorJasmine2ParallelHtmlReporter(value)
}

function setReporter(value) {
	reporter = value
}

function setError(value) {
	error = value
}
