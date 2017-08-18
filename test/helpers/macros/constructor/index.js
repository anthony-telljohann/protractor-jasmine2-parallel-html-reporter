import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'

export default {
  returnsInstance,
  throwsReportsDirectoryShouldBeANonEmptyString,
  throwsReportsDirectoryShouldBeAString
}

function returnsInstance(t, input) {
  t.true(is.instance(input, ProtractorJasmine2ParallelHtmlReporter))
}
returnsInstance.title = title =>
  `${title} returns instance of ProtractorJasmine2ParallelHtmlReporter`.trim()

function throwsReportsDirectoryShouldBeANonEmptyString(t, input) {
  const error = t.throws(input, TypeError)
  t.is(error.message, `reports directory should be a non-empty string`)
}
throwsReportsDirectoryShouldBeANonEmptyString.title = title =>
  `${title} throws TypeError "reports directory should be a non-empty string"`.trim()

function throwsReportsDirectoryShouldBeAString(t, input) {
  const error = t.throws(input, TypeError)
  t.is(error.message, `reports directory should be a string`)
}
throwsReportsDirectoryShouldBeAString.title = title =>
  `${title} throws TypeError "reports directory should be a string"`.trim()
