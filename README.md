# stylelint-corporate-identity
> CSS Linting for corporate identity

[![npm](https://img.shields.io/npm/v/stylelint-corporate-identity.svg)](https://www.npmjs.com/package/stylelint-corporate-identity)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/HenrikFricke/stylelint-corporate-identity.svg)](https://github.com/henrikfricke/stylelint-corporate-identity/blob/master/LICENSE)

## Usage

Install the package:

```bash
yarn add stylelint-corporate-identity --dev
# OR
npm i stylelint-corporate-identity --save-dev
```

Add the plugin to your [stylelint configuration](https://stylelint.io/user-guide/configuration/) and define the rule:

```json
{
    "plugins": ["stylelint-corporate-identity"],
    "rules": {
        "corporate-identity/colors": [[ "black", "white" ]]
    }
}
```

In this case the colors `black` and `white` are the colors for the corporate identity.

Run stylelint and get output like this:

```bash
$ stylelint "styles.css"

styles.css
 17:12  ✖  Expected CSS property "color" to match colors of CI.   corporate-identity/colors
```

Get a small example [here](https://github.com/HenrikFricke/stylelint-corporate-identity-example).

## License

MIT License

Copyright 2017 Henrik Fricke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN 
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
USE OR OTHER DEALINGS IN THE SOFTWARE.