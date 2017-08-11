import is from 'is'

export default {
	aFunction
}

function aFunction(t, input) {
	t.true(is.fn(input))
}

aFunction.title = (title, input) => `${title} is a function`
