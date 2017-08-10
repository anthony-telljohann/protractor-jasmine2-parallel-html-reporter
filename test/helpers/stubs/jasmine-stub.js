import sinon from 'sinon'
import { jasmineEnvSpy } from 'spies'

const jasmineStub = {}

jasmineStub.getEnv = sinon.stub()
jasmineStub.getEnv.withArgs().returns(jasmineEnvSpy)

export default jasmineStub
