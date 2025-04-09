function CubeConfigPopup({cubeprops}: {cubeprops: {cubeId: number, color: string, vibrationIntensity: number, iluminationFrequency: number}}) {
  return (
    <div className="cube-config-popup" style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', width: '300px' }}>
      <h2>{cubeprops.cubeId}</h2>
      <p>Configure your cube settings here.</p>
      {/* Add your configuration options here */}
    </div>
  );
}
export default CubeConfigPopup;