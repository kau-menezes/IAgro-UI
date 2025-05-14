import './App.css'
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';

function App() {

  // Explicitly type each coordinate as [number, number]
  const centralParkCoords: LatLngTuple[] = [
    [40.800621, -73.958214],
    [40.796853, -73.949119],
    [40.764356, -73.943041],
    [40.768094, -73.981934],
    [40.768094, -73.991938],
  ];

  return (
    <>  
      <MapContainer
        center={[40.7812, -73.9665]} // Center of Central Park
        zoom={13}
        style={{ height: "50vh", width: "50vw" }} // 👈 required!
      >
        {/* OpenStreetMap background */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* Real-world polygon */}
        <Polygon
          positions={centralParkCoords}
          pathOptions={{ color: "green", fillOpacity: 0.4 }}
        />
      </MapContainer>
    </>
  )
}

export default App
