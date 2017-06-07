const isCssColorProperty = require('../isCssColorProperty')

describe('isCssColorProperty', () => {
  describe('properties with colors', () => {
    const testCases = [
      'background',
      'background-color',
      'border',
      'border-color',
      'border-bottom',
      'border-bottom-color',
      'border-left',
      'border-left-color',
      'border-right',
      'border-right-color',
      'border-top',
      'border-top-color',
      'box-shadow',
      'color',
      'text-shadow'
    ]

    testCases.forEach((property) => {
      it('should return true with property ' + property, () => {
        expect(isCssColorProperty(property)).toBeTruthy()
      })
    })
  })

  describe('properties without colors', () => {
    const testCases = [
      'width',
      'height',
      'top',
      'margin',
      'padding'
    ]

    testCases.forEach((property) => {
      it('should return false with property ' + property, () => {
        expect(isCssColorProperty(property)).toBeFalsy()
      })
    })
  })
})
