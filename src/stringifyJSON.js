// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var index, result, keys;

  if (obj === undefined || typeof(obj) === 'function') {
    throw new SyntaxError("invalid JSON");
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    result = '[';

    for(index = 0; index < obj.length; index += 1) {
      if (result !== '[') {
        result += ', ';
      }
      result += stringifyJSON(obj[index]);
    }

    return result + ']';

  } else if (typeof(obj) === 'object') {
    keys = Object.keys(obj);
    result = '{';

    for (index = 0; index < keys.length; index += 1) {
      if (result !== '{') {
        result += ', ';
      }
      result += key.toString() + ' : ' + stringifyJSON(obj[key]);
    }

    return result + '}';

  } else {
    return obj.toString();
  }
};
