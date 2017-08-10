import temporaryReportsDirectoryFixture from './temporary-reports-directory-fixture'
import temporaryReportsFixture from './temporary-reports-fixture'

export default {
  temporaryReportsDirectoryFixture,
  temporaryReportsFixture
}

export const temporaryReports = {
  create() {
    console.log('create temporary reports') 
  },
  query() {
    console.log('query') 
  },
  read() {
    console.log('read')
  },
  update() {
    console.log('update')
  },
  remove() {
    console.log('remove')
  }
}

export const temporaryReportsDirectories = {
  create() {
    console.log('create') 
  },
  query() {
    console.log('query') 
  },
  read() {
    console.log('read')
  },
  update() {
    console.log('update')
  },
  remove() {
    console.log('remove')
  }
}
