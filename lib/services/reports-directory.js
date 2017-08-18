const _reportsDirectory = new WeakMap()

export default {
  get() {
    return _reportsDirectory.get(this)
  },
  set(reportsDirectory) {
    _reportsDirectory.set(this, reportsDirectory)
  }
}
