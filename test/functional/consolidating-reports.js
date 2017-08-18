import randomatic from 'randomatic'
import test from 'ava'
import path from 'path'
import glob from 'glob-promise'
import { createFileAsync, writeFileAsync, removeAsync } from 'fs-extra-promise'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'

// move to lib/defaults
// import from lib/defaults
const TEMPORARY_REPORTS_DIRECTORY =
  'protractor-jasmine2-parallel-html-reports-tmp/'
const REPORTS_DIRECTORY = 'reports/'

//move to test/function/_temporaryReports
//import temporaryReporters
const REPORTS_DIRECTORY_PATTERN = REPORTS_DIRECTORY + '*.html'
const BROWSERS = new Set()
const PLATFORMS = new Set()
const REPORTS = new Set()
const VERSIONS = new Set()

var reporter
var reports
var consolidatedReports

//move to temporaryReports.create()
//move to temporaryReports.read()
test.beforeEach('generate reports', async () => {
  PLATFORMS.add('macOS 10.12')
  PLATFORMS.add('Windows 10')
  PLATFORMS.add('Linux')

  BROWSERS.add('chrome')
  BROWSERS.add('firefox')

  VERSIONS.add('dev')
  VERSIONS.add('beta')

  await Promise.all(
    [...new Array(10)].map(() =>
      PLATFORMS.forEach(platform => {
        BROWSERS.forEach(browser => {
          VERSIONS.forEach(version => {
            let fileName = randomatic('A', 10) + '.html'
            let data = randomatic('A', 10)
            REPORTS.add({
              file: path.join(
                TEMPORARY_REPORTS_DIRECTORY,
                platform,
                browser,
                version,
                fileName
              ),
              data: `<html>${data}</html>`
            })
          })
        })
      })
    )
  )
  reports = Array.from(REPORTS)
  reporter = new ProtractorJasmine2ParallelHtmlReporter()
  await Promise.all(
    reports.map(report =>
      createFileAsync(report.file).then(() =>
        writeFileAsync(report.file, report.data)
      )
    )
  )
  await reporter.consolidateReports()
  let foundReports = await glob(REPORTS_DIRECTORY_PATTERN)
  consolidatedReports = foundReports
})

test('should consolidate a report for each platform, browser, and version', t => {
  t.is(
    PLATFORMS.size * BROWSERS.size * VERSIONS.size,
    consolidatedReports.length
  )
})

//move to temporaryReportsDirectory.remove()
test.afterEach('delete reports', async () => {
  await removeAsync('reports/')
})
