var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));

};

treeMethods.contains = function(target){
  var condition = false;
  var traverse = function(node) {
    if (node.value === target) {
      condition = true;
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };

  traverse(this);
  return condition;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
