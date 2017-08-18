const shouldBeTypeOf = typeError => `reports directory should be ${typeError}`
export default {
  SHOULD_BE_NON_EMPTY_STRING: shouldBeTypeOf('non-empty string'),
  SHOULD_BE_STRING: shouldBeTypeOf('string')
}
