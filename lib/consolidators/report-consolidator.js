import { consolidate } from 'consolidator'

export default {
  consolidate(report) {
    return consolidate(report.sources, report.destination)
  }
}
