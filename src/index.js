const stylelint = require('stylelint')
const declarationValueIndex = require('stylelint/lib/utils/declarationValueIndex')
const isString = require('lodash.isstring')

const parseCssColors = require('./parseCssColors')

const ruleName = 'corporate-identity/colors'
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: (prop) => `Expected CSS property "${prop}" to match colors of CI.`
})

function report (declaration, result) {
  stylelint.utils.report({
    message: messages.expected(declaration.prop),
    ruleName,
    result: result,
    node: declaration,
    index: declarationValueIndex(declaration)
  })
}

function rule (primaryOption) {
  const ciColors = primaryOption || []
  ciColors.push('rgba(0,0,0,0)')

  return (root, result) => {
    var validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: ciColors,
      possible: [isString]
    })

    if (!validOptions) { return }

    root.walkDecls(decl => {
      parseCssColors(decl.value)
        .filter(color => !ciColors.includes(color))
        .map(() => report(decl, result))
    })
  }
}

module.exports = stylelint.createPlugin(ruleName, rule)
module.exports.ruleName = ruleName
module.exports.messages = messages
