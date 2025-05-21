import React from "react";
import { TelemetryData } from "../../hooks/useWebSocket";

interface Props {
  data: TelemetryData | null;
}

const DeviceCard: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <div className="text-center text-gray-400">Conectando...</div>;
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-cyan-400">Status do Dispositivo</h2>
      <div>
        <span className="font-semibold">Bateria:</span>{" "}
        <span>{data.battery}%</span>
        <div className="w-full bg-gray-700 rounded-full h-4 mt-1">
          <div
            className="bg-cyan-400 h-4 rounded-full transition-all duration-500"
            style={{ width: `${data.battery}%` }}
          />
        </div>
      </div>
      <div>
        <span className="font-semibold">Última atualização:</span>{" "}
        <span>{new Date(data.timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default DeviceCard;
