import ProtractorJasmine2ParallelHtmlReporter from '../lib/protractor-jasmine2-parallel-html-reporter.js'

export const constructor = ProtractorJasmine2ParallelHtmlReporter
export const reporter = new ProtractorJasmine2ParallelHtmlReporter()
export const add = reporter.add
export const consolidateReports = reporter.consolidateReports
