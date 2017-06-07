function includesOneOf(string, matchers) {
    return string.match(`(^|\\b)${matchers.join("|")}`) ? true : false
}

module.exports = includesOneOf;