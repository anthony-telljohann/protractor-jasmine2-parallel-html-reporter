
const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING = `reports directory should be a non-empty string`
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING = `reports directory should be a string`

const throwsError = constructor => messsage => (t, input) => {
  const error = t.throws(() => { input() }, constructor)
  t.is(error.message, messsage)
}
const throwsTypeError = throwsError(TypeError)

const throwsReportsDirectoryShouldBeANonEmptyString = throwsTypeError(REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)
const throwsReportsDirectoryShouldBeAString = throwsTypeError(REPORTS_DIRECTORY_SHOULD_BE_A_STRING)

function isInstanceOfProtractorJasmine2ParallelHtmlReporter(t, input) {
  isInstanceOf(t, input, ProtractorJasmine2ParallelHtmlReporter)
}

throwsReportsDirectoryShouldBeAString(t, input) {
  const error = t.throws(() => { input() }, TypeError)
  t.is(error.message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)
}

throwsTypeErrorMessage(t, input, error) {

}


const fn = () => {
	throw new TypeError('🦄');
};

test('throws', t => {
	const error =

	t.is(error.message, '🦄');
});
