//
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVrtx(vertex) {
    //
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vrtc1, vrtc2, weight) {
    this.adjacencyList[vrtc1].push({ node: vrtc2, weight });
    this.adjacencyList[vrtc2].push({ node: vrtc1, weight });
  }
  dijkstaShortestPath(start, finish) {
    const nodes = new PriorityQueue();
    //store and check for shortest val (weight) between each node connections, verticies (edges) and A
    const distances = {};
    // store shortest connection val between each node
    const previous = {};
    const path = [];
    let smallest;
    //
    // initialise distances state
    for (let vertex in this.adjacencyList) {
      //
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      //
      previous[vertex] = null;
    }
    //
    // while there's still something to visit
    while (nodes.values.length) {
      //
      smallest = nodes.dequeue().val;
      //
      if (smallest === finish) {
        // analysed every route and found shortest path between each of the connected nodes in reverse
        // stored in previous from end to beginning. smallest = node
        while (previous[smallest]) {
          path.push(smallest);
          // pointer to next node with shortest weight
          smallest = previous[smallest];
          // this loop breaks as previous[0] === null
        }
        break;
      }

      // check all connections on this current node and if necessary update smallest connection in distances
      if (smallest || distances[smallest] !== Infinity) {
        //
        for (const neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          //
          // calc new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            // updating new smallest distance/route back to start
            distances[nextNeighbour] = candidate;
            // updating previous - how to get to neighbour - smallest/lightest(weight) neighbour
            previous[nextNeighbour] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);
          }
        }
      }
    }
    // - correct order of route.
    return path.concat(smallest).reverse();
  }
}
// binary heap priority
// insertion/removal O(log N)
// searching O(N)
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
//
const graph = new WeightedGraph();
graph.addVrtx('A');
graph.addVrtx('B');
graph.addVrtx('C');
graph.addVrtx('D');
graph.addVrtx('E');
graph.addVrtx('F');
//
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

/* example of graph created above
    A -- 4 -- B  
    |           \  
   2             3
  /               \
  C - 2 - D - 3 - E
  \        \     /
   \        1   1
    \        \ /
      4 ----- F

*/
