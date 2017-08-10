import test from 'ava'
import ProtractorJasmine2ParallelHtmlReporter from 'protractor-jasmine2-parallel-html-reporter'
import { hasFunction } from 'macros'

const reporter = new ProtractorJasmine2ParallelHtmlReporter();

test(hasFunction, reporter, 'add')
