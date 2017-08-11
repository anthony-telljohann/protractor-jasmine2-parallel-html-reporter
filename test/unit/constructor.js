import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { constructor } from 'macros'

test(
  `new ProtractorJasmine2ParallelHtmlReporter()`,
  constructor.returnsInstance,
  new ProtractorJasmine2ParallelHtmlReporter()
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter(undefined)`,
  constructor.returnsInstance,
  new ProtractorJasmine2ParallelHtmlReporter(undefined)
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter("reports/")`,
  constructor.returnsInstance,
  new ProtractorJasmine2ParallelHtmlReporter('reports/')
)

test(
  `new ProtractorJasmine2ParallelHtmlReporter("")`,
  constructor.throwsReportsDirectoryShouldBeANonEmptyString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter('')
  }
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter(" ")`,
  constructor.throwsReportsDirectoryShouldBeANonEmptyString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter(' ')
  }
)

test(
  `new ProtractorJasmine2ParallelHtmlReporter(true)`,
  constructor.throwsReportsDirectoryShouldBeAString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter(true)
  }
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter(false)`,
  constructor.throwsReportsDirectoryShouldBeAString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter(false)
  }
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter(123)`,
  constructor.throwsReportsDirectoryShouldBeAString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter(123)
  }
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter([])`,
  constructor.throwsReportsDirectoryShouldBeAString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter([])
  }
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter(function() {})`,
  constructor.throwsReportsDirectoryShouldBeAString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter(function() {})
  }
)
test(
  `new ProtractorJasmine2ParallelHtmlReporter({})`,
  constructor.throwsReportsDirectoryShouldBeAString,
  () => {
    new ProtractorJasmine2ParallelHtmlReporter({})
  }
)
