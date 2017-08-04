import ProtractorJasmine2HtmlReporter from 'protractor-jasmine2-html-reporter'
import uuid from 'uuid/v4'

var savePath = undefined

function unsetSavePath() {
  savePath = undefined
}

export default {
  build() {
    var reporter = new ProtractorJasmine2HtmlReporter({
      fileName: uuid(),
      savePath: savePath,
      cleanDestination: false,
      consolidateAll: false,
      takeScreenshots: false
    })
    unsetSavePath()
    return reporter
  },
  setSavePath(value) {
    savePath = value
    return this
  }
}
