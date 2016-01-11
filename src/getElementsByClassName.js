/*
recreate a document.getElementsByClassName method
*/


var getElementsByClassName = function(className) {
  var results = [];

  function getClassName(nodeList) {
    var childrenArray = nodeList.children;
    _.each(childrenArray, function(element) {
      if (element.classList && _.contains(element.classList, className)) {
        results.push(element);
      }
      if (element.children) getClassName(element);
    });
  }

  getClassName(document);
  return results;
};
getElementsByClassName('suite');
