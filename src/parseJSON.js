// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var index;
  var tokens = json.split(/((?:"(?:[^"\\]|\\.)*")|:|,|{|}|[|])/);

  var parseArray = function(index) {
    var results = [];
    index = index ? index : 0;

    tokens.splice(index, 1);
    while (index < tokens.length && tokens[index] !== ']') {
      if (tokens[index] === '[') {
        parseArray(index);
      } else if (tokens[index] === '{') {
        pareObject(index);
      } else if (tokens[index] === ',') {
        tokens.splice(index, 1);
      } else {
        results.push(tokens[index]);
        tokens.splice(index, 1;)
      }
    }
    tokens.splice(index, 1);

    return results;
  };

  var parseObject = function() {

  };

  for (index = 0; index < tokens.length; index += 1) {
    tokens[index] = tokens[index].trim();
  }

  while (tokens.indexOf('') !== -1) {
    tokens.splice(tokens.indexOf(''), 1);
  }

  if (tokens[0] === '[' && tokens[tokens.length-1] === ']') {
    console.log('array branch');
    //parse array

  } else if (tokens[0] === '{' && tokens[tokens.length-1] === '}') {
    console.log('object branch');
    //parseObject

  } else {
    throw new TypeError('invalid JSON');
  }
};
