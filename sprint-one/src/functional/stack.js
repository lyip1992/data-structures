var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    var result = storage[counter - 1];
    delete storage[counter - 1];
    counter--;
    return result;
  };

  someInstance.size = function(){
    if (counter < 0) {
      return 0;
    } else {
      return counter;
    }

  };

  return someInstance;
};
