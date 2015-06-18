var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var idx = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(idx);

  if( !bucket ) {
    bucket = [];
    this._storage.set(idx, bucket);
  }

  for( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if( tuple[0] === key) {
      tuple[1] = value;
      return;
    }
  }

  bucket.push([ key, value ]);
  this._size++;
  if( this._size > 0.75 * this._limit ) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(key) {
  var idx = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(idx);

  if( !bucket ) {
    return null;
  }

  for( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if( tuple[0] === key ) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(key) {
  var idx = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(idx);

  if( !bucket ) {
    return null;
  }

  for( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if( tuple[0] === key ) {
      bucket.splice(i, 1);
      this._size--;
      if( this._size < 0.25 * this._limit) {
        this.resize( this._limit / 2 );
      }
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.resize = function(newSize) {
  var oldStorage = this._storage;
  this._storage = new LimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;

  oldStorage.each(function(bucket) {
    if( !bucket ) { return; }
    for( var i = 0; i < bucket.length; i++ ) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
