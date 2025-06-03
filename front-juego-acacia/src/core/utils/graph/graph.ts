export class Graph {
  private vertexToEdges: Record<number, Record<number, number>> = {};

  get vertices(): number[] {
    return Object.keys(this.vertexToEdges).map((vertex) => JSON.parse(vertex));
  }

  addVertex(vertex: number): void {

    if (!this.vertexToEdges[vertex]) {
      this.vertexToEdges[vertex] = {};
    }
  }

  addEdge(source: number, target: number, distance: number): void {

    if (!this.vertexToEdges[source]) this.vertexToEdges[source] = {};
    if (!this.vertexToEdges[target]) this.vertexToEdges[target] = {};

    this.vertexToEdges[source][target] = distance;
    this.vertexToEdges[target][source] = distance;
  }

  distance(source: number, target: number): number {

    return this.vertexToEdges[source][target];
  }

  neighbors(vertex: number): number[] {
    return Object.keys(this.vertexToEdges[vertex]).map((neighbor) =>
      JSON.parse(neighbor)
    );
  }
}