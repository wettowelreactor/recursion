// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var index;
  var elements = [];
  var root = arguments[1] ? arguments[1] : document.body;
  var children = root.childNodes;

  if (root.classList && root.classList.contains(className)) {
    elements.push(root);
  }

  if (children.length > 0) {
    for (index = 0; index < children.length; index += 1) {
      elements.concat(getElementsByClassName(className, children[index]));
    }
  }

  return elements;
};
