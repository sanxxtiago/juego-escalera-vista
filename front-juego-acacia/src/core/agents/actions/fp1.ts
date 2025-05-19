import { LoadCSVFromFile } from '../../utils/LoadCSVData';
import sourcesPath from '@/assets/GraphData/SGrafo.csv?url';
import targetsPath from '@/assets/GraphData/TGrafo.csv?url';

import { Graph, Dijkstra, reconstruirCamino } from '../../utils/Dijkstra';

export async function FP1() {
    // Carga los datos correctamente
    const states: Array<Array<number>> = [
        [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 6, 5, 0, 7, 8, 9, 10],

    ];

    const sources = await LoadCSVFromFile(sourcesPath);
    const targets = await LoadCSVFromFile(targetsPath);

    const current: number = 0;
    const last: number = states.length - 1;

    const graph = new Graph();
    // graph.addVertex(1);
    // graph.addVertex(2);
    // graph.addVertex(3 );
    // graph.addVertex(4);
    // graph.addVertex(5 );
    // graph.addVertex(6);
    // graph.addEdge(1, 2, 5);
    // graph.addEdge(1, 4, 5);
    // graph.addEdge(1, 5, 5);
    // graph.addEdge(2, 3, 5);
    // graph.addEdge(3, 4, 5);
    // graph.addEdge(3, 6, 5);
    // graph.addEdge(4, 5, 5);
    // graph.addEdge(4, 6, 5);
    // graph.addEdge(5, 6, 5);
    //create the graph using the sources and targets

    for (let i = 0; i < sources.length; i++) {
        graph.addVertex(i + 1);
    }
    for (let i = 0; i < sources.length; i++) {
        graph.addEdge(sources[i], targets[i], 1);
    }

    const prev = Dijkstra(graph, current);
    const path = reconstruirCamino(prev, current, last)
    console.log(path);
    const betterState = states[path[0]];
    let cubeToMove = 1;
    for (let i = 0; i < 11; i++) {
        if (betterState[i] === 0) {
            cubeToMove = i;
        }
    }
}

