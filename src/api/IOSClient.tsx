import { TelemetryData } from "../hooks/useWebSocket";

const API_URL = "http://localhost:3000/device";

export async function fetchTelemetry(): Promise<TelemetryData> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch telemetry");
  }
  return response.json();
}
