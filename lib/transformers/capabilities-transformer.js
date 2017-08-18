import path from 'path'
import reporterBuilder from '../builders/protractor-jasmine2-parallel-html-reporter-builder'
import temporaryDirectoryService from '../services/temporary-directory'

export default {
  toReporter(capabilities) {
    return reporterBuilder
      .setSavePath(
        path.join(
          temporaryDirectoryService.get(),
          capabilities.get('platform'),
          capabilities.get('browserName'),
          capabilities.get('version')
        )
      )
      .build()
  }
}
