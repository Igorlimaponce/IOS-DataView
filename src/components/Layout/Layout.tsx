import React, { useEffect, useState } from "react";
import DeviceCard from "../DeviceCard/DeviceCard";
import MapView from "../MapView/MapView";
import { TelemetryData, useWebSocket } from "../../hooks/useWebSocket";

const WS_URL = "ws://localhost:4000"; // seu servidor websocket aqui

const Layout: React.FC = () => {
  const liveData = useWebSocket(WS_URL);
  const [history, setHistory] = useState<TelemetryData[]>([]);

  useEffect(() => {
    if (liveData) {
      setHistory((prev) => [...prev.slice(-29), liveData]); // mantém últimas 30 amostras
    }
  }, [liveData]);

  return (
    <main className="flex flex-col md:flex-row h-screen p-4 gap-4 bg-gradient-to-r from-blue-900 via-slate-900 to-black">
      <section className="flex flex-col gap-4 flex-1">
        <DeviceCard data={liveData} />
      </section>
      <section className="flex-1">
        {liveData && <MapView position={liveData.location} />}
      </section>
    </main>
  );
};

export default Layout;
