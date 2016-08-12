# unwrap-this
[![Coverage Status](https://coveralls.io/repos/github/ashubham/unwrap-this/badge.svg?branch=master)](https://coveralls.io/github/ashubham/unwrap-this?branch=master)
[![Build Status](https://travis-ci.org/ashubham/unwrap-this.svg?branch=master)](https://travis-ci.org/ashubham/unwrap-this) 

[![NPM](https://nodei.co/npm/unwrap-this.png?downloads=true&stars=true&downloadRank=true)](https://www.npmjs.org/package/unwrap-this)

Unwrap `this` context of a method and pass it as a parameter.  
Useful when passing callbacks to third-party modules/libraries.

### Installation

`npm i unwrap-this --save`

### Usage

```javascript
var unwrap = require('unwrap-this');

function onEventHappened(self, ...params) {
    // ctx passed as a param instead of being set to `this`.
}

var config = {
    option1: 'test',
    // The lib will call onSomeEvent() with some `this` ctx.
    onSomeEvent: unwrap(onEventHappened)
};
```

A more detailed example could be

```javascript
var unwrap = require('unwrap-this');

function MyClass() {
    this.configOfThirdPartyLib = {
        opt1: true,
        opt2: false,
        onReady: unwrap(this.readyCallback.bind(this))
    };
    
    this.prop1 = 'some prop value';
}

MyClass.prototype.doSomething = function() {};

MyClass.prototype.readyCallback = function(tpInstance, ...params) {
    // Can access myClass instance's methods/props AND ctx of the caller.
    this.doSomething(tpInstance.name);
}
```
