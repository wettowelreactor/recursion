// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.trim();

  if (json[0] === '[' && json[json.length-1] === ']') {

  } else if (json[0] === '{' && json[json.length-1] === '}') {

  } else {
    throw new TypeError('invalid JSON');
  }
};
