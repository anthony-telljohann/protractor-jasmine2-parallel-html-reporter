import is from 'is'
import capability from './services/capability'
import capabilityTransformer from './transformers/capability-transformer'
import jasmineReporters from './services/jasmine-reporters'
import reportsConsolidator from './consolidators/reports-consolidator'
import reportsDirectory from './services/reports-directory'
import temporaryDirectory from './services/temporary-directory'
import temporaryReportDirectories from './services/temporary-report-directories'
import temporaryReportDirectoriesTransformer from './transformers/temporary-report-directories-transformer'

const DEFAULT_REPORTS_DIRECTORY = './reports'

class ProtractorJasmine2ParallelHtmlReporter {
  constructor(reportsDirectory = DEFAULT_REPORTS_DIRECTORY) {
    this.reportsDirectory = reportsDirectory
  }
  add() {
    return capability
      .get()
      .then(capabilityTransformer.toReporter)
      .then(jasmineReporters.add)
  }
  consolidateReports() {
    return temporaryReportDirectories
      .getAll()
      .then(temporaryReportDirectoriesTransformer.toReports)
      .then(reportsConsolidator.consolidate)
      .then(temporaryDirectory.remove())
  }
  set reportsDirectory(dir) {
    if (!is.string(dir)) {
      throw new TypeError('reports directory should be a string')
    }
    if (is.empty(dir.trim())) {
      throw new TypeError('reports directory should be a non-empty string')
    }
    reportsDirectory.set(dir)
  }
}

export default ProtractorJasmine2ParallelHtmlReporter
