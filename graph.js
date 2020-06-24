class GraphUndirected {
  constructor() {
    this.adjacencyList = {};
  }
  //
  addVertex(vertex) {
    // dont overwrite
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    //
  }
  //
  addEdge(v1, v2) {
    // - will throw errors if undefined.
    //
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    // - will throw errors if undefined.
    //
    // if (this.adjacencyList[vertex1])
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    // if (this.adjacencyList[vertex2])
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  //
  removeVertex(vertex) {
    //
    while (this.adjacencyList[vertex].length) {
      //
      const adjacentVertex = this.adjacencyList[vertex].pop();
      //
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  //
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    //
    (function dfs(vertex) {
      // basecase
      if (!vertex) return null;
      //
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbour => {
        //
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);
    //
    //
    return result;
  }
  //
  depthFirstIterative(start) {
    // stack of vertices
    const stack = [ start ];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVrtx;
    //
    while (stack.length > 0) {
      //
      currentVrtx = stack.pop();
      result.push(currentVrtx);
      //
      this.adjacencyList[currentVrtx].forEach(connection => {
        //
        if (!visited[connection]) {
          visited[connection] = true;
          //
          stack.push(connection);
          //
        }
      });
    }
    //
    return result;
  }
  breadthFirstSearch(start) {
    // FIFO - queue
    const queue = [ start ];
    const result = [];
    const visitedVrtcs = {};
    visitedVrtcs[start] = true;
    let currentVrtx;
    //
    //
    while (queue.length) {
      //
      currentVrtx = queue.shift();
      result.push(currentVrtx);
      this.adjacencyList[currentVrtx].forEach(neighbour => {
        if (!visitedVrtcs[neighbour]) {
          visitedVrtcs[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new GraphUndirected();

//   A
//  / \
// B   C
// |   |
// D - E
//  \ /
//   F
//
//

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
//
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// - flights between airports
// g.addVertex('Dallas');
// g.addVertex('Tokyo');
// g.addVertex('London');
// g.addVertex('New York');
// g.addEdge('Dallas', 'New York');
// g.addEdge('London', 'New York');
// g.addEdge('Tokyo', 'New York');
// g.addEdge('London', 'Tokyo');
