import sinon from 'sinon'
import capabilitiesStub from './_capabilities-stub.js'

const getCapabilities = sinon.stub()
getCapabilities.resolves(capabilitiesStub)

export default {
  getCapabilities
}
