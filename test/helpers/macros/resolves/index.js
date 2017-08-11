import is from 'is'

export default {
	anUndefined
}

async function anUndefined(t, input) {
	t.true(is.undef(await input))
}

anUndefined.title = (title, input) => `${title} resolves undefined`
