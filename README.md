# unwrap-this
[![Coverage Status](https://coveralls.io/repos/github/ashubham/unwrap-this/badge.svg?branch=master)](https://coveralls.io/github/ashubham/unwrap-this?branch=master)
[![Build Status](https://travis-ci.org/ashubham/unwrap-this.svg?branch=master)](https://travis-ci.org/ashubham/unwrap-this) 

[![NPM](https://nodei.co/npm/unwrap-this.png?downloads=true&stars=true&downloadRank=true)](https://www.npmjs.org/package/unwrap-this)

Unwrap `this` context of a method and pass it as a parameter.  
Useful when passing callbacks to third-party modules/libraries.

### Installation

`npm i unwrap-this --save`

### Quick Usage

```javascript
var unwrap = require('unwrap-this');

function onEventHappened(ctx, ...params) {
    // ctx passed as a param instead of being set to `this`.
}

var config = {
    option1: 'test',
    onSomeEvent: unwrap(onEventHappened) // The lib will call onSomeEvent() with some `this` ctx.
};
```
