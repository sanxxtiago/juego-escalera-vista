import { Graph } from '../../utils/graph/graph';


export function FP1() {

    const g = new Graph();

    const sources = [0, 0, 1, 2];
    const targets = [1, 2, 3, 3];

    g.crearDesdeListas(sources, targets);
    g.imprimir();

}

