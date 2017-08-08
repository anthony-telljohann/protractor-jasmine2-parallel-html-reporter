import spec from 'ava-spec'
import { isInstanceOfProtractorJasmine2ParallelHtmlReporter as returnsInstance, throwsReportsDirectoryShouldBeANonEmptyString, throwsReportsDirectoryShouldBeAString } from '../assertions/_assertions'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const given = {
  reportsDirectory: (value) => `given reports directory is ${value}`
}
const REPORTS_DIRECTORY = {
 trimmedEmptyString: '',
 untrimmedEmptyString: ' ',
 nonEmptyString: `reports/`,
 number: 123,
  function: function() {},
  object: {}
}

var test
const subject = spec.describe(`constructor`)
const scenario = subject.describe(`when constructing`)

test = scenario.describe(`should return instance of ProtractorJasmine2ParallelHtmlReporter`)
test(given.reportsDirectory(`not specified`), returnsInstance(new ProtractorJasmine2ParallelHtmlReporter()))
test(given.reportsDirectory(`undefined`), returnsInstance(new ProtractorJasmine2ParallelHtmlReporter(undefined)))
test(given.reportsDirectory(`non-empty string ("${REPORTS_DIRECTORY.nonEmptyString}")`), returnsInstance(new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.nonEmptyString)))

test = scenario.describe(`should throw "reports directory should be a non-empty string"`)
test(given.reportsDirectory(`empty string ("${REPORTS_DIRECTORY.trimmedEmptyString}")`), throwsReportsDirectoryShouldBeANonEmptyString(() => { new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.trimmedEmptyString) }))
test(given.reportsDirectory(`empty string ("${REPORTS_DIRECTORY.untrimmedEmptyString}")`), throwsReportsDirectoryShouldBeANonEmptyString(() => { new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.untrimmedEmptyString) }))

test = scenario.describe(`should throw "reports directory should be a string"`)
test(given.reportsDirectory(`null`), throwsReportsDirectoryShouldBeAString(() => { new ProtractorJasmine2ParallelHtmlReporter(null)))
test(given.reportsDirectory(`true`), throwsReportsDirectoryShouldBeAString(() => { new ProtractorJasmine2ParallelHtmlReporter(true)))
test(given.reportsDirectory(`false`), throwsReportsDirectoryShouldBeAString(() => { new ProtractorJasmine2ParallelHtmlReporter(false)))
test(given.reportsDirectory(`number (${REPORTS_DIRECTORY.number})`), throwsReportsDirectoryShouldBeAString(() => { new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.number) }))
test(given.reportsDirectory(`function (${REPORTS_DIRECTORY.function})`), throwsReportsDirectoryShouldBeAString(() => { new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.function) }))
test(given.reportsDirectory(`object (${REPORTS_DIRECTORY.object})`), throwsReportsDirectoryShouldBeAString() => { (new ProtractorJasmine2ParallelHtmlReporter(REPORTS_DIRECTORY.object) }))
