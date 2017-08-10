import sinon from 'sinon'
import capabilitiesStub from './_capabilities-stub.js'

export const capabilitiesStub = {
  
}
export const browserStub = {
  getCapabilities: sinon.stub().resolve(capabilitiesStub)
}
export const jasmineStub = {
  
}
