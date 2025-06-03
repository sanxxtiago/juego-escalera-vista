import { Dijkstra, reconstruirCamino } from '../../utils/Dijkstra';
import { LoadGraphFromFile } from '../../utils/graph/GraphFromFile';

export async function FP1() {
    // Carga los datos correctamente
    const states: Array<Array<number>> = [
        [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 6, 5, 0, 7, 8, 9, 10],

    ];

    const current: number = 0;
    const last: number = states.length - 1;

    const graph = await LoadGraphFromFile();
   
    const prev = Dijkstra(graph, current);
    const path = reconstruirCamino(prev, current, last)
    console.log(path);
    const betterState = states[path[0]];

    const cubeToMove = (() => {
        for (let i = 0; i < 11; i++) {
            if (betterState[i] === 0) {
                return i;
            }
        }
        return -1;
    })(); //cubo a mover

    const int_vibration = 0.23; //suave
    const rgb = [173, 216, 230]; //azul claro
    const frequency = 1; //frecuencia de iluminacion
    const sound = 1;

    const cube = {
        id: cubeToMove,
        color: rgb,
        vibrationIntensity: int_vibration,
        iluminationFrequency: frequency,
        soundId: sound
    }

    //return the cube to move
    return cube;
}

