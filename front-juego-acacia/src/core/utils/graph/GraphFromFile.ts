import { LoadCSVFromFile } from '../../utils/LoadCSVData';

import sourcesPath from '@/assets/GraphData/SGrafo.csv?url';
import targetsPath from '@/assets/GraphData/TGrafo.csv?url';

import { Graph } from './Graph';

export async function LoadGraphFromFile() {
    const sources = await LoadCSVFromFile(sourcesPath);
    const targets = await LoadCSVFromFile(targetsPath);

    const graph = new Graph();

    for (let i = 0; i < sources.length; i++) {
        graph.addVertex(i + 1);
    }
    for (let i = 0; i < sources.length; i++) {
        graph.addEdge(sources[i], targets[i], 1);
    }

    return graph;
}