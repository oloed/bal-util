// Generated by CoffeeScript 1.3.3
(function() {
  var balUtilTypes;

  balUtilTypes = {
    get: function(value) {
      var result, type, _i, _len, _ref;
      result = 'object';
      _ref = ['array', 'regex', 'function', 'boolean', 'number', 'string', 'null', 'undefined'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        type = _ref[_i];
        if (balUtilTypes[type](value)) {
          result = type;
          break;
        }
      }
      return result;
    },
    object: function(value) {
      return balUtilTypes.get(value) === 'object';
    },
    "function": function(value) {
      return value instanceof Function;
    },
    regex: function(value) {
      return value instanceof RegExp;
    },
    array: function(value) {
      return value instanceof Array;
    },
    boolean: function(value) {
      return typeof value === 'boolean';
    },
    number: function(value) {
      return (value != null) && typeof value.toPrecision !== 'undefined';
    },
    string: function(value) {
      return (value != null) && typeof value.charAt !== 'undefined';
    },
    'null': function(value) {
      return value === null;
    },
    'undefined': function(value) {
      return typeof value === 'undefined';
    },
    empty: function(value) {
      return value != null;
    }
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports = balUtilTypes;
  } else {
    this.balUtilTypes = balUtilTypes;
  }

}).call(this);
