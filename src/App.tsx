import React from 'react'
import DeviceCard from './components/DeviceCard/DeviceCard'
import MapView from './components/MapView/MapView'

export default function App() {
  return (
    <div className="p-4 bg-black min-h-screen text-white font-sans">
      <h1 className="text-3xl mb-4 font-bold text-cyan-400">Device Telemetry Dashboard</h1>
      <DeviceCard />
      <MapView />
    </div>
  )
}
