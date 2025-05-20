import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapView() {
  const position: [number, number] = [-23.55052, -46.633308] // SP

  return (
    <div className="h-[300px] rounded-xl overflow-hidden shadow-md">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Localização Atual</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
