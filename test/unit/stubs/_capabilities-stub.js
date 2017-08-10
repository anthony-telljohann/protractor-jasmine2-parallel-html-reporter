import sinon from 'sinon'
import mockCapability from '../mocks/_capability-mock.js'

const get = sinon.stub()
get.withArgs('platform').returns(mockCapability.platform)
get.withArgs('browserName').returns(mockCapability.browserName)
get.withArgs('version').returns(mockCapability.version)

export default {
  get
}
