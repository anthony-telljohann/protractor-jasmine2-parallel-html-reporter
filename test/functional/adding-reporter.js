import test from 'ava'
import path from 'path'
import is from 'is'
import ProtractorJasmine2HtmlReporter from 'protractor-jasmine2-html-reporter'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { browserStub, jasmineStub } from 'stubs'
import { capabilitiesMock } from 'mocks'

var protractorJasmine2HtmlReporter
var protractorJasmine2ParallelHtmlReporter
var temporaryDirectory = 'protractor-jasmine2-parallel-html-reports-tmp/'

test.beforeEach(async t => {
	global.browser = browserStub
	global.jasmine = jasmineStub
	browser.getCapabilities.resetHistory()
	jasmine.getEnv.resetHistory()
	protractorJasmine2HtmlReporter = new ProtractorJasmine2HtmlReporter()
	protractorJasmine2ParallelHtmlReporter = new ProtractorJasmine2ParallelHtmlReporter()
	await protractorJasmine2ParallelHtmlReporter.add()
})

test('should get browser capabilities once', t => {
	t.true(browser.getCapabilities.called)
})

// test('should get capabilities platform once', t => {
//   t.true(browser.getCapabilities().get.withArgs('platform').calledOnce)
// })

// test('should get capabilities version once', t => {
//   t.true(browser.getCapabilities().get.withArgs('version').calledOnce)
// })

// test('should get capabilities platform once', t => {
//   t.true(browserStub.getCapabilities().get.withArgs('platform').calledOnce)
// })

test('should get jasmine environment once', t => {
	t.true(jasmine.getEnv.called)
})

test('should add reporter to jasmine environment once', t => {
	t.true(jasmine.getEnv().addReporter.called)
})

test('added reporter should be ProtractorJasmine2HtmlReporter', t => {
	t.true(
		is.instance(
			jasmine.getEnv().addReporter.getCall(0).args[0],
			ProtractorJasmine2HtmlReporter
		)
	)
})

test('added reporter should save reports in temporary-directory/platform/browserName/version/', t => {
	t.is(
		jasmine.getEnv().addReporter.getCall(0).args[0].savePath,
		path.join(
			temporaryDirectory,
			capabilitiesMock.platform,
			capabilitiesMock.browserName,
			capabilitiesMock.version
		)
	)
})

test('added reporter should not clean destination', t => {
	t.false(jasmine.getEnv().addReporter.getCall(0).args[0].cleanDestination)
})

test('added reporter should not consolidate all', t => {
	t.false(jasmine.getEnv().addReporter.getCall(0).args[0].consolidateAll)
})

test('added reporter should not take screenshots', t => {
	t.false(jasmine.getEnv().addReporter.getCall(0).args[0].takeScreenshots)
})
