var Queue = function(){
  var newQueue = {storage: {}};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  counter: 0,
  decrement: 0,
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    if (this.counter - this.decrement > 0) {
      var temp = this.storage[this.decrement];
      delete this.storage[this.decrement];
      this.decrement++;
      return temp;
    }
  },
  size: function() {
    return this.counter - this.decrement;
  }
};



