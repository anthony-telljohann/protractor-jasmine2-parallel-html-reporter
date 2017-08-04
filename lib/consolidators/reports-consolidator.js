import reportConsolidator from './report-consolidator'

export default {
  consolidate(reports) {
    return Promise.all(reports.map(reportConsolidator.consolidate))
  }
}
