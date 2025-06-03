// export function dijkstra(
//     graph: Map<number, number[]>,
//     start: number
// ): { distancias: Map<number, number>, anteriores: Map<number, number | null> } {
//     const distancias = new Map<number, number>();
//     const anteriores = new Map<number, number | null>();
//     const visitados = new Set<number>();

//     const nodos = Array.from(graph.keys());

//     // Inicialización
//     for (const nodo of nodos) {
//         distancias.set(nodo, Infinity);
//         anteriores.set(nodo, null);
//     }
//     distancias.set(start, 0);

//     while (visitados.size < nodos.length) {
//         // Buscar el nodo no visitado con menor distancia conocida
//         let nodoActual: number | null = null;
//         let distanciaMinima = Infinity;

//         for (const nodo of nodos) {
//             if (!visitados.has(nodo) && distancias.get(nodo)! < distanciaMinima) {
//                 distanciaMinima = distancias.get(nodo)!;
//                 nodoActual = nodo;
//             }
//         }

//         // Si no se encontró ningún nodo alcanzable, se terminó
//         if (nodoActual === null) break;

//         visitados.add(nodoActual);

//         const vecinos = graph.get(nodoActual) || [];
//         for (const vecino of vecinos) {
//             if (visitados.has(vecino)) continue;

//             const nuevaDistancia = distancias.get(nodoActual)! + 1;
//             if (nuevaDistancia < distancias.get(vecino)!) {
//                 distancias.set(vecino, nuevaDistancia);
//                 anteriores.set(vecino, nodoActual);
//             }
//         }
//     }

//     return { distancias, anteriores };
// }



// export function caminoMasCorto(
//     graph: Map<number, number[]>,
//     inicio: number,
//     fin: number
// ): number[] {
//     const { anteriores } = dijkstra(graph, inicio);

//     const camino: number[] = [];
//     let actual: number | null = fin;

//     while (actual !== null) {
//         camino.unshift(actual);
//         if (actual === inicio) break;
//         actual = anteriores.get(actual) ?? null;
//     }

//     // Si no se llegó al nodo de inicio, no hay camino
//     if (camino[0] !== inicio) return [];
//     console.log("Camino encontrado:");
//     console.log(camino);
//     return camino;
// }


/**
 * @param {Graph} graph some graph.
 * @param {Object} source node to search from.
 */


/**
 * @constructor
 */
import { FibonacciHeap } from '@tyriar/fibonacci-heap';
import deepEqual from 'deep-equal';

import { Graph } from './graph/Graph';

export function Dijkstra(graph: Graph, source: number): Record<number, number | null> {
  const queue = new FibonacciHeap<number, number>();
  const dist: Record<number, number> = {};
  const prev: Record<number, number | null> = {};

  dist[source] = 0;

  for (const vertex of graph.vertices) {

    if (!deepEqual(vertex, source)) {
      dist[vertex] = Infinity;
      prev[vertex] = null;
    }

    queue.insert(dist[vertex] ?? 0, vertex);
  }

  while (!queue.isEmpty()) {
    const next = queue.extractMinimum()?.value;
    if (!next) break;

    const neighbors = graph.neighbors(next);

    for (const neighbor of neighbors) {
      const alt = dist[next] + graph.distance(next, neighbor);

      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
        prev[neighbor] = next;

        // Fib heap no soporta "update" nativamente, así que deberías manejar referencias
        // de nodos si quieres eficiencia real. Aquí lo simplificamos:
        queue.insert(alt, neighbor);
      }
    }
  }

  return prev;
}

export function reconstruirCamino(
  prev: Record<string, number | null>,
  inicio: number,
  destino: number
): number[] {
  const camino: number[] = [];
  let actual: number | null = destino;

  while (actual !== null && prev[actual] !== undefined) {
    camino.unshift(actual);
    if (actual === inicio) break;
    actual = prev[actual] ?? null; // <- aquí estamos diciendo: si es undefined, pásalo como null
  }

  if (camino[0] !== inicio) {
    //return [];
  }

  return camino;
}





