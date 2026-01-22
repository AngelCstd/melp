"use client";

import Map from "@/components/atom/Map";
import { MarkerRestaurant, MarkerUser } from "@/components/atom/Marker";
import { useRestaurant } from "@/context/restaurants";
import Circle from "@/components/atom/Circle";
import { useGeo } from "@/context/geo";
import ControlsMenu from "@/components/molecule/ControlsMenu";

export default function Home() {
  const { filtrados, center, range } = useGeo();
  const { loading } = useRestaurant();

  return (
    <div className="min-w-screen min-h-screen bg-zinc-50 dark:bg-black grid md:grid-cols-[auto_1fr] grid-rows-[1fr]">
      {/* CONTROLS */}
      <ControlsMenu />

      {/* MAPA */}
      <div className="relative col-start-1 md:col-start-2 row-start-1">
        <Map>
          {filtrados.map(({ address, name, id }) => (
            <MarkerRestaurant
              key={id}
              label={name}
              position={[address.location.lat, address.location.lng]}
            />
          ))}
          <MarkerUser position={center} />
          <Circle center={center} range={range} />
        </Map>

        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/70">
            <span className="text-black dark:text-white text-lg font-medium">
              Loading...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
