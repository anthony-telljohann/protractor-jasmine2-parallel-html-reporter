export default number => entry =>
  entry.relativePath.split('/').length === number + 1
