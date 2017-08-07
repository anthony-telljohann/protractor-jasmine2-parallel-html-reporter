import spec from 'ava-spec'
import { isInstance, throwsNonEmptyStringTypeError, throwsStringTypeError } from './macros/_constructor.js'
import ProtractorJasmine2ParallelHtmlReporter from '../../lib/protractor-jasmine2-parallel-html-reporter.js'

var scenario

var currentSuite = spec.describe('constructing')
scenario = currentSuite.describe('without reports directory')
scenario(isInstance, `new ProtractorJasmine2ParallelHtmlReporter()`)


currentSuite = currentSuite.describe('with reports directory as')
scenario = currentSuite.describe('undefined')
scenario(isInstance, `new ProtractorJasmine2ParallelHtmlReporter(undefined)`)
scenario = currentSuite.describe('non-empty string')
scenario(isInstance, `new ProtractorJasmine2ParallelHtmlReporter('reports/')`)

scenario = currentSuite.describe('empty string')
scenario(throwsNonEmptyStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(' ')`)

scenario = currentSuite.describe('null')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(null)`)
scenario = currentSuite.describe('true')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(true)`)
scenario = currentSuite.describe('false')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(false)`)
scenario = currentSuite.describe('number')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(number)`)
scenario = currentSuite.describe('function')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(function)`)
scenario = currentSuite.describe('object')
scenario(throwsStringTypeError, `new ProtractorJasmine2ParallelHtmlReporter(object)`)
