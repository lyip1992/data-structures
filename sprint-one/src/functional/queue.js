var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var decrement = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if((count - decrement) > 0) {
      var temp = storage[decrement];
      delete storage[decrement];
      decrement++;
      return temp;
    }
  };

  someInstance.size = function(){
    return count - decrement;
  };

  return someInstance;
};
