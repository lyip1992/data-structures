

var Graph = function() {
  this.vertices = {};
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.vertices[node] = node;
};

Graph.prototype.contains = function(node){
  return !!this.vertices[node];
};

Graph.prototype.removeNode = function(node){
  delete this.vertices[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.edges[fromNode] === toNode;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.edge[fromNode] === toNode) {
    delete this.edge[fromNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.vertices) {
    cb(this.vertices[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



