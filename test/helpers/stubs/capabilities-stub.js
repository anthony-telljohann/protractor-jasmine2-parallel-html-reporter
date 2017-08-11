import sinon from 'sinon'
import { capabilitiesMock } from 'mocks'

const capabilitiesStub = {}

capabilitiesStub.get = sinon.stub()
capabilitiesStub.get.withArgs('platform').returns(capabilitiesMock.platform)
capabilitiesStub.get
  .withArgs('browserName')
  .returns(capabilitiesMock.browserName)
capabilitiesStub.get.withArgs('version').returns(capabilitiesMock.version)

export default capabilitiesStub
