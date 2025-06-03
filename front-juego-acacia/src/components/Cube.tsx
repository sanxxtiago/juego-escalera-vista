import CubeConfigPopup from './CubeConfigPopup';

function Cube({
    id,
    color,
    vibrationIntensity,
    iluminationFrequency,
    onUpdate,
}: {
    id: number;
    color: string;
    vibrationIntensity: number;
    iluminationFrequency: number;
    onUpdate: (newValues: {
        color: string;
        vibrationIntensity: number;
        iluminationFrequency: number;
    }) => void;
}) {
    const cubeSize = 50;

    return (
        <div
            style={{
                width: cubeSize + 'px',
                height: cubeSize + 'px',
                display: 'inline-block',
                margin: '5px',
            }}
        >
            <CubeConfigPopup
                id={id}
                color={color}
                vibrationIntensity={vibrationIntensity}
                iluminationFrequency={iluminationFrequency}
                onSave={(newValues) => {
                    onUpdate(newValues); // ⬅️ Aquí notificas a App.tsx del cambio
                }}
            />
        </div>
    );
}

export default Cube;