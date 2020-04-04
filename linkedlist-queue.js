// follows fifo (first-in-first-out) principle
// NOTE: q.enque and q.dequeue should be constant time.
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
  enqueue(val) {
    const newNode = new Node(val);
    //
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // link current last to new last
      this.last.next = newNode;
      // assign newnode to last
      this.last = newNode;
    }
    // increment size
    return ++this.size;
  }
  dequeue() {
    // identical to stack.pop
    if (!this.first) return null;
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
