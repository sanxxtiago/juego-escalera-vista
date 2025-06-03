import { useEffect, useState, useRef } from 'react'
import sound1 from './assets/sounds/loop.mp3';

import './App.css'
import Cube from './components/Cube'
import Platform from './components/Platform'
function App() {
  // Set the initial state for the cubes positions
  // The array contains the IDs of the cubes in their initial positions
  const teamBColor = '#ff0000'
  const teamAColor = '#0000ff'
  const emptySpaceColor = '#808080'
  const defaultVibrationIntensity = 0.3
  const defaultIluminationFrequency = 0.3

  // The element (0) represents an empty space
  const originalCubes = [
    { id: 1, color: teamAColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 2, color: teamAColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 3, color: teamAColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 4, color: teamAColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 5, color: teamAColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 0, color: emptySpaceColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 6, color: teamBColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 7, color: teamBColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 8, color: teamBColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 9, color: teamBColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency },
    { id: 10, color: teamBColor, vibrationIntensity: defaultVibrationIntensity, iluminationFrequency: defaultIluminationFrequency }
  ]

  const [cubes, setCubes] = useState([...originalCubes])
  const [cubesPositions, setCubesPositions] = useState([1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10])

  //function to render the cubes
  function renderCubes() {
    console.log('Cubes positions:', cubesPositions)
    return (
      <div className="card">
        {cubes.map((cube, index) => (
          <Cube
            key={index}
            id={cube.id}
            color={cube.color}
            vibrationIntensity={cube.vibrationIntensity}
            iluminationFrequency={cube.iluminationFrequency}
            onUpdate={(newValues) => {
              const updated = [...cubes];
              updated[index] = { ...updated[index], ...newValues };
              setCubes(updated);
            }}
          />
        ))}

      </div>
    )
  }

  //Audio player
  // Dentro de App()
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  const playAudioById = (id: number) => {
    const sounds: { [key: number]: string } = {
      1: sound1,
      2: sound1,
      3: sound1,
      4: sound1,
      5: sound1,
    };

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const newAudio = new Audio(sounds[id]);
    newAudio.play();
    setCurrentAudio(newAudio);
  };
  //

  const [trayectoria, setTrayectoria] = useState<number[][]>([])
  const firstUpdate = useRef(true)

  useEffect(() => {
    // This effect runs when the component mounts
    // It sets the initial state of the cubes positions
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    setTrayectoria(trayectoria => [...trayectoria, cubesPositions])
  }, [cubesPositions])

  // Function to handle the click event on the button
  async function handleClick() {
    // Update the cubesPositions state with a new array of cube IDs
    // This is just an example, you can implement your own logic to change the positions
    /*const resetCubes = cubes.map(cube => {
      const original = originalCubes.find(o => o.id === cube.id)
      return original ? { ...original } : { ...cube }
    })

    const shuffled = [...resetCubes]

    // Algoritmo de Fisher-Yates para mezclar el array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }*/

    //generate a random number between 0 and 10 and compare it with the cube id
    //if the number is equal to 0 generate a new random number until it is different from 0
    //if the number is different from 0 set the cube id to the new random number

    // Copia del estado actual
    const updatedPositions = [...cubesPositions];

    // Encontrar la posición del cubo vacío (id === 0)
    const emptyIndex = updatedPositions.findIndex(id => id === 0);

    // Obtener índices válidos (que no sean el hueco)
    const nonEmptyIndices = updatedPositions
      .map((id, index) => ({ id, index }))
      .filter(c => c.id !== 0);

    // Elegir un cubo aleatorio
    const randomCube = nonEmptyIndices[Math.floor(Math.random() * nonEmptyIndices.length)];

    // Intercambiar posiciones en el arreglo de posiciones
    [updatedPositions[emptyIndex], updatedPositions[randomCube.index]] =
      [updatedPositions[randomCube.index], updatedPositions[emptyIndex]];

    // Reconstruir el array de cubos según la nueva posición
    const newCubes = updatedPositions.map(id => {
      return cubes.find(cube => cube.id === id)!; // "!" porque el ID siempre existe
    });





    // Shuffle the newPositions array randomly
    // This will change the order of the cubes in the grid
    stopAudio(); // 🛑 Detener el audio aquí
    // Actualizar estado
    setCubes(newCubes);
    setCubesPositions(updatedPositions);
    renderCubes()

    console.log(trayectoria)
  }

  return (
    <>
      <h1>Juego Escalera Inteligente</h1>
      <button onClick={handleClick}>Cambiar cubos</button >
      <div className="card">
        {renderCubes()}
      </div>
      <Platform
        playSound={playAudioById}
        currentSoundId={1}
      />

    </>
  )
}

export default App
