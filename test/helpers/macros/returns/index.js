import is from 'is'

export default {
	aPromise
}

function aPromise(t, input) {
	t.true(is.a(input, Promise))
}

aPromise.title = (title, input) => `${title} resolves undefined`
