var Graph = function() {
  this._nodes = {};
};

Graph.prototype.addNode = function(node) {
  if( node ) {
    this._nodes[node] = this._nodes[node] || { edges: [] };
  }
};

Graph.prototype.contains = function(node) {
  return !(this._nodes[node] === undefined);
};

Graph.prototype.removeNode = function(node) {
  if( this.contains(node) ) {
    for( var targetNode in this._nodes[node].edges) {
      this._removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this._nodes[fromNode].edges.indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if( fromNode === undefined || toNode === undefined ) {
    return null;
  }
  if( this._nodes[fromNode].edges.indexOf(toNode) === -1 ) {
    this._nodes[fromNode].edges.push(toNode);
  }
  if( this._nodes[toNode].edges.indexOf(fromNode) === -1 ) {
    this._nodes[toNode].edges.push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var spliceIndex = this._nodes[fromNode].edges.indexOf(toNode);
  if( spliceIndex !== -1 ) {
    this._nodes[fromNode].edges.splice(spliceIndex, 1);
  }
  spliceIndex = this._nodes[toNode].edges.indexOf(fromNode) !== -1;
  if( spliceIndex !== -1 ) {
    this._nodes[toNode].edges.splice(spliceIndex, 1);
  }

};

Graph.prototype.forEachNode = function(cb){
  for( var node in this._nodes ) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
