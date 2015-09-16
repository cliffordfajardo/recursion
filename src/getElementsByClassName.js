// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];
  function getClassName(nodeList){
    var childrenArray = nodeList.children;
    _.each(childrenArray, function(element){
      if(element.classList && _.contains(element.classList, className)) {
        results.push(element)
      }
      if(element.children){
        getClassName(element)
      }
    })

  }

  getClassName(document)
  return results;
}
getElementsByClassName('suite');


// function x(){
//   var nodes = document.children;
//   _.each(nodes, function(element){
//     if(element.classList && _.contains(className)){

//     }
//   })
//   nodes.clas
// }
// x()