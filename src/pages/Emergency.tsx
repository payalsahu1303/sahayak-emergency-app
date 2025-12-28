import { useEffect, useState } from "react";
import { fetchNearbyServices } from "@/services/openmap";
import { EmergencyCard } from "@/components/emergency/EmergencyCard";
import { EmergencyAI } from "@/components/emergency/EmergencyAI";
import { EmergencyCategoryTabs } from "@/components/emergency/EmergencyCategoryTabs";
import { EmergencyType } from "@/constants/emergencyCategories";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { EmergencyMap } from "@/components/emergency/EmergencyMap";
import { Button } from "@/components/ui/button";
import { SOSButton } from "@/components/emergency/SOSButton";
import { EmergencyPlace } from "@/types/emergency";
import { useGeolocation } from "@/hooks/useGeolocation";

export default function Emergency() {
const { latitude, longitude, error, loading: locationLoading, requestLocation } = useGeolocation();

  const [category, setCategory] = useState<EmergencyType>("hospital");
  const [services, setServices] = useState<EmergencyPlace[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (latitude === null || longitude === null) return;

    const loadServices = async () => {
      setLoading(true);
      try {
        const data = await fetchNearbyServices(latitude, longitude, category);
        setServices(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, [latitude, longitude, category]);

  /* 🔴 LOCATION PERMISSION UI */
  if (latitude === null || longitude === null) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4 p-4">
        <h2 className="text-xl font-semibold">📍 Enable Live Location</h2>
        <p className="text-muted-foreground text-center max-w-md">
          We need your live location to show nearby hospitals, police stations, and fire brigades during emergencies.
        </p>

        <Button onClick={requestLocation} disabled={locationLoading}>
          {locationLoading ? "Requesting Location..." : "Allow Location"}
        </Button>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:px-8 lg:px-16 space-y-10">
      {/* 🔷 HEADER */}
      <header className="text-center space-y-2">
        <h1 className="sahayak-heading text-3xl md:text-4xl lg:text-5xl font-bold">
          SAHAYAK
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Your AI-powered emergency companion for hospitals, police stations, and fire brigades near you.
        </p>
      </header>

      {/* 🔶 CATEGORY TABS */}
      <section className="flex justify-center">
        <EmergencyCategoryTabs active={category} onChange={setCategory} />
      </section>

      {/* 🗺️ MAP */}
      <section className="rounded-xl overflow-hidden shadow-md border h-60 sm:h-80 lg:h-80">
        <EmergencyMap
          latitude={latitude}
          longitude={longitude}
          services={services}
        />
      </section>

      {/* ⏳ LOADING */}
      {loading && (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </section>
      )}

      {/* 🚑 SERVICES */}
      {!loading && (
        <section>
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
            Nearby {category.replace("_", " ").toUpperCase()}
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <EmergencyCard
                key={item.id}
                name={item.tags?.name || "Unnamed Place"}
                address={item.tags?.["addr:full"]}
              />
            ))}
          </div>
        </section>
      )}

      {/* 🚨 SOS Button (Floating Bubble) */}
      <div className="fixed bottom-5 right-5 z-50">
        <SOSButton
          latitude={latitude}
          longitude={longitude}
          contacts={["friend1@example.com", "friend2@example.com"]}
        />
      </div>

      {/* 🧠 AI Emergency Guidance */}
      <section className="max-w-3xl mx-auto">
        <EmergencyAI />
      </section>
    </div>
  );
}
