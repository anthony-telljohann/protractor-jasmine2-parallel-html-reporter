import sinon from 'sinon'
import jasmineEnvStub from './_jasmine-env-stub.js'

var getEnv = sinon.stub()
getEnv.withArgs().returns(jasmineEnvStub)

export default {
  getEnv
}
