// FIFO - first in first out
// - notice, no way of being efficient O(1)
//
let q = [];
// add items to end
q.push('first');
q.push('second');
q.push('third');
// remove item from start - whole array needs to be reindexed
q.unshift();
//
let q2 = [];
// add items to beginning - whole array needs to b reindexed
q2.shift('first');
q2.shift('second');
q2.shift('third');
// remove items from end
q.pop();
