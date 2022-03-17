# multiselection

> make multiple selection in the selectbox

[![NPM](https://img.shields.io/npm/v/multiselection.svg)](https://www.npmjs.com/package/multiselection) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save multiselection
```

## Usage

```jsx
import React, { Component } from 'react'

import Multiselection from 'multiselection'
import 'multiselection/dist/index.css'

class Example extends Component {
  render() {
    return <Multiselection
      width={}
      data={}
      handleValue={}
    />
  }
}
```
> data : is a mandatory prop typeof list of string
> handleValue : is a mandatory prop typeof func for retrieving the result of the select
> width : is a optional prop typeof number
## License

MIT © [elsamanang](https://github.com/elsamanang)
