import { removeAsync as remove } from 'fs-extra-promise'

const TEMPORARY_DIRECTORY = 'protractor-jasmine2-parallel-html-reports-tmp/'

export default {
  get() {
    return TEMPORARY_DIRECTORY
  },
  async remove() {
    return remove(TEMPORARY_DIRECTORY)
  }
}
