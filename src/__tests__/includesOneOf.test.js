const includesOneOf = require('../includesOneOf')

describe('includesOneOf', () => {
  const colors = ['red', '#ffffff', 'rgb(20, 20,20)']

  describe('valid color', () => {
    it('should return true', () => {
      expect(includesOneOf('0px 0px 0px red', colors)).toBeTruthy()
      expect(includesOneOf('0px 0px 0px #ffffff', colors)).toBeTruthy()
    })
  })

  describe('invalid color', () => {
    it('should return false', () => {
      expect(includesOneOf('0px 0px 0px black', colors)).toBeFalsy()
      expect(includesOneOf('0px 0px 0px rgba(0,0,0,0)', colors)).toBeFalsy()
      expect(includesOneOf('rgb(20,20,21)', colors)).toBeFalsy()
      expect(includesOneOf('0px 0px 0px #ffffaa', colors)).toBeFalsy()
      expect(includesOneOf('0px 0px 0px lightred', colors)).toBeFalsy()
    })
  })
})
