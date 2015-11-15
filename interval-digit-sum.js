(function(root) {
  'use strict';

  function intervalDigitSum(range, sumValue, options) {
    if (typeof options !== 'object') {
      options = {};
    }

    var start = 0;
    var end = 0;

    if (!(Array.isArray(range) && range.length)) {
      return 0;
    } else {
      if (typeof range[0] === 'number') {
        start = range[0];
        if (range.length === 1) {
          return start;
        }
      } else {
        return 0;
      }
      if (typeof range[1] === 'number') {
        end = range[1];
      }
    }

    if (typeof sumValue !== 'number') {
      sumValue = 0;
    }

    var result = [];
    var depth = (end-1).toString().length;

    intervalDigitSum._fors(depth, function(/* values */) {
      var values = [].slice.call(arguments);
      var string = values.join('');
      var number = Number(string);

      if (number >= start && number <= end) {
        if (intervalDigitSum._sum(values) === sumValue) {
          if (options.unique) {
            if (intervalDigitSum._isUnique(values)) {
              result.push(string);
            }
          } else {
            result.push(string);
          }
        }
      }
    });

    return result;
  }

  intervalDigitSum._isUnique = function(collection) {
    var position = collection.length;

    while(position--) {
     if (collection.indexOf(collection[position]) !== position) {
       return false;
     }
    }

    return true;
  };

  intervalDigitSum._sum = function(collection) {
    var result = 0;
    var position = collection.length;

    while(position--) {
      result += collection[position];
    }

    return result;
  };

  intervalDigitSum._fors = function(depth, max, callback, context) {
    var numbers = [];
    var min = 0;

    if (typeof max === 'function') {
      callback = max;
    }

    if (typeof max !== 'number') {
      if (Array.isArray(max)) {
        min = max[0];
        max = max[1];
      } else {
        max = 9;
      }
    }

    for (var i = 0; i < depth; i++) {
      numbers[i] = min;
    }

    var index = depth - 1;

    while(true) {
      callback.apply(context||null, numbers);
      numbers[index]++;

      while(numbers[index] === max + 1) {
        if (index === 0) {
          return numbers;
        }

        numbers[index--] = min;
        numbers[index]++;
      }

      index = depth - 1;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = intervalDigitSum;
    }
    exports.intervalDigitSum = intervalDigitSum;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return intervalDigitSum;
    });
  } else {
    root.intervalDigitSum = intervalDigitSum;
  }

})(this);
