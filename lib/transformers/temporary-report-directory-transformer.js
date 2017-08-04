import Report from '../classes/report'
import relativePathTransformer from './relative-path-transformer'

export default {
  toReport(temporaryReportDirectory) {
    let report = new Report()
    report.setDestination(
      relativePathTransformer.toReportDestination(
        temporaryReportDirectory.relativePath
      )
    )
    report.setSources(
      relativePathTransformer.toReportSources(
        temporaryReportDirectory.relativePath
      )
    )
    return report
  }
}
