import is from 'is'

function hasFunction(t, input, functionName) {
  isFunction(t, input[functionName])
}
hasFunction.title = (description, input, functionName) => `${description} should have function ${functionName}`.trim();
export hasFunction

function isFunction(t, input) {
  t.true(is.fn(input))
}
isFunction.title = (description, input) => `${description} ${input.name} is a function`.trim();
export isFunction

function isInstanceOf(t, input, constructor) {
  t.true(is.instance(input, constructor))
}
isInstanceOf.title = (description, input, constructor) => `${description} is an instance of ${constructor.name}`.trim();
export isInstanceOf
