const reportsDirectory = new WeakMap()

export default {
  get() {
    return reportsDirectory.get(this)
  },
  set(directory) {
    reportsDirectory.set(this, directory)
  }
}
