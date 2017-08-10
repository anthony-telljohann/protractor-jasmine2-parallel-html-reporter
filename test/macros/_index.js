import is from 'is'

const throwsError = constructor => messsage => (t, input) => {
  const error = t.throws(() => { input() }, constructor)
  t.is(error.message, messsage)
}
const throwsTypeError = throwsError(TypeError)

//generic
function hasFunction(t, input, functionName) {
  isFunction(t, input[functionName])
}
hasFunction.title = (description, input, functionName) => `${description} should have function ${functionName}`.trim();
export hasFunction

function isFunction(t, input) {
  t.true(is.fn(input))
}
isFunction.title = (description, input) => `${description} ${input.name} is a function`.trim();
export isFunction

function isInstanceOf(t, input, constructor) {
  t.true(is.instance(input, constructor))
}
isInstanceOf.title = (description, input, constructor) => `${description} is an instance of ${constructor.name}`.trim();
export isInstanceOf

//lib specific
function isInstanceOfProtractorJasmine2ParallelHtmlReporter(t, input) {
  isInstanceOf(t, input, ProtractorJasmine2ParallelHtmlReporter)
}
isInstanceOfProtractorJasmine2ParallelHtmlReporter.title = isInstanceOf.title
export isInstanceOfProtractorJasmine2ParallelHtmlReporter

function throwsReportsDirectoryShouldBeANonEmptyString(t, input) {
  throwsTypeError(REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)(t, input)
}
throwsReportsDirectoryShouldBeANonEmptyString.title
export throwsReportsDirectoryShouldBeANonEmptyString

function throwsReportsDirectoryShouldBeAString(t, input) {
  throwsTypeError(REPORTS_DIRECTORY_SHOULD_BE_A_STRING)(t, input)
}
export throwsReportsDirectoryShouldBeAString
