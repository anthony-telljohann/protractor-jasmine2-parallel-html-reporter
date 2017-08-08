import temporaryReportDirectoryTransformer from './temporary-report-directory-transformer'

export default {
  toReports(temporaryReportDirectories) {
    return Promise.all(temporaryReportDirectories.map(temporaryReportDirectoryTransformer.toReport))
  }
}
