// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var index;
  var tokens = json.split(/((?:"(?:[^"\\]|\\.)*")|:|,|\{|\}|\[|\])/);

  var parseArray = function(index) {
    var results = [];
    index = index ? index : 0;

    tokens.splice(index, 1);
    while (index < tokens.length && tokens[index] !== ']') {
      if (tokens[index] === '[') {
        results.push(parseArray(index));
      } else if (tokens[index] === '{') {
        results.push(pareObject(index));
      } else if (tokens[index] === ',') {
        tokens.splice(index, 1);
      } else {
        results.push(tokens[index]);
        tokens.splice(index, 1);
      }
    }
    tokens.splice(index, 1);

    return results;
  };

  var parseObject = function(index) {
    var results = {};
    var key;
    index = index ? index : 0;

    tokens.splice(index, 1);
    while (index < tokens.length && tokens[index] !== '}') {
      if (tokens[index] === '[') {
        results[key] = parseArray(index); // assumes key as array cant be a key
      } else if (tokens[index] === '{') {
        results[key] = pareObject(index); // assumes key as object cant be a key
      } else if (tokens[index] === ',') {
        key = undefined;
        tokens.splice(index, 1);
      } else if (tokens[index] === ':') {
        tokens.splice(index, 1);
      } else {
        if (key) {
          results[key] = tokens[index];
        } else {
          key = tokens[index];
        }
        tokens.splice(index, 1);
      }
    }
    tokens.splice(index, 1);

    return results;
  };

  for (index = 0; index < tokens.length; index += 1) {
    tokens[index] = tokens[index].trim();
  }

  while (tokens.indexOf('') !== -1) {
    tokens.splice(tokens.indexOf(''), 1);
  }

  if (tokens[0] === '[' && tokens[tokens.length-1] === ']') {
    return parseArray(0);

  } else if (tokens[0] === '{' && tokens[tokens.length-1] === '}') {
    return parseObject(0);

  } else {
    throw new TypeError('invalid JSON');
  }
};
