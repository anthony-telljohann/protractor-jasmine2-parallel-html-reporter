const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'

function isInstance(assert, input) {
	assert.true(is.instance(eval(input), ProtractorJasmine2ParallelHtmlReporter))
}
isInstance.title = (providedTitle, input, expected) => `${input} should return instance of ProtractorJasmine2ParallelHtmlReporter`

function throwsNonEmptyStringTypeError(assert, input, expected) {
	assert.is(assert.throws(() => eval(input)), TypeError)).message, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)
}
throwsNonEmptyStringTypeError.title = (providedTitle, input, expected) => `${input} should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`

function throwsStringTypeError(assert, input, expected) {
	assert.is(assert.throws(() => eval(input)), TypeError)).message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
}
throwsStringTypeError.title = (providedTitle, input, expected) => `${input} should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`

export = {
  isInstance,
  throwsNonEmptyStringTypeError,
  throwsStringTypeError
}
