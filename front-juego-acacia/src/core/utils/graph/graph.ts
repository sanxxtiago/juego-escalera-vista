export class Graph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // Agrega un vértice si no existe
  addVertice(v: number): void {
    if (!this.adjacencyList.has(v)) {
      this.adjacencyList.set(v, []);
    }
  }

  // Agrega una arista (dirigida) entre dos vértices
  addArista(source: number, target: number): void {
    this.addVertice(source);
    this.addVertice(target);
    this.adjacencyList.get(source)!.push(target);

    // Si quieres grafo no dirigido, agrega también:
    // this.adjacencyList.get(target)!.push(source);
  }

  // Crea el grafo desde listas paralelas de nodos
  crearDesdeListas(sourceList: number[], targetList: number[]): void {
    if (sourceList.length !== targetList.length) {
      throw new Error('Las listas source y target deben tener la misma longitud');
    }

    for (let i = 0; i < sourceList.length; i++) {
      this.addArista(sourceList[i], targetList[i]);
    }
  }

  // Muestra el grafo (solo para debug)
  imprimir(): void {
    for (const [vertice, vecinos] of this.adjacencyList.entries()) {
      console.log(`${vertice} -> ${vecinos.join(', ')}`);
    }
  }

  // Accede al grafo para futuros algoritmos
  getListaAdyacencia(): Map<number, number[]> {
    return this.adjacencyList;
  }
}
