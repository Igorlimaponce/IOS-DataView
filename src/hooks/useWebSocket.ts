import { useEffect, useState, useRef } from "react";

export interface TelemetryData {
  battery: number; // percentage 0-100
  location: {
    lat: number;
    lng: number;
  };
  timestamp: string; // ISO string
}

export function useWebSocket(url: string) {
  const [data, setData] = useState<TelemetryData | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      try {
        const parsed: TelemetryData = JSON.parse(event.data);
        setData(parsed);
      } catch (error) {
        console.error("Invalid WebSocket message", error);
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    return () => {
      ws.current?.close();
    };
  }, [url]);

  return data;
}
