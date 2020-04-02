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
  // push item to end and return list
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
  // remove last item and return it
  pop() {
    // list is length 0
    if (!this.tail) return undefined;
    //
    let removedNode = this.tail;
    if (this.length === 1) {
      // this pop is emptying our list
      this.head = null;
      this.tail = null;
    } else {
      // assign the prev to be tail
      this.tail = removedNode.prev;
      // the tail has no next
      this.tail.next = null;
      // sever connection from removedNode otherwise removedNode still access via it's prev
      removedNode.prev = null;
    }
    //
    this.length--;
    return removedNode;
  }
  // remove first item from list
  shift() {
    //
    if (!this.head) undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      // this pop is emptying our list
      this.head = null;
      this.tail = null;
    } else {
      // assign removed head.next to new head
      this.head = removedNode.next;
      // remove prev from new head
      this.head.prev = null;
      // sever connections on removedNode
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }
}

let myTestList = new DoubleLinkedList();

myTestList.push(100);
myTestList.push(200);
myTestList.push(400);
myTestList.push(600);
myTestList.push(800);
myTestList.push(1000);
