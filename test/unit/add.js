import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from '/lib/protractor-jasmine2-parallel-html-reporter.js'
import { browserStub, jasmineStub } from 'stubs'
import { is } from 'macros'

global.browser = browserStub
global.jasmine = jasmineStub
const reporter = new ProtractorJasmine2ParallelHtmlReporter()

test(`is a function`, is.fn(reporter.add))
test(`returns a promise`, is.promise(reporter.add()))
test(`resolves undefined`, is.undef(reporter.add()))
