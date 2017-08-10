import sinon from 'sinon'
import jasmineEnvSpy from '../spies/_jasmine-env-spy.js'

var getEnv = sinon.stub()
getEnv.withArgs().returns(jasmineEnvSpy)

export default {
  getEnv
}
