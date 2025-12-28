export interface EmergencyPlace {
  id: number;
  lat?: number;
  lon?: number;
  tags?: {
    name?: string;
    ["addr:full"]?: string;
  };
}
