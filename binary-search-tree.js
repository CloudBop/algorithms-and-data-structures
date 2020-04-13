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
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insertIteratvive(100);
tree.insertIteratvive(200);
tree.insertIteratvive(300);
tree.insertIteratvive(-100);
tree.insertIteratvive(-200);
tree.insertIteratvive(-300);
