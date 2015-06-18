var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if( value < this.value ) {
    if( this.left === null ) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if( value > this.value ) {
    if( this.right === null ) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    return 'The tree already contains this value';
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if( target === this.value ) {
    return true;
  } else if( target < this.value ) {
    if( !this.left ) {
      return false;
    } else {
      return this.left.contains(target);
    }
  } else if( target > this.value ) {
    if( !this.right ) {
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if( this.left ) {
    this.left.depthFirstLog(callback);
  }
  if( this.right ) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
