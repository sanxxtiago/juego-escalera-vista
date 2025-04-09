import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cube from './components/Cube'
import Platform from './components/Platform'
function App() {
  // Set the initial state for the cubes positions
  // The array contains the IDs of the cubes in their initial positions
  // The element (0) represents an empty space
  const [cubesPositions, setCubesPositions] = useState([1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10])

  const teamAColor = 'red'
  const teamBColor = 'blue'
  const defaultVibrationIntensity = 0
  const defaultIluminationFrequency = 0


  //function to render the cubes
  function renderCubes() {
    console.log('Cubes positions:', cubesPositions)
    return (
      <div className="card">
        {cubesPositions.map((cubeId, index) => {
          // Check if the cubeId is 0, which represents an empty space
          if (cubeId === 0) {
            return (
              <Cube
                key={index}
                id={cubeId}
                color={'gray'}
                vibrationIntensity={defaultVibrationIntensity}
                iluminationFrequency={defaultIluminationFrequency}
              />
            )
          } else {
            // Render the Cube component with the cubeId and other properties
            if (cubeId >= 1 && cubeId < 6) {
              return (
                <Cube
                  key={index}
                  id={cubeId}
                  color={teamAColor}
                  vibrationIntensity={defaultVibrationIntensity}
                  iluminationFrequency={defaultIluminationFrequency}
                />
              )
            } else if (cubeId >= 6 && cubeId < 11) {
              return (
                <Cube
                  key={index}
                  id={cubeId}
                  color={teamBColor}
                  vibrationIntensity={defaultVibrationIntensity}
                  iluminationFrequency={defaultIluminationFrequency}
                />
              )
            }
          }
        })}
      </div>
    )
  }

  // Function to handle the click event on the button
  function handleClick() {
    // Update the cubesPositions state with a new array of cube IDs
    // This is just an example, you can implement your own logic to change the positions
    const newPositions = [1, 9, 3, 4, 10, 5, 6, 7, 8, 2, 0]
   
    newPositions.sort(()=> Math.random() - 0.5) // Shuffle the array randomly
    setCubesPositions(newPositions)
    renderCubes()
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Cambiar cubos</button >
      <div className="card">
        {renderCubes()}
      </div>
      <Platform></Platform>

    </>
  )
}

export default App
