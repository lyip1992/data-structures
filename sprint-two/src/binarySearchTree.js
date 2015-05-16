var BinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value && this.right === null) {
    this.right = new BinarySearchTree(value);
  }

  if (value > this.value && this.right) {
    this.right.insert(value);
  }

  if (value < this.value && this.left === null) {
    this.left = new BinarySearchTree(value);
  }

  if (value < this.value && this.left) {
    this.left.insert(value);
  }

};

BinarySearchTree.prototype.contains = function(target) {
  var condition = false;

  var check = function(item) {

    if (item.value === target) {
      condition = true;
    }

    if (target < item.value && item.left) {
      check(item.left);
    }
    if (target > item.value && item.right) {
      check(item.right);
    }

  };

  check(this);

  return condition;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

  var loop = function(item) {
    if (item.value) {
      callback(item.value);
    }

    if (item.left) {
      loop(item.left);

    }

    if (item.right) {
      loop(item.right);
    }
  }

  loop(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
