import { EmergencyType } from "@/constants/emergencyCategories";

export async function fetchNearbyServices(
  lat: number,
  lon: number,
  type: EmergencyType
) {
  let query = "";

  switch (type) {
    case "hospital":
      query = `node["amenity"="hospital"](around:5000,${lat},${lon});`;
      break;
    case "police":
      query = `node["amenity"="police"](around:5000,${lat},${lon});`;
      break;
    case "fire_brigade":
      query = `node["amenity"="fire_station"](around:5000,${lat},${lon});`; // ✅ Fire Brigade
      break;
  }

  const overpassQuery = `
    [out:json];
    ${query}
    out body;
  `;

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: overpassQuery,
  });

  const data = await res.json();
  return data.elements;
}
