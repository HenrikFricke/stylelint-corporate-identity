const testRule = require('stylelint-test-rule-tape')

const stylelintCorporateIdentityColors = require('../index')

testRule(stylelintCorporateIdentityColors.rule, {
  ruleName: stylelintCorporateIdentityColors.ruleName,
  config: [ [ 'red', 'blue', 'rgb(100,100,100)' ] ],

  accept: [
    { code: '.class { color: blue; }' },
    { code: '.class { box-shadow: 0 0 0 5px blue, 0 0 0 10px red; color: blue; }' },
    { code: '.class { with: 10px; }' },
    { code: '.class { with: 10px; color: red; }' },
    { code: '.class { background-color: transparent; color: red; }' },
    { code: '.class { background-color: rgba(0,0,0,0); color: red; }' },
    { code: '.class { background-color: rgb(100,100,100); color: red; }' }
  ],

  reject: [
    {
      code: '.class { color: black; }',
      message: `Expected CSS property "color" to match colors of CI. (${stylelintCorporateIdentityColors.ruleName})`,
      line: 1,
      column: 17
    },
    {
      code: '.class { box-shadow: 0 0 0 red, 0 0 0 pink; }',
      message: `Expected CSS property "box-shadow" to match colors of CI. (${stylelintCorporateIdentityColors.ruleName})`,
      line: 1,
      column: 22
    },
    {
      code: '.class > div:hover { background-color: #ffffff; }',
      message: `Expected CSS property "background-color" to match colors of CI. (${stylelintCorporateIdentityColors.ruleName})`,
      line: 1,
      column: 40
    },
    {
      code: `.class { 
        color: black;
      }`,
      message: `Expected CSS property "color" to match colors of CI. (${stylelintCorporateIdentityColors.ruleName})`,
      line: 2,
      column: 16
    }
  ]
})
