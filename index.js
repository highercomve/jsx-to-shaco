"use strict";

var Shaco = require('shadow-component').default

module.exports = function jsxToShaco(jsxObject) {
  var key = jsxObject.attributes.key
  var state = jsxObject.attributes.state
  var options = Object.assign({}, jsxObject.attributes, {key: undefined, state: undefined})
  return function () {
    Shaco.createElement(
      jsxObject.elementName,
      key,
      state,
      options,
      jsxObject.children
    )
  }
}
