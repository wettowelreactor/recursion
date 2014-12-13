// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var index;
  var tokens = json.split(/((?:"(?:[^"\\]|\\.)*")|:|,|{|}|[|])/);

  for (index = 0; index < tokens.length; index += 1) {
    tokens[index] = tokens[index].trim();
  }

  while (tokens.indexOf('') !== -1) {
    tokens.splice(tokens.indexOf(''), 1);
  }

  if (json[0] === '[' && json[json.length-1] === ']') {

  } else if (json[0] === '{' && json[json.length-1] === '}') {

  } else {
    throw new TypeError('invalid JSON');
  }
};
