import path from 'path'
import reporterBuilder from '../builders/protractor-jasmine2-parallel-html-reporter-builder'
import temporaryDirectoryService from '../services/temporary-directory'

export default {
  toReporter(capability) {
    return reporterBuilder
      .setSavePath(
        path.join(
          temporaryDirectoryService.get(),
          capability.get('platform'),
          capability.get('browserName'),
          capability.get('version')
        )
      )
      .build()
  }
}
