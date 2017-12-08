  // * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  // *
  // * Map accepts a mapping function as its only argument. It traverses the tree,
  // * passing each node's value into the mapping function, and generates a new
  // * tree containing the results.
  // *
  // * So `map` should return a tree with the same structure, and different values,
  // * but it should NOT modify the tree that was passed in.
  // *
  // * Example:
  // *   var root1 = new Tree(1);
  // *   var branch2 = root1.addChild(2);
  // *   var branch3 = root1.addChild(3);
  // *   var leaf4 = branch2.addChild(4);
  // *   var leaf5 = branch2.addChild(5);
  // *   var leaf6 = branch3.addChild(6);
  // *   var leaf7 = branch3.addChild(7);
  // *   var newTree = root1.map(function (value) {
  // *     return value * 2;
  // *   })
  // *  newTree.value // 2
  // *  newTree.children[0].value // 4
  // *  newTree.children[1].value // 6
  // *  newTree.children[0].children[1].value // 10
  // *  newTree.children[1].children[1].value // 14
  // *  root1.value // still 1
  // */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  //make a child tree passing in the input value
  var childTree = new Tree(value);
  //push the child tree to the parent children array
  this.children.push(childTree);
  return childTree;
};

Tree.prototype.map = function(cb) {
  //make a new tree passing in the cb result 
  var mappedTree = new Tree(cb(this.value));
  //define inner function and  recurse through all the tree's children
  var mapChildren = (rootTree, newTree) => {
    //iterate through all the children of the rootTree
    for (var i = 0; i < rootTree.children.length; i++) {
      //add a child to the new tree with the value of cb result
      newTree.addChild(cb(rootTree.children[i].value));
      //Recurse passing in root tree and new tree children objects 
      mapChildren(rootTree.children[i], newTree.children[i]);
    }
  };
  //invoke recursive function
  mapChildren(this, mappedTree);
  return mappedTree;
};


var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
  return value * 2;
});

console.log(newTree);





