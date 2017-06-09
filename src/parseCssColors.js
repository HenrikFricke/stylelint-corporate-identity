const namedCssColors = require('../constants/namedCssColors')

function parseCssColors (cssString) {
  const rgbaHslaRegex = '(rgba?|hsla?)\\([0-9,\\s\\.\\/\\%]+\\)'
  const namedCssColorsRegex = namedCssColors.join('|')
  const hexRegex = '#[0-9a-f]+'

  const regex = new RegExp(`(${namedCssColorsRegex}|${rgbaHslaRegex}|${hexRegex})`, 'gi')
  return cssString.match(regex) || []
}

module.exports = parseCssColors
