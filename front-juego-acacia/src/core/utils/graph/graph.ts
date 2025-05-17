// Graph.ts
import { Graph, Edge } from './types';

export class GraphStructure {
  private adjacencyList: Graph = {};

  addNode(node: string): void {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(from: string, to: string, weight: number): void {
    this.addNode(from);
    this.addNode(to);
    this.adjacencyList[from].push({ target: to, weight });
    // Si es no-dirigido:
    // this.adjacencyList[to].push({ target: from, weight });
    //si es durugido no se agrega la siguiente linea
}

  getNeighbors(node: string): Edge[] {
    return this.adjacencyList[node] || [];
  }

  getNodes(): string[] {
    return Object.keys(this.adjacencyList);
  }

   getRaw(): Graph {
    return this.adjacencyList;
  }
}
