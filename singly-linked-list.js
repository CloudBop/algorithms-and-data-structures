// list node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add item to end of list
  push(val) {
    const newNode = new Node(val);
    // initalise
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // link the current tail.next to the new node
      this.tail.next = newNode;
      // update tail to newNode
      this.tail = newNode;
    }
    //
    this.length++;
    return this;
  }
  // remove item from end
  pop() {
    if (!this.head) return undefined;
    //
    let current = this.head;
    let newTail = current;
    //
    while (current.next) {
      newTail = current;
      // update current, eventually this is item to remove
      current = current.next;
    }
    this.tail = newTail;
    // remove link to oldTail
    this.tail.next = null;
    // decrement length
    this.length--;
    // check if list is empty
    if (this.length === 0) {
      // redefine to null
      this.head = null;
      this.tail = null;
    }
    // the item removed
    return current;
  }
  // remove first item
  shift() {
    if (!this.head) return undefined;

    let removedHead = this.head;
    this.head = removedHead.next;
    // decrement length
    this.length--;
    // check if list is empty
    if (this.length === 0) {
      // redefine to null
      this.tail = null;
      // this.head will already be set to null
    }
    return removedHead;
  }
  // add item to beginning of the list
  unshift(val) {
    const newNode = new Node(val);
    // if init
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // WARNING: has to be in else statement or can create self-refering circular list
      // connect current head to new head
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  //
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      // basecase
      current = current.next;
    }
  }
}

var testList2 = new SinglyLinkedList();

testList2.push('Hello');
testList2.push('World');
testList2.push('!');
