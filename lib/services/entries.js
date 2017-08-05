import { entries } from 'walk-sync'

export default {
  getAll(path) {
    return new Promise(resolve => {
      var allEntries
      try {
        allEntries = entries(path)
      } catch (error) {
        allEntries = []
      }
      resolve(allEntries)
    })
  }
}
