var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.count = 0;

queueMethods.uncount = 0;

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.uncount];
  delete this.storage[this.uncount];
  this.uncount++;
  return temp;
};

queueMethods.size = function() {
  if (this.count - this.uncount < 0) {
    return 0;
  }

  return this.count - this.uncount;
};
