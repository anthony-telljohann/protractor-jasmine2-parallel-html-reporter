import sinon from 'sinon'
import { capabilityMock } from 'mocks'

const capabilitiesStub = {
  get: sinon.stub()
}

capabilitiesStub.get.withArgs('platform').returns(capabilityMock.platform)
capabilitiesStub.get.withArgs('browserName').returns(capabilityMock.browserName)
capabilitiesStub.get.withArgs('version').returns(capabilityMock.version)

export default capabilitiesStub;
