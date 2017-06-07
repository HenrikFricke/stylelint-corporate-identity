const stylelint = require("stylelint")
const declarationValueIndex = require('stylelint/lib/utils/declarationValueIndex')
const isString = require('lodash.isstring')

const isCssColorProperty = require('./isCssColorProperty')
const includesOneOf = require('./includesOneOf')

const ruleName = "corporate-identity/colors"
const messages =  stylelint.utils.ruleMessages(ruleName, {
  expected: (prop) => `Expected CSS property "${prop}" to match colors of CI.`,
})

function report(declaration, result) {
  stylelint.utils.report({
    message: messages.expected(declaration.prop),
    ruleName,
    result: result,
    node: declaration,
    index: declarationValueIndex(declaration),
  })
}

function rule(primaryOption) {
  const colors = primaryOption || [];
  
  return (root, result) => {
    var validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: colors,
      possible: [isString]
    })

    if (!validOptions) { return }

    root.walkDecls(decl => {
      if (!isCssColorProperty(decl.prop)) {
        return
      }

      decl.value.split(',')
        .filter(value => !includesOneOf(value, colors))
        .map(() => report(decl, result));
    });
  }
}

module.exports = stylelint.createPlugin(ruleName, rule)
module.exports.ruleName = ruleName
module.exports.messages = messages