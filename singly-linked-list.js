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
      // connect current head to new head
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  // get itemAt
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    //
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // set itemAt
  set(idx, value) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
  // insert itemAt
  insert(idx, val) {
    // invalid cases
    if (idx < 0 || idx > this.length) return false;
    // begging and end
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    // get node before new idx
    let insertAfterNode = this.get(idx - 1);
    const newNode = new Node(val);

    newNode.next = insertAfterNode.next;
    insertAfterNode.next = newNode;
    this.length++;

    return true;
  }
  //
  remove(idx) {
    // out of bounds
    if (idx < 0 || idx >= this.length) return undefined;
    // first+last
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    // get node before the node to remove
    let prevNode = this.get(idx - 1);
    // get removedNode
    let removedNode = prevNode.next;
    // link prevNode to removedNode.next
    prevNode.next = removedNode.next;
    //
    this.length--;
    return removedNode;
  }
  // iterative - no copies, swapped in place!
  reverseInPlace() {
    //
    let next,
      // has to be null for last item in list
      prev = null,
      node = this.head;
    // swap
    this.head = this.tail;
    this.tail = node;
    // reconstructs list in reverse
    for (let i = 0; i < this.length; i++) {
      //
      next = node.next;
      //
      node.next = prev;
      //
      prev = node;
      //
      node = next;
    }
    return this;
  }
  //
  recursiveReverse() {
    let current = this.shift();
    if (this.length > 1) this.recursiveReverse();
    this.push(current.val);
    return this;
  }
  //
  // methods below for diagnostics
  //
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      // basecase
      current = current.next;
    }
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();
list.push('100!');
list.push('200');
list.push('300!');
list.push('400');
list.push('500');
list.push('600');
list.push('700');
