//
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert iterative
  insertIteratvive(value) {
    const node = new Node(value);
    //
    if (this.root === null) {
      this.root = node;
      //
      return this;
    } else {
      //
      var current = this.root;
      // this logic could simplified but then less verbose
      while (true) {
        // if this value alreasy exists
        if (value === current.value) return undefined;
        //
        if (value < current.value) {
          //
          if (current.left === null) {
            // insert node at this position
            current.left = node;
            return this;
          } else {
            // check next node;
            current = current.left;
          }
        } else if (value > current.value) {
          //
          if (current.right === null) {
            // insert node at this position
            current.right = node;
            return this;
          } else {
            // check next node;
            current = current.right;
          }
        }
      }
    }
    //
    // VSCode realises we never get here
    // return this;
  }
  // returns node with this value
  find(value) {
    //
    if (this.root === null) return false;
    //
    var current = this.root,
      found = false;

    while (current && !found) {
      //
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    //
    return current;
  }
  // returns bool
  constains(value) {
    //
    if (this.root === null) return false;
    //
    var current = this.root,
      found = false;

    while (current && !found) {
      //
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
    //
  }
  //
  breadthFirstSearch() {
    // test for bfs
    // [10,6,15,3,8,20]
    //
    var data = [],
      // FIFO
      queue = [],
      node = this.root;
    //
    queue.push(this.root);
    // empty arrays aren't falsey
    while (queue.length) {
      // remove first item
      node = queue.shift();
      // node || node.value
      data.push(node.value);
      //
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    //
    return data;
  }
  // root is first item
  depth1stSearch_preOrder() {
    // test
    // [10, 6, 3, 8, 15, 20]
    var data = [],
      current = this.root;
    function traverseHelper(node) {
      // node || node.value
      data.push(node.value);
      //
      if (node.left) traverseHelper(node.left);
      if (node.right) traverseHelper(node.right);
    }
    //
    traverseHelper(current);
    return data;
  }
  //
  // root is last item
  depth1stSearch_postOrder() {
    // test
    // [3, 8, 6, 20, 15, 10]
    var data = [],
      current = this.root;
    function traverseHelper(node) {
      // node || node.value
      //
      if (node.left) traverseHelper(node.left);
      if (node.right) traverseHelper(node.right);
      //
      data.push(node.value);
    }
    //
    traverseHelper(current);
    return data;
  }
}
//
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//
var tree = new BinarySearchTree();

/*
`
     10
   6   15
  3 8    20
`
*/
tree.insertIteratvive(10);
tree.insertIteratvive(6);
tree.insertIteratvive(15);
tree.insertIteratvive(3);
tree.insertIteratvive(8);
tree.insertIteratvive(20);

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// tree.insertIteratvive(100);
// tree.insertIteratvive(200);
// tree.insertIteratvive(300);
// tree.insertIteratvive(-100);
// tree.insertIteratvive(-200);
// tree.insertIteratvive(-300);
