import { entries } from 'walk-sync'

export default {
  getAll(path) {
    return Promise.resolve(entries(path))
  }
}
