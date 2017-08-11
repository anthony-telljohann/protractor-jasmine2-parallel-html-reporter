import REPORTS_DIRECTORY from './messages/reports-directory-error-messages.js'

export default {
  EMPTY_STRING: new TypeError(REPORTS_DIRECTORY.SHOULD_BE_NON_EMPTY_STRING),
  NOT_STRING: new TypeError(REPORTS_DIRECTORY.SHOULD_BE_STRING)
}
