import { useEffect, useState } from 'react'

import './App.css'
import Cube from './components/Cube'
import Platform from './components/Platform'
function App() {
  // Set the initial state for the cubes positions
  // The array contains the IDs of the cubes in their initial positions
  const teamAColor = '#ff0000'
  const teamBColor = '#0000ff'
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

  // useEffect(() => {
  //   renderCubes()
  // }, [renderCubes])

  // Function to handle the click event on the button
  function handleClick() {
    // Update the cubesPositions state with a new array of cube IDs
    // This is just an example, you can implement your own logic to change the positions
    const resetCubes = cubes.map(cube => {
      const original = originalCubes.find(o => o.id === cube.id)
      return original ? { ...original } : { ...cube }
    })

    const shuffled = [...resetCubes]

    // Algoritmo de Fisher-Yates para mezclar el array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // Shuffle the newPositions array randomly
    // This will change the order of the cubes in the grid



    setCubes(shuffled)
    setCubesPositions(shuffled.map(cube => cube.id))
    renderCubes()
  }

  return (
    <>
      <h1>Juego de Cubos</h1>
      <button onClick={handleClick}>Cambiar cubos</button >
      <div className="card">
        {renderCubes()}
      </div>
      <Platform></Platform>

    </>
  )
}

export default App
