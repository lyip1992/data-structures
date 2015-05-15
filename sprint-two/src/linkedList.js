var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
       temp = new Node(value);
    if (list.tail) {
      list.tail.next = temp;
    }
    list.tail = temp;
    if (!list.head) {
      list.head = temp;
    }
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var temp = list.head;
    while (temp) {
      if (temp.value === target) {
        return true;
      }
      if (temp.next) {
        temp = temp.next;
      } else {
        return false;
      }

    };


  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
