import spec from 'ava-spec'
import is from 'is'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

const REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING =
	'reports directory should be a non-empty string'
const REPORTS_DIRECTORY_SHOULD_BE_A_STRING =
	'reports directory should be a string'

const should = {
 return: {
    instance: `should return an instance of ProtractorJasmine2ParallelHtmlReporter`
 },
 throw: {
    typeError: {
      nonEmptyString: `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING}"`,
      string: `should throw TypeError "${REPORTS_DIRECTORY_SHOULD_BE_A_STRING}"`
    }
 }
}

const test = {
  returns: {
    instance: (value) => (assert) => { assert.true(is.instance(new ProtractorJasmine2ParallelHtmlReporter(value), ProtractorJasmine2ParallelHtmlReporter))}
  },
  throws: {
    typeError: {
      nonEmptyString: (value) => (assert) => { assert.is(assert.throws(() => new ProtractorJasmine2ParallelHtmlReporter(value), TypeError).message, REPORTS_DIRECTORY_SHOULD_BE_A_NON_EMPTY_STRING)},
      string: (value) => (assert) => { assert.is(assert.throws(() => new ProtractorJasmine2ParallelHtmlReporter(value), TypeError).message, REPORTS_DIRECTORY_SHOULD_BE_A_STRING)}
    }
  }
}

const suite = spec.describe('constructing')
currentSuite = suite

scenario = currentSuite.describe('without reports directory')
scenario(should.return.instance, test.returns.instance())

currentSuite = suite.describe('with reports directory as')

scenario = currentSuite.describe('undefined')
scenario(should.return.instance, test.returns.instance(undefined))

scenario = currentSuite.describe('non-empty string')
scenario(should.return.instance, test.returns.instance('reports/'))

scenario = currentSuite.describe('empty string')
scenario(should.throw.typeError.nonEmptyString, test.throws.typeError.nonEmptyString(' '))

scenario = currentSuite.describe('null')
scenario(should.throw.typeError.string, test.throws.typeError.string(null))

scenario = currentSuite.describe('true')
scenario(should.throw.typeError.string, test.throws.typeError.string(true))

scenario = currentSuite.describe('false')
scenario(should.throw.typeError.string, test.throws.typeError.string(false))

scenario = suite.describe('number')
scenario(should.throw.typeError.string, test.throws.typeError.string(123))

scenario = suite.describe('function')
scenario(should.throw.typeError.string, test.throws.typeError.string(function(){}))

scenario = suite.describe('object')
scenario(should.throw.typeError.string, test.throws.typeError.string({}))
