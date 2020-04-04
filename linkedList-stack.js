// has to follow lifo (last-in-first-out) principle
// singularly linked list implementation - stack;
// NOTE: Stack.push and Stack.pop should be constant time.
// SLL push and pop are not constant time. They're O(n) as need to loop through the list.
// Use shift, unshift instead! The opposite of the array.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    //
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // store ref to prev head
      const prev = this.first;
      // assign first to new node
      this.first = newNode;
      // link prevFirstNode to next of new head
      this.first.next = prev;
    }
    // increment size
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    //
    const temp = this.first;
    //
    if (this.first === this.last) {
      // edgecase - set to null
      this.last = null;
    }
    // set the first item to next
    this.first = this.first.next;
    // break link - unnecessary and pedantic as obj not returned so delegates to garbage collector
    temp.next = null;
    //
    this.size--;
    //
    return temp.value;
  }
}

const myStack = new Stack();
myStack.push('FirstItem');
myStack.push('Hello');
myStack.push('-');
myStack.push('World');
myStack.push('-');
myStack.push('!!!');
myStack.push('LastItem');
