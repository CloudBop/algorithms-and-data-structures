// list node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
//
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // push item to end
  push(val) {
    let newNode = new Node(val);
    //
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // link the current tail.next to newNode
      this.tail.next = newNode;
      // link the newNode prev to current tail
      newNode.prev = this.tail;
      // reassign the tail to newNode
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
//
