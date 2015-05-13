var Stack = function() {
 var newStack = {storage: {}};
 _.extend(newStack, stackMethods);
 return newStack;
};

var stackMethods = {
  counter: 0,
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;

  },
  pop: function() {
    if(this.counter > 0) {
      var temp = this.storage[this.counter - 1];
      delete this.storage[this.counter - 1];
      this.counter--;
      return temp;
    }
  },
  size: function() {
    return this.counter;
  }
};

//var giraffeStack = Stack();


