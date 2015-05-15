var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage[item] = item;
};

setPrototype.contains = function(item){
  var condition = false;
  for (var key in this.storage) {
    if (this.storage[key] === item) {
      condition = true;
    }
  }
  return condition;
};

setPrototype.remove = function(item){
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
