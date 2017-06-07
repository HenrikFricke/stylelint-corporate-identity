function includesOneOf (string, matchers) {
  return !!string.match(`(^|\\b)${matchers.join('|')}`)
}

module.exports = includesOneOf
