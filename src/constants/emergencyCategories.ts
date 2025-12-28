export type EmergencyType = "hospital" | "police" | "fire_brigade";

export const EMERGENCY_CATEGORIES: { label: string; value: EmergencyType }[] = [
  { label: "Hospitals", value: "hospital" },
  { label: "Police Stations", value: "police" },
  { label: "Fire Brigades", value: "fire_brigade" },
];
