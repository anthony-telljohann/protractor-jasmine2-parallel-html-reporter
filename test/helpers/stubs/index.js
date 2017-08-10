import sinon from 'sinon'
import { capabilityMock } from 'mocks'
import capabilitiesStub from './capabilities-stub.js'
import browserStub from './browser-stub.js'
import jasmineStub from './jasmine-stub.js'

export {
  browserStub,
  capabilitiesStub,
  jasmineStub
}
const capabilitiesStub = {
  get: sinon.stub()
}
capabilitiesStub.get.withArgs('platform').returns(capabilityMock.platform)
capabilitiesStub.get.withArgs('browserName').returns(capabilityMock.browserName)
capabilitiesStub.get.withArgs('version').returns(capabilityMock.version)

export const browserStub = {
  getCapabilities: sinon.stub().resolve(capabilitiesStub)
}


export const browserStub = {
  getCapabilities: sinon.stub().resolve(capabilitiesStub)
}
export const jasmineStub = {
  
}
