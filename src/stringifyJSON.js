// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === undefined || typeof(obj) === 'function') {
    throw new SyntaxError("invalid JSON");
  } else if (Array.isArray(obj)) {
    console.log('array');
  } else if (typeof(obj) === 'object') {
    console.log('object');
  } else {
    return obj.toString();
  }
};
