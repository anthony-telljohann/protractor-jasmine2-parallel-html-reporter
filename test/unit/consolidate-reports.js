import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { is, resolves, returns } from 'macros'

var reporter

test.beforeEach(t => {
	reporter = new ProtractorJasmine2ParallelHtmlReporter()
	console.log(`reporter in consolidateReports`, reporter)
})

test(t => {
	t.true(true)
})

// test.only(
// 	is.aFunction,
// 	protractorJasmine2ParallelHtmlReporter.consolidateReports
// )
// test(returns.aPromise, reporter.consolidateReports())
// test(resolves.anUndefined, reporter.consolidateReports())
