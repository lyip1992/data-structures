var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (i === 0) {
    if (!this._storage.get(i)) {
      var temp = new LinkedList();
      temp.addToTail(v);
      this._storage.set(i, temp);
    } else {
      var temp = this._storage.get(i);
      temp.addToTail(v);
      this._storage.set(i, temp);
    }
  } else {
    this._storage.set(i, v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (i === 0) {
    if (this._storage.get(i).contains(k)) {
      return k;
    } else {
      return;
    }
  } else {
    return this._storage.get(i);
  }


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
