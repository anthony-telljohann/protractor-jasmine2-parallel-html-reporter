import test from 'ava'
import sinon from 'sinon'
import path from 'path'
import ProtractorJasmine2HtmlReporter from 'protractor-jasmine2-html-reporter'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var protractorJasmine2HtmlReporter
var protractorJasmine2ParallelHtmlReporter
var fakeCapabilities
var fakeEnv
var mockCapability
var temporaryDirectory

// move to test/functional/stubs/_browser.js
// move to test/functional/stubs/_jasmine.js
// move to test/functional/stubs/_capability.js
// move to test/functional/mocks/_capability.js
// move to test/functional/mocks/_jasmine-env.js

// import browserStub
// import jasmineStub
// import mockCapability

test.before(async () => {
  global.browser = {
    getCapabilities: sinon.stub()
  }

  global.jasmine = {
    getEnv: sinon.stub()
  }

  temporaryDirectory = 'protractor-jasmine2-parallel-html-reports-tmp/'

  mockCapability = {
    platform: 'linux',
    browserName: 'chrome',
    version: 'beta'
  }

  fakeCapabilities = {
    get: sinon.stub()
  }
  fakeCapabilities.get.withArgs('platform').returns(mockCapability.platform)
  fakeCapabilities.get.withArgs('browserName').returns(mockCapability.browserName)
  fakeCapabilities.get.withArgs('version').returns(mockCapability.version)
  browser.getCapabilities.resolves(fakeCapabilities)

  fakeEnv = {
    addReporter: sinon.stub()
  }
  jasmine.getEnv.withArgs().returns(fakeEnv)

  protractorJasmine2HtmlReporter = new ProtractorJasmine2HtmlReporter()

  protractorJasmine2ParallelHtmlReporter = new ProtractorJasmine2ParallelHtmlReporter()
  await protractorJasmine2ParallelHtmlReporter.add()
})

test('should get browser capabilities once', t => {
  t.true(browser.getCapabilities.calledOnce)
})

test('should get jasmine environment once', t => {
  t.true(jasmine.getEnv.calledOnce)
})

test('should add reporter to jasmine environment once', t => {
  t.true(jasmine.getEnv().addReporter.calledOnce)
})

// import is
// assert.true(is.instance(jasmine.getEnv().addReporter.getCall(0).args[0], ProtractorJasmine2HtmlReporter))
test('reporter should be ProtractorJasmine2HtmlReporter', t => {
  t.is(typeof jasmine.getEnv().addReporter.getCall(0).args[0], typeof protractorJasmine2HtmlReporter)
})

test('reporter should save reports in temporary-directory/platform/browserName/version/', t => {
  t.is(jasmine.getEnv().addReporter.getCall(0).args[0].savePath, path.join(temporaryDirectory, mockCapability.platform, mockCapability.browserName, mockCapability.version))
})

test('reporter should not clean destination', t => {
  t.false(jasmine.getEnv().addReporter.getCall(0).args[0].cleanDestination)
})

test('reporter should not consolidate all', t => {
  t.false(jasmine.getEnv().addReporter.getCall(0).args[0].consolidateAll)
})

test('reporter should not take screenshots', t => {
  t.false(jasmine.getEnv().addReporter.getCall(0).args[0].takeScreenshots)
})
