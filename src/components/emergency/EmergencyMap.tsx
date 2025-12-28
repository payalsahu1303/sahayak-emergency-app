import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import { EmergencyPlace } from "@/types/emergency";
import L from "leaflet";
interface Props {
  latitude: number;
  longitude: number;
  services: EmergencyPlace[];
}

export function EmergencyMap({ latitude, longitude, services }: Props) {
  const defaultIcon = L.icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={14}
      scrollWheelZoom={true}
      className="w-full h-80 rounded-lg shadow"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* User Location */}
      <CircleMarker
        center={[latitude, longitude]}
        radius={10}
        pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 0.5 }}
      />

      {/* Emergency Services */}
      {services.map((service) => (
        <Marker
          key={service.id}
          position={[service.lat || 0, service.lon || 0]}
          icon={defaultIcon}
        >
          <Popup>
            <strong>{service.tags?.name || "Unnamed Place"}</strong>
            <br />
            {service.tags?.["addr:full"] || "Address not available"}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
