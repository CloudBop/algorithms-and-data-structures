// array implementation stack;
// has to follow lifo (last-in-first-out) principle
const stackFromEnd = [];
// at to end
stackFromEnd.push('google');
stackFromEnd.push('facebook');
stackFromEnd.push('youtube');
// remove from end
stackFromEnd.pop();
stackFromEnd.pop();
stackFromEnd.pop();
/* 
Above is better as the array doesn't need to be reindex.
Below is worse as every item is re-indexed
*/
const stackFromBeginning = [];
// at to beginning
stackFromBeginning.unshift('google');
stackFromBeginning.unshift('facebook');
stackFromBeginning.unshift('youtube');
// remove from beginning
stackFromBeginning.shift();
stackFromBeginning.shift();
stackFromBeginning.shift();
