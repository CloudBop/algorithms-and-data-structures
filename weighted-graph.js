class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVrtx(vertex) {
    //
    if (!this.adjacencyList) this.adjacencyList[vertex] = [];
  }

  addEgde(vrtc1, vrtc2, weight) {
    this.adjacencyList[vrtc1].push({ node: vrtc2, weight });
    this.adjacencyList[vrtc2].push({ node: vrtc1, weight });
  }
}
