import sinon from 'sinon'
import mockCapabilities from '../mocks/_capabilities-mock.js'

var getCapabilities = sinon.stub()
getCapabilities.resolves(fakeCapabilities)

export default {
  getCapabilities
}
