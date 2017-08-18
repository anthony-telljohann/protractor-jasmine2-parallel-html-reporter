import { entries } from 'walk-sync'

export default {
  async getAll(path) {
    let allEntries
    try {
      allEntries = entries(path)
    } catch (e) {
      allEntries = []
    }
    return allEntries
  }
}
