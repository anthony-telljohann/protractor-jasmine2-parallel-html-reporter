import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var instance

spec.beforeEach('construct instance', () => {
	instance = new ProtractorJasmine2ParallelHtmlReporter()
})

spec.describe('instance', it => {
	it('should add', assert => {
		assert.true(is.fn(instance.add))
	})

	it('should consolidate reports', assert => {
		assert.true(is.fn(instance.consolidateReports))
	})
})
