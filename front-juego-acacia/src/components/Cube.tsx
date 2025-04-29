//Import useState
import { useState, useEffect } from 'react';
import CubeConfigPopup from './CubeConfigPopup';
import { CircleDashed } from 'lucide-react';

function Cube({ id, color, vibrationIntensity, iluminationFrequency }: { id: number; color: string, vibrationIntensity: number, iluminationFrequency: number }) {

    //Set id into a state variable
    const cubeId = id;
    //Set color into a state variable
    const [cubeColor, setCubeColor] = useState(color);
    //Set vibrationIntensity into a state variable
    const [cubeVibrationIntensity, setCubeVibrationIntensity] = useState(vibrationIntensity);
    //Set iluminationFrequency into a state variable
    const [cubeIluminationFrequency, setCubeIluminationFrequency] = useState(iluminationFrequency);
    const cubeSize = 50 // Size of the cube in pixels

    useEffect(() => {

        // Update the cubeColor state with the new color
        setCubeColor(color);
        // Update the cubeVibrationIntensity state with the new vibration intensity
        setCubeVibrationIntensity(vibrationIntensity);
        // Update the cubeIluminationFrequency state with the new illumination frequency
        setCubeIluminationFrequency(iluminationFrequency);

    }, [id, color, vibrationIntensity, iluminationFrequency]);

    return (
        <div
            style={{
                width: cubeSize + 'px',
                height: cubeSize + 'px',
                backgroundColor: color,
                display: 'inline-block',
                margin: '5px',

            }}>
            <CubeConfigPopup
                id={cubeId}
                color={cubeColor}
                vibrationIntensity={cubeVibrationIntensity}
                iluminationFrequency={cubeIluminationFrequency}
                onSave={({ color, vibrationIntensity, iluminationFrequency }) => {
                    setCubeColor(color);
                    setCubeVibrationIntensity(vibrationIntensity);
                    setCubeIluminationFrequency(iluminationFrequency);
                }}
            />
        </div>
    );
}
export default Cube;