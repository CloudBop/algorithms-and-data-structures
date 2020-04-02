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
  // add new item to head
  unshift(val) {
    let newNode = new Node(val);
    //
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // link prev (newNode) to current head
      this.head.prev = newNode;
      // link newNode.next to current head
      newNode.next = this.head;
      // assign newNode to head
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get item at
  get(idx) {
    // cannot be smaller than 0 or larger or = length (0 index)
    if (idx < 0 || idx >= this.length) return undefined;
    //
    let current, count;
    if (idx <= this.length / 2) {
      // first 1/2 start at head
      count = 0;
      current = this.head;
      while (count != idx) {
        // look to next item
        current = current.next;
        // and increment
        count++;
      }
      //
    } else {
      //2nd half start at end
      count = this.length - 1;
      //
      current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
}

let myTestList = new DoubleLinkedList();

myTestList.push(100);
myTestList.push(200);
myTestList.push(400);
myTestList.push(600);
myTestList.push(800);
myTestList.push(1000);

/**
 * Get method with single loop
 * 
get(){
  if(index < 0 || index >= this.length) return null;
  if(index === this.length) return this.tail;
  let currentNode = (index <= (this.length/2)) ? this.head: this.tail;
  let traverseDirection = (index <= (this.length/2)) ? 'next': 'prev';
  if(index > (this.length/2)) {
      index = ((this.length - 1) - index); 
  }
  for(let i = 0; i < index; i++) {
      currentNode = currentNode[traverseDirection];
  }
  return currentNode;
}
 */
