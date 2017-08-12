import is from 'is'

const string = input => async t => isString(t, await input)

const number = input => async t => isNumber(t, await input)

const fn = input => async t => isFn(t, input)

const promise = input => async t => isPromise(t, input)

const undef = input => async t => isUndef(t, await input)

export default {
  string,
  number,
  fn,
  promise,
  undef
}

function isString(t, input) {
  t.true(is.string(input))
}
isString.title = title => `${title} is a String`.trim()

function isNumber(t, input) {
  t.true(is.number(input))
}
isNumber.title = title => `${title} is a Number`.trim()

function isFn(t, input) {
  t.true(is.fn(input))
}
isFn.title = title => `${title} is a function`.trim()

function isPromise(t, input) {
  t.true(is.instance(input, Promise))
}
isPromise.title = title => `${title} is a Promise`.trim()

function isUndef(t, input) {
  t.true(is.undef(input))
}
isUndef.title = title => `${title} is undefined`.trim()
