var Queue = function() {
  this.count = 0;
  this.uncount = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count - this.uncount > 0) {
    var temp = this.storage[this.uncount];
    delete this.storage[this.uncount];
    this.uncount++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.count - this.uncount;

};



