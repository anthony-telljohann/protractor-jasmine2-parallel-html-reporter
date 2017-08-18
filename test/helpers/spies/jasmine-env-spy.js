import sinon from 'sinon'

const jasmineEnvSpy = {}
jasmineEnvSpy.addReporter = sinon.spy()

export default jasmineEnvSpy
