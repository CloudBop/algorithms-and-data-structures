class HashStringTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    // better bucketting, more distributuon spread
    let weirdPrime = 31;
    // maximum of 100 loops
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // maps a to 1, b to 2 z to 26
      let value = char.charCodeAt(0) - 96;
      //
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    //
    let idx = this._hash(key);
    //  WARNING: WILL ACCEPT DUPLICATE KEYS
    // seperate chaining
    if (!this.keyMap[idx]) {
      // if not exist create bucket
      this.keyMap[idx] = [];
    }
    // add value pair into bucket
    this.keyMap[idx].push([ key, value ]);
    //
    return idx;
  }
  get(key) {
    let idx = this._hash(key);
    //
    if (this.keyMap[idx]) {
      //
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        // keys stored in sub array bucket, loop through bucket items
        if (this.keyMap[idx][i][0] === key) {
          //
          return this.keyMap[idx][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    //
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //
      if (this.keyMap[i]) {
        // sub array
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            // dont allow duplicate keys
            keysArray.push(this.keyMap[i][j][0]);
          }
          //
        }
      }
    }
  }
  values() {
    //
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //
      if (this.keyMap[i]) {
        // sub array
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            // dont allow duplicate values
            valuesArr.push(this.keyMap[i][j][1]);
          }
          //
        }
      }
    }
    //
    return valuesArr;
  }
}

let ht = new HashStringTable(13);
ht.set('maroon', '#800000');
ht.set('yellow', '#ffff00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
// for testing duplicate values
ht.set('violet', '#DDA0DD');
ht.set('purple', '#DDA0DD');

// REALLY BASIC HASH EXAMPLES
// function basicHash1(key, arrayLen) {
//   let total = 0;
//   // maps a to 1, b to 2 z to 26
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return len;
// }
// //
// //
// function slightlyBetterHash(key, arrayLen) {
//   let total = 0;
//   // better bucketting, more distributuon spread
//   let weirdPrime = 31;
//   // maximum of 100 loops
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
// let char = key[i]
//     // maps a to 1, b to 2 z to 26
//     let value = char.charCodeAt(0) - 96;
//     //
//     total = (total * weirdPrime + value) % arrayLen;
//   }
//   return len;
// }
