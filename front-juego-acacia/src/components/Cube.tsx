//Import useState
import { useState, useEffect } from 'react';
import CubeConfigPopup from './CubeConfigPopup';

function Cube({ id, color, vibrationIntensity, iluminationFrequency }: { id: number; color: string, vibrationIntensity: number, iluminationFrequency: number }) {

    //Set id into a state variable
    const [cubeId, setCubeId] = useState(id);
    //Set color into a state variable
    const [cubeColor, setCubeColor] = useState(color);
    //Set vibrationIntensity into a state variable
    const [cubeVibrationIntensity, setCubeVibrationIntensity] = useState(vibrationIntensity);
    //Set iluminationFrequency into a state variable
    const [cubeIluminationFrequency, setCubeIluminationFrequency] = useState(iluminationFrequency);
    const cubeSize = 50 // Size of the cube in pixels

    useEffect(() => {
        // Update the cubeId state with the new ID
        setCubeId(id);
        // Update the cubeColor state with the new color
        setCubeColor(color);
        // Update the cubeVibrationIntensity state with the new vibration intensity
        setCubeVibrationIntensity(vibrationIntensity);
        // Update the cubeIluminationFrequency state with the new illumination frequency
        setCubeIluminationFrequency(iluminationFrequency);

    }, [id, color, vibrationIntensity, iluminationFrequency]);

    function handleClick() {
        // Handle the click event here
        // For example, you can change the cube color or perform some action
        console.log(`Cube ${cubeId} clicked!`);
        console.log("abrir popup");
        // You can also update the state to change the cube color or perform other actions
        return (
            <div>
                <CubeConfigPopup cubeprops={{ cubeId: cubeId, color: cubeColor, vibrationIntensity: cubeVibrationIntensity, iluminationFrequency: cubeIluminationFrequency }} />
            </div>
        )
    }

    return (
        <div
            style={{
                width: cubeSize + 'px',
                height: cubeSize + 'px',
                backgroundColor: color,
                display: 'inline-block',
                margin: '5px',
            }}>{cubeId}
            <button onClick={handleClick} style={{ marginLeft: '10px' }}></button>
        </div>
    );
}
export default Cube;