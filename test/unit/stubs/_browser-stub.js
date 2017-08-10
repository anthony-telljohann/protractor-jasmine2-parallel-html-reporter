import sinon from 'sinon'
import capabilitiesStub from './_capabilities-stub.js'

var getCapabilities = sinon.stub()
getCapabilities.resolves(capabilitiesStub)

export default {
  getCapabilities
}
