import entries from './entries'
import filterReportDirectories from '../filters/entries/is-report-directory'
import temporaryDirectory from './temporary-directory'

export default {
  getAll() {
    return entries
      .getAll(temporaryDirectory.get())
      .then(filterReportDirectories)
  }
}
