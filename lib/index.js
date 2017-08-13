import is from 'is'
import { reportsConsolidator } from 'consolidators'
import { 
  REPORTS_DIRECTORY,
  TEMPORARY_REPORTS_DIRECTORY
} from 'constants'
import { 
  capabilities,
  jasmineReporters,
  reportsDirectory, 
  temporaryDirectory,
  temporaryReportsDirectory
} from 'services'
import { 
  capabilitiesTransformer as transformCapabilities,
  temporaryReportDirectoriesTransformer as transformTemporaryReportsDirectories
} from 'transformers'

class ProtractorJasmine2ParallelHtmlReporter {
  constructor(reportsDirectory = REPORTS_DIRECTORY) {
    this.reportsDirectory = reportsDirectory
  }
  async add() {
    let capabilities = await capabilities.get()
    let reporter = await transformCapabilities.toReporter(capabilities)
    return jasmineReporters.add(reporter)
  }
  async consolidateReports() {
    let temporaryReportDirectories = await temporaryReportDirectories.getAll()
    if (!is.empty(temporaryReportDirectories)) {
      let reports = await transformTemporaryReportsDirectories.toReports(
        temporaryReportDirectories
      )
      if (!is.empty(reports)) {
        await reportsConsolidator.consolidate(reports)
      }
    }
    return temporaryDirectory.remove()
  }
  set reportsDirectory(reportsDirectory) {
    if (!is.string(reportsDirectory)) {
      throw new TypeError('reports directory should be a string')
    }
    if (is.empty(reportsDirectory.trim())) {
      throw new TypeError('reports directory should be a non-empty string')
    }
    reportsDirectoryService.set(reportsDirectory)
  }
}

export default ProtractorJasmine2ParallelHtmlReporter
