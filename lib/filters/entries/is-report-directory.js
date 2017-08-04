import isDirectory from '../entry/is-directory'
import isSubdirectoryCount from '../entry/is-subdirectory-count'

export default isReportDirectory

function isReportDirectory(entries) {
  return entries.filter(isDirectory).filter(isSubdirectoryCount(3))
}
