import spec from 'ava-spec'
import { isInstanceOfProtractorJasmine2ParallelHtmlReporter as returnsInstance, throwsReportsDirectoryShouldBeANonEmptyString, throwsReportsDirectoryShouldBeAString } from 'macros/index.js'
import ProtractorJasmine2ParallelHtmlReporter from 'lib/protractor-jasmine2-parallel-html-reporter.js'

const REPORTS_DIRECTORY = {
  trimmedEmptyString: '',
  untrimmedEmptyString: ' ',
  nonEmptyString: `reports/`,
  number: 123,
  function: function() {},
  object: {}
}
const given = `given reports directory is`
const scenario = spec.describe(`constructing`)

var test

test = scenario.describe(`should return instance of ProtractorJasmine2ParallelHtmlReporter ${given}`)
test(`not specified`, returnsInstance(new ProtractorJasmine2ParallelHtmlReporter()))
test(`undefined`, returnsInstance(new ProtractorJasmine2ParallelHtmlReporter(undefined)))
test(`non-empty string ("${REPORTS_DIRECTORY.nonEmptyString}")`, returnsInstance(new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.nonEmptyString)))

test = scenario.describe(`should throw "reports directory should be a non-empty string" ${given}`)
test(
  `trimmed empty string ("${REPORTS_DIRECTORY.trimmedEmptyString}")`,
  throwsReportsDirectoryShouldBeANonEmptyString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.trimmedEmptyString)
  })
)
test(
  `untrimmed empty string ("${REPORTS_DIRECTORY.untrimmedEmptyString}")`,
  throwsReportsDirectoryShouldBeANonEmptyString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.untrimmedEmptyString)
  })
)

test = scenario.describe(`should throw "reports directory should be a string" ${given}`)
test(
  `null`,
  throwsReportsDirectoryShouldBeAString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(null)
  })
)
test(
  `true`,
  throwsReportsDirectoryShouldBeAString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(true)
  })
)
test(
  `false`,
  throwsReportsDirectoryShouldBeAString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(false)
  })
)
test(
  `number (${REPORTS_DIRECTORY.number})`,
  throwsReportsDirectoryShouldBeAString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.number)
  })
)
test(
  `function (${REPORTS_DIRECTORY.function})`,
  throwsReportsDirectoryShouldBeAString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.function)
  })
)
test(
  `object (${REPORTS_DIRECTORY.object})`,
  throwsReportsDirectoryShouldBeAString(() => {
    new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.object)
  })
)
