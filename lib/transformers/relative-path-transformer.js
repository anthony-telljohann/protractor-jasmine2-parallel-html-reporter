import path from 'path'
import reportsDirectory from '../services/reports-directory'
import temporaryDirectory from '../services/temporary-directory'

const REPORT_EXTENSION = '.html'
const SOURCES_PATTERN = '*' + REPORT_EXTENSION

export default {
  toReportDestination(relativePath) {
    return path.join(reportsDirectory.get(), toReportName(relativePath))
  },
  toReportSources(relativePath) {
    return path.join(temporaryDirectory.get(), relativePath, SOURCES_PATTERN)
  }
}

function toReportName(relativePath) {
  return relativePath.split('/').filter(Boolean).join('-').toLowerCase() + REPORT_EXTENSION
}
