import entries from './entries'
import filterReportDirectories from '../filters/entries/is-report-directory'
import temporaryDirectoryService from './temporary-directory'

export default {
  async getAll() {
    let temporaryDirectory = temporaryDirectoryService.get()
    let temporaryDirectoryEntries = await entries.getAll(temporaryDirectory)
    return filterReportDirectories(temporaryDirectoryEntries)
  }
}
