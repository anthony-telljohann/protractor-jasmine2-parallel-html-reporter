# protractor-jasmine2-parallel-html-reporter

[![Greenkeeper badge](https://badges.greenkeeper.io/atelljohannsmothers/protractor-jasmine2-parallel-html-reporter.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/atelljohannsmothers/protractor-jasmine2-parallel-html-reporter.svg?branch=master)](https://travis-ci.org/atelljohannsmothers/protractor-jasmine2-parallel-html-reporter)
[![codecov](https://codecov.io/gh/atelljohannsmothers/protractor-jasmine2-parallel-html-reporter/branch/master/graph/badge.svg)](https://codecov.io/gh/atelljohannsmothers/protractor-jasmine2-parallel-html-reporter)
[![NPM version](https://img.shields.io/npm/v/protractor-jasmine2-parallel-html-reporter.svg)](https://www.npmjs.com/package/protractor-jasmine2-parallel-html-reporter)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Creates html reports for protractor jasmine2 tests run in parallel. Consolidates reports by platform, browser, and version. Supports multicapabilities and shardTestFiles.

## Usage

Install with npm

```
npm install protractor-jasmine2-parallel-html-reporter
```

```js
import ProtractorJasmine2ParallelHtmlReporter from 'protractor-jasmine2-parallel-html-reporter'
var parallelHtmlReporter = new ProtractorJasmine2ParallelHtmlReporter('./reports')
exports.config = {
    onPrepare: function () {
        return parallelHtmlReporter.add()
    },
    afterLaunch: function () {
        return parallelHtmlReporter.consolidateReports()
    }
};
```

### API

#### `constructor(reportsDirectory)`

* `reportsDirectory` `{String}` reports directory

```js
var parallelHtmlReporter = new ProtractorJasmine2ParallelHtmlReporter('./reports')
```

Constructs a ProtractorJasmine2ParallelHtmlReporter.

#### `add()`

```js
parallelHtmlReporter.add()
```

Adds an html reporter for every test.

#### `consolidateReports()`

```js
parallelHtmlReporter.consolidateReports()
```

Consolidates html reports by platform, browser, and version.