import sinon from 'sinon'
import { jasmineEnvSpy } from '/test/helpers/spies/index.js'

const jasmineStub = {}

jasmineStub.getEnv = sinon.stub()
jasmineStub.getEnv.withArgs().returns(jasmineEnvSpy)

export default jasmineStub
