class MaxBinaryHeap {
  //
  constructor() {
    this.values = [ 41, 39, 33, 18, 27, 12 ];
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
}

const binheap = new MaxBinaryHeap();

// binheap.insert(55);
