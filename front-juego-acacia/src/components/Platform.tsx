import { useState } from 'react';
import PlatformConfigPopup from "./PlatformConfigPopup";

function Platform() {

    const [currentSoundId, setCurrentSoundId] = useState(1); // Initialize soundId state

    return (
        <div
            style={{
                width: '100%', // Set the width to 50% of the parent div
                height: '50px', // Set the height to 50px
                margin: '0 auto', // Center the div horizontally
                display: 'flex', // Use flexbox to align items
                backgroundColor: 'gray', // Set the background color to gray
            }}>
            <PlatformConfigPopup currentSoundId={1}
                onSave={({ soundId }) => {
                    setCurrentSoundId(soundId);
                    console.log(currentSoundId)
                }}></PlatformConfigPopup>
        </div>
    );
}
export default Platform;