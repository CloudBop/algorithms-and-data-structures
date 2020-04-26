class MaxBinaryHeap {
  //
  constructor() {
    this.values = [];
  }
  //
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    //
    let idx = this.values.length - 1;
    //
    const element = this.values[idx];
    //
    while (idx > 0) {
      // get parent 'node' of inserted element
      //  (n-1) / 2
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentVal = this.values[parentIdx];
      //
      if (element <= parentVal) break;
      // swap new element and its parent
      this.values[parentIdx] = element;
      this.values[idx] = parentVal;
      // check next idx | parent of parent
      idx = parentIdx;
      //
    }
  }
  // removes maximum value, the 'root' node of the heap.
  extractMax() {
    // current max value
    const max = this.values[0];
    // pop+reference last value
    const end = this.values.pop();
    // if extractmax is not last value
    if (this.values.length > 0) {
      // swap last item with first
      this.values[0] = end;
      // is the new root idx > || < than parentNodes
      this.sinkDown();
      //
    }
    return max;
  }
  sinkDown() {
    //
    let idx = 0;
    const length = this.values.length;
    //
    const elmnt = this.values[0];
    //
    while (true) {
      // get position of left + right children
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      //
      let leftChild, rightChild;
      let swap = null;
      //
      // if leftside !outOfBounds, idx may not exist in array throwing error
      if (leftChildIdx < length) {
        // left sided childnode
        leftChild = this.values[leftChildIdx];
        //
        if (leftChild > elmnt) {
          swap = leftChildIdx;
        }
      }
      // rightside
      if (rightChildIdx < length) {
        // right sided childnode
        rightChild = this.values[rightChildIdx];
        //
        if (
          (swap === null && rightChild > elmnt) ||
          // also need to compare left and right child, need to update/swap the larger of the two
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      // breakout
      if (swap === null) break;
      // make the swaps
      this.values[idx] = this.values[swap];
      this.values[swap] = elmnt;
      // update idx to next node
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
