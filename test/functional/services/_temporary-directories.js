import entriesService from '../../../lib/services/entries'
import filterReportDirectories from '../../../lib/filters/entries/is-report-directory'
import temporaryDirectoryService from '../../../lib/services/temporary-directory'

export default {
  async create() {
    let temporaryDirectory = temporaryDirectoryService.get()
    let temporaryDirectoryEntries = await entriesService.getAll(
      temporaryDirectory
    )
    return filterReportDirectories(temporaryDirectoryEntries)
  }
}
