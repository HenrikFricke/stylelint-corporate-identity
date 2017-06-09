const parseCssColors = require('../parseCssColors')

describe('parseCssColors', () => {
  describe('properties with colors', () => {
    const testCases = [
      { case: '.class { background-color: red; }', expected: ['red'] },
      { case: '.class { background-color: red; color: #2E697D; }', expected: ['red', '#2E697D'] },
      { case: '.class { background-color: red; color: yellow; }', expected: ['red', 'yellow'] },
      { case: 'border: 2px solid rgba(100, 100, 100, 0.5)', expected: ['rgba(100, 100, 100, 0.5)'] },
      { case: 'box-shadow: 0 0 0 5px rgb(100, 100, 100), 0 0 0 3px black', expected: ['rgb(100, 100, 100)', 'black'] },
      { case: 'width: 100px;', expected: [] }
    ]

    testCases.forEach((test) => {
      it('should return proper css colors', () => {
        expect(parseCssColors(test.case)).toEqual(test.expected)
      })
    })
  })
})
